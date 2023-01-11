// DOM
const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close-btn");
const navMobile = document.querySelector(".nav-top-mobile");

// EVENTS HAMBURGER
hamburger.addEventListener("click", () => {
  navMobile.style.left = "0";
});

closeBtn.addEventListener("click", () => {
  navMobile.style.left = "-2400px";
});
