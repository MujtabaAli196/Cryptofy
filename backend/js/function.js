$(document).ready(function() {
    $('#sidebarCollapse').on('click', function() {
        $('#sidebar').toggleClass('active');
        $('#content').toggleClass('active');
    });
});
// 
$(document).ready(function() {
    /*------------------back to top------------------*/
    $(document).on('click', '.back-to-top', function() {
        $("html,body").animate({
            scrollTop: 0
        }, 200);
    });
});

// scroll
$(window).on("scroll", function() {
    var mainMenuTop = $(".header");
    if ($(window).scrollTop() >= 1) {
        mainMenuTop.addClass('navbar-area-fixed');
    } else {
        mainMenuTop.removeClass('navbar-area-fixed');
    }
    // 
    var ScrollTop = $('.back-to-top');
    if ($(window).scrollTop() > 1000) {
        ScrollTop.fadeIn(1000);
    } else {
        ScrollTop.fadeOut(1000);
    }
});

// load
$(window).on('load', function() {

    /*-----------------
        back to top
    ------------------*/
    var backtoTop = $('.back-to-top')
    backtoTop.fadeOut();

});


/*=============================================
	=    		 Preloader			      =
=============================================*/
function preloader() {
	$('#preloader').delay(0).fadeOut();
};

$(window).on('load', function () {
	preloader();
});