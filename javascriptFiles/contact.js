
//Getting IDs for submit form
let firstName = document.querySelector("#fname")
let form = document.querySelector('#contactForm')

let sendBtn = document.querySelector("#sendBtn")
form.addEventListener('submit', function (e) {
    e.preventDefault()
    // Used to Send Data to database
   const formData={
       fname: getValue('fname'),
       Email: getValue('Email'),
       Phone: getValue('Phone'),
       Message: getValue('Message')
   }
   console.log(formData)
})

 
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


// Validate input from form submit
// form.addEventListener('input', (e)=>{
//     const{name,value} = e.target
//     const formInput = {[name]:value}
//     const updatedForm = {...formInput,[name]:value} // allow the data to be store and updated without loose old info
//     console.log(updatedForm)
// })



function getValue(id){
    return document.getElementById(id).value
}