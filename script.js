// GENİŞ TEMATİK KATEGORİLER VE BOL KELİME LİSTELERİ
const categories = {
    "kamusal": {
        name: "Toplumsal Alanlar & Kamusal Yaşam",
        words: [
            "Hastane", "Okul", "Kütüphane", "Kafe", "Restoran", "Metro İstasyonu", "Otobüs Durağı", 
            "Havalimanı", "AVM", "Süpermarket", "Futbol Stadyumu", "Spor Salonu", "Sinema Salonu", 
            "Tiyatro", "Müze", "Park", "Sahil", "Pazar Yeri", "Otopark", "Benzin İstasyon", 
            "Eczane", "Muhtarlık", "Belediye", "Noter", "Adliye", "Polis Merkezi", "İtfaiye", 
            "Berber", "Kuaför", "Oto Tamirci", "Kargo Şubesi", "Banka", "ATM", "Otogar", 
            "Feribot İskelesi", "Vapur", "Lunapark", "Piknik Alanı", "Kamp Alanı", "Otel", 
            "Resepsiyon", "Asansör", "Merdiven Boşluğu", "Apartman Girişi", "Çöp Konteyneri", 
            "Kaldırım", "Üst Geçit", "Alt Geçit", "Trafik Işığı", "Yaya Geçidi", "Meydan", 
            "Saat Kulesi", "Heykel", "Çeşme", "Şadırvan", "Cami", "Mezarlık", "Fuar Alanı", 
            "Konser Alanı", "Açık Hava Tiyatrosu", "Semt Pazarı", "Kuruyemişçi", "Fırın", 
            "Kasap", "Manav", "Kırtasiye", "Tekstil Atölyesi", "Fabrika", "Şantiye", "İnşaat", 
            "Köprü", "Tünel", "Otoyol", "Gişeler", "Taksi Durağı", "Dolmuş", "Minibüs", 
            "Tramvay", "Tren", "Vagon", "Kondüktör", "Bilet Gişesi", "Danışma", "Kayıp Eşya", 
            "Güvenlik Kontrolü", "X-Ray", "Turnike", "Bekleme Salonu", "Acil Çıkış", "Yangın Merdiveni", 
            "Teras", "Balkon", "Bahçe", "Çit", "Sokak Lambası", "Çöp Kutusu", "Bank", "Büfe"
        ]
    },
    "oyun": {
        name: "Video Oyunları Dünyası",
        words: [
            "Valorant", "Counter-Strike", "League of Legends", "Minecraft", "GTA V", "Fortnite", 
            "Roblox", "PUBG", "Elden Ring", "God of War", "The Witcher", "Cyberpunk", 
            "FIFA / EA FC", "Call of Duty", "Assassins Creed", "Zelda", "Skyrim", "Dark Souls", 
            "Among Us", "Fall Guys", "Rocket League", "Dota 2", "Overwatch", "Apex Legends", 
            "Genshin Impact", "Hades", "Hollow Knight", "Terraria", "Stardew Valley", "The Sims", 
            "Karakter", "NPC", "Boss", "Quest", "Görevi", "Harita", "Envanter", "Silah", 
            "Bomba", "Kalkan", "Can Puanı", "Mana", "XP", "Seviye Atlama", "Skill", "Ulti", 
            "Headshot", "Kill", "Assist", "Ölüm", "Yeniden Doğma", "Respawn", "Kamp", "Rush", 
            "Flank", "Sniper", "Bıçak", "Tabanca", "Taramalı", "Zırh", "Kask", "Sağlık Kiti", 
            "Mermi", "Şarjör", "Recoil", "Crosshair", "Sensivity", "Ping", "FPS", "Lag", 
            "Sunucu", "Lobi", "Takım", "Duo", "Squad", "Solo", "Rank", "Global", "Diamond", 
            "Bronze", "Silver", "Gold", "Platin", "Immortal", "Radiant", "Cheat", "Ban", 
            "Steam", "Epic Games", "Discord", "Klavye", "Mouse", "Kulaklık", "Gamepad", "Konsol", 
            "PlayStation", "Xbox", "Nintendo Switch", "PC", "Ekran Kartı", "İşlemci", "Monitör", 
            "RGB Işık", "Gaming Koltuk", "Yayıncı", "Twitch", "Kick", "Replay", "Highlight"
        ]
    },
    "teknoloji": {
        name: "Teknoloji & İnternet Kültürü",
        words: [
            "Yapay Zeka", "ChatGPT", "Claude", "Perplexity", "GitHub", "Docker", "n8n", 
            "Kodlama", "Yazılım", "Donanım", "Sunucu", "Bulut Bilişim", "Veritabanı", "API", 
            "Bug", "Debug", "Commit", "Push", "Repository", "Terminal", "Komut Satırı", 
            "İnternet", "Wi-Fi", "Modem", "Fiber", "Bluetooth", "Akıllı Telefon", "Tablet", 
            "Laptop", "Masaüstü PC", "Akıllı Saat", "Kablosuz Kulaklık", "Powerbank", "Şarj Aleti", 
            "Type-C", "USB", "HDMI", "Monitör", "Klavye", "Mouse", "Sosyal Medya", "Instagram", 
            "TikTok", "X / Twitter", "YouTube", "Discord", "WhatsApp", "Telegram", "Reddit", 
            "Algoritma", "Keşfet", "Gönderi", "Hikaye", "Reels", "Canlı Yayın", "Takipçi", 
            "Beğeni", "Yorum", "DM", "Bildirim", "Trend", "Meme", "Viral", "İçerik Üreticisi", 
            "Yayıncı", "Kurgu", "Montaj", "Video", "Fotoğraf", "Filtre", "Yapay Zeka Görseli", 
            "Prompt", "Ajan", "Otomasyon", "Workflow", "Veri Analizi", "Siber Güvenlik", "Şifre", 
            "İki Aşamalı Doğrulama", "Hacker", "Virüs", "Antivirüs", "Güncelleme", "Format", 
            "Tarayıcı", "Google Chrome", "Edge", "Arama Motoru", "SEO", "Link", "Web Sitesi", 
            "Domain", "Hosting", "GitHub Pages", "Tarayıcı Sekmesi", "Gizli Sekme", "Çerezler"
        ]
    },
    "sinema": {
        name: "Sinema, Dizi & Popüler Kültür",
        words: [
            "Film", "Dizi", "Sinema Salonu", "Perde", "Koltuk", "Mısır", "Kola", "Bilet", 
            "Yönetmen", "Senarist", "Oyuncu", "Başrol", "Figüran", "Dublör", "Kamera", "Set", 
            "Kostüm", "Makyaj", "Efekt", "CGI", "Green Box", "Fragman", "Afiş", "Gişe", 
            "Oscar", "Netflix", "BluTV", "Exxen", "Gain", "Amazon Prime", "Disney+", "Sezon", 
            "Bölüm", "Final", "Sezon Finali", "Cliffhanger", "Spoiler", "İnceleme", "Puan", 
            "IMDb", "Aksiyon", "Komedi", "Korku", "Gerilim", "Bilim Kurgu", "Fantastik", 
            "Dram", "Romantik", "Polisiye", "Suç", "Animasyon", "Belgesel", "Süper Kahraman", 
            "Marvel", "DC", "Batman", "Spider-Man", "Iron Man", "Joker", "Star Wars", 
            "Harry Potter", "Yüzüklerin Efendisi", "Interstellar", "Inception", "Matrix", 
            "Breaking Bad", "Game of Thrones", "Stranger Things", "The Walking Dead", 
            "The Office", "Peaky Blinders", "Anime", "Naruto", "One Piece", "Attack on Titan", 
            "Death Note", "Manga", "Cosplay", "Replik", "Sahne", "Giriş Müziği", "Soundtrack", 
            "Karakter", "Kötü Adam", "Anti-Kahraman", "Plot Twist", "Kurgu Hatası", "Kült Film"
        ]
    },
    "spor": {
        name: "Spor, E-Spor & Aktiviteler",
        words: [
            "Futbol", "Basketbol", "Voleybol", "Tenis", "Yüzme", "Koşu", "Fitness", "Ağırlık", 
            "Pilates", "Yoga", "Bisiklet", "Motosiklet", "Kuba Newcity", "Scooter", "Kaykay", 
            "Paten", "Kamp", "Trekking", "Dağcılık", "Yürüyüş", "Balıkçılık", "Satranç", 
            "Olimpiyat", "Dünya Kupası", "Şampiyonlar Ligi", "Maç", "Stadyum", "Saha", "Hakem", 
            "VAR", "Kırmızı Kart", "Sarı Kart", "Faul", "Ofsayt", "Penaltı", "Gol", "Basket", 
            "Smaç", "Üçlük", "Set", "Maç Sayısı", "Antrenman", "Koç", "Teknik Direktör", 
            "Kaptan", "Forma", "Krampon", "Kask", "Dizlik", "Eldiven", "Madalya", "Kupa", 
            "Şampiyon", "Taraftar", "Deplasman", "Tribün", "Kombine", "Bilet", "E-Spor", 
            "Turnuva", "LAN Party", "Kupa Maçı", "Play-off", "Uzatma", "Seri Atışlar", "Skor", 
            "Performans", "Kondisyon", "Kas", "Esneme", "Dinlenme", "Su Molası", "Taktik"
        ]
    },
    "mutfak": {
        name: "Mutfak & Yemek Kültürü",
        words: [
            "Mutfak", "Buzdolabı", "Fırın", "Ocak", "Davlumbaz", "Bulaşık Makinesi", "Tezgah", 
            "Bıçak", "Kesme Tahtası", "Tencere", "Tava", "Kepçe", "Süzgeç", "Tabak", "Çatal", 
            "Bıçak", "Kaşık", "Bardak", "Kupa", "Çaydanlık", "Cezve", "Kahve Makinesi", "Tost Makinesi", 
            "Blender", "Mikser", "Yemek", "Akşam Yemeği", "Öğle Yemeği", "Kahvaltı", "Atıştırmalık", 
            "Fast Food", "Hamburger", "Pizza", "Lahmacun", "Pide", "Kebap", "Döner", "İskender", 
            "Mantı", "Makarna", "Pilav", "Çorba", "Salata", "Et", "Tavuk", "Balık", "Köfte", 
            "Patates Kızartması", "Sokak Lezzetleri", "Simit", "Poğaça", "Açma", "Midye", "Kokoreç", 
            "Çiğ Köfte", "Dürüm", "Tatlı", "Baklava", "Künefe", "Sütlaç", "Dondurma", "Çikolata", 
            "Pasta", "Kurabiye", "İçecek", "Çay", "Türk Kahvesi", "Filtre Kahve", "Espresso", 
            "Ayran", "Şalgam", "Kola", "Maden Suyu", "Limonata", "Tuz", "Karabiber", "Pul Biber", 
            "Kekik", "Nane", "Zeytinyağı", "Ayçiçek Yağı", "Sos", "Ketçap", "Mayonez", "Sarımsak", 
            "Soğan", "Domates", "Salatalık", "Patates", "Peynir", "Zeytin", "Yumurta", "Ekmek"
        ]
    }
};

let players = [];
let currentPlayerIndex = 0;
let secretWord = "";
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
    let currentCategoryName = categories[catKey].name;

    // 1. Ana kelimeyi seç
    secretWord = wordList[Math.floor(Math.random() * wordList.length)];

    // 2. Rastgele birini casus yap
    spyIndex = Math.floor(Math.random() * players.length);

    // Roller oluşturuluyor (Casusa kategori adı kopya olarak veriliyor)
    assignedRoles = players.map((player, index) => {
        if (index === spyIndex) {
            return { isSpy: true, text: `🕵️ SEN CASUSSUN!<br><br>Gizli kelimeyi bilmiyorsun ama kategorin:<br><span class="highlight">${currentCategoryName}</span>` };
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
