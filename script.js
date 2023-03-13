// function toggleMenu () {  
//   const navbar = document.querySelector('.navbar');
//   const burger = document.querySelector('.burger');
  
//   burger.addEventListener('click', (e) => {    
//     navbar.classList.toggle('show-nav');
//   });    
  
//   const navbarLinks = document.querySelectorAll('.navbar a');
//   navbarLinks.forEach(link => {
//     link.addEventListener('click', (e) => {    
//       navbar.classList.toggle('show-nav');
//     }); 
//   })
   
// }
// toggleMenu();

let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function() {
    body.classList.toggle('open');
})


// La recuperation des elements 
const form = document.querySelector("#form");
const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const profession = document.querySelector('#profession');
const email= document.querySelector('#email');
const Message = document.querySelector('#message')


function sendMail() {
  var params = {
      firstName: firstName.value,
      lastName: lastName.value,
      profession: profession.value,
      email: email.value,
      message: Message.value,
  };
  const serviceID = "service_nkldcyh";
  const templateID = "template_vy49hjw";

    emailjs.send(serviceID, templateID, params)
      .then(res => {
        
          alert('Votre message a bien été envoyer');
      })
      .catch(err => console.log(err));
}
// Evenements
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    sendMail();
    // form_verify();
});























