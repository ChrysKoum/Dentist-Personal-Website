(function ($) {
  "use strict";

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
