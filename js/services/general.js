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
        // Add fade-out class to initiate the fade-out transition
        serviceDescImage.classList.add("fade-out");
        serviceDescText.classList.add("fade-out");

        // Use setTimeout to delay the content change until after the fade-out completes
        setTimeout(function () {
          switch (service) {
            case "service-1":
              serviceDescImage.src =
                "../../assets/unsplah/CHILDREN'S DENTISTRY.jpg";
              serviceDescText.innerHTML =
                "Το τμήμα παιδοδοντιατρικής μας εστιάζει στην παροχή εξειδικευμένης οδοντιατρικής φροντίδας για παιδιά, στη διασφάλιση της οδοντικής τους υγείας και στην προώθηση θετικών στοματικών συνηθειών από νεαρή ηλικία"; // Insert the service-1 description text here
              break;
            case "service-2":
              serviceDescImage.src = "../../assets/unsplah/endodontics.jpg";
              serviceDescText.innerHTML =
                "Το τμήμα ενδοδοντίας μας ειδικεύεται σε προηγμένες θεραπείες ριζικού σωλήνα, με στόχο τη διάσωση και αποκατάσταση των δοντιών που έχουν προσβληθεί από μόλυνση ή βλάβη στον οδοντικό πολφό."; // Insert the service-2 description text here
              break;
            case "service-3":
              serviceDescImage.src = "../../assets/unsplah/tooth cleaning.jpg";
              serviceDescText.innerHTML =
                "Το τμήμα προληπτικής οδοντιατρικής μας φροντίδας εστιάζει σε τακτικό έλεγχο και εκπαίδευση στοματικής υγιεινής. Παρέχουμε ολοκληρωμένες εξετάσεις για τον εντοπισμό πρώιμων σημείων οδοντικών προβλημάτων και την εκπαίδευση των ασθενών."; // Insert the service-3 description text here
              break;
          }

          serviceDescImage.classList.remove("fade-out");
          serviceDescText.classList.remove("fade-out");
        }, 1000); // 1 second (1000 milliseconds) delay to match the CSS transition duration
      });
    });
  });
})(jQuery);
