$(function() {
    $(".yz-tjdd-place .place-btn").click(function() {
        $('.yz-tjdd-pay').css('display', 'block') 
    })
    $(".yz-tjdd-pay .close").click(function() {
        $('.yz-tjdd-pay').css('display', 'none') 
    })
    $(".yz-tjdd-pay .pay-btn").click(function() {
        $('.yz-tjdd-wxCode').css('display', 'block') 
    })
    $(".yz-tjdd-wxCode .close").click(function() {
        $('.yz-tjdd-wxCode').css('display', 'none') 
    })
})