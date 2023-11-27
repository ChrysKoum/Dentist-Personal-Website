(function ($) {
  document.addEventListener("DOMContentLoaded", function () {
    const serviceDescImage = document.querySelector(".img-service-desc");
    const serviceDescText = document.querySelector(".text-desc");
    const allservices = document.querySelectorAll(".allservices");

    const servicesData = {
      "service-1": {
        img: "../../assets/unsplah/ΕΠΑΝΟΡΘΩΤΙΚΗ ΟΔΟΝΤΙΑΤΡΙΚΗ.webp",
        desc: "Το τμήμα επανορθωτικής οδοντιατρικής μας προσφέρει προηγμένες τεχνικές και υλικά για την αποκατάσταση των κατεστραμμένων δοντιών, βελτιώνοντας την αισθητική και αποκαθιστώντας τη στοματική υγεία για χαμόγελα με αυτοπεποίθηση.",
      },
      "service-2": {
        img: "../../assets/unsplah/teeth whitening.webp",
        desc: "Η θεραπείες λεύκανσης των δοντιών πραγματοποιούνται στο ιατρείο μας από καταρτισμένο επαγγελματία υγείας, τηρώντας όλα τα πρωτόκολλα ασφαλείας.Σας προσφέρουμε ένα λαμπερό σας χαμόγελο, βελτιώνοντας το χρώμα των δοντιών σας. Ένα ποιο φωτεινό και λευκό χαμόγελο βοηθά την ψυχολογία και την αυτοπεποίθηση μας.",
      },
      "service-3": {
        img: "../../assets/unsplah/ORTHODONTIC.webp",
        desc: "Τα ίσια και σωστά διευθετημένα δοντά προσδίδουν ισορροπία στο χαμόγελο μας και χαρίζουν αρμονία στις αναλογίες του προσώπου μας.",
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
