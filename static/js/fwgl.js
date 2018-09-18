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
    $('.yz-fwgl-add').click(function() {
        let selectHtml = `<select name="" id="" class="selectBar">
        <option value="长沙四季网吧">长沙四季网吧</option>
        <option value="长沙无极网吧">长沙无极网吧</option>
        <option value="长沙天辰网吧">长沙天辰网吧</option>
    </select>`
        $('.yz-fwgl-xxpw .selectBox .title-explain').before(selectHtml)
    })
})