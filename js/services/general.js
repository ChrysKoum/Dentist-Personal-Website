(function ($) {
  document.addEventListener("DOMContentLoaded", function () {
    const serviceDescImage = document.querySelector(".img-service-desc");
    const serviceDescText = document.querySelector(".text-desc");
    const allservices = document.querySelectorAll(".allservices");

    const servicesData = {
      "service-1": {
        img: "../../assets/unsplah/CHILDREN'S DENTISTRY.jpg",
        desc: "Το τμήμα παιδοδοντιατρικής μας εστιάζει στην παροχή εξειδικευμένης οδοντιατρικής φροντίδας για παιδιά, στη διασφάλιση της οδοντικής τους υγείας και στην προώθηση θετικών στοματικών συνηθειών από νεαρή ηλικία",
      },
      "service-2": {
        img: "../../assets/unsplah/endodontics.jpg",
        desc: "Το τμήμα ενδοδοντίας μας ειδικεύεται σε προηγμένες θεραπείες ριζικού σωλήνα, με στόχο τη διάσωση και αποκατάσταση των δοντιών που έχουν προσβληθεί από μόλυνση ή βλάβη στον οδοντικό πολφό.",
      },
      "service-3": {
        img: "../../assets/unsplah/tooth cleaning.jpg",
        desc: "Το τμήμα προληπτικής οδοντιατρικής μας φροντίδας εστιάζει σε τακτικό έλεγχο και εκπαίδευση στοματικής υγιεινής. Παρέχουμε ολοκληρωμένες εξετάσεις για τον εντοπισμό πρώιμων σημείων οδοντικών προβλημάτων και την εκπαίδευση των ασθενών.",
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
