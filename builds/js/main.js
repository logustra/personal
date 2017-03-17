"use strict";

$(window).scroll(function() {
  var scrollPos = $(window).scrollTop(),
      navbar = $('.navbar-default');

  if (scrollPos > 10) {
    navbar.addClass('scrolled');
  } else {
    navbar.removeClass('scrolled');
  }
});

$("html").niceScroll({
  cursorcolor:"#31b7ea",
  scrollspeed :"80",
  cursorborder:"1px solid #31b7ea",
  horizrailenabled: "false",
  cursorborderradius: "0px",
  zindex: "1000"
});
