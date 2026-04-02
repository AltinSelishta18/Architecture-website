//JS code for index.html

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Hap dhe mbyll menu kur klikohet hamburger
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('open');
});


// nav-image-slider

const btn = document.querySelector("#nav-img-btn");
const image = document.querySelector(".images");

let index = 0

const images = [
  "../images/nav-images/nav-img.jpg",
  "../images/nav-images/BUILDING-img.jpg",
  "../images/nav-images/shopping-mall-img.jpg",
]

function showImage(){
  image.src = images[index];
}

function Auto_change(){
  setInterval(() =>{
      index = (index + 1) % images.length;
      showImage();
    }, 5000)
}

btn.addEventListener("click", function(){
    index = (index + 1) % images.length;
    showImage()
})

Auto_change();
showImage();



// Scroll InterSectionObserver
const cards = document.querySelectorAll(".card");
const feature_btn = document.querySelector(".features-btn");

const Scroll_Animation = new IntersectionObserver((entries) =>{
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      entry.target.classList.add("reveal");
      feature_btn.classList.add("reveal")
      Scroll_Animation.unobserve(entry.target);
    }
  })
}, {
  threshold: 0.25
})

cards.forEach(card => Scroll_Animation.observe(card));
btnObserver.observe(features_section);

// Service section image slider

const small_img = document.querySelector(".services-small-img img");
const big_img = document.querySelector(".service-big-img img");
const progress_line = document.querySelector(".progress-line");


const services_images = [
  "../images/services-images/service-interior.jpg",
  "../images/feature-images/feature-img-2.jpg",
  "../images/services-images/service-concept.jpg",
  "../images/services-images/service-commercial.jpg"                
]

let services_index = 0
let width = 0;
let limit = 90;

function Show_image(){
    big_img.src = services_images[services_index];

    let nextIndex = (services_index + 1) % services_images.length;
    small_img.src = services_images[nextIndex];
}

function Next_image(){
  services_index = (services_index + 1) % services_images.length;
  Show_image();

  width = 0;
  progress_line.style.width = "0%";
}

function progress(){
    setInterval(() =>{
      width++;

      progress_line.style.width = width + "%";

      if(width >= limit){
        Next_image();
      }
    }, 50)
}

Show_image()
progress();






