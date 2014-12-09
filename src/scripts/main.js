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
    removeHover(); // Remove hover on touch
});

$(window).load(function() {
    NProgress.done();
});

//-----------------------------------------------------------------
// Kickstart Foundation / Touch Conditionals
//-----------------------------------------------------------------

var touchEvent = TOUCH_ENABLED ? "touchstart" : "click";

//Trigger hamburger by touch on mobile - this eliminates glitch with FastClick.js
$(".hamburger").css({"visibility": "visible"}).bind(touchEvent, function() {
    $("#off-canvas-menu").trigger("open.mm");
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

    e.preventDefault();

    if (TOUCH_ENABLED) {
        contentDrawer.toggle();
    } else {
        contentDrawer.slideToggle();
    }
    $("i", $this).toggleClass('fa-angle-down');
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
//==================================================
//
//==================================================