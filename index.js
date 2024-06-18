//MAKE MOBILE NAV BURGER WORK
const popUpWrapper = document.querySelector(".wrapper");
const header = document.querySelector("header");

//mobile nav animation
const burger = document.querySelector(".burger-div");
const burgerDiv1 = document.querySelector(".burger-div-1");
const burgerDiv2 = document.querySelector(".burger-div-2");
const burgerDiv3 = document.querySelector(".burger-div-3");

//CTA - Call to Action dipshit
function burgerFunction(){
    //popUp.style.display = 'flex';
    header.classList.toggle('header-toggle-class');
    popUpWrapper.classList.toggle('wrapper-toggle-class');
    
}


//MAKE some other shit, i think hover or some other gay shit