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


