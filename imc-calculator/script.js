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
    }  else {
        throw new Error('Unité de taille non supportée');
    }
    const imc = poids / Math.pow(tailleEnMetre, 2);

    return parseFloat(imc.toFixed(2));
}

/**
 * Fonction pour obtenir une valeur numérique valide via prompt()
 */
function obtenirValeurNumerique(message) {
    let valeur;
    do {
        const input = prompt(message);
        valeur = parseFloat(input);
    } while (isNaN(valeur) || valeur <= 0);
    return valeur;
}

/**
 * Fonction pour obtenir l'unité de taille via prompt()
 */
function obtenirUniteTaille() {
    let unite;
    do {
        unite = prompt("Entrez l'unité de taille (cm ou m) :").toLowerCase();
    } while (unite !== 'cm' && unite !== 'm');
    return unite;
}

/** 
 * Fonction pour obtenir la classification de l'IMC
*/
function obtenirClassification(imc) {
    if (imc < 18.5) {
        return 'Insuffisance pondérale)';
    } else if (imc >= 18.5 && imc <= 24.9) {
        return 'Poids normal';
    } else if (imc >= 25 && imc <= 29.9) {
        return 'Surpoids';
    } else {
        return 'Obésité';
    }
}

/**
 * 
 */
function afficherResultatIMC() {
    // Saisie des données utilisateur
    let poids = obtenirValeurNumerique("Entrez votre poids en kg :");
    let taille = obtenirValeurNumerique("Entrez votre taille :");
    let uniteTaille = obtenirUniteTaille();

    // Calcul de l'IMC
    let imc = imcCalculator(poids, taille, uniteTaille);
    
    // Affichage du résultat
    let classification = obtenirClassification(imc);
    alert(`Votre IMC est de ${imc} (${classification})`);
}

// Lancement de l'application
afficherResultatIMC();