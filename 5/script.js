// BUTTONS
const nextCreateButton = document.querySelector(".create-next-btn");
const backPersonalButton = document.querySelector(".personal-back-btn");
const submitPersonalButton = document.querySelector(".personal-submit-btn");
const backSocialButton = document.querySelector(".social-back-btn");
const nextSocialButton = document.querySelector(".social-next-btn");
const stepText2 = document.querySelector(".step2");
const stepText3 = document.querySelector(".step3");
// PROGRESS
const progressBar = document.querySelector(".progress");
// FORMS
const createForm = document.querySelector(".create-form");
const personalForm = document.querySelector(".personal-form");
const socialForm = document.querySelector(".social-form");
// BUTTON GROUP OF THE SAME EVENT
const buttonGroup = [].concat(nextCreateButton, backPersonalButton);

// // NEXT CREATE BUTTON EVENT && BACK PERSONAL BUTTON EVENT
buttonGroup.forEach(button => button.addEventListener("click", () => {
    createForm.style.left = "-580px";
    socialForm.style.left = "0";
    personalForm.style.left = "580px"
    progressBar.style.width = "475px";
    stepText2.style.fontWeight = "600";
}));


// BACK SOCIAL BUTTON EVENT
backSocialButton.addEventListener("click", (e) => {
    createForm.style.left = "0";
    socialForm.style.left = "580px";
    personalForm.style.left = "1160px"
    progressBar.style.width = "255px";
});

// NEXT SOCIAL BUTTON EVENT
nextSocialButton.addEventListener("click", () => {
    createForm.style.left = "-1160px";
    socialForm.style.left = "-580px";
    personalForm.style.left = "0"
    progressBar.style.width = "650px";
    stepText3.style.fontWeight = "600";
});
