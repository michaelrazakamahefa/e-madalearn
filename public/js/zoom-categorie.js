// Sélectionnez toutes les cartes avec la classe "zoom-effect"
const cards = document.querySelectorAll('.zoom-effect');

// Parcourez chaque carte
cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.classList.add('zoomed');
    });

    card.addEventListener('mouseout', () => {
        card.classList.remove('zoomed');
    });
});
