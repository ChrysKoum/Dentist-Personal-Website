(function ($) {
  ("use strict");

  // Code from the first script
  $('[data-toggle="tooltip"]').tooltip();

  // Code from the second script
  var options = ["far-left", "left", "center", "right", "far-right"];
  var cards = document.querySelectorAll(".carousel-card");
  addCardListeners();

  function addCardListeners() {
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      card.addEventListener("click", cardEventListener);
    }
  }

  function cardEventListener(e) {
    var parent = getParents(e.target, ".carousel-card")[0];
    var parentIndex = options.indexOf(parent.id);

    cards.forEach(function (card) {
      var index = options.indexOf(card.id);
      if (parentIndex > 2) {
        var previousIndex = index - 1 < 0 ? cards.length - 1 : index - 1;
        card.id = options[previousIndex];
      } else if (parentIndex < 2) {
        var nextIndex = index + 1 > cards.length - 1 ? 0 : index + 1;
        card.id = options[nextIndex];
      }
    });
  }

  function getParents(elem, selector) {
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function (s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(
              s
            ),
            i = matches.length;
          while (--i >= 0 && matches.item(i) !== this) {}
          return i > -1;
        };
    }

    var parents = [];
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (selector) {
        if (elem.matches(selector)) {
          parents.push(elem);
        }
      } else {
        parents.push(elem);
      }
    }

    return parents;
  }
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

  /* Services Changing Js*/
  document.addEventListener("DOMContentLoaded", function () {
    // Get all images with class img-tooth
    const toothImages = document.querySelectorAll(".img-tooth");

    // Get the main service description and image containers
    const serviceDescImage = document.querySelector(".img-service-desc");
    const serviceDescText = document.querySelector(".text-desc");

    // Loop through the images and add click event listeners
    toothImages.forEach(function (img) {
      img.addEventListener("click", function () {
        // Check if the clicked image doesn't have class active
        if (!img.classList.contains("active")) {
          // Reset all images to the non-active state
          toothImages.forEach(function (innerImg) {
            innerImg.src = "../../assets/icons/tooth (2).png";
            innerImg.classList.remove("active");
          });

          // Set the clicked image to the active state
          img.src = "../../assets/icons/tooth (1).png";
          img.classList.add("active");

          // Determine which service was clicked and update the main service description
          let service;
          if (img.parentElement.classList.contains("service-1")) {
            service = "service-1";
          } else if (img.parentElement.classList.contains("service-2")) {
            service = "service-2";
          } else if (img.parentElement.classList.contains("service-3")) {
            service = "service-3";
          }

          switch (service) {
            case "service-1":
              serviceDescImage.src = "../../assets/unsplah/blog 2.jpg";
              serviceDescText.innerHTML =
                "Το τμήμα επανορθωτικής οδοντιατρικής μας προσφέρει προηγμένες τεχνικές και υλικά για την αποκατάσταση των κατεστραμμένων δοντιών, βελτιώνοντας την αισθητική και αποκαθιστώντας τη στοματική υγεία για χαμόγελα με αυτοπεποίθηση."; // Insert the service-1 description text here
              break;
            case "service-2":
              serviceDescImage.src = "../../assets/unsplah/teeth whitening.jpg";
              serviceDescText.innerHTML =
                "Αφορά τις θεραπείες λεύκανσης των δοντιών που πραγματοποιούνται στο ιατρείο μας από καταρτισμένο επαγγελματία υγείας. Τηρώντας όλα τα πρωτόκολλα ασφαλείας, προστατεύουμε τα δόντια σας καθόλη τη διάρκεια της λεύκανσης, ώστε να σας προσφέρουμε το πιο λαμπερό σας χαμόγελο."; // Insert the service-2 description text here
              break;
            case "service-3":
              serviceDescImage.src = "../../assets/unsplah/ORTHODONTIC.jpg";
              serviceDescText.innerHTML =
                "Το τμήμα ορθοδοντικής μας παρέχει ολοκληρωμένες ορθοδοντικές θεραπείες για τη διόρθωση των κακώς ευθυγραμμισμένων δοντιών και την επίτευξη ενός πιο ίσιου, πιο ισορροπημένου χαμόγελου. Με μια σειρά επιλογών όπως τιράντες και ευθυγραμμιστές"; // Insert the service-3 description text here
              break;
          }
        }
      });
    });
  });
})(jQuery);
