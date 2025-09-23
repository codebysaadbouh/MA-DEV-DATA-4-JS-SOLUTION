// ===================================
// EXERCICE 1 : SYSTÈME DE GESTION DE BIBLIOTHÈQUE
// ===================================

// Objectif : Créer un système complet de gestion de bibliothèque
// Utilise : variables, opérateurs, conditions, boucles, fonctions

// Structure de données principales
const bibliotheque = {
    livres: [],
    utilisateurs: [],
    emprunts: [],
    prochainIdLivre: 1,
    prochainIdUtilisateur: 1,
    prochainIdEmprunt: 1
};

// ===================================
// 1. GESTION DES LIVRES
// ===================================

/**
 * Ajoute un livre à la bibliothèque avec validation complète
 * @param {string} titre - Titre du livre
 * @param {string} auteur - Auteur du livre
 * @param {string} isbn - ISBN du livre (format: XXX-X-XX-XXXXXX-X)
 * @param {number} annee - Année de publication
 * @param {string} genre - Genre du livre
 * @returns {object} Résultat de l'opération
 */
function ajouterLivre(titre, auteur, isbn, annee, genre) {
    // TODO: Implémenter la validation complète
    // - Vérifier que tous les paramètres sont fournis
    // - Valider le format ISBN
    // - Vérifier que l'année est valide (entre 1000 et année actuelle)
    // - Vérifier que l'ISBN n'existe pas déjà
    // - Ajouter le livre avec un ID unique
    
    console.log("À implémenter : ajouterLivre");
    return { succes: false, message: "Fonction à implémenter" };
}

/**
 * Recherche des livres selon différents critères
 * @param {object} criteres - Critères de recherche
 * @returns {array} Liste des livres trouvés
 */
function rechercherLivres(criteres) {
    // TODO: Implémenter la recherche avancée
    // - Recherche par titre (partielle, insensible à la casse)
    // - Recherche par auteur
    // - Recherche par genre
    // - Recherche par année ou plage d'années
    // - Combiner plusieurs critères
    // - Trier les résultats par pertinence
    
    console.log("À implémenter : rechercherLivres");
    return [];
}

// ===================================
// 2. GESTION DES UTILISATEURS
// ===================================

/**
 * Ajoute un utilisateur à la bibliothèque
 * @param {string} nom - Nom de l'utilisateur
 * @param {string} email - Email de l'utilisateur
 * @param {string} telephone - Numéro de téléphone
 * @returns {object} Résultat de l'opération
 */
function ajouterUtilisateur(nom, email, telephone) {
    // TODO: Implémenter l'ajout d'utilisateur
    // - Valider l'email (format correct)
    // - Valider le téléphone (10 chiffres)
    // - Vérifier que l'email n'existe pas déjà
    // - Créer l'utilisateur avec ID unique
    
    console.log("À implémenter : ajouterUtilisateur");
    return { succes: false, message: "Fonction à implémenter" };
}

// ===================================
// 3. GESTION DES EMPRUNTS
// ===================================

/**
 * Permet à un utilisateur d'emprunter un livre
 * @param {number} utilisateurId - ID de l'utilisateur
 * @param {number} livreId - ID du livre
 * @returns {object} Résultat de l'opération
 */
function emprunterLivre(utilisateurId, livreId) {
    // TODO: Implémenter l'emprunt avec règles métier
    // - Vérifier que l'utilisateur existe
    // - Vérifier que le livre existe et est disponible
    // - Vérifier que l'utilisateur n'a pas déjà 3 emprunts
    // - Calculer la date de retour (14 jours)
    // - Enregistrer l'emprunt
    // - Marquer le livre comme indisponible
    
    console.log("À implémenter : emprunterLivre");
    return { succes: false, message: "Fonction à implémenter" };
}

/**
 * Permet de retourner un livre emprunté
 * @param {number} empruntId - ID de l'emprunt
 * @returns {object} Résultat de l'opération
 */
function retournerLivre(empruntId) {
    // TODO: Implémenter le retour de livre
    // - Vérifier que l'emprunt existe et est actif
    // - Calculer les éventuels frais de retard
    // - Marquer l'emprunt comme terminé
    // - Rendre le livre disponible
    
    console.log("À implémenter : retournerLivre");
    return { succes: false, message: "Fonction à implémenter" };
}

// ===================================
// 4. SYSTÈME DE RECOMMANDATIONS
// ===================================

/**
 * Recommande des livres à un utilisateur
 * @param {number} utilisateurId - ID de l'utilisateur
 * @param {number} nombreRecommandations - Nombre de recommandations
 * @returns {array} Liste des livres recommandés
 */
function recommanderLivres(utilisateurId, nombreRecommandations = 5) {
    // TODO: Implémenter le système de recommandations
    // - Analyser l'historique d'emprunts de l'utilisateur
    // - Identifier les genres préférés
    // - Trouver des livres similaires non empruntés
    // - Éviter les livres déjà empruntés par l'utilisateur
    // - Prioriser les livres populaires
    
    console.log("À implémenter : recommanderLivres");
    return [];
}

