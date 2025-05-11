function object_display() {
  document.getElementById("img_banner").style.display = "none";
  document.getElementById("front-img").style.display = "block";
  document.getElementById("tp-box").style.border = "2px solid #1C0EE9";
  document.getElementById("bm-box").style.border = "none";
}

function reverse_display() {
  document.getElementById("img_banner").style.display = "block";
  document.getElementById("front-img").style.display = "none";
  document.getElementById("bm-box").style.border = "2px solid #1C0EE9";
  document.getElementById("tp-box").style.border = "none";
}

function form_displayer() {
  document.getElementById("img-banner").style.display = "none";
  document.getElementById("form-banner").style.display = "block";
}
function form_close() {
  document.getElementById("img-banner").style.display = "none";
  document.getElementById("form-banner").style.display = "none";
  document.getElementById("figs-wrapper").style.display = "block";
}
