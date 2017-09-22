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
