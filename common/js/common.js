function setUrl(url) {
    window.location.href = url;
}

// 添加删除样式 用于登陆区
function registration(el) {
    $(el).siblings().removeClass("yz-registration-block");
    $(el).addClass('yz-registration-block')
}
function setClass(el, styleClass) {
    $(el).siblings().removeClass(styleClass);
    $(el).addClass(styleClass)
}
// 设置显示隐藏
function toggleDisplay(arry) {
    console.log(typeof arry)
    console.log(arry instanceof Array)
    if (arry instanceof Array) {
        for (item of arry) {
            if (!(item instanceof Object)) {
                throw new Error('请传正确的参数格式')  
            } else if (!item['el'] || !item['styleCss']) {
                throw new Error('请传正确的参数格式')   
            } else {
                $(item.el).css('display', item.styleCss); 
                console.log(item)
            }
        } 
    } else {
        throw new Error('请传数组参数') 
    }
    // if (arguments.length === 2) {
    //     $(el).css('display', style); 
    // }
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
    $(".yz-aside li:last-child").click(function(){
        $('body,html').animate({scrollTop:0},500);
        return false;
    });

    $(".yz-aside .yz-aside-qq").hover(function() {
        $('.yz-aside .yz-aside-qq span').css('display', 'block'); 
    },function() {
        $('.yz-aside .yz-aside-qq span').css('display', 'none'); 
    })
})