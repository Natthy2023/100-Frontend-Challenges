document.addEventListener("DOMContentLoaded", () => {
  const scanBtn = document.getElementById('scan-btn');
  const video = document.getElementById('camera');
  
  scanBtn.addEventListener('click', () => {
    document.querySelector("video").classList.remove('hide');
    scanBtn.classList.toggle('visible');
    document.querySelector(".scan-board").classList.toggle('visible');
    document.querySelector(".r-2").classList.toggle('bg-remove');
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      alert("Camera access is not supported in your browser.");
      return;
    }

    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
      .then((stream) => {
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error("Error accessing camera:", err);
        alert("Unable to access the camera.");
      });
  });
});
