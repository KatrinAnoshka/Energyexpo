$(document).ready(function() {

/*************** Adaptive menu ***************/

    $('.menu__icon').on('click', function() {
        $(this).closest('.navigation').toggleClass('menu_state_open');
    });

/************* Fixed menu *************/

    if ($(window).width() > 1200)   {
        $(window).scroll(function () {
            var scrolled = $(window).scrollTop();
            if (scrolled >= 1) {
                $('header').addClass('header__fixed');                      
            }
            else {
                if (scrolled < 180) {
                    $('header').removeClass('header__fixed');                                   
                }
            }
        });
    }

/************* Search animation in header *************/

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

/************* Switch language animation in header *************/

    $("#lang__menu").hover(
        function(){          
            $(this).children().eq(0);
            $("#lang__menu ul").stop().slideToggle(100);
        },
    );

    $("#lang__menu ul li").on("click", function(){
        var lang = $(this).text();
        $("#lang__menu div").text(lang);
    });

/*************** Speakers hover-effect ***************/

    $('.speakers__slide').hover(function() {
        $(this).children('.speakers__occupation').toggleClass('speakers__hover');
    });

/*************** News ticker in Support section ***************/ 

    var speed = 10;
    var items, scroller = $('.scroller');
    var width = 0;
    scroller.children().each(function(){
        width += $(this).outerWidth(true);
    });
    scroller.css('width', width);
    scroll();
    function scroll(){
        items = scroller.children();
        var scrollWidth = items.eq(0).outerWidth();
        scroller.animate({'left' : 0 - scrollWidth}, scrollWidth * 100 / speed, 'linear', changeFirst);
    }
    function changeFirst(){
        scroller.append(items.eq(0).remove()).css('left', 0);
        scroll();
    }

/*************** Tabs in Partners-page ***************/ 

    $('.partners__tabs li').click(function(){
        $divId = $(this).attr('target');

        $('.partners__item').hide(400);
        $('#'+$divId).show(400);

        $('.partners__tabs li').removeClass('active');
        $(this).addClass('active');

    });

/*************** Fancybox in Photo-page and Video-page ***************/ 

    $("a.fancy").fancybox();
    $('.fancybox').fancybox({
        padding   : 0,
        maxWidth  : '100%',
        maxHeight : '100%',
        width   : 970,
        height    : 550,
        autoSize  : true,
        closeClick  : true,
        openEffect  : 'none',
        closeEffect : 'none'
    });
    
/*======================================================*/
            /*=  Visitors-ticket-page  ==*/    
/*=======================================================*/

    $('.filters__trigger').on('click', function() {
        $(this).toggleClass('filters__trigger-active');
        $('.inner').toggleClass('inner-active');
    });

    /* Select */
    $('.select').on('click',function(){
        $(this).parent().find('.options').fadeIn('fast');
    });
    $('.options').on('mouseleave',function(){
        $(this).fadeOut('fast');
    });
    $('.pseudo-select').on('mouseleave',function(){
        $(this).find('.options').fadeOut('fast');
    });
    $('.options > div').on('click',function(){
        //if ($(this).attr('value')) {
            $(this).closest('.pseudo-select').find('.select').html($(this).text());
            $(this).closest('.pseudo-select').find('input').attr('value', $(this).attr('value'));
        //}
        $.each($(this).parent().children('div.check'), function(){
            $(this).removeClass('check');
        });
        $(this).addClass('check');
        $(this).parent().fadeOut('fast');
    });


/*************** Chrome Smooth Scroll ***************/         

    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {
    };

    $("img, a").on("dragstart", function(event) { event.preventDefault(); }); 


}); /*  end of Document Ready*/

    
$(window).load(function() {

/*************** Slider in Forum section ***************/ 

    $('.forum__flexslider').flexslider({
        animation: "slide",
        slideshowSpeed: 2000,
        touch: true,
        controlNav: false,
        directionNav: false,
        minItems: 1,
        maxItems: 1
    });

/*************** Slider in Speakers section ***************/ 
    if ($('.speakers').width() > 1200) {
        var countItem = 4;
    } else if ($('.speakers').width() > 768) {
        var countItem = 3;
    } else if ($('.speakers').width() > 550) {
        var countItem = 2;
    } else {
        var countItem = 1;
    }
    $('.speakers__flexslider').flexslider({
        animation: "slide",
        prevText: "",
        nextText: "",
        touch: true,
        itemWidth: 250,
        minItems: 1,
        maxItems: countItem,
    });


}); /*  end of Window Load*/


