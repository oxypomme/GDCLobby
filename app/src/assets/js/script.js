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
            let isFound = false;
            var aside_item = $(this);

            // reach each h5
            if (!isFound)
                $('.content').find('h5').each(function () {
                    var h5 = $(this);

                    // if aside item match with h5
                    if (aside_item.text().trim().normalize() == h5.text().trim().normalize()) {

                        //console.log(aside_item.text(), scrollTop, h5.offset().top - 200);
                        // if window scroll match with h5 pos
                        if (scrollTop >= h5.offset().top - 200) {

                            // remove all is-active class
                            $('#aside').find('a').each(function () {
                                $(this).removeClass('is-active');
                            });

                            aside_item.addClass('is-active');

                            isFound = true;
                        }

                        // no h5 match
                    }
                });

            if (!isFound)
                $('.content').find('h4').each(function () {
                    isFound = false;
                    var h4 = $(this);

                    // if aside item match with h4
                    if (aside_item.text().trim().normalize() == h4.text().trim().normalize()) {

                        // if window scroll match with h4 pos
                        if (scrollTop >= h4.offset().top - 200) {

                            // remove all is-active class
                            $('#aside').find('a').each(function () {
                                $(this).removeClass('is-active');
                            });

                            aside_item.addClass('is-active');

                            isFound = true;
                        }

                    }
                });

            if (!isFound)
                $('.content').find('h6').each(function () {
                    isFound = false;
                    var h6 = $(this);

                    // if aside item match with h6
                    if (aside_item.text().trim().normalize() == h6.text().trim().normalize()) {

                        // if window scroll match with h6 pos
                        if (scrollTop >= h6.offset().top - 200) {

                            // remove all is-active class
                            $('#aside').find('a').each(function () {
                                $(this).removeClass('is-active');
                            });

                            aside_item.addClass('is-active');

                            isFound = true;
                        }

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