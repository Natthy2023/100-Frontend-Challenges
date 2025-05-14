menu = document.getElementById("menu");
      menu.addEventListener("click", ()=>{
        navbar = document.getElementById("navbar");
        if (navbar.style.display == "block") {
          navbar.style.display = "none";
        } else {
          navbar.style.display = "block";
        }
      });