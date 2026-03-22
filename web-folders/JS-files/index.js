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
    else{
      feature_btn.classList.remove("reveal")
    }
  })
}, {
  threshold: 0.25
})

cards.forEach(card => Scroll_Animation.observe(card));
btnObserver.observe(features_section);




