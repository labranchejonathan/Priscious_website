let toogleMenu = document.getElementById("toogle_menu");
let navbarMobile = document.querySelector(".navbar1");

toogleMenu.addEventListener("click", function () {
  if (toogleMenu.checked) {
    navbarMobile.style.display = "block";
  } else {
    navbarMobile.style.display = "none";
  }
});
