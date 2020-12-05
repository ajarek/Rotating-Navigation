const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const articul = document.querySelector('.articul');
hamburger.addEventListener('click', () => {
   hamburger.classList.toggle('change')
   navbar.classList.toggle('change1')
  articul.classList.toggle('change2')
})