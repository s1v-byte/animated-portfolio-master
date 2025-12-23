const hamburger = document.getElementsByClassName("hamburger")[0]
const mobileNavs = document.getElementsByClassName("nav-links")[0]

hamburger.addEventListener("click", () => {
  mobileNavs.classList.toggle("active")
})
const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-track img');
let index = 0;

setInterval(() => {
  index = (index + 1) % slides.length;
  track.style.transform = `translateX(-${index * 100}%)`;
}, 3000);
