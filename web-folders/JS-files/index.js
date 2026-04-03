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
  "../images/nav-images/nav-img.webp",
  "../images/nav-images/BUILDING-img.webp",
  "../images/nav-images/shopping-mall-img.webp",
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

// Service section image slider

const small_img = document.querySelector(".services-small-img img");
const big_img = document.querySelector(".service-big-img img");
const service_title = document.querySelector("#service-title");

const services_images = [
  {
    image: "../images/services-images/service-interior.webp",
    title: "INTERIOR"
  },            
  {
    image: "../images/services-images/feature-img-2.webp",
    title: "EXTERIOR"
  },
  {
    image: "../images/services-images/service-concept.webp",
    title: "CONCEPT"
  },
  {
    image: "../images/services-images/service-commercial.webp",
    title: "COMMERCIAL"
  }
]

let services_index = 0


function Show_image(){
    big_img.classList.add("fade");
    small_img.classList.add("fade");

    setTimeout(() =>{
      big_img.src = services_images[services_index].image;
      service_title.textContent = services_images[services_index].title;

      const Next_index = (services_index + 1) % services_images.length;
      small_img.src = services_images[Next_index].image;

      big_img.classList.remove("fade");
      small_img.classList.remove("fade");
    }, 300);
}

function Next_image(){
  services_index = (services_index + 1) % services_images.length;
  Show_image();
}

Show_image()
setInterval(Next_image, 5000);






