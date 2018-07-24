/*
    CARD-SLIDER.JS - Last updated: 10.04.18
*/
//-----------------------------------------------------------------
// LAUNCH SLIDER
//-----------------------------------------------------------------

function cardSlider() {

    //==================================================
    // EQUAL HEIGHTS
    // adds a class that triggers CSS animation, applies
    // the height after init.
    // https://github.com/metafizzy/flickity/issues/534
    //==================================================

    Flickity.prototype._createResizeClass = function() {
        this.element.classList.add('flickity-resize');
    };

    Flickity.createMethods.push('_createResizeClass');

    var resize = Flickity.prototype.resize;

    Flickity.prototype.resize = function() {
        this.element.classList.remove('flickity-resize');
        resize.call( this );
        this.element.classList.add('flickity-resize');
    }
}

cardSlider();

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------
//==================================================
//
//==================================================