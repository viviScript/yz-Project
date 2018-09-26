$(function() {
    var swiper = new Swiper('.yz-hd-banner', {
        grabCursor : true,
        autoplay : true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
})