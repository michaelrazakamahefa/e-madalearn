document.getElementById('beginner-card').addEventListener('click', function() {
    hideAllContents();
    document.getElementById('beginner-content').style.display = 'block';
});

document.getElementById('intermediate-card').addEventListener('click', function() {
    hideAllContents();
    document.getElementById('intermediate-content').style.display = 'block';
});

document.getElementById('advanced-card').addEventListener('click', function() {
    hideAllContents();
    document.getElementById('advanced-content').style.display = 'block';
});

function hideAllContents() {
    document.getElementById('beginner-content').style.display = 'none';
    document.getElementById('intermediate-content').style.display = 'none';
    document.getElementById('advanced-content').style.display = 'none';
}
 /*Reset button*/
 document.querySelector('.resetButton').addEventListener('click', function() {
    hideAllContents();
});

function hideAllContents() {
    document.getElementById('beginner-content').style.display = 'none';
    document.getElementById('intermediate-content').style.display = 'none';
    document.getElementById('advanced-content').style.display = 'none';
}

/*bouton apprendre*/
// Cacher les détails au chargement
document.querySelectorAll('.chapter-details').forEach(function(chapterDetails) {
    chapterDetails.style.display = 'none';
});

// Ajouter un écouteur d'événement pour le bouton "Apprendre"
document.querySelectorAll('.show-details').forEach(function(showButton, index) {
    showButton.addEventListener('click', function() {
        document.querySelectorAll('.chapter-details')[index].style.display = 'block';
    });
});

// Ajouter un écouteur d'événement pour le bouton "Fermer"
document.querySelectorAll('.close-details').forEach(function(closeButton, index) {
    closeButton.addEventListener('click', function() {
        document.querySelectorAll('.chapter-details')[index].style.display = 'none';
    });
});

// Ajouter un écouteur d'événement pour le bouton "Valider"
document.querySelectorAll('.validate-details').forEach(function(validateButton, index) {
    validateButton.addEventListener('click', function() {
        // Votre code pour prendre en compte les éléments cochés
        alert('Les éléments cochés ont été pris en compte.');
    });
});


