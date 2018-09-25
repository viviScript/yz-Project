
$(function(){
    $('.yz-user-search').css('display', 'none')
    $(window).scroll(function() {
        console.log($(window).scrollTop())
        if($(window).scrollTop() >= 600) {
            $(".yz-header").addClass("yz-header-bg");
            $('.yz-user-search').css('display', 'block')
            $('.yz-user-headImg').attr('src', './static/img/touxiang.jpg') 
        }else{
            $('.yz-header').removeClass("yz-header-bg");
            $('.yz-user-search').css('display', 'none')
            $('.yz-user-headImg').attr('src', './static/img/icon_me.png') 
        }
    })
    // var setimg = new SetImg('.yz-aside .yz-aside-active')
    // $('.yz-aside li').mouseover(function(e) {
    //     console.log(e)
    //     setimg.attrImage()
    // }).mouseleave(function() {
    //     setimg.removeImage() 
    // })
    var homeAsid = new SetImg();
    console.log(homeAsid)
}
);