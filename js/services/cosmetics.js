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
        desc: "Αφορά τις θεραπείες λεύκανσης των δοντιών που πραγματοποιούνται στο ιατρείο μας από καταρτισμένο επαγγελματία υγείας. Τηρώντας όλα τα πρωτόκολλα ασφαλείας, προστατεύουμε τα δόντια σας καθόλη τη διάρκεια της λεύκανσης, ώστε να σας προσφέρουμε το πιο λαμπερό σας χαμόγελο.",
      },
      "service-3": {
        img: "../../assets/unsplah/ORTHODONTIC.webp",
        desc: "Το τμήμα ορθοδοντικής μας παρέχει ολοκληρωμένες ορθοδοντικές θεραπείες για τη διόρθωση των κακώς ευθυγραμμισμένων δοντιών και την επίτευξη ενός πιο ίσιου, πιο ισορροπημένου χαμόγελου. Με μια σειρά επιλογών όπως τιράντες και ευθυγραμμιστές",
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
