(function ($) {
  ("use strict");

  // Code from the first script
  $('[data-toggle="tooltip"]').tooltip();

  // Code from the second script
  var options = ["left", "center", "right", "far-right"];
  var cards = document.querySelectorAll(".carousel-card-location");
  addCardListeners();

  function addCardListeners() {
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      card.addEventListener("click", cardEventListener);
    }
  }

  function cardEventListener(e) {
    var parent = getParents(e.target, ".carousel-card-location")[0];
    var parentIndex = options.indexOf(parent.id);

    cards.forEach(function (card) {
      var index = options.indexOf(card.id);
      if (parentIndex === 2) {
        var previousIndex = index - 1 < 0 ? cards.length - 1 : index - 1;
        card.id = options[previousIndex];
      } else if (parentIndex === 0) {
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
})(jQuery);
