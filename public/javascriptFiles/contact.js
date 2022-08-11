// const accountSid =  "AC8d3cc94ff29d9e21a15eba794cebbffc";
// const authToken =  "9cc02597548d7a1315743d2e8c2d2db7";
// const client = require('twilio')(accountSid, authToken);

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
       message: getValue('Message')
   }
   console.log("hello")
   console.log(formData)
   fetch("/twilio",{
       method:"POST",
       headers: {
           "Content-Type": "application/json"
       },
       body:JSON.stringify(formData) 
   }).then(res => console.log(res.json()) ).catch(err=>{
       console.log(err)
   })
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



function getValue(id){
    return document.getElementById(id).value
}



