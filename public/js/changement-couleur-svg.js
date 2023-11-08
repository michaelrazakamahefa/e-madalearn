document.addEventListener('DOMContentLoaded', function() {
    // Sélectionne tous les éléments avec la classe 'item-service'
    const itemServices = document.querySelectorAll('.item-service');

    // Pour chaque élément '.item-service'...
    itemServices.forEach(itemService => {
        // Sélectionne l'image à l'intérieur de l'élément '.item-service'
        const svgImage = itemService.querySelector('img');
        // Stocke l'URL original de l'image
        const originalSrc = svgImage.src;

        // Ajoute un écouteur d'événements pour le survol de la souris
        itemService.addEventListener('mouseenter', function() {
            // Vérifie la classe spécifique de l'élément
            if (itemService.classList.contains('service-svg1')) {
                svgImage.src = '../public/img/school-blanc.svg';
            } else if (itemService.classList.contains('service-svg2')) {
                svgImage.src = '../public/img/online-blanc.svg';
            } else if (itemService.classList.contains('service-svg3')) {
                svgImage.src = '../public/img/home-blanc.svg';
            } else if (itemService.classList.contains('service-svg4')) {
                svgImage.src = '../public/img/library-blanc.svg';
            }
        });

        // Ajoute un écouteur d'événements pour le départ de la souris
        itemService.addEventListener('mouseleave', function() {
            // Rétablit l'URL d'origine à la sortie du survol
            svgImage.src = originalSrc;
        });
    });
});
