(function($){

  $(function () {

    //ハンバーガーメニュー
    $(document).on('click','#header .menu',function(){
      if($('html').hasClass('menuOpen')){
        $('html').removeClass('menuOpen')
      }else{
        $('html').addClass('menuOpen')
      }
      return false;
    });

    //ページスクロール
    var onpagescroll = function(){
      var $html = $('html');
      var scr = $(window).scrollTop();
      var scrH = scr + $(window).outerHeight();
      var footerTop = $('#footer').offset().top;


      if($html.hasClass('page-top-fixed') === false && scr > 400){
        $html.addClass('page-top-fixed');
      }else if($html.hasClass('page-top-fixed') === true && footerTop < scrH){
        $html.addClass('page-top-foot');
      }else if($html.hasClass('page-top-foot') === true && footerTop > scrH){
        $html.removeClass('page-top-foot');
      }else if($html.hasClass('page-top-fixed') === true && scr < 400){
        $html.removeClass('page-top-fixed');
      }
    };
    $(window).on('scroll',function(){
      onpagescroll();
    });

    //ページトップボタン
    $(document).on('click','.page-top',function(){
      $('html,body').stop().animate({
        scrollTop: 0
      });
      return false;
    });

  });

})(jQuery);