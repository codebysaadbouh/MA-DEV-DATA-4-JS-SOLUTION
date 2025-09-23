let calcul = "";

function ajouter(valeur) {
    calcul = calcul + valeur;
    document.getElementById("resultat").value = calcul;
}

function calculer() {
    try {
        let resultat = eval(calcul);
        document.getElementById("resultat").value = resultat;
        calcul = resultat.toString();
    } catch (error) {
        document.getElementById("resultat").value = "Erreur";
        calcul = "";
    }
}

function effacer() {
    calcul = "";
    document.getElementById("resultat").value = "";
}