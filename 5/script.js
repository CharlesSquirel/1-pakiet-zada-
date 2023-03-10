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
const forms = document.querySelectorAll("form");
const allButtons = document.querySelectorAll(".btn");
const buttonGroup = [].concat(nextCreateButton, backPersonalButton);
// WATCH MEDIA
const mobile = window.matchMedia("(max-width: 687px)");
// INPUTS
const emailInput = document.querySelector(".input-email");
const passwordInput = document.querySelector(".input-password");
const passwordInputConfirm = document.querySelector(".input-password-confirm");

const errors = document.querySelectorAll(".create-error");

//FUNCTIONS NEXT/BACK
const nextCreate = () => {
  createForm.style.left = "-580px";
  socialForm.style.left = "0";
  personalForm.style.left = "580px";
  stepText2.style.fontWeight = "600";
  stepText3.style.fontWeight = "400";
  if (mobile.matches) {
    progressBar.style.width = "260px";
  } else {
    progressBar.style.width = "475px";
  }
};

const backSocial = () => {
  createForm.style.left = "0";
  socialForm.style.left = "580px";
  personalForm.style.left = "1160px";
  stepText2.style.fontWeight = "400";
  if (mobile.matches) {
    progressBar.style.width = "130px";
  } else {
    progressBar.style.width = "255px";
  }
};

const nextSocial = () => {
  createForm.style.left = "-1160px";
  socialForm.style.left = "-580px";
  personalForm.style.left = "0";
  stepText3.style.fontWeight = "600";
  if (mobile.matches) {
    progressBar.style.width = "500px";
  } else {
    progressBar.style.width = "650px";
  }
};

// DISABLED FOR ALL SUBMIT BUTTONS
allButtons.forEach((btn) => {
  btn.disabled = true;
});

// FORMS EVENTS
// NEXT CREATE BUTTON EVENT && BACK PERSONAL BUTTON EVENT
buttonGroup.forEach((button) => button.addEventListener("click", nextCreate));

// BACK SOCIAL BUTTON EVENT
backSocialButton.addEventListener("click", backSocial);

// NEXT SOCIAL BUTTON EVENT
nextSocialButton.addEventListener("click", nextSocial);

// CREATE VALIDATION
// emailInput.addEventListener("blur", () => {
//   if (emailInput.value !== "" && passwordInput.value !== "" && passwordInputConfirm.value !== "") {
//     nextCreateButton.disabled = false;
//   }
// });

emailInput.addEventListener("blur", () => {
  const error = document.querySelector(".error-input-mail");

  if (emailInput.value === "") {
    error.textContent = "Wprowad?? email!";
    error.hidden = false;
    nextCreateButton.disabled = true;
  } else if (emailInput.value.length < 6) {
    error.textContent = "Wprowad?? email wi??cej ni?? 6 znak??w!";
    error.hidden = false;
    nextCreateButton.disabled = true;
  }
});

passwordInput.addEventListener("blur", () => {
  const error = document.querySelector(".error-input-password");
  if (passwordInput.value === "") {
    error.textContent = "Wprowad?? has??o!";
    error.hidden = false;
    nextCreateButton.disabled = true;
  } else if (passwordInput.value.length < 6) {
    error.textContent = "Wprowad?? has??o zawieraj??ce wi??cej ni?? 6 znak??w!";
    error.hidden = false;
    nextCreateButton.disabled = true;
  } else if (!/[0-9]/gi.test(passwordInput.value)) {
    error.textContent = "Wprowad?? has??o powinno zawiera?? co najmniej jedn?? cyfr??!";
    error.hidden = false;
    nextCreateButton.disabled = true;
  } else if (!/[A-Z]/.test(passwordInput.value)) {
    error.textContent = "Wprowad?? has??o powinno zawiera?? co najmniej jedn?? wielk?? liter??!";
    error.hidden = false;
    nextCreateButton.disabled = true;
  }
});

passwordInputConfirm.addEventListener("blur", () => {
  const error = document.querySelector(".error-input-password-confirm");
  if (passwordInputConfirm.value === "") {
    error.textContent = "Wprowad?? potwierdzenie has??a!";
    error.hidden = false;
    nextCreateButton.disabled = true;
  } else {
    error.hidden = true;
    nextCreateButton.disabled = false;
  }
});
