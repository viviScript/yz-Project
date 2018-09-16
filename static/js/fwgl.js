$(function() {
    $('.yz-fwgl-box .nav li').click(function() {
        $(this).addClass('nav-active').siblings().removeClass("nav-active");
        console.log($(this).index())
        switch ($(this).index()) {
            case 0:
                $('.yz-fwgl-mfkh').css('display', 'block');
                $('.yz-fwgl-qdmx').css('display', 'none');
                $('.yz-fwgl-zyds').css('display', 'none');
                $('.yz-fwgl-xxpw').css('display', 'none');
                break;
            case 1:
                $('.yz-fwgl-mfkh').css('display', 'none');
                $('.yz-fwgl-qdmx').css('display', 'block');
                $('.yz-fwgl-zyds').css('display', 'none');
                $('.yz-fwgl-xxpw').css('display', 'none');
                break;
            case 2:
                $('.yz-fwgl-mfkh').css('display', 'none');
                $('.yz-fwgl-qdmx').css('display', 'none');
                $('.yz-fwgl-zyds').css('display', 'block');
                $('.yz-fwgl-xxpw').css('display', 'none');
                break;
            case 3:
                $('.yz-fwgl-mfkh').css('display', 'none');
                $('.yz-fwgl-qdmx').css('display', 'none');
                $('.yz-fwgl-zyds').css('display', 'none');
                $('.yz-fwgl-xxpw').css('display', 'block');
                break;
        }
    })
    $('.close').click(function() {
        $('.yz-fwgl-service').css('display', 'block')
        $('.yz-fwgl-box').css('display', 'none') 
    })
    $('.addService').click(function() {
        $('.yz-fwgl-service').css('display', 'none')
        $('.yz-fwgl-box').css('display', 'block')
    })
    $('.service-setting').click(function() {
        $('.yz-fwgl-dialog').css('display', 'block')
    })
    $(".yz-fwgl-dialog .close").click(function() {
        $('.yz-fwgl-dialog').css('display', 'none') 
    })
})