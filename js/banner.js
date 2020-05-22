var banners = ["img/destaque-home.png", "img/destaque-home1.png", "img/destaque-home2.png", "img/destaque-home3.png","img/destaque-home4.png", "img/destaque-home5.png", "img/destaque-home6.png", "img/destaque-home7.png"  ];
var bannerAtual = 0;

function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % 8;
    document.querySelector('.banner-destaque img ').src = banners [bannerAtual];
}

setInterval(trocaBanner, 4000);