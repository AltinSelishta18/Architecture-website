// Projects file JavaScript code

const hamburger = document.getElementById("hamburger");
const Projects_nav = document.querySelector(".projects-nav");

hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("open");
    Projects_nav.classList.toggle("showMenu")
})