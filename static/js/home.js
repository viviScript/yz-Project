
$(function(){
    $('.yz-user-search').css('display', 'none')
    $(window).scroll(function() {
        console.log($(window).scrollTop())
        if($(window).scrollTop() >= 600) {
            $(".yz-header").addClass("yz-header-bg");
            $('.yz-user-search').css('display', 'block')
        }else{
            $('.yz-header').removeClass("yz-header-bg");
            $('.yz-user-search').css('display', 'none')
        }
    })
}
);