function loadAd() {
    // Reklam URL'leri
    const ads = [
        'https://via.placeholder.com/300x150?text=Reklam+1',
        'https://via.placeholder.com/300x150?text=Reklam+2',
        'https://via.placeholder.com/300x150?text=Reklam+3'
    ];

    // Rastgele bir reklam seçimi
    const randomAd = ads[Math.floor(Math.random() * ads.length)];

    // Reklamı banner alanına yerleştirme
    document.getElementById('ad-banner').innerHTML = `<img src="${randomAd}" alt="Reklam">`;
}
