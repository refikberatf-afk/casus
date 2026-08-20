// DEVASA TEMATİK KATEGORİLER VE UZAK / SOYUT CASUS İPUÇLARI
const categories = {
    "kamusal": {
        name: "Toplumsal Alanlar & Kamusal Yaşam",
        pairs: [
            ["İtfaiye Kamyonu", "Sireni"], ["Hastane", "Bekleyiş"], ["Okul", "Zil"],
            ["Kütüphane", "Sessizlik"], ["Kafe", "Köşe"], ["Restoran", "Hesap"],
            ["Metro İstasyonu", "Kart"], ["Otobüs Durağı", "Tarife"], ["Havalimanı", "Bekleyiş"],
            ["AVM", "Yürüyen Merdiven"], ["Süpermarket", "Sıra"], ["Futbol Stadyumu", "Çim"],
            ["Spor Salonu", "Çanta"], ["Sinema Salonu", "Karanlık"], ["Tiyatro", "Perde"],
            ["Müze", "Rehber"], ["Park", "Bank"], ["Sahil", "Rüzgar"],
            ["Pazar Yeri", "Gürültü"], ["Otopark", "Bariyer"], ["Banka", "Sıra Numarası"],
            ["Otel", "Anahtar"], ["Asansör", "Ayna"], ["Cami", "Halı"],
            ["Fırın", "Koku"], ["Kasap", "Tezgah"], ["Manav", "Tazelik"],
            ["Köprü", "Ayak"], ["Tünel", "Işık"], ["Taksi Durağı", "Bekleyiş"],
            ["Eczane", "Işık"], ["Muhtarlık", "Mühür"], ["Belediye", "Dilekçe"],
            ["Noter", "Onay"], ["Adliye", "Bekleyiş"], ["Polis Merkezi", "Tabela"],
            ["Berber", "Ayna"], ["Kuaför", "Dergi"], ["Oto Tamirci", "Gürültü"],
            ["Kargo Şubesi", "Barkod"], ["Otogar", "Peron"], ["Feribot İskelesi", "Halat"],
            ["Lunapark", "Çığlık"], ["Kamp Alanı", "Ateş"], ["Üst Geçit", "Toz"],
            ["Alt Geçit", "Yankı"], ["Trafik Işığı", "Geri Sayım"], ["Meydan", "Güvercin"],
            ["Saat Kulesi", "Mesafe"], ["Heykel", "Gölge"], ["Çeşme", "Akıntı"]
        ]
    },
    "oyun": {
        name: "Video Oyunları Dünyası",
        pairs: [
            ["Valorant", "Hassasiyet"], ["Counter-Strike", "Ses"], ["League of Legends", "Sinir"],
            ["Minecraft", "Gece"], ["GTA V", "Radyo"], ["Fortnite", "Sezon"],
            ["Roblox", "Tarz"], ["PUBG", "Ses"], ["Elden Ring", "Sabır"],
            ["God of War", "Öfke"], ["The Witcher", "Müzik"], ["Cyberpunk", "Işık"],
            ["FIFA / EA FC", "Hata"], ["Call of Duty", "Giriş"], ["Among Us", "Şüphe"],
            ["Boss", "Ezber"], ["Quest", "Yolculuk"], ["Silah", "Ses"],
            ["Headshot", "Refleks"], ["Respawn", "Süre"], ["Sniper", "Nefes"],
            ["Zırh", "Ağırlık"], ["Steam", "Profil"], ["Discord", "Bildirim"],
            ["Fall Guys", "Düşüş"], ["Rocket League", "Açı"], ["Dota 2", "Kule"],
            ["Overwatch", "Payload"], ["Apex Legends", "İniş"], ["Genshin Impact", "Enerji"],
            ["Hades", "Kaçış"], ["Hollow Knight", "Karanlık"], ["Terraria", "Kazma"],
            ["Stardew Valley", "Mevsim"], ["The Sims", "Duvar"], ["NPC", "Döngü"],
            ["Harita", "Köşe"], ["Envanter", "Düzen"], ["Bomba", "Zaman"],
            ["Kalkan", "Kırılma"], ["Can Puanı", "Tehlike"], ["Mana", "Tükeniş"],
            ["XP", "Bar"], ["Seviye Atlama", "Bildirim"], ["Skill", "Bekleme Süresi"],
            ["Ulti", "Strateji"], ["Kill", "İstatistik"], ["Assist", "Pay"],
            ["Ölüm", "Ekran"], ["Rush", "Risk"], ["Flank", "Açı"],
            ["Bıçak", "Sessizlik"], ["Tabanca", "Yedek"], ["Taramalı", "Titreşim"],
            ["Kask", "Çatlak"], ["Sağlık Kiti", "Süre"], ["Mermi", "Sayım"],
            ["Şarjör", "Ses"], ["Recoil", "Alışkanlık"], ["Crosshair", "Odak"],
            ["Sensivity", "Mouse"], ["Ping", "Kırmızı"], ["FPS", "Akıcılık"],
            ["Lag", "Donma"], ["Sunucu", "Uzak"], ["Lobi", "Bekleme"],
            ["Takım", "İletişim"], ["Duo", "Uyum"], ["Squad", "Karmaşa"],
            ["Solo", "Yalnızlık"], ["Rank", "Kısır Döngü"], ["Global", "Zirve"],
            ["Diamond", "Işıltı"], ["Bronze", "Dip"], ["Silver", "Geçiş"],
            ["Gold", "Orta"], ["Platin", "Süreç"], ["Immortal", "Baskı"],
            ["Radiant", "Yıldız"], ["Cheat", "Haksızlık"], ["Ban", "Son"],
            ["Epic Games", "Ücretsiz"], ["Klavye", "Tıkırtı"], ["Mouse", "Kablo"],
            ["Kulaklık", "Baskı"], ["Gamepad", "Titreşim"], ["Konsol", "Televizyon"],
            ["PlayStation", "Açılış Sesi"], ["Xbox", "Yeşil"], ["Nintendo Switch", "Çıngırak"],
            ["PC", "Kasa"], ["Ekran Kartı", "Fan"], ["İşlemci", "Macun"],
            ["Monitör", "Çerçeve"], ["RGB Işık", "Gereksizlik"], ["Gaming Koltuk", "Boyun"],
            ["Yayıncı", "Kamera"], ["Twitch", "Mor"], ["Kick", "Yeşil"],
            ["Replay", "Kanıt"], ["Highlight", "An"]
        ]
    },
    "teknoloji": {
        name: "Teknoloji & İnternet Kültürü",
        pairs: [
            ["Yapay Zeka", "Tahmin"], ["ChatGPT", "Açıklama"], ["GitHub", "Geçmiş"],
            ["Docker", "İzolasyon"], ["Kodlama", "Noktalı Virgül"], ["Sunucu", "Uzak"],
            ["Bulut Bilişim", "Erişim"], ["Bug", "Tesadüf"], ["İnternet", "Hız"],
            ["Wi-Fi", "Mesafe"], ["Modem", "Sinyal"], ["Akıllı Telefon", "Alışkanlık"],
            ["Laptop", "Isı"], ["Powerbank", "Çanta"], ["Instagram", "Algoritma"],
            ["TikTok", "Akış"], ["X / Twitter", "Gündem"], ["YouTube", "Öneri"],
            ["Algoritma", "Döngü"], ["Meme", "Zamanlama"], ["Viral", "Hız"],
            ["Siber Güvenlik", "Zafiyet"], ["Hacker", "Merak"], ["Tarayıcı", "Önbellek"],
            ["Perplexity", "Kaynak"], ["Claude", "Ton"], ["Terminal", "Siyah"],
            ["Komut Satırı", "Yazı"], ["Veritabanı", "Tablo"], ["API", "Köprü"],
            ["Commit", "Mesaj"], ["Push", "Transfer"], ["Repository", "İsim"],
            ["Tablet", "Cam"], ["Masaüstü PC", "Kablo"], ["Akıllı Saat", "Titreşim"],
            ["Kablosuz Kulaklık", "Kutu"], ["Type-C", "Yön"], ["USB", "Deneme"],
            ["HDMI", "Görüntü"], ["Sosyal Medya", "Bildirim"], ["WhatsApp", "Yeşil"],
            ["Telegram", "Kanal"], ["Reddit", "Topluluk"], ["Keşfet", "Döngü"],
            ["Gönderi", "Tarih"], ["Hikaye", "Çember"], ["Reels", "Müzik"],
            ["Canlı Yayın", "Gecikme"], ["Takipçi", "Sayı"], ["Beğeni", "Kalp"],
            ["Yorum", "Tartışma"], ["DM", "Kutusu"], ["Trend", "Dalga"],
            ["İçerik Üreticisi", "Işık"], ["Kurgu", "Zaman Çizelgesi"], ["Montaj", "Kesinti"],
            ["Video", "Format"], ["Fotoğraf", "Açı"], ["Filtre", "Renk"],
            ["Yapay Zeka Görseli", "El Hatası"], ["Prompt", "Deneme"], ["Ajan", "Döngü"],
            ["Otomasyon", "Zaman"], ["Workflow", "Akış"], ["Veri Analizi", "Grafik"],
            ["Şifir", "Karakter"], ["İki Aşamalı Doğrulama", "Kod"], ["Virüs", "Arka Plan"],
            ["Antivirüs", "Tarama"], ["Güncelleme", "Yeniden Başlatma"], ["Format", "Sıfırlama"],
            ["Google Chrome", "Bellek"], ["Edge", "Varsayılan"], ["Arama Motoru", "Kutucuk"],
            ["SEO", "Yarış"], ["Link", "Mavi"], ["Web Sitesi", "Alan"],
            ["Domain", "Süre"], ["Hosting", "Fatura"], ["GitHub Pages", "Ücretsiz"],
            ["Tarayıcı Sekmesi", "Kalabalık"], ["Gizli Sekme", "Göz"], ["Çerezler", "İz"]
        ]
    },
    "sinema": {
        name: "Sinema, Dizi & Popüler Kültür",
        pairs: [
            ["Film", "Jenerik"], ["Dizi", "Bekleyiş"], ["Sinema Salonu", "Koku"],
            ["Mısır", "Tuz"], ["Yönetmen", "Bakış"], ["Senarist", "Boş Sayfa"],
            ["Oyuncu", "Mimik"], ["Başrol", "Yük"], ["Kostüm", "Doku"],
            ["Efekt", "Zamanlama"], ["Fragman", "Aldatma"], ["Netflix", "Kırmızı"],
            ["Spoiler", "Hata"], ["Aksiyon", "Tempo"], ["Korku", "Beklenti"],
            ["Bilim Kurgu", "Öneri"], ["Süper Kahraman", "Sembol"], ["Marvel", "Plan"],
            ["Batman", "Gölge"], ["Spider-Man", "Çizgi"], ["Joker", "Gülüş"],
            ["Star Wars", "Müzik"], ["Harry Potter", "Renk"], ["Matrix", "Yeşil"],
            ["Koltuk", "Sıra"], ["Bilet", "Karekod"], ["Dublör", "Gölge"],
            ["Kamera", "Lens"], ["Set", "Toz"], ["Makyaj", "Ayna"],
            ["CGI", "Yeşil"], ["Green Box", "Boşluk"], ["Afiş", "Yüz"],
            ["Gişe", "Hasılat"], ["Oscar", "Heykelcik"], ["BluTV", "Mavi"],
            ["Exxen", "Reklam"], ["Gain", "Dikey"], ["Amazon Prime", "Kargo"],
            ["Disney+", "Mavi"], ["Sezon", "Aralık"], ["Bölüm", "Süre"],
            ["Final", "Yüzleşme"], ["Sezon Finali", "Merak"], ["Cliffhanger", "Kesinti"],
            ["İnceleme", "Puan"], ["IMDb", "Sayı"], ["Komedi", "Zamanlama"],
            ["Gerilim", "Nefes"], ["Fantastik", "Harita"], ["Dram", "Müzik"],
            ["Romantik", "Bakış"], ["Polisiye", "Yağmur"], ["Suç", "Sessizlik"],
            ["Animasyon", "Çizgi"], ["Belgesel", "Ses"], ["Iron Man", "Metal"],
            ["Interstellar", "Saat"], ["Inception", "Dönüş"], ["Breaking Bad", "Çöl"],
            ["Game of Thrones", "Soğuk"], ["Stranger Things", "Bisiklet"], ["The Walking Dead", "Orman"],
            ["The Office", "Kamera"], ["Peaky Blinders", "Şapka"], ["Anime", "Gözler"],
            ["Naruto", "Turuncu"], ["One Piece", "Şapka"], ["Attack on Titan", "Duvar"],
            ["Death Note", "Elma"], ["Manga", "Siyah-Beyaz"], ["Cosplay", "Peruk"],
            ["Replik", "Ton"], ["Sahne", "Işık"], ["Giriş Müziği", "Tema"],
            ["Soundtrack", "Hafıza"], ["Kötü Adam", "Gerekçe"], ["Anti-Kahraman", "Kural"],
            ["Plot Twist", "Şok"], ["Kurgu Hatası", "Detay"], ["Kült Film", "Tekrar"]
        ]
    },
    "spor": {
        name: "Spor, E-Spor & Aktiviteler",
        pairs: [
            ["Futbol", "Çim"], ["Basketbol", "Yankı"], ["Voleybol", "Ritim"],
            ["Tenis", "Hız"], ["Yüzme", "Nefes"], ["Fitness", "Aynalar"],
            ["Yoga", "Denge"], ["Bisiklet", "Denge"], ["Motosiklet", "Rüzgar"],
            ["Kamp", "Ateş"], ["Satranç", "Sessizlik"], ["Olimpiyat", "Tarih"],
            ["Stadyum", "Ses"], ["Hakem", "Duruş"], ["Kırmızı Kart", "An"],
            ["Penaltı", "Bakış"], ["Antrenman", "Rutubet"], ["Teknik Direktör", "Kulübe"],
            ["Forma", "Renk"], ["Krampon", "Koku"], ["E-Spor", "Işık"],
            ["Kuba Newcity", "Ayna"], ["Scooter", "Tekerlek"], ["Kaykay", "Ses"],
            ["Paten", "Denge"], ["Trekking", "Yokuş"], ["Dağcılık", "Soğuk"],
            ["Yürüyüş", "Tempo"], ["Balıkçılık", "Bekleyiş"], ["Dünya Kupası", "Uykusuzluk"],
            ["Şampiyonlar Ligi", "Müzik"], ["Maç", "Heyecan"], ["Saha", "Çizgi"],
            ["VAR", "Ekran"], ["Sarı Kart", "Uyarı"], ["Faul", "İtiraz"],
            ["Ofsayt", "Bayrak"], ["Gol", "Patlama"], ["Basket", "Ağ"],
            ["Smaç", "İvme"], ["Üçlük", "Yay"], ["Set", "Arama"],
            ["Maç Sayısı", "Gerilim"], ["Koç", "Ses"], ["Kaptan", "Pazubant"],
            ["Kask", "Toka"], ["Dizlik", "Esneklik"], ["Eldiven", "Koku"],
            ["Madalya", "Kurdele"], ["Kupa", "Ağırlık"], ["Şampiyon", "Konfeti"],
            ["Taraftar", "Bozukluk"], ["Deplasman", "Sessizlik"], ["Tribün", "Basamak"],
            ["Kombine", "Kart"], ["Turnuva", "Takvim"], ["LAN Party", "Kablo"],
            ["Kupa Maçı", "Sürpriz"], ["Play-off", "Hattı"], ["Uzatma", "Yorgunluk"],
            ["Seri Atışlar", "Nefes"], ["Skor", "Tabela"], ["Performans", "Grafik"],
            ["Kondisyon", "Test"], ["Kas", "Ağrı"], ["Esneme", "Sabah"],
            ["Dinlenme", "Uzanma"], ["Su Molası", "Gölge"], ["Taktik", "Tahta"]
        ]
    },
    "mutfak": {
        name: "Mutfak & Yemek Kültürü",
        pairs: [
            ["Buzdolabı", "Uykusuzluk"], ["Fırın", "Zaman"], ["Ocak", "İz"],
            ["Bulaşık Makinesi", "Dizilim"], ["Bıçak", "Ağırlık"], ["Tencere", "Buhar"],
            ["Tava", "Sıçrama"], ["Çaydanlık", "Ses"], ["Cezve", "Köpük"],
            ["Kahve Makinesi", "Bekleyiş"], ["Fast Food", "Hız"], ["Hamburger", "Kağıt"],
            ["Pizza", "Kutu"], ["Lahmacun", "Duman"], ["Kebap", "Duman"],
            ["Döner", "Bıçak İzi"], ["Mantı", "Sabır"], ["Makarna", "Su"],
            ["Çorba", "Kaşık Sesi"], ["Salata", "Ses"], ["Simit", "Kırıntı"],
            ["Midye", "Tezgah"], ["Kokoreç", "Gece"], ["Baklava", "Çıtırtı"],
            ["Türk Kahvesi", "Telve"], ["Ayran", "Ferahlık"], ["Davlumbaz", "Çekim"],
            ["Tezgah", "Yükseklik"], ["Kesme Tahtası", "İz"], ["Kepçe", "Derinlik"],
            ["Süzgeç", "Delik"], ["Tabak", "İstif"], ["Çatal", "Ağırlık"],
            ["Kaşık", "Form"], ["Bardak", "Çınlama"], ["Kupa", "Kulp"],
            ["Tost Makinesi", "Bastırma"], ["Blender", "Gürültü"], ["Mikser", "Sıçrama"],
            ["Akşam Yemeği", "Yorgunluk"], ["Öğle Yemeği", "Acele"], ["Kahvaltı", "Ekmek Kırıntısı"],
            ["Atıştırmalık", "Televizyon"], ["Pide", "Kenar"], ["Et", "Kan"],
            ["Tavuk", "Deride"], ["Balık", "Kılçık"], ["Köfte", "Şekil"],
            ["Patates Kızartması", "Koku"], ["Sokak Lezzetleri", "Kağıt"], ["Poğaça", "Susam"],
            ["Açma", "Yumuşaklık"], ["Çiğ Köfte", "Marul"], ["Dürüm", "Folyo"],
            ["Tatlı", "Şeker"], ["Sütlaç", "Tarçın"], ["Dondurma", "Erime"],
            ["Çikolata", "Parmak İzi"], ["Pasta", "Mum"], ["Kurabiye", "Koku"],
            ["İçecek", "Buz"], ["Çay", "Dem"], ["Filtre Kahve", "Kağıt"],
            ["Espresso", "Sertlik"], ["Latte", "Desen"], ["Şalgam", "Kırmızı"],
            ["Kola", "Asit"], ["Maden Suyu", "Gaz"], ["Limonata", "Sarı"],
            ["Tuz", "Tanecik"], ["Karabiber", "Aksırık"], ["Pul Biber", "Renk"],
            ["Kekik", "Koku"], ["Nane", "Ferahlık"], ["Zeytinyağı", "Akışkanlık"],
            ["Ayçiçek Yağı", "Şeffaflık"], ["Sos", "Leke"], ["Ketçap", "Kıvam"],
            ["Mayonez", "Renk"], ["Sarımsak", "Kalıcı Koku"], ["Soğan", "Gözyaşı"],
            ["Domates", "Çekirdek"], ["Salatalık", "Su"], ["Patates", "Toprak"],
            ["Peynir", "Koku"], ["Zeytin", "Çekirdek"], ["Yumurta", "Kabuk"],
            ["Ekmek", "Dilimleme"]
        ]
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
    let pairsList = categories[catKey].pairs;

    // 1. Rastgele bir çift seç
    let randomPair = pairsList[Math.floor(Math.random() * pairsList.length)];

    // Masumlara ana kelime, casusa ise uzak/soyut ipucu kelimesi gidiyor
    secretWord = randomPair[0];
    spyHintWord = randomPair[1];

    // 2. Rastgele birini casus yap
    spyIndex = Math.floor(Math.random() * players.length);

    // Roller oluşturuluyor
    assignedRoles = players.map((player, index) => {
        if (index === spyIndex) {
            return { isSpy: true, text: `🕵️ SEN CASUSSUN!<br><br>Sana verilen gizli ipucu:<br><span class="highlight">${spyHintWord}</span>` };
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
        <p>Gerçek Gizli Kelime: <b>${secretWord}</b></p>
        <p>Casusun Uzak İpucu: <b>${spyHintWord}</b></p><br>
        <p>Aranızdaki Gizli Casus:</p>
        <h3 class="highlight">${spyName} 🕵️‍♂️</h3>
    `;
}

function resetGame() {
    showScreen('lobby-screen');
}
