$(function() {
    /*
    * 样式yz-zyds-sort-active  添加橙色按钮背景 白色默认排序图标
    * 样式yz-zyds-sort-active-top  排序向上图标
    * 样式yz-zyds-sort-active-bottom  排序向下图标
    * 删除这三个样式 默认白色按钮背景 灰色排序图标
    * */
    $('.yz-zyds-sort-ul li').click(function() {
        console.log(this)
        $(this).siblings().removeClass("yz-zyds-sort-active").removeClass('yz-zyds-sort-active-top')
        if ($(this).hasClass('yz-zyds-sort-active')) {
            if ($(this).hasClass('yz-zyds-sort-active-top')) {
                $(this).removeClass('yz-zyds-sort-active-top')
            } else {
                $(this).addClass('yz-zyds-sort-active-top')
            }
        } else {
            $(this).addClass('yz-zyds-sort-active')
            $(this).siblings().removeClass("yz-zyds-sort-active").removeClass('yz-zyds-sort-active-top')
        }
    })
    $('.yz-zyds-gameType-list li').click(function() {
        $(this).addClass('yz-zyds-gameType-list-active').siblings().removeClass("yz-zyds-gameType-list-active")

    })
})