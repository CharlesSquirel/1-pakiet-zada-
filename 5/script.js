// BUTTONS
const nextCreateButton = document.querySelector(".create-next-btn");
const backPersonalButton = document.querySelector(".personal-back-btn");
const submitPersonalButton = document.querySelector(".personal-submit-btn");
const backSocialButton = document.querySelector(".social-back-btn");
const nextSocialButton = document.querySelector(".social-next-btn");
// PROGRESS
const progressBar = document.querySelector(".progress");
const progressArrow = document.querySelector(".progress::after");
// FORMS
const createForm = document.querySelector(".create-form");
const personalForm = document.querySelector(".personal-form");
const socialForm = document.querySelector(".social-form");

nextCreateButton.addEventListener("click", () => {
    createForm.style.left = "-580px";
    personalForm.style.left = "0";
    progressBar.style.width = "475px";
    progressArrow.style.left = "456px";
})