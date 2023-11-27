(function ($) {
  document.addEventListener("DOMContentLoaded", function () {
    const serviceDescImage = document.querySelector(".img-service-desc");
    const serviceDescText = document.querySelector(".text-desc");
    const allservices = document.querySelectorAll(".allservices");

    const servicesData = {
      "service-1": {
        img: "../../assets/unsplah/ORAL SURGERY.webp",
        desc: "Καθημερινή συνεργασία με τους γναθοχειρούργους της ομάδας μας προσφέρει την άμεση αντιμετώπιση προβλημάτων σε γνάθο και το πρόσωπο, ιδιαίτερα κακοηθειών, κερδίζοντας πολύτιμο χρόνο για την βελτίωση της πρόγνωσης του περιστατικού.",
      },
      "service-2": {
        img: "../../assets/unsplah/ORAL SURGERY 2.webp",
        desc: "Η χειρουργική στόματος είναι μια εξειδικευμένη κατηγορία στην οδοντιατρική που αναλαμβάνει περίπλοκες επεμβάσεις στο στόμα και τις γύρω δομές(εξαγωγές έγκλειστων φρονιμιτών).",
      },
      "service-3": {
        img: "../../assets/unsplah/IMPLANTS.webp",
        desc: "Η τοποθέτηση οδοντικών εμφυτευμάτων στη στοματική κοιλότητα για την αντικατάσταση απουσιαζοντών δοντιών βοηθά την αποκατάσταση της λειτουργικότητας του οδοντικού συστήματος και συνεπώς την εύρυθμη λειτουργία της κροταφογναθικής διάρθρωσης",
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
