const toogleMenu = document.getElementById("toogle_menu");
const navbarMobile = document.querySelector(".navbar1");
const burgerMenu = document.querySelector(".buger_menu");

console.log(toogleMenu);

toogleMenu.addEventListener("click", function () {
  if (toogleMenu.checked) {
    navbarMobile.style.display = "block";
  } else {
    navbarMobile.style.display = "none";
  }
});

window.addEventListener("click", function (e) {
  const verification = !e.target.matches(".navbar1") && "valid";
  console.log(verification);

  // if (e.target === navbarMobile) {
  //   navbarMobile.style.display = "none";
  // }
});
