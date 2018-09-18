$(function() {
    $(".pic").click(function () {
        $(this).parent().find(".upload").on("change",function(){
        var objUrl = getObjectURL(this.files[0]) ; //获取图片的路径，该路径不是图片在本地的路径
        if (objUrl) {
          $(this).parent().find(".pic").attr("src", objUrl) ; //将图片路径存入src中，显示出图片
        }
      });
    });
    // $('.yz-grzl-photo-ul li').click(function() {
    //     $(this).children().find('.perch-file').click(function(e) {
    //         console.log(e);
    //         // $(this).children().find('.perch-file').on('change', function(e) {
    //         //     var objUrl = getObjectURL(e.files[0]) ; //获取图片的路径，该路径不是图片在本地的路径
    //         //     if (objUrl) {
    //         //       $(this).parent().find(".uploadImg").attr("src", objUrl) ; //将图片路径存入src中，显示出图片
    //         //     } 
    //         // })
    //     });
    // })
    $('.yz-grzl-photo-ul li:nth-child(1) .perch-file').on('change', function() {
        console.log(this);
        var objUrl = getObjectURL(this.files[0]) ; //获取图片的路径，该路径不是图片在本地的路径
        if (objUrl) {
          $(this).parent().find("img").attr("src", objUrl) ; //将图片路径存入src中，显示出图片
        }
    })
  });
  
  function getObjectURL(file) {
      var url = null ;
      if (window.createObjectURL!=undefined) { // basic
          url = window.createObjectURL(file) ;
      } else if (window.URL!=undefined) { // mozilla(firefox)
          url = window.URL.createObjectURL(file) ;
      } else if (window.webkitURL!=undefined) { // webkit or chrome
          url = window.webkitURL.createObjectURL(file) ;
      }
      return url ;
  }