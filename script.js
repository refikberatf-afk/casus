// Her kelimeye özel mantıklı kopya ipuçları (İlk harfleri büyük)
const wordHints = {
    // Absürt & Troll
    "Seks": "İlişki / Durum",
    "Dildo": "Eğlence Eşyası",
    "Popo": "Vücut Bölgesi",
    "Köpek": "Hayvan",
    "Sırık": "Uzun Şey",
    "Cüce": "İnsan Boyutu",
    "Kıyıcı": "Üçlü",
    "Nurgül Toksöz": "Hayali",
    "Ankara": "Şehir",
    "Hilti": "Alet / Makine",
    "Hendek": "Çukur / Yer",
    "Pipi": "Vücut Bölgesi",

    // Günlük Hayat & Mekanlar
    "Kahvehane": "Sosyal Mekan",
    "Üniversite Amfisi": "Eğitim Yeri",
    "Metrobus": "Toplu Taşıma",
    "Berber": "Esnaf / Dükkan",
    "Bakkal": "Alışveriş Yeri",
    "Sahil Kenarı": "Doğa / Mekan",

    // Teknoloji & Bilim
    "Yapay Zeka": "Yazılım / Sistem",
    "Docker": "Yazılım Aracı",
    "Ekran Kartı": "Donanım Parçası",
    "Kripto Para": "Dijital Varlık",
    "Yazılım Hatası": "Kod Problemi",
    "Robot Kol": "Mekanik Cihaz"
};

// Kategoriler (Kelime isimleri büyük harfle güncellendi)
const categories = {
    absurt: {
        name: "🔥 Absürt & Troll",
        words: ["Seks", "Dildo", "Popo", "Köpek", "Sırık", "Cüce", "Kıyıcı", "Nurgül Toksöz", "Ankara", "Hilti", "Hendek", "Pipi"]
    },
    gunluk: {
        name: "📍 Günlük Hayat & Mekanlar",
        words: ["Kahvehane", "Üniversite Amfisi", "Metrobus", "Berber", "Bakkal", "Sahil Kenarı"]
    },
    teknoloji: {
        name: "💻 Teknoloji & Bilim",
        words: ["Yapay Zeka", "Docker", "Ekran Kartı", "Kripto Para", "Yazılım Hatası", "Robot Kol"]
    }
};

let players = [];
let currentPlayerIndex = 0;
let secretWord = "";
let spyHintWord = "";
let spyIndex = -1;
let assignedRoles = [];

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function setupGame() {
    let namesInput = document.getElementById('player-names').value.trim();
    if (!namesInput) {
        alert("Lütfen en az birkaç oyuncu ismi gir kanka!");
        return;
    }

    players = namesInput.split(',').map(name => name.trim()).filter(name => name.length > 0);
    
    if (players.length < 3) {
        alert("Casus oyunu en az 3 kişiyle oynanır kanka!");
        return;
    }

    let catKey = document.getElementById('category-select').value;
    let wordList = categories[catKey].words;

    // 1. Ana kelimeyi seç
    secretWord = wordList[Math.floor(Math.random() * wordList.length)];

    // 2. Casusa özel kopya ipucunu ver
    spyHintWord = wordHints[secretWord] || "İlgili Kavram / Öğe";

    // 3. Rastgele birini casus yap
    spyIndex = Math.floor(Math.random() * players.length);

    // Roller oluşturuluyor
    assignedRoles = players.map((player, index) => {
        if (index === spyIndex) {
            return { isSpy: true, text: `🕵️ SEN CASUSSUN!<br><br>Gizli kelimeyi bilmiyorsun ama sana özel kopya ipucu:<br><span class="highlight">${spyHintWord}</span>` };
        } else {
            return { isSpy: false, text: `🤫 Gizli Kelimeniz:<br><br><span class="secret-word">${secretWord}</span>` };
        }
    });

    currentPlayerIndex = 0;
    startPassScreen();
}

function startPassScreen() {
    if (currentPlayerIndex >= players.length) {
        showScreen('gameplay-screen');
        return;
    }

    showScreen('pass-screen');
    document.getElementById('current-player-name').textContent = players[currentPlayerIndex];
}

function showSecretRole() {
    showScreen('secret-screen');
    let contentDiv = document.getElementById('secret-content');
    contentDiv.innerHTML = assignedRoles[currentPlayerIndex].text;
}

function nextPlayerTurn() {
    currentPlayerIndex++;
    startPassScreen();
}

function revealSpy() {
    showScreen('result-screen');
    let spyName = players[spyIndex];
    let winnerDiv = document.getElementById('winner-announcement');
    
    winnerDiv.innerHTML = `
        <p>Gizli Kelime: <b>${secretWord}</b></p><br>
        <p>Aranızdaki Gizli Casus:</p>
        <h3 class="highlight">${spyName} 🕵️‍♂️</h3>
    `;
}

function resetGame() {
    showScreen('lobby-screen');
}
