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
  "../images/nav-img.jpg",
  "../images/BUILDING-img.jpg",
  "../images/shopping-mall-img.jpg",
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
const return_arrow = document.querySelector(".return-top")
const Scroll_Animation = new IntersectionObserver((entries) =>{
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      entry.target.classList.add("reveal");
      feature_btn.classList.add("reveal");
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
    image: "../images/service-interior.jpg",
    title: "INTERIOR"
  },            
  {
    image: "../images/feature-img-2.jpg",
    title: "EXTERIOR"
  },
  {
    image: "../images/service-concept.jpg",
    title: "CONCEPT"
  },
  {
    image: "../images/service-commercial.jpg",
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




//About us increase_count onscreen animation
const project_count = document.querySelector("#project-count");
const exp_count = document.querySelector("#experience-count");
const ongoing_count = document.querySelector("#ongoing-count");

function Increase_count(count, limit, element){
    const count_interval = setInterval(() =>{
        count++;

        element.textContent = `${count}+`;

        if(count === limit){
          clearInterval(count_interval);
        }
    }, 50)
}

const stats_trigger = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {

      Increase_count(0, 65, project_count);
      Increase_count(0, 15, exp_count);
      Increase_count(0, 35, ongoing_count);

      return_arrow.classList.add("active");

      stats_trigger.unobserve(entry.target);
    }

  });
}, {
  threshold: 0.5
});

const stats = document.querySelector(".stats");

if (stats) {
  stats_trigger.observe(stats);
}











