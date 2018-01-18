/*
    MAIN SCRIPTS - Last updated: 09-12-14
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------

var TOUCH_ENABLED = $(".touch").length;

//-----------------------------------------------------------------
// Document Ready
//-----------------------------------------------------------------

$(document).ready(function() {
    NProgress.start(); // Start preloader bar
});

$(window).load(function() {
    NProgress.done();
});

//-----------------------------------------------------------------
// Magnific Popup
//-----------------------------------------------------------------

$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    // disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
});

//-----------------------------------------------------------------
// Remove Hover library on Touch
//-----------------------------------------------------------------

removeHover(); // Remove hover on touch

//-----------------------------------------------------------------
// Kickstart Foundation / Touch Conditionals
//-----------------------------------------------------------------

//var touchEvent = TOUCH_ENABLED ? "touchstart" : "click"; // Keep as reference

// Trigger hamburger
$(".header-mobile-menu").bind("click", function(e) {
    e.preventDefault();
    $("#off-canvas-menu").removeClass('hide').trigger("open.mm");
});

if (TOUCH_ENABLED) {
    // Make Accordion jump to the top of the heading on mobile
    // http://foundation.zurb.com/forum/posts/1316-accordion-jump-to-top-when-active
    $(document).foundation('accordion', {
        callback: function (el){
            var containerPos = $(el).parent().offset().top;
            $('html, body').animate({ scrollTop: containerPos }, 300);
        }
    });
}

//-----------------------------------------------------------------
// Content Drawer - used for toggling visibility of items (sitemap etc)
//-----------------------------------------------------------------

$('.content-drawer').click(function(e){
    var $this = $(this);
    var contentDrawer = $($this.attr('href'));
    var icon = $("i", $this);

    e.preventDefault();

    if (TOUCH_ENABLED) {
        contentDrawer.toggle();
    } else {
        contentDrawer.slideToggle();
    }
    icon.toggleClass('fa-angle-down');

    if (!icon.hasClass('fa-angle-down')) $.scrollTo($this.offset(), 500);
});

//-----------------------------------------------------------------
// Toggle Team Listing
//-----------------------------------------------------------------

$(".more-team-listing").click(function(e){
    var $this = $(this);

    e.preventDefault();

    $(".excess").toggleClass('hide animated fadeIn');
    $("i", $this).toggleClass('fa-angle-down');
});

//-----------------------------------------------------------------
// <= IE8 Caution Message
//-----------------------------------------------------------------

$('.lv-alert .close-btn').click(function(){$(this).parent().hide();});

//-----------------------------------------------------------------
// +++ HELPERS +++
//-----------------------------------------------------------------
//==================================================
// Developer: COMMAND+S for screen width
//==================================================

$(document).keypress(function(event) {
    if (event.which == 115 && (event.ctrlKey||event.metaKey)||(event.which == 19)) {
        event.preventDefault();
        alert("(w) "+$(window).width()+" (h) "+$(window).height());
        return false;
    }
    return true;
});

//-----------------------------------------------------------------
// HEADER PHONE TOPBAR DRAW (18.01.18)
//-----------------------------------------------------------------

$('[data-header-body-trigger]').click(function(e){
    var $this = $(this);
    var $icon = $(".fa-angle-down", $this);

    e.preventDefault();

    $('[data-header-body]').toggleClass('is-open');

    $icon.toggleClass('fa-flip-vertical');
});

//==================================================
//
//==================================================