$(function() {
    $('.yz-wbss-gameType-list li').click(function() {
        $(this).addClass('yz-wbss-gameType-list-active').siblings().removeClass("yz-wbss-gameType-list-active")

    })
    var swiper = new Swiper('.yz-wbss-banner', {
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