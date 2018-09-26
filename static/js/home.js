
$(function(){
    $('.yz-user-search').css('display', 'none')
    $(window).scroll(function() {
        // console.log($(window).scrollTop())
        if($(window).scrollTop() >= 600) {
            $(".yz-header").addClass("yz-header-bg");
            $('.yz-user-search').css('display', 'block')
            console.log($('.yz-user-headImg').attr('src'), 'aaa')
            if (!$('.yz-user-headImg').attr('src') || $('.yz-user-headImg').attr('src') == './static/img/icon_me.png') {
                $('.yz-user-headImg').attr('src', './static/img/icon_touxiang2.png')
            }
        }else{
            $('.yz-header').removeClass("yz-header-bg");
            $('.yz-user-search').css('display', 'none')
            if (!$('.yz-user-headImg').attr('src') || $('.yz-user-headImg').attr('src') == './static/img/icon_touxiang2.png') {
                $('.yz-user-headImg').attr('src', './static/img/icon_me.png')
            }
        }
    })
}
);