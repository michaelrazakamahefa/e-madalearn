const zoneTexte = document.getElementById('textmg');
const boutonEnvoi = document.querySelector('.png');
const animation = document.querySelector('.msgloading');
const sectionContenu = document.querySelector('.content');
const infosUtilisateur = ['Arnaud', 'arnaud@help.com', 'Arnaud RAZAKAMAHHEFA', 'Désolé, cela dépasse mes compétences', 'Merci', 'Oui, M. Chatbot'];

function jouerSon() {
    const audio = document.getElementById("myAudio");
    audio.play();
}

function animationChargement() {
    const initial = setTimeout(function() {
        animation.classList.remove('dis');
    }, 1000);
    setTimeout(function() {
        animation.classList.add('dis');
        clearTimeout(initial);
    }, 3000);
}

function commandesBot(message) {
    const nouveauMessage = `<div class="madi"><div class="message new">${message}</div></div>`;
    sectionContenu.insertAdjacentHTML('beforeend', nouveauMessage);
    let dernierElement = document.querySelector('.new');
    dernierElement.scrollIntoView();
}

function ajouterMessageUtilisateur(message) {
    const nouveauMessage = `<div class="need"><div class="user new">${message}</div></div>`;
    sectionContenu.insertAdjacentHTML('beforeend', nouveauMessage);
    animationChargement();
    let dernierElement = document.querySelector('.new');
    dernierElement.scrollIntoView();
    zoneTexte.value = '';

    let motCle = message.toLowerCase();
    let mots = motCle.split(' ');

    if (mots.includes('téléphone') || mots.includes('contact') || mots.includes('numéro')) {
        commandesBot('Voici le numéro : +261340463363');
    } else if (mots.includes('bonjour') || mots.includes('salut') || mots.includes('qui')) {
        commandesBot('Bonjour, je suis M. Chatbot.');
    } else if (mots.includes('email')) {
        commandesBot('Voici l\'adresse email : arnaud@help.com');
    } else if (mots.includes('merci') || mots.includes('au revoir')) {
        commandesBot('C\'était un plaisir de discuter avec vous.');
    } else if (mots.includes('nom complet') || mots.includes('nom')) {
        commandesBot('Arnaud RAZAKAMAHEFA');
    } else if (mots.includes('prix') || mots.includes('coût')) {
        commandesBot('Consultez notre site web ou envoyez-nous un e-mail pour des informations sur les tarifs.');
    } else {
        commandesBot('Désolé, cela dépasse mes compétences.');
    }
}

function ajouterBienvenue() {
    jouerSon();
    let nouveauMessage = `<div class="message new">Bonjour, comment puis-je vous aider ?</div>`;
    sectionContenu.insertAdjacentHTML('beforeend', nouveauMessage);
    animationChargement();
    setTimeout(function() {
        jouerSon();
        nouveauMessage = `<div class="message new">N'hésitez pas à m'intérroger. Contact, email, téléphone, prix? Je vous laisse saisir votre question.</div>`;
        sectionContenu.insertAdjacentHTML('beforeend', nouveauMessage);
    }, 3000);
}

const initial = setTimeout(function() {
    animation.classList.remove('dis');
}, 1000);

setTimeout(function() {
    animation.classList.add('dis');
    clearTimeout(initial);
    ajouterBienvenue();
}, 3000);

boutonEnvoi.addEventListener('click', function() {
    let message = zoneTexte.value;
    ajouterMessageUtilisateur(message);
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        let message = zoneTexte.value;
        ajouterMessageUtilisateur(message);
    } else {
        return;
    }
});
