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

// NEXT CREATE BUTTON EVENT
nextCreateButton.addEventListener("click", () => {
    createForm.style.left = "-580px";
    socialForm.style.left = "0";
    personalForm.style.left = "580px"
    progressBar.style.width = "475px";
    progressArrow.style.left = "456px";
})

// BACK PERSONAL BUTTON EVENT
backPersonalButton.addEventListener("click", (e) => {
    createForm.style.left = "0";
    socialForm.style.left = "580px";
    personalForm.style.left = "1160px"
    progressBar.style.width = "255px";
    progressArrow.style.left = "234px";
})