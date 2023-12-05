const menuButton = document.getElementById("menu");
const hiddenMenuList = document.getElementById("hiddenMenuList");

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("active");
  hiddenMenuList.classList.toggle("active");
});

const links = document.querySelectorAll('#NavigationPage ul li a'); // sélection de tous mes a

// pour chaque a événement clique avec déclenchement du paramètre event
links.forEach(a => {
  a.addEventListener('click', function(event) {

  event.preventDefault();
  //création d'une variable si chaque lien a à l'attribut ("href") sur lequel j'ai cliqué à la valeur sport ou food ou help
  //newPage prend la valeur de la page où je souhaite aller 
  let newPage;
    if (a.getAttribute('href') === '#sport') {
      newPage = "sport.html"; 
    } else if (a.getAttribute('href') === '#food') {
      newPage = 'recettes.html'; 
    } else if (a.getAttribute('href') === '#help') {
      newPage = 'Sos.html'; 
    }
// une fois sortie du loop chargement de l'url.
    window.location.href = newPage;
  });
});

