const connectTab = document.querySelector(".connect");

//mobile nav animation
const burger = document.querySelector(".burger-div");
const burgerDiv1 = document.querySelector(".burger-div-1");
const burgerDiv2 = document.querySelector(".burger-div-2");
const burgerDiv3 = document.querySelector(".burger-div-3");

burger.addEventListener("click", () => {
  burgerDiv1.style.transform = "rotate(45deg)";
  burgerDiv2.style.display = "none";
  burgerDiv3.style.transform = "rotate(45deg)";
});
