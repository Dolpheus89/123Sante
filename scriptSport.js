const btnMaisonAccueil = document.getElementById("maison")
const btnMaisonSalle = document.getElementById("salle")
const popupAccueil = document.getElementById("popupAccueil")
const closePopup = document.getElementById("closePopup")
const overlay = document.getElementById("overlay")
const titreSeanceSalle = document.querySelector(".titreSeanceSalle")
const titreSeanceMaison = document.querySelector(".titreSeanceMaison")
const echauffementMaison = document.getElementById("echauffementMaison")
const echauffementSalle = document.getElementById("echauffementSalle")


btnMaisonAccueil.addEventListener ("click", () => {
    popupAccueil.style.display = 'block';
    overlay.style.display = 'block'
    titreSeanceSalle.style.display = 'none'
    titreSeanceMaison.style.display = 'block'
    echauffementSalle.style.display = 'none'
    echauffementMaison.style.display = 'block'

})

closePopup.addEventListener ("click", () => {
    popupAccueil.style.display = 'none';
    overlay.style.display = 'none'
})

btnMaisonSalle.addEventListener ("click", () => {
    popupAccueil.style.display = 'block';
    overlay.style.display = 'block'
    titreSeanceSalle.style.display = 'block'
    titreSeanceMaison.style.display = 'none'
    echauffementMaison.style.display = 'none'
    echauffementSalle.style.display = 'block'
})