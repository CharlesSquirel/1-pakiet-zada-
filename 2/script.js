const progressBar = document.querySelector(".progress");
const next = document.querySelector(".next");
const back = document.querySelector(".back");
const circleOne = document.querySelector(".c-one");
const circleTwo = document.querySelector(".c-two");
const circleThree = document.querySelector(".c-three");
const circleComplete = document.querySelector(".c-complete");
const text = document.querySelector(".nav-text-number");

// Coś tu nie gra :) robiłem na szybko
next.addEventListener("click", () => {
  if ((progressBar.style.width = "0")) {
    progressBar.style.width = "200px";
    circleOne.style.background = "green";
    circleOne.style.borderColor = "blue";
    text.textContent = "One";
  } else if ((progressBar.style.width = "200px")) {
    progressBar.style.width = "500px";
    circleTwo.style.background = "green";
    circleTwo.style.borderColor = "blue";
    text.textContent = "Two";
  } else if ((progressBar.style.width = "500px")) {
    progressBar.style.width = "700px";
    circleThree.style.background = "green";
    circleThree.style.borderColor = "blue";
    text.textContent = "Three";
  } else if ((progressBar.style.width = "700px")) {
    progressBar.style.width = "100%";
    circleComplete.style.background = "green";
    circleComplete.style.borderColor = "blue";
    text.textContent = "Complete";
    console.log("Complete");
  }
});

back.addEventListener("click", () => {
  if ((progressBar.style.width = "100%")) {
    progressBar.style.width = "700px";
    circleComplete.style.background = "white";
    circleComplete.style.borderColor = "rgb(180, 177, 177)";
    text.textContent = "Complete";
  } else if ((progressBar.style.width = "700px")) {
    progressBar.style.width = "500px";
    circleThree.style.background = "white";
    circleThree.style.borderColor = "rgb(180, 177, 177)";
    text.textContent = "Three";
  } else if ((progressBar.style.width = "500px")) {
    progressBar.style.width = "200px";
    circleTwo.style.background = "white";
    circleTwo.style.borderColor = "rgb(180, 177, 177)";
    text.textContent = "Two";
  } else if ((progressBar.style.width = "200px")) {
    progressBar.style.width = "0";
    circleOne.style.background = "white";
    circleOne.style.borderColor = "rgb(180, 177, 177)";
    text.textContent = "One";
  }
});
