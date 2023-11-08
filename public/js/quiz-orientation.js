// Variable pour stocker le score
var score = 0;

// Fonction pour commencer le quiz
function commencerQuiz() {
    var infoForm = document.getElementById("infoForm");
    var quizHTML = document.getElementById("quizHTML");

    // Vérifier que les informations du candidat sont remplies
    if (infoForm.nom.value !== "" && infoForm.email.value !== "") {
        // Masquer le formulaire d'informations et afficher le quiz HTML
        infoForm.style.display = "none";
        quizHTML.style.display = "block";
    } else {
        alert("Veuillez remplir tous les champs.");
    }
}

// Fonction pour évaluer le quiz HTML
function evaluerHTML() {
    // Vérifier les réponses du quiz HTML (question par question)
    var reponse1 = document.querySelector('input[name="q1"]:checked').value;
    var reponse2 = document.querySelector('input[name="q2"]:checked').value;

    // Vérifier si les réponses sont correctes et mettre à jour le score
    if (reponse1 === 'c') {
        score += 25; // Ajouter 25 points au score (ajustez selon vos critères)
    }
    if (reponse2 === 'b') {
        score += 25; // Ajouter 25 points au score (ajustez selon vos critères)
    }

    // Passer au quiz CSS si toutes les questions HTML sont complétées
    var quizHTML = document.getElementById("quizHTML");
    var quizCSS = document.getElementById("quizCSS");

    quizHTML.style.display = "none";
    quizCSS.style.display = "block";
}

// Fonction pour évaluer le quiz CSS
function evaluerCSS() {
    // Vérifier les réponses du quiz CSS (question par question)
    var reponse1CSS = document.querySelector('input[name="q1CSS"]:checked').value;
    var reponse2CSS = document.querySelector('input[name="q2CSS"]:checked').value;

    // Vérifier si les réponses sont correctes et mettre à jour le score
    if (reponse1CSS === 'a') {
        score += 25; // Ajouter 25 points au score (ajustez selon vos critères)
    }
    if (reponse2CSS === 'c') {
        score += 25; // Ajouter 25 points au score (ajustez selon vos critères)
    }

    // Passer au quiz JavaScript si toutes les questions CSS sont complétées
    var quizCSS = document.getElementById("quizCSS");
    var quizJavaScript = document.getElementById("quizJavaScript");

    quizCSS.style.display = "none";
    quizJavaScript.style.display = "block";
}

// Fonction pour évaluer le quiz JavaScript
function evaluerJavaScript() {
    // Vérifier les réponses du quiz JavaScript (question par question)
    var reponse1JS = document.querySelector('input[name="q1JS"]:checked').value;
    var reponse2JS = document.querySelector('input[name="q2JS"]:checked').value;

    // Vérifier si les réponses sont correctes et mettre à jour le score
    if (reponse1JS === 'c') {
        score += 25; // Ajouter 25 points au score (ajustez selon vos critères)
    }
    if (reponse2JS === 'a') {
        score += 25; // Ajouter 25 points au score (ajustez selon vos critères)
    }

    // Afficher les résultats si toutes les questions JavaScript sont complétées
    var resultats = document.getElementById("resultats");
    var nom = document.getElementById("nom").value;
    var email = document.getElementById("email").value;

    resultats.innerHTML = `
        <p>Merci ${nom} pour avoir complété le quiz !</p>
        <p>Votre score est de ${score}%.</p>
        <p>Vous êtes orienté(e) au niveau ${niveauOrientation}.</p>
        <p>Merci pour votre participation !</p>
    `;

    resultats.style.display = "block";
}
