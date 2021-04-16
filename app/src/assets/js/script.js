/*-- pos to fixed for side elemnt --*/
var pos_fixed = 500;

/*-- on scroll --*/
$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();

    /*-- img opacity --*/
    if (scrollTop > $('#img-header').offset().top) {
        $('#img-header').addClass('scrolled');
    } else {
        $('#img-header').removeClass('scrolled');
    }

    /*-- fixed side elemnt --*/
    if (scrollTop >= pos_fixed) {
        $('#aside').addClass('fixed');
        $('#info').addClass('fixed');
    } else {
        $('#aside').removeClass('fixed');
        $('#info').removeClass('fixed');
    }

    aside_active_elemnt();
});

/*-- move cursor aside menu --*/
function aside_active_elemnt() {

    let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

    if (!isMobile) {
        let scrollTop = $(window).scrollTop();

        // read each aside item
        $('#aside').find('a').each(function () {
            var aside_item = $(this);

            // reach each h5
            $('.content').find('h5').each(function () {
                var h5 = $(this);

                // if aside item match with h5
                if (aside_item.text() == h5.text()) {

                    // if window scroll match with h5 pos
                    if (scrollTop >= h5.offset().top - 200) {

                        // remove all is-active class
                        $('#aside').find('a').each(function () {
                            $(this).removeClass('is-active');
                        });

                        aside_item.addClass('is-active');
                    }

                    // no h5 match
                } else {

                    // reach each h4
                    $('.content').find('h4').each(function () {
                        var h4 = $(this);

                        // if aside item match with h4
                        if (aside_item.text() == h4.text()) {

                            // if window scroll match with h4 pos
                            if (scrollTop >= h4.offset().top - 200) {

                                // remove all is-active class
                                $('#aside').find('a').each(function () {
                                    $(this).removeClass('is-active');
                                });

                                aside_item.addClass('is-active');
                            }

                        }
                    });
                }
            });
        });
    }
}

/*-- menu for mobile --*/
function menu_open() {
    $('#navbar-burger').toggleClass('is-active');
    $('#navbar-menu').toggleClass('is-active');
}

/*-- dropdown for mobile --*/
function dropdown_open() {
    $('#navbar-dropdown').toggleClass('toggle-dropdown');
}