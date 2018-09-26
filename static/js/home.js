
$(function(){
    $('.yz-user-search').css('display', 'none')
    $(window).scroll(function() {
        console.log($(window).scrollTop())
        if($(window).scrollTop() >= 600) {
            $(".yz-header").addClass("yz-header-bg");
            $('.yz-user-search').css('display', 'block')
            if (!$('.yz-user-headImg').attr('src') || $('.yz-user-headImg').attr('src') == './static/img/icon_me.png') {
                $('.yz-user-headImg').attr('src', './static/img/touxiang.jpg')
            }
        }else{
            $('.yz-header').removeClass("yz-header-bg");
            $('.yz-user-search').css('display', 'none')
            $('.yz-user-headImg').attr('src', './static/img/icon_me.png') 
        }
    })
}
);