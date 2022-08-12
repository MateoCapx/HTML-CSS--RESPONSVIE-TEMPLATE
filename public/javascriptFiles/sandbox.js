let navBar = document.querySelector("#navBarSection")


// const carousel = new bootstrap.Carousel('#myCarousel')


// Function that enables scrolling functionality
window.addEventListener("scroll", function () {
    const scrolled = window.scrollY;
    if (scrolled > 100) {
        navBar.classList.replace('navBarSection', 'hello')
        console.log(navBar.classList)
    }
    console.log(scrolled)

})


// Function that enables Carousel functionality
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 4000); // Change image every 2 seconds
// }





let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}








// Function that enables toggle functionality
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const socialLinks = document.querySelector(".nav-social")


toggleButton.addEventListener('click', () => {
   navbarLinks.classList.toggle('active')
   socialLinks.classList.toggle('active')
  console.log("YERRRRPPRPRPRP")
})
