let navBar = document.querySelector("#navBarSection")

// Function that enables scrolling functionality
window.addEventListener("scroll", function () {
    const scrolled = window.scrollY;
    if (scrolled === 100) {
        navBar.classList.replace('navBarSection', 'hello')
        console.log(navBar.classList)
    }
    console.log(scrolled)

})


// Function that enables toggle functionality
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const socialLinks = document.querySelector(".nav-social")


toggleButton.addEventListener('click', () => {
   navbarLinks.classList.toggle('active')
   socialLinks.classList.toggle('active')
  console.log("YERRRRPPRPRPRP")
})
