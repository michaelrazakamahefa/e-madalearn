// Déclaration de la variable pour suivre la diapositive actuelle
let currentSlide = 1;

// Fonction pour afficher une diapositive spécifique
function showSlide(n) {
    const slides = document.getElementsByClassName('item-testimonial');
    const buttons = document.getElementsByClassName('progress-button');

    // Masque toutes les diapositives et désactive tous les boutons
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        buttons[i].classList.remove('active');
    }

    // Affiche la diapositive spécifiée et active le bouton correspondant
    slides[n - 1].style.display = 'block';
    buttons[n - 1].classList.add('active');
    currentSlide = n; 
}

// Fonction pour changer de diapositive lorsque le bouton est cliqué
function changeSlide(n) {
    showSlide(n);
}

// Fonction pour passer à la diapositive suivante
function nextSlide() {
    currentSlide = (currentSlide % 4) + 1;
    showSlide(currentSlide);
}

// Fonction pour revenir à la diapositive précédente
function prevSlide() {
    currentSlide = (currentSlide - 2 + 4) % 4 + 1;
    showSlide(currentSlide);
}

// Démarre le changement automatique de diapositive toutes les 5 secondes
setInterval(nextSlide, 6000);

// Événement DOMContentLoaded : s'exécute lorsque le document HTML est complètement chargé
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide); 
});
