// Hello.
//
// This is The Scripts used for ___________ Theme
//
//

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
        mobile:       false
      }
    );
    wow.init();

    /* swiper */
    var swiper = new Swiper('.swiper-containers', {
      // spaceBetween: 30,
      effect: 'fade',
      // effect : 'cube',
      // cubeEffect: {
      //   slideShadows: true,
      //   shadow: true,
      //   shadowOffset: 100,
      //   shadowScale: 0.6
      // },
      autoplay: {
        stopOnLastSlide: true
      },
      loop:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
    });
    // swiper.navigation.$nextEl.addClass('hide');
    // swiper.navigation.$prevEl.addClass('hide');

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

    $(document).ready(function() {
     $("#team").owlCarousel({

  	      navigation : false, // Show next and prev buttons
  	      slideSpeed : 300,
  	      paginationSpeed : 400,
  	      autoHeight : true,
  	      itemsCustom : [
          [0, 1],
          [450, 2],
          [600, 2],
          [700, 2],
          [1000, 4],
          [1200, 4],
          [1400, 4],
          [1600, 4]
          ],
        });

     $("#clients").owlCarousel({

  	      navigation : false, // Show next and prev buttons
  	      slideSpeed : 300,
  	      paginationSpeed : 400,
  	      autoHeight : true,
  	      itemsCustom : [
          [0, 1],
          [450, 2],
          [600, 2],
          [700, 2],
          [1000, 4],
          [1200, 5],
          [1400, 5],
          [1600, 5]
          ],
        });

     $("#testimonial").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
      });

   });

  	/*====================================
    Portfolio Isotope Filter
    ======================================*/
    $(window).load(function() {
      var $container = $('#lightbox');
      $container.isotope({
        filter: '*',
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });
      $('.cat a').click(function() {
        $('.cat .active').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $container.isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
          }
        });
        return false;
      });

    });



  }());


}
main();


$(function(){
    //刷新验证码
    var verifyimg = $(".verifyimg").attr("src");
    $(".reloadverify").click(function(){
        if( verifyimg.indexOf('?')>0){
            $(".verifyimg").attr("src", verifyimg+'&random='+Math.random());
        }else{
            $(".verifyimg").attr("src", verifyimg.replace(/\?.*$/,'')+'?'+Math.random());
        }
    });
});


