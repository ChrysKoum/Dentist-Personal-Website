(function ($) {
  /* Services Changing Js */
  document.addEventListener("DOMContentLoaded", function () {
    // Get the main service description and image containers
    const serviceDescImage = document.querySelector(".img-service-desc");
    const serviceDescText = document.querySelector(".text-desc");

    // Get all service elements with class .allservices
    const allservices = document.querySelectorAll(".allservices");

    // Loop through the service elements and add click event listeners
    allservices.forEach(function (serviceElement) {
      serviceElement.addEventListener("click", function () {
        // Get the img element within the clicked service
        const img = serviceElement.querySelector(".img-tooth");

        // Reset all images to the non-active state
        const toothImages = document.querySelectorAll(".img-tooth");
        toothImages.forEach(function (innerImg) {
          innerImg.src = "../../assets/icons/tooth (2).png";
          innerImg.classList.remove("active");
        });

        // Set the image within the clicked service to the active state
        img.src = "../../assets/icons/tooth (1).png";
        img.classList.add("active");

        // Update the main service description based on the clicked service
        let service;
        if (serviceElement.classList.contains("service-1")) {
          service = "service-1";
        } else if (serviceElement.classList.contains("service-2")) {
          service = "service-2";
        } else if (serviceElement.classList.contains("service-3")) {
          service = "service-3";
        }

        switch (service) {
          case "service-1":
            serviceDescImage.src = "../../assets/unsplah/ORAL SURGERY.jpg";
            serviceDescText.innerHTML =
              "Η γναθοπροσωπική χειρουργική είναι μια εξειδικευμένη ενότητα στην οδοντιατρική μας πρακτική, που ασχολείται με τη χειρουργική αντιμετώπιση προβλημάτων στον γνάθο και το πρόσωπο."; // Insert the service-1 description text here
            break;
          case "service-2":
            serviceDescImage.src = "../../assets/unsplah/endodontics.jpg";
            serviceDescText.innerHTML =
              "Η χειρουργική στόματος είναι μια εξειδικευμένη κατηγορία στην οδοντιατρική που αναλαμβάνει περίπλοκες επεμβάσεις στο στόμα και τις γύρω δομές."; // Insert the service-2 description text here
            break;
          case "service-3":
            serviceDescImage.src = "../../assets/unsplah/tooth cleaning.jpg";
            serviceDescText.innerHTML =
              "Η εμφυτευματολογία αναφέρεται στην τεχνική της εισαγωγής οδοντικών εμφυτευμάτων στο στόμα για την αντικατάσταση απουσιάζοντων δοντιών."; // Insert the service-3 description text here
            break;
        }
      });
    });
  });
})(jQuery);
