//JS code for index.html

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Hap dhe mbyll menu kur klikohet hamburger
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('open');
});


const button = document.querySelector(".small-btn");

window.addEventListener("scroll", function(){
  if(window.scrollY > 600 && window.scrollY < 1150){
    button.classList.add("active")
  }
  else{
    button.classList.remove("active")
  }
})


// nav-image-slider

const btn = document.querySelector("#nav-img-btn");
const image = document.querySelector(".images");

let index = 0

const images = [
  "../images/about-images/nav-img.jpg",
  "../images/about-images/BUILDING-img.jpg",
  "../images/about-images/shopping-mall-img.jpg",
]

btn.addEventListener("click", function(){
    image.src = images[index];

    index = (index + 1) % images.length;
})