$(document).ready(function() {

/*************** Adaptive menu ***************/


            $('.menu__icon').on('click', function() {
                $(this).closest('.navigation').toggleClass('menu_state_open');
            });




    $('.header__wrap .search__form').mouseover(function() {
        var width = $('#lang__menu').outerWidth();
        $('.header__wrap .search__form span').stop().animate({
        width: width + 'px',
      }, 500, function() {
            $('.header__wrap .search__form span').css({'overflow': 'visible'});
        });
    });
    
    $('.header__wrap .search__form').mouseout(function() {
        if ($('.top-menu .search__form span input').is(':focus'))
            return false;
        $('.header__wrap .search__form span').stop().animate({
        width: '0',
      }, 500, function() {
            $('.search__result').html('');
        });
    });
    
    $('.header__wrap .search__form input').blur(function() { 
        $('.header__wrap .search__form span').stop().animate({
        width: '0',
      }, 500, function() {
            $('.search__result').html('');
        });
    });


 ///hover container lang menu
  $("#lang__menu").hover(
    function(){
       
        $(this).children().eq(0);
              $("#lang__menu ul").stop().slideToggle(100);
    },
    function(){
               
        $(this).children().eq(0);
        $("#lang__menu ul").stop().slideToggle(100);  
    }
  );
  /// click languages
  $("#lang__menu ul li").on("click", function(){
        //select lang and apply changes
        $lang = $(this).text();
        $("#lang__menu div").text($lang);
  });


/************* Home-page/////Slider-main-section *************/

    $('.center').slick({
        centerMode: true,
        dots: true,
        autoplay: true,
        slidesToShow: 1,
    });
  
/************** Home-page/////Sponsors-section **************/

    $('.multiple-items').slick({
        infinite: true,
        dots: true,
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
    {
        breakpoint: 1400,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 1,    
        }
    },
    {
        breakpoint: 992,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,    
        }
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,      
        }
    },
    {
        breakpoint: 550,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,     
      }
    }
]
  });

/************* Review-page///Drop-down *************/

    $('.review__button').on('click', function() {
        $(this).closest('.review__item').toggleClass('open');
    });

/*************** Donation-page///Drop-down ***************/

    $('.payment-main').on('click', function() {
        $('.payment-hidden').toggleClass('payment-display');
    });
          
});

    /* Flexslider */
    
$(window).load(function() {
  $('.forum__flexslider').flexslider({
    animation: "slide",
    touch: true,
    controlNav: false,
    directionNav: false,
    minItems: 1,
    maxItems: 1
  });
});

$(window).load(function(){
    $('.str').liMarquee();
});