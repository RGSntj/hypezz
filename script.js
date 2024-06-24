let radio = document.querySelector(".manual-btn");
let menuIcon = document.querySelector(".menu");
let navMobile = document.querySelector(".nav-menu-mobile");
let subMenu = document.querySelectorAll(".sub-menu-icon");
let dropdown = document.querySelector(".nav-menu-mobile .dropdown");
let closeIcon = document.querySelector("#close-menu-icon");

document.getElementById("radio-01").checked = true;

let contador = 1;
function proximaImg() {
  contador++;

  if (contador > 3) {
    contador = 1;
  }

  document.getElementById(`radio-0${contador}`).checked = true;
}

setInterval(() => {
  proximaImg();

}, 3000)

// Cart logic
let cartIcon = document.getElementById("cart-icon");
let closeCartIcon = document.getElementById("close-cart");
let cart = document.querySelector(".cart");

cartIcon.addEventListener("click", () => {
  cart.classList.add("ativo");
})

closeCartIcon.addEventListener("click", () => {
  cart.classList.remove("ativo");
})

// mobile menu logic
menuIcon.addEventListener("click", () => {
  navMobile.classList.toggle("menu-visible");
  document.body.classList.toggle("transparente");
})

closeIcon.addEventListener("click", (e) => {
  e.preventDefault();

  navMobile.classList.remove("menu-visible");
  document.body.classList.remove("transparente");
})

// sub-menu logic
const dropdownShoes = document.getElementById("dropdown-shoes");

subMenu[0].addEventListener("click", (ev) => {
  ev.preventDefault();

  dropdown.classList.toggle("ativo")
})

subMenu[1].addEventListener("click", (ev) => {
  ev.preventDefault();

  dropdownShoes.classList.toggle("ativo")
})