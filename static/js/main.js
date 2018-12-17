function main() {

  (function () {
   'use strict';

   /* ==============================================
  	Testimonial Slider
  	=============================================== */ 

  	$('a.page-scroll').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 40
          }, 900);
          return false;
        }
      }
    });
    $(".nav > li > a").click(function(){
      $('.navbar-toggle').addClass("collapsed");
      $('.navbar-toggle').attr("aria-expanded",false);
      $("#bs-example-navbar-collapse-1").removeClass("in");
      $("#bs-example-navbar-collapse-1").attr("aria-expanded",false);
      });
      

    /*====================================
    Show Menu on Book
    ======================================*/
    $(window).bind('scroll', function() {
      console.log($(window).scrollTop())
      var scrollTop = $(window).scrollTop()
      
      if(scrollTop > 300) {
        $()
      }
      
      //var navHeight = $(window).height() - 100;
      if ($(window).scrollTop() > 700) {
        $('.navbar-default').addClass('on');
      } else {
        $('.navbar-default').removeClass('on');
      }


    });

    $('body').scrollspy({ 
      target: '.navbar-default',
      offset: 80
    })

    /* 滚动动画 */
    var wow = new WOW(
      {
        // mobile: false
      }
    );
    wow.init();

    /* swiper */
    var swiper = new Swiper('.swiper-containers', {
      effect: 'fade',
      autoplay: {
        stopOnLastSlide: true
      },
      loop:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    /* speed */
    var speed=30; //数字越大速度越慢
    var tab=document.getElementById("demo");
    var tab1=document.getElementById("demo1");
    var tab2=document.getElementById("demo2");
    tab2.innerHTML=tab1.innerHTML;
    function Marquee(){
    if(tab2.offsetWidth-tab.scrollLeft<=0)
    tab.scrollLeft-=tab1.offsetWidth
    else{
    tab.scrollLeft++;
    }
    }
    var MyMar=setInterval(Marquee,speed);
    tab.onmouseover=function() {clearInterval(MyMar)};
    tab.onmouseout=function() {MyMar=setInterval(Marquee,speed)};

    /* hover */
    $('.advertiser-content').hover(function(){
      var imgSrc = $(this).find('img')[0].src
      imgSrc = imgSrc.replace(/advertisers/ig, 'advertisersSelected')
      $(this).find('img').attr('src',imgSrc)
    },function(){
      var imgSrc = $(this).find('img')[0].src
      imgSrc = imgSrc.replace(/advertisersSelected/ig, 'advertisers')
      $(this).find('img').attr('src',imgSrc)
    })

    $('.contact-box').hover(function(){
      var imgSrc = $(this).find('img')[0].src
      console.log(imgSrc)
      imgSrc = imgSrc.replace(/_icon/ig, '_iconSelected')
      $(this).find('img').attr('src',imgSrc)
    },function(){
      var imgSrc = $(this).find('img')[0].src
      imgSrc = imgSrc.replace(/_iconSelected/ig, '_icon')
      $(this).find('img').attr('src',imgSrc)
    })
  }());
}
main();



