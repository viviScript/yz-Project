function setUrl(url) {
    window.location.href = url;
}

function registration(el) {
    $(el).siblings().removeClass("yz-registration-block");
    $(el).addClass('yz-registration-block')
}

$(function () {
    $(".yz-user-img").hover(function () {
        $('.yz-user-details').show();
    }, function () {
        $('.yz-user-details').hide();
    });

    $('.yz-user-login').click(function () {
        $('.yz-registration-login').addClass('yz-registration-block')
    })

})