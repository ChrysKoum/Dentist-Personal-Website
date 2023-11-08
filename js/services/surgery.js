(function ($) {
  document.addEventListener("DOMContentLoaded", function () {
    const serviceDescImage = document.querySelector(".img-service-desc");
    const serviceDescText = document.querySelector(".text-desc");
    const allservices = document.querySelectorAll(".allservices");

    const servicesData = {
      "service-1": {
        img: "../../assets/unsplah/ORAL SURGERY.webp",
        desc: "Η γναθοπροσωπική χειρουργική είναι μια εξειδικευμένη ενότητα στην οδοντιατρική μας πρακτική, που ασχολείται με τη χειρουργική αντιμετώπιση προβλημάτων στον γνάθο και το πρόσωπο.",
      },
      "service-2": {
        img: "../../assets/unsplah/ORAL SURGERY 2.webp",
        desc: "Η χειρουργική στόματος είναι μια εξειδικευμένη κατηγορία στην οδοντιατρική που αναλαμβάνει περίπλοκες επεμβάσεις στο στόμα και τις γύρω δομές.",
      },
      "service-3": {
        img: "../../assets/unsplah/IMPLANTS.webp",
        desc: "Η εμφυτευματολογία αναφέρεται στην τεχνική της εισαγωγής οδοντικών εμφυτευμάτων στο στόμα για την αντικατάσταση απουσιάζοντων δοντιών.",
      },
    };

    allservices.forEach(function (serviceElement) {
      serviceElement.addEventListener("click", function () {
        const img = serviceElement.querySelector(".img-tooth");
        const allToothImages = document.querySelectorAll(".img-tooth");

        allToothImages.forEach((innerImg) => {
          innerImg.src = "../../assets/icons/tooth (2).png";
          innerImg.classList.remove("active");
        });

        img.src = "../../assets/icons/tooth (1).png";
        img.classList.add("active");

        const serviceKey = Array.from(serviceElement.classList).find(
          (cls) => servicesData[cls]
        );

        if (servicesData[serviceKey]) {
          serviceDescImage.classList.remove("fade-in");
          serviceDescText.classList.remove("fade-in");
          serviceDescImage.classList.add("fade-out");
          serviceDescText.classList.add("fade-out");

          setTimeout(function () {
            serviceDescImage.src = servicesData[serviceKey].img;
            serviceDescText.innerHTML = servicesData[serviceKey].desc;
          }, 800);

          setTimeout(function () {
            serviceDescImage.classList.remove("fade-out");
            serviceDescText.classList.remove("fade-out");
            serviceDescImage.classList.add("fade-in");
            serviceDescText.classList.add("fade-in");
          }, 1000);
        }
      });
    });
  });
})(jQuery);
