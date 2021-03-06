/*  ---------------------------------------------------
    Template Name: Manup
    Description: Manup Event HTML Template
    Author: Colorlib
    Author URI: http://colorlib.com
    Version: 1.0
    Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {
    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------------
		Partner Slider
    ----------------------- */
    $(".partner-logo").owlCarousel({
        items: 6,
        dots: false,
        autoplay: true,
        loop: true,
        smartSpeed: 1200,
        margin: 116,
        responsive: {
            320: {
                items: 2,
            },
            480: {
                items: 3,
            },
            768: {
                items: 4,
            },
            992: {
                items: 5,
            },
            1200: {
                items: 6
            }
        }
    });

    /*------------------------
		Testimonial Slider
    ----------------------- */
    $(".testimonial-slider").owlCarousel({
        items: 2,
        dots: false,
        autoplay: false,
        loop: true,
        smartSpeed: 1200,
        nav: true,
        navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
        responsive: {
            320: {
                items: 1,
            },
            768: {
                items: 2
            }
        }
    });

    /*------------------
        Magnific Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
        CountDown
    --------------------*/
    // For demo preview
    // var today = new Date();
    // var dd = String(today.getDate()).padStart(2, '0');
    // var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    // var yyyy = today.getFullYear();

    // if(mm == 12) {
    //     mm = '01';
    //     yyyy = yyyy + 1;
    // } else {
    //     mm = parseInt(mm) + 1;
    //     mm = String(mm).padStart(2, '0');
    // }
    // var timerdate = mm + '/' + dd + '/' + yyyy;
    // For demo preview end

    // Use this for real timer date
    var timerdate = "2020/09/10 07:30:00";

	$("#countdown").countdown(timerdate, function(event) {
        $(this).html(event.strftime("<div class='cd-item'><span>%D</span> <p>Hari</p> </div>" + "<div class='cd-item'><span>%H</span> <p>Jam</p> </div>" + "<div class='cd-item'><span>%M</span> <p>Menit</p> </div>" + "<div class='cd-item'><span>%S</span> <p>Detik</p> </div>"));
    });

    if (new Date() >= new Date(2020, 8, 11, 7, 30, 0)) {
        $("#tab1").removeClass("active");
        $("#tab-content1").removeClass("active");
        $("#tab2").addClass("active");
        $("#tab-content2").addClass("active");
    } else {
        $("#tab1").addClass("active");
        $("#tab-content1").addClass("active");
        $("#tab2").removeClass("active");
        $("#tab-content2").removeClass("active");
    }

})(jQuery);