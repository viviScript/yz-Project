
function setUrl(url) {
    window.location.href = url;
}

$(function() {
    $(".yz-user-img").hover(function (){  
        $('.yz-user-details').show();
    },function (){  
        $('.yz-user-details').hide();
    }); 
})
