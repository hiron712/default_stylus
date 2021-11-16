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


    topSlick();

    // ウインドウがリサイズする度にチェック
    $(window).on('resize orientationchange',function(){
      carousel();
    });
    carousel();
  });


  function topSlick(){
    var slider;
    slider = $('#main-img .slide-area');
    slider.slick({
      dots: true,
      autoplay: false,
      arrows: true,
      infinite: true,
      // prevArrow:'<div class="prev"><img src="/wp/wp-content/themes/labbrains/assets/images/icon/icon_prev.svg"></div>',
      // nextArrow:'<div class="next"><img src="/wp/wp-content/themes/labbrains/assets/images/icon/icon_next.svg"></div>',
      autoplaySpeed: 8000,
      speed: 600,
      lazyLoad:"progressive",
      // centerMode: true,
      centerPadding: '10%',
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true
    });
  }

  function carousel(){

    if($('#header .menu').css('display') === 'none'){
      var slider;
      slider = $('#main .carousel');
      slider.slick({
        dots: true,
        autoplay: false,
        arrows: true,
        infinite: true,
        // prevArrow:'<div class="prev"><img src="/wp/wp-content/themes/labbrains/assets/images/icon/icon_prev.svg"></div>',
        // nextArrow:'<div class="next"><img src="/wp/wp-content/themes/labbrains/assets/images/icon/icon_next.svg"></div>',
        autoplaySpeed: 8000,
        speed: 600,
        lazyLoad:"progressive",
        // centerMode: true,
        centerPadding: '10%',
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true
      });
    }else{
      $('#main .carousel').slick('unslick');
    }

  }
})(jQuery);