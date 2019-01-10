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
        var lang = $(this).text();
        $("#lang__menu div").text(lang);
  });





/*************** Speakers hover-effect ***************/

    $('.speakers__slide').hover(function() {
        $(this).children('.speakers__occupation').toggleClass('speakers__hover');
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

$(window).load(function() {
    $('.speakers__flexslider').flexslider({
        animation: "slide",
        prevText: "",
        nextText: "",
        touch: true,
        itemWidth: 270,
        minItems: 4,
        maxItems: 4,
        // itemMargin: 5
    });
});

$(window).load(function(){
    $('.str').liMarquee({
        // runshort: true,
        // scrollAmount: 25,
        // circular: true,
        // scrollamount: 250
            direction: 'left',  
            loop:-1,            
            scrolldelay: 0,     
            scrollamount:200,   
            circular: true,     
            drag: true          
    });
});