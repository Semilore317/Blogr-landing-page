const connectTab = document.querySelector(".connect-after-div");
const connectTabP = document.querySelectorAll(".connect-after-div P");

//mobile nav animation
const burger = document.querySelector(".burger-div");
const burgerDiv1 = document.querySelector(".burger-div-1");
const burgerDiv2 = document.querySelector(".burger-div-2");
const burgerDiv3 = document.querySelector(".burger-div-3");

//event listener!
//burger.addEventListener("dbclick", burgerFunction());
//for some reason it's clicking itself, so i'm using onClick()

//CTA - Call to Action dipshit
function burgerFunction(){
    //use toggle
    console.log('yeahh');
    connectTab.style.opacity = '1.0';
    connectTabP.style.opacity = '1.0';
    burger.style.backgroundColor = "red";
    
}
