//MENU
var maNav = document.getElementById("nav");
var monMenu = document.getElementById("menu");
var navContainer = document.querySelector("nav");
function changeClass() {
    maNav.classList.toggle("active");

    navContainer.classList.toggle("active");
    monMenu.classList.toggle("active");
}
monMenu.addEventListener("click", changeClass)
