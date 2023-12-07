const menuButton = document.getElementById("menu");
const hiddenMenuList = document.getElementById("hiddenMenuList");
const navigationPage = document.getElementById('NavigationPage');
const sport = "image/sport.png";
const nourriture = "image/nourriture.png";
const windowWidth = window.innerWidth;

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("active");
  hiddenMenuList.classList.toggle("active");
});

// document.addEventListener('DOMContentLoaded', function() {
//   const links = document.querySelectorAll('#NavigationPage ul li a');

//   links.forEach(a => {
//     a.addEventListener('click', function(event) {
//       event.preventDefault();

//       let newPage = a.getAttribute('href');
//       if (newPage === "Sos.html") {
//         redirectToAnotherPage();
//       }
//     });
//   });
// });
// function redirectToAnotherPage() {
//   window.location.href = "Sos.html";}

// scrollToArticle(link) {
//   const articles = document.querySelectorAll('#PrincipalInformation article');

//   articles.forEach(article => {
//     const images = article.querySelectorAll('img');
//     images.forEach(image => {
//       const src = image.getAttribute('src');
//       if (src === "image/nourriture.png" && link.textContent.includes('nourriture') || src === "image/sport.png" && link.textContent.includes('sport')) {
//         article.scrollIntoView({ behavior: 'smooth', block: 'center' });
   


//   visiblité de la barre    


        navigationPage.classList.remove('invisible');

        navigationPage.addEventListener('mouseover', () => {
          navigationPage.classList.remove('invisible');
        });
        navigationPage.addEventListener('mouseout', () => {
          navigationPage.classList.add('invisible');
        });
        
       
          
            // navigationPage.style.position = 'fixed';
          
        
      

// event pour les 2 boutons
const firstButton = document.querySelector('.premierBouton');
const secondButton = document.querySelector('.deuxiemeBouton');

firstButton.addEventListener('click',(event) => {
  event.preventDefault();
  window.location.href = 'sport.html';
});

secondButton.addEventListener('click',(event) => {
  event.preventDefault();
  window.location.href = 'recettes.html';
});

//image click 

const imageSport = document.getElementById('sport').querySelector('img');
const imageNourriture = document.getElementById('nourriture').querySelector('img');
const responsiveSmartphone = () => {
  
  if (windowWidth < 499) {
    navigationPage.classList.add('invisible');
imageSport.addEventListener('click',(event) => {
  event.preventDefault();
  window.location.href='sport.html';
})
imageNourriture.addEventListener('click',(event) => {
  event.preventDefault();
  window.location.href='recettes.html';
})}}
