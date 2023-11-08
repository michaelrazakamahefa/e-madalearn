function markComplete(checkboxId) {
    var checkbox = document.getElementById(checkboxId);
    checkbox.disabled = true; // Désactive la case à cocher après avoir été cochée
}

// Fonction pour réinitialiser les cases à cocher
function resetCheckboxes() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = false;
        checkbox.disabled = false;
    });
}
