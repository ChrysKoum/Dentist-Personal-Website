$(document).ready(function () {
  document.getElementById("openPDF").addEventListener("click", function () {
    // Show the spinner
    document.getElementById("pdf-loading").style.display = "block";

    // Set workerSrc
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js";

    // Load the PDF
    var loadingTask = pdfjsLib.getDocument(
      "assets/cv/Panagiota_Mpompou_CV.pdf"
    );
    loadingTask.promise.then(function (pdf) {
      // Fetch the first page (you can iterate over all pages if needed)
      var pageNumber = 1;
      pdf.getPage(pageNumber).then(function (page) {
        var scale = 3;
        var viewport = page.getViewport({ scale: scale });

        // Prepare canvas using PDF page dimensions
        var canvas = document.createElement("canvas");
        canvas.className = "img-fluid";
        var context = canvas.getContext("2d");
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // Render PDF page into canvas context
        var renderContext = {
          canvasContext: context,
          viewport: viewport,
        };
        var renderTask = page.render(renderContext);

        // Wait for rendering to finish
        renderTask.promise.then(function () {
          var pdfContainer = document.getElementById("pdf-container");
          pdfContainer.style.display = "block"; // Reset to block display
          pdfContainer.innerHTML = ""; // Clear previous content
          pdfContainer.appendChild(canvas);

          // Hide the spinner now that the PDF is ready
          document.getElementById("pdf-loading").style.display = "none";
        });
      });
    });
  });
});
