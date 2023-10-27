(function ($) {
  ("use strict");

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

  window.addEventListener("resize", changeLayout);
  window.addEventListener("DOMContentLoaded", changeLayout); // Check on initial load

  function changeLayout() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 767) {
      const container = document.querySelector(
        ".desc-service-container .container .row"
      );

      // Change col-6 to col-12 and add d-flex justify-content-center for img-tooths
      const imgTooths = container.querySelector(".col-6.img-tooths");
      imgTooths.className = "col-12 img-tooths d-flex justify-content-center";

      // Add the desired classes to all 'allservices' elements
      const allServicesElements = container.querySelectorAll(".allservices");
      allServicesElements.forEach((el) => {
        el.classList.add(
          "d-flex",
          "flex-column",
          "justify-content-center",
          "align-items-center"
        );
      });
      const service1 = container.querySelector(".allservices.service-1");
      if (service1) {
        service1.classList.add("img-tooth-width");
      }
      // Remove mt-5 from the specified elements
      const service2 = container.querySelector(".allservices.service-2.mt-5");
      if (service2) {
        service2.classList.remove("mt-5");

        service2.classList.add("img-tooth-width");
      }
      const service3 = container.querySelector(".allservices.service-3.mt-5");
      if (service3) {
        service3.classList.remove("mt-5");
      }

      // Move the button-wrapper-desc to the end of the row
      const buttonWrapper = container.querySelector(".button-wrapper-desc");
      container.appendChild(buttonWrapper);

      // Change the other col-6 to col-12
      const textCol = container.querySelector(".col-6");
      if (textCol) {
        textCol.className = "col-12";
      }

      // Remove event listener to prevent multiple changes
      window.removeEventListener("resize", changeLayout);
    }
  }
})(jQuery);
