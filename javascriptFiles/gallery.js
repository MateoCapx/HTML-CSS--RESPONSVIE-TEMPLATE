const navBar = document.getElementsByClassName('navBarHeader')[0]
const brandTitle = document.getElementsByClassName('brand-title')[0]  

// Function that enables scrolling functionality
window.addEventListener("scroll", function () {
    const scrolled = window.scrollY;
    if (scrolled > 20) {
        navBar.classList.add("scrolled")
         

    }else{
        navBar.classList.remove("scrolled")
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
