(function($) {

    'use strict';

    // ========================================================================= //
    //      [ Cursor Animation ]
    // ========================================================================= //

    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
    })

    document.addEventListener('click', () => {
        cursor.classList.add("expand");

        setTimeout(() => {
            cursor.classList.remove("expand");
        }, 500)
    });

    // ========================================================================= //
    //      [ Navbar ]
    // ========================================================================= //


    var header = $(".navfixed");

    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });

    $(".navbar-wrapper .mainmenunav .navbar .navbar-collapse .menu-item-has-children > a").on("click", function () {
        $(this).parent().find('.sub-menu').slideToggle(900);
    });

    $(".navbar-wrapper .navfixed .container .fullcontainer .row .col-md-12 .iconfix .cd-nav-trigger").on("click", function () {
        header.toggleClass("bgactive");
    });

    // ========================================================================= //
    //      [ Magnific Popup ]
    // ========================================================================= //

    var magnifPopup = function() {
        $('.popup-img').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,

                duration: 300,
                easing: 'ease-in-out',
                opener: function(openerElement) {

                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    };


    if ($('.overlay')[0]) {

        $('.overlay').magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    }


    // Call the functions 
    magnifPopup();


    // ========================================================================= //
    //      [ Numbering Links ]
    // ========================================================================= //

    var counter = 1;

    $(".navbar-wrapper .mainmenunav .navbar .navbar-collapse .navbar-nav > li").each(function () {

        if (counter < 10) {
            $(this).append("<p>" + "0" + counter + "</p>");
        } else {
            $(this).append("<p>" + counter + "</p>");
        }

        counter++;
    });

    // ========================================================================= //
    //      [ To top Bottom ]
    // ========================================================================= //


    var scrollToTopButton = document.getElementById('js-top'),
        scrollFunc = () => {
            let y = window.scrollY;

            if (y > 0) {
                scrollToTopButton.className = "top-link show";
            } else {
                scrollToTopButton.className = "top-link hide";
            }
        };
    window.addEventListener("scroll", scrollFunc);

    const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;


        if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 10);
        }
    };

    scrollToTopButton.onclick = function(e) {
        e.preventDefault();
        scrollToTop();
    }


    // ========================================================================= //
    //      [ Smoh Scroll ]
    // ========================================================================= //


    $('a[href*="#"]:not([href="#"])').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').stop().animate({
                    scrollTop: target.offset().top - 69 //offsets for fixed header
                }, 900);
                return false;
            }
        }
    });

    // ========================================================================= //
    //   Scroll To Top After click
    // ========================================================================= //

    $(".overlay-1 .intro .myBtn").on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
    });


})(jQuery);


// ========================================================================= //
//      [ Full page ]
// ========================================================================= //


function fadeOut() {

    TweenMax.to(".myBtn", 1, {
        y: -100,
        opacity: 0

    });

    TweenMax.to(".screen", 2, {
        y: -400,
        opacity: 0,
        ease: Power2.easeInOut,
        delay: 2

    });

    TweenMax.from(".overlay-1", 2, {
        ease: Power2.easeInOut,

    });

    TweenMax.to(".overlay-1", 2, {
        delay: 2.6,
        top: "-300%",
        ease: Expo.easeInOut,
    });

    TweenMax.to(".overlay-2", 2, {
        delay: 3,
        top: "-110%",
        ease: Expo.easeInOut,

    });


    TweenMax.from(".content", 2, {
        delay: 3.2,
        opacity: 0,
        ease: Power2.easeInOut,

    });

    TweenMax.to(".content", 2, {
        opacity: 1,
        y: 0,
        delay: 3.2,
        ease: Power2.easeInOut,

    });

    TweenMax.to("body", 2, {
        'overflow-y': 'scroll',
        delay: 4,
        ease: Power2.easeInOut,

    });

    

}