icon.addEventListener("click", openMenu);
menu.addEventListener("click", closeMenu);


function openMenu() {
    menu.classList.remove("hide");
    icon.src = "images/icon-close.svg";
}
function closeMenu() {
    menu.classList.add("hide");
    icon.src = "images/icon-hamburger.svg";
}

const icon = document.querySelector(".icon");
const menu = document.querySelector(".menu");


icon.addEventListener("click", openMenu);
menu.addEventListener("click", closeMenu);


function openMenu() {
    menu.classList.remove("hide");
    icon.src = "images/icon-close.svg";
}
function closeMenu() {
    menu.classList.add("hide");
    icon.src = "images/icon-hamburger.svg";
}