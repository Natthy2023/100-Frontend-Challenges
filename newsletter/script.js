const btn = document.getElementById("btn");
const error = document.getElementById("error");

btn.addEventListener("click", function() {
  const email = document.getElementById("email").value.trim();
  const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    error.style.display = "block";
    error.textContent = "Email cannot be empty!";
  } else if (!emailRegx.test(email)) {
    error.style.display = "block";
    error.textContent = "Enter a valid email!";
  } else {
    error.style.display = "none";
    alert("Successfully signed up!");
  }
});