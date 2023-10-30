(function ($) {
  "use strict";

  //navbar
  var siteSticky = function () {
    $(".js-sticky-header").sticky({ topSpacing: 0 });
  };
  siteSticky();

  var siteMenuClone = function () {
    $(".js-clone-nav").each(function () {
      var $this = $(this);
      $this
        .clone()
        .attr("class", "site-nav-wrap")
        .appendTo(".site-mobile-menu-body");
    });

    setTimeout(function () {
      var counter = 0;
      $(".site-mobile-menu .has-children").each(function () {
        var $this = $(this);

        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find(".arrow-collapse").attr({
          "data-toggle": "collapse",
          "data-target": "#collapseItem" + counter,
        });

        $this.find("> ul").attr({
          class: "collapse",
          id: "collapseItem" + counter,
        });

        counter++;
      });
    }, 1000);

    $("body").on("click", ".arrow-collapse", function (e) {
      var $this = $(this);
      if ($this.closest("li").find(".collapse").hasClass("show")) {
        $this.removeClass("active");
      } else {
        $this.addClass("active");
      }
      e.preventDefault();
    });

    $(window).resize(function () {
      var $this = $(this),
        w = $this.width();

      if (w > 768) {
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
      }
    });

    $("body").on("click", ".js-menu-toggle", function (e) {
      var $this = $(this);
      e.preventDefault();

      if ($("body").hasClass("offcanvas-menu")) {
        $("body").removeClass("offcanvas-menu");
        $this.removeClass("active");
      } else {
        $("body").addClass("offcanvas-menu");
        $this.addClass("active");
      }
    });

    // click outisde offcanvas
    $(document).mouseup(function (e) {
      var container = $(".site-mobile-menu");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
      }
    });
  };
  siteMenuClone();
  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  /* FAQ */
  var faqQuestions = document.querySelectorAll(".faq-questions");

  faqQuestions.forEach(function (question) {
    question.addEventListener("click", function () {
      var clickedIcon = this.querySelector("i");
      var clickedAriaExpandedValue = this.getAttribute("aria-expanded");
      var hrElement = this.nextElementSibling; // Get the <hr> element

      faqQuestions.forEach(function (otherQuestions) {
        if (otherQuestions === question) {
          // Skip the clicked header
          return;
        }

        var icon = otherQuestions.querySelector("i");
        var ariaExpandedValue = otherQuestions.getAttribute("aria-expanded");

        if (
          icon.classList.contains("fa-chevron-up") &&
          ariaExpandedValue === "true"
        ) {
          icon.classList.remove(
            "fa-chevron-up",
            "text-primary-dentist-dentist"
          );
          icon.classList.add("fa-chevron-down");
          otherQuestions.classList.remove("text-primary-dentist");
        }
      });

      // Handling the clicked header separately
      if (
        clickedIcon.classList.contains("fa-chevron-down") &&
        clickedAriaExpandedValue === "false"
      ) {
        clickedIcon.classList.remove("fa-chevron-down");
        clickedIcon.classList.add("fa-chevron-up", "text-primary-dentist");
        question.classList.add("text-primary-dentist");
        hrElement.style.display = "block"; // Show the <hr> element
      } else {
        clickedIcon.classList.remove("fa-chevron-up", "text-primary-dentist");
        clickedIcon.classList.add("fa-chevron-down");
        question.classList.remove("text-primary-dentist");
        hrElement.style.display = "none"; // Hide the <hr> element
      }
    });
  });

  /* Carousel of location*/
  $(document).ready(function () {
    $("#photoCarousel").on("slide.bs.carousel", function (e) {
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 3;
      var totalItems = $(".carousel-item").length;

      if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
          // Append slides to end
          if (e.direction === "left") {
            $(".carousel-item").eq(i).appendTo(".carousel-inner");
          } else {
            $(".carousel-item").eq(0).appendTo(".carousel-inner");
          }
        }
      }
    });
  });

  /* Preloader
   * -------------------------------------------------- */

  $(window).on("load", function () {
    // force page scroll position to top at page refresh
    $("html, body").animate({ scrollTop: 0 }, "normal");

    // will first fade out the loading animation
    $("#loader").fadeOut("slow", function () {
      // will fade out the whole DIV that covers the website.
      $("#preloader").delay(300).fadeOut("slow");
    });
  });
})(jQuery);
