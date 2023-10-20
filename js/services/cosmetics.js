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
      });
    });
  });
})(jQuery);
