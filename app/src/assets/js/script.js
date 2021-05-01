/*-- pos to fixed for side elemnt --*/
var pos_fixed = 500;

/*-- on scroll --*/
$(window).scroll(function () {
  const scrollTop = $(window).scrollTop();

  /*-- img opacity --*/
  if (scrollTop > $("#img-header").offset().top) {
    $("#img-header").addClass("scrolled");
  } else {
    $("#img-header").removeClass("scrolled");
  }

  /*-- fixed side elemnt --*/
  if (scrollTop >= pos_fixed) {
    $("#aside").addClass("fixed");
    $("#info").addClass("fixed");
  } else {
    $("#aside").removeClass("fixed");
    $("#info").removeClass("fixed");
  }

  aside_active_elemnt();
});

/*-- move cursor aside menu --*/
function aside_active_elemnt() {
  const isMobile = window.matchMedia("only screen and (max-width: 760px)")
    .matches;

  if (!isMobile) {
    const scrollTop = $(window).scrollTop();

    // read each aside item
    $("#aside")
      .find("a")
      .each(() => {
        const aside_item = $(this);

        for (const h of ["h4", "h5", "h6"]) {
          let isFound = false;
          $(".content")
            .find(h)
            .each(function () {
              const el = $(this);

              // if aside item match with el
              if (
                aside_item.text().trim().normalize() ==
                el.text().trim().normalize()
              ) {
                //console.log(aside_item.text(), scrollTop, el.offset().top - 200);
                // if window scroll match with el pos
                if (scrollTop >= el.offset().top - 200) {
                  // remove all is-active class
                  $("#aside")
                    .find("a")
                    .each(function () {
                      $(this).removeClass("is-active");
                    });

                  aside_item.addClass("is-active");

                  isFound = true;
                }
                // no match
              }
            });
          if (isFound) {
            break;
          }
        }
      });
  }
}

/*-- menu for mobile --*/
function menu_open() {
  $("#navbar-burger").toggleClass("is-active");
  $("#navbar-menu").toggleClass("is-active");
}

/*-- dropdown for mobile --*/
function dropdown_open() {
  $("#navbar-dropdown").toggleClass("toggle-dropdown");
}
