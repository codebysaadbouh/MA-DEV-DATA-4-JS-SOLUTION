/**
 * IMC Calculator
 */
function imcCalculator(poids, taille, uniteTaille) {
    // IMC = poids (kg) / taille² (m)
    let tailleEnMetre = taille;
    if (uniteTaille === 'cm') {
        tailleEnMetre = taille / 100;
    } else if (uniteTaille === 'm') {
        tailleEnMetre = taille;
    } else {
        throw new Error('Unité de taille non supportée');
    }
    const imc = poids / Math.pow(tailleEnMetre, 2);

    return parseFloat(imc.toFixed(2));
}

/** 
 * Fonction pour obtenir la classification de l'IMC
*/
function obtenirClassification(imc) {
    if (imc < 18.5) {
        return 'Insuffisance pondérale';
    } else if (imc >= 18.5 && imc <= 24.9) {
        return 'Poids normal';
    } else if (imc >= 25 && imc <= 29.9) {
        return 'Surpoids';
    } else {
        return 'Obésité';
    }
}

/**
 * Fonction pour afficher le résultat
 */
function afficherResultat(imc, classification) {
    const resultatDiv = document.getElementById('resultat');
    const imcValeur = document.getElementById('imcValeur');
    const classificationP = document.getElementById('classification');
    const alertDiv = resultatDiv.querySelector('.alert');
    
    imcValeur.textContent = `Votre IMC est de ${imc}`;
    classificationP.textContent = `Classification : ${classification}`;
    
    // Changer la couleur selon la classification
    alertDiv.className = 'alert';
    if (classification === 'Poids normal') {
        alertDiv.classList.add('alert-success');
    } else if (classification === 'Surpoids') {
        alertDiv.classList.add('alert-warning');
    } else {
        alertDiv.classList.add('alert-danger');
    }
    
    resultatDiv.style.display = 'block';
}

/**
 * Gestionnaire d'événement pour le formulaire
 */
function gererSoumissionFormulaire(event) {
    event.preventDefault();
    
    // Récupération des valeurs du formulaire
    const poids = parseFloat(document.getElementById('poids').value);
    const taille = parseFloat(document.getElementById('taille').value);
    const uniteTaille = document.getElementById('uniteTaille').value;
    
    try {
        // Calcul de l'IMC
        const imc = imcCalculator(poids, taille, uniteTaille);
        
        // Obtention de la classification
        const classification = obtenirClassification(imc);
        
        // Affichage du résultat
        afficherResultat(imc, classification);
        
    } catch (error) {
        alert('Erreur : ' + error.message);
    }
}

// Initialisation de l'application
document.addEventListener('DOMContentLoaded', function() {
    const formulaire = document.getElementById('imcForm');
    formulaire.addEventListener('submit', gererSoumissionFormulaire);
});