// ===================================
// 5. STATISTIQUES ET RAPPORTS
// ===================================

/**
 * Génère des statistiques complètes de la bibliothèque
 * @returns {object} Objet contenant toutes les statistiques
 */
function genererStatistiques() {
    // TODO: Implémenter les statistiques avancées
    // - Livre le plus emprunté
    // - Genre le plus populaire
    // - Utilisateur le plus actif
    // - Taux d'occupation de la bibliothèque
    // - Moyenne d'emprunts par utilisateur
    // - Livres jamais empruntés
    // - Retards moyens
    
    console.log("À implémenter : genererStatistiques");
    return {};
}

/**
 * Génère un rapport des emprunts en retard
 * @returns {array} Liste des emprunts en retard
 */
function rapportRetards() {
    // TODO: Implémenter le rapport des retards
    // - Identifier tous les emprunts en retard
    // - Calculer le nombre de jours de retard
    // - Calculer les frais de retard
    // - Trier par nombre de jours de retard
    
    console.log("À implémenter : rapportRetards");
    return [];
}

// ===================================
// 6. FONCTIONS UTILITAIRES
// ===================================

/**
 * Valide le format d'un ISBN
 * @param {string} isbn - ISBN à valider
 * @returns {boolean} True si valide
 */
function validerISBN(isbn) {
    // TODO: Implémenter la validation ISBN
    // Format attendu: XXX-X-XX-XXXXXX-X
    console.log("À implémenter : validerISBN");
    return false;
}

/**
 * Valide le format d'un email
 * @param {string} email - Email à valider
 * @returns {boolean} True si valide
 */
function validerEmail(email) {
    // TODO: Implémenter la validation email
    console.log("À implémenter : validerEmail");
    return false;
}

/**
 * Calcule la date de retour (14 jours après la date d'emprunt)
 * @param {Date} dateEmprunt - Date d'emprunt
 * @returns {Date} Date de retour prévue
 */
function calculerDateRetour(dateEmprunt) {
    // TODO: Implémenter le calcul de date de retour
    console.log("À implémenter : calculerDateRetour");
    return new Date();
}

// ===================================
// 7. DONNÉES DE TEST
// ===================================

/**
 * Initialise la bibliothèque avec des données de test
 */
function initialiserDonneesTest() {
    // TODO: Ajouter des livres, utilisateurs et emprunts de test
    console.log("À implémenter : initialiserDonneesTest");
}

// ===================================
// 8. FONCTIONNALITÉS BONUS
// ===================================

/**
 * Système de réservation de livres
 * @param {number} utilisateurId - ID de l'utilisateur
 * @param {number} livreId - ID du livre
 * @returns {object} Résultat de la réservation
 */
function reserverLivre(utilisateurId, livreId) {
    // BONUS: Implémenter le système de réservation
    console.log("BONUS à implémenter : reserverLivre");
    return { succes: false, message: "Fonction bonus à implémenter" };
}

/**
 * Système de notation des livres
 * @param {number} utilisateurId - ID de l'utilisateur
 * @param {number} livreId - ID du livre
 * @param {number} note - Note de 1 à 5
 * @param {string} commentaire - Commentaire optionnel
 * @returns {object} Résultat de la notation
 */
function noterLivre(utilisateurId, livreId, note, commentaire = "") {
    // BONUS: Implémenter le système de notation
    console.log("BONUS à implémenter : noterLivre");
    return { succes: false, message: "Fonction bonus à implémenter" };
}

// ===================================
// INSTRUCTIONS POUR L'EXERCICE
// ===================================

/*
INSTRUCTIONS :

1. Implémentez toutes les fonctions marquées "TODO"
2. Utilisez tous les concepts JavaScript vus :
   - Variables (let, const) et types de données
   - Opérateurs (arithmétiques, comparaison, logiques)
   - Conditions (if/else, switch, opérateur ternaire)
   - Boucles (for, while, for...of, forEach)
   - Fonctions (déclarations, expressions, arrow functions)

3. Respectez les bonnes pratiques :
   - Validation des paramètres d'entrée
   - Gestion des cas d'erreur
   - Code lisible et bien commenté
   - Fonctions pures quand possible

4. Testez votre code :
   - Créez des cas de test pour chaque fonction
   - Vérifiez les cas limites
   - Testez avec des données invalides

5. Fonctionnalités bonus (optionnelles) :
   - Système de réservation
   - Notation des livres
   - Interface en ligne de commande
   - Sauvegarde des données

CRITÈRES D'ÉVALUATION :
- Fonctionnalité (40%) : Toutes les fonctions marchent correctement
- Qualité du code (30%) : Code propre, lisible, bien structuré
- Gestion d'erreurs (20%) : Validation et gestion des cas d'erreur
- Innovation (10%) : Fonctionnalités bonus et créativité

BONNE CHANCE ! 🚀
*/