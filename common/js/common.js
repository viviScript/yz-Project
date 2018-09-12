
$(function(){
    $(window).scroll(function() {
        console.log($(window).scrollTop())
        if($(window).scrollTop() >= 600) {
            $(".yz-header").addClass("yz-header-bg");
        }else{
            $('.yz-header').removeClass("yz-header-bg");
        }
    })
}
);