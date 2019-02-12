$(function() {
  $(window).scroll(function() {
    //use this number to determine when to switch to fixed menu
    ancho = $(window).width();
    if (ancho > 992) {
      if ($(window).scrollTop() > 265) {
        $("#mainNav").addClass("navbarFixed");
        $("#AddMargen").addClass("margen");
      }

      if ($(window).scrollTop() < 268) {
        $("#mainNav").removeClass("navbarFixed");
        $("#AddMargen").removeClass("margen");
      }
    } else {
      $("#mainNav").addClass("navbarFixed");
    }
  });
});

var activeFilter = "all";

$(".pp-filter-button").on("click", function(e) {
  // remove btn-primary from all buttons first
  $(".pp-filter-button").removeClass("btn-secondary");
  $(".pp-filter-button").addClass("btn-outline-secondary");

  // add btn-primary to active button
  var button = $(this);
  button.removeClass("btn-outline-secondary");
  button.addClass("btn-secondary");
  filterItems(button.data("filter"));
  e.preventDefault();
});

function filterItems(filter) {
  if (filter === activeFilter) {
    return;
  }

  activeFilter = filter;
  $(".pp-gallery .card").each(function() {
    var card = $(this);
    var groups = card.data("groups");
    var show = false;
    if (filter === "all") {
      show = true;
    } else {
      for (var i = 0; i < groups.length; i++) {
        if (groups[i] === filter) {
          show = true;
        }
      }
    }
    // hide everything first
    card.fadeOut(400);

    setTimeout(function() {
      if (show && !card.is(":visible")) {
        card.fadeIn(400);
      }
    }, 500);
  });
}
