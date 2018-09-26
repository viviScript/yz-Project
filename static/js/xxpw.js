$(function() {
    /*
    * 样式yz-xxpw-sort-active  添加橙色按钮背景 白色默认排序图标
    * 样式yz-xxpw-sort-active-top  排序向上图标
    * 样式yz-xxpw-sort-active-bottom  排序向下图标
    * 删除这三个样式 默认白色按钮背景 灰色排序图标
    * */
    $('.yz-xxpw-sort-ul li').click(function() {
        console.log(this)
        $(this).siblings().removeClass("yz-xxpw-sort-active").removeClass('yz-xxpw-sort-active-top')
        if ($(this).hasClass('yz-xxpw-sort-active')) {
            if ($(this).hasClass('yz-xxpw-sort-active-top')) {
                $(this).removeClass('yz-xxpw-sort-active-top')
            } else {
                $(this).addClass('yz-xxpw-sort-active-top')
            }
        } else {
            $(this).addClass('yz-xxpw-sort-active')
            $(this).siblings().removeClass("yz-xxpw-sort-active").removeClass('yz-xxpw-sort-active-top')
        }
    })

    $('.yz-xxpw-gameType-list li').click(function() {
        $(this).addClass('yz-xxpw-gameType-list-active').siblings().removeClass("yz-xxpw-gameType-list-active")

    })


})