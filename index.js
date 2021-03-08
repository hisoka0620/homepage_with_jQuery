$(function(){

    $(window).on('scroll',function(){
      $(".fade-in").each(function(){
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();
        let offset = $(this).offset().top;
          if(scroll > offset - windowHeight + 200){
            $(this).addClass("scroll-in");
          }
        });
    });

     $(window).on('load',function(){
       $(".fade-in").each(function(){
         let scroll = $(window).scrollTop();
         let windowHeight = $(window).height();
         let offset = $(this).offset().top;
           if(scroll > offset - windowHeight + 200){
             $(this).addClass("scroll-in");
           }
         });
     });

     $(".item2-contents").each(function(){
      $(this).hover(
        function(){
        $(this).find(".hidden").addClass("hover-in");
       },
        function(){
        $(this).find(".hidden").removeClass("hover-in");
       });
     });

     $(".modal-add").hover(
      function(){
        $(".header-modal").addClass("hover-in");
     },
      function(){
        $(".header-modal").removeClass("hover-in");
      }
      );

     $(".modal2-add").hover(function(){
      $(".header-second-modal").addClass("hover-in");
     },
     function(){
      $(".header-second-modal").removeClass("hover-in");
     });

     $("a").on('click',function(){
      $("html,body").animate({scrollTop: 0},800);
     });


    $('.burger-btn').on('click',function(){//.btn_triggerをクリックすると
      $('.burger-btn').toggleClass('close');//.btn_triggerにcloseクラスを付与(ボタンのアニメーション)
      $('.nav-wrapper').fadeToggle(500);//.nav-wrapperが0.5秒でフェードイン(メニューのフェードイン)
      $('body').toggleClass('noscroll');//bodyにnoscrollクラスを付与(スクロールを固定)
    });

     

});


