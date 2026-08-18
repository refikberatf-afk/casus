// Kategoriler ve Kelimeler (Casusa kategori başlığı yerine listeden yakın/farklı bir ipucu kelimesi verilecek)
const categories = {
    absurt: {
        name: "🔥 Absürt & Troll",
        words: ["Seks", "Dildo", "Popo", "Köpek", "Sırık", "Cüce", "Kı yı cı", "Nurgül Toksöz", "Ankara", "Hilti", "Hendek", "Pipi"]
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
    let wordList = [...categories[catKey].words];

    // Ana kelimeyi rastgele seç
    let wordIndex = Math.floor(Math.random() * wordList.length);
    secretWord = wordList[wordIndex];

    // Listeden ana kelimeyi çıkarıp casusa vereceğimiz yakın/farklı bir ipucu kelimesi seçelim
    wordList.splice(wordIndex, 1);
    spyHintWord = wordList[Math.floor(Math.random() * wordList.length)];

    // Rastgele birini casus yap
    spyIndex = Math.floor(Math.random() * players.length);

    // Roller oluşturuluyor
    assignedRoles = players.map((player, index) => {
        if (index === spyIndex) {
            return { isSpy: true, text: `🕵️ SEN CASUSSUN!<br><br>Gizli kelimeyi bilmiyorsun ama sana kopya kelime:<br><span class="highlight">${spyHintWord}</span>` };
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
