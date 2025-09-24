# Exercice : Système de Gestion de Bibliothèque (4h)

## Objectif
Créer un système de gestion de bibliothèque en JavaScript permettant de gérer les livres, les utilisateurs et les emprunts avec les opérations CRUD de base.

## Fonctionnalités ESSENTIELLES (à implémenter obligatoirement)

### 1. Gestion des Livres
- ✅ **Ajouter un livre** : Titre, auteur, quantité
- ✅ **Afficher tous les livres** : Liste simple
- ✅ **Supprimer un livre** : Retirer un livre du système

### 2. Gestion des Utilisateurs
- ✅ **Ajouter un utilisateur** : Nom, prénom, email
- ✅ **Afficher tous les utilisateurs** : Liste simple
- ✅ **Supprimer un utilisateur** : Retirer un utilisateur

### 3. Gestion des Emprunts
- ✅ **Emprunter un livre** : Associer utilisateur + livre
- ✅ **Retourner un livre** : Marquer comme retourné
- ✅ **Afficher les emprunts actifs** : Liste des emprunts en cours

## Fonctionnalités BONUS (si temps disponible)
- 🎯 Recherche par nom/titre
- 🎯 Modification des informations
- 🎯 Validation des formulaires
- 🎯 Messages d'erreur/succès
- 🎯 Design CSS amélioré

## Contraintes importantes

### Règles métier (OBLIGATOIRES)
1. **Un utilisateur ne peut emprunter le même livre qu'une fois**
2. **Respecter la quantité disponible** (ne pas emprunter si quantité = 0)
3. **Données de base obligatoires** pour chaque entité

### Structure des données (SIMPLIFIÉE)

```javascript
// Livre (minimum requis)
const livre = {
    id: 1,
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    quantiteTotal: 3,
    quantiteDisponible: 2
};

// Utilisateur (minimum requis)
const utilisateur = {
    id: 1,
    nom: "Dupont",
    prenom: "Jean",
    email: "jean.dupont@email.com"
};

// Emprunt (minimum requis)
const emprunt = {
    id: 1,
    utilisateurId: 1,
    livreId: 1,
    dateEmprunt: new Date().toLocaleDateString(),
    statut: "actif" // "actif" ou "retourné"
};
```

## Interface utilisateur (SIMPLIFIÉE)

### Structure HTML de base
```html
<!DOCTYPE html>
<html>
<head>
    <title>Bibliothèque</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Section Livres -->
    <section id="livres">
        <h2>Gestion des Livres</h2>
        <form id="form-livre">
            <!-- Formulaire d'ajout livre -->
        </form>
        <div id="liste-livres">
            <!-- Liste des livres -->
        </div>
    </section>

    <!-- Section Utilisateurs -->
    <section id="utilisateurs">
        <h2>Gestion des Utilisateurs</h2>
        <form id="form-utilisateur">
            <!-- Formulaire d'ajout utilisateur -->
        </form>
        <div id="liste-utilisateurs">
            <!-- Liste des utilisateurs -->
        </div>
    </section>

    <!-- Section Emprunts -->
    <section id="emprunts">
        <h2>Gestion des Emprunts</h2>
        <form id="form-emprunt">
            <!-- Formulaire d'emprunt -->
        </form>
        <div id="liste-emprunts">
            <!-- Liste des emprunts -->
        </div>
    </section>

    <script src="script.js"></script>
</body>
</html>
```

## Fonctions ESSENTIELLES à implémenter

### Données globales (à déclarer au début)
```javascript
let livres = [];
let utilisateurs = [];
let emprunts = [];
let prochainIdLivre = 1;
let prochainIdUtilisateur = 1;
let prochainIdEmprunt = 1;
```

### Livres
```javascript
function ajouterLivre(titre, auteur, quantite) {
    // Créer et ajouter un livre
}

function afficherLivres() {
    // Afficher la liste des livres dans le DOM
}

function supprimerLivre(id) {
    // Supprimer un livre par son ID
}
```

### Utilisateurs
```javascript
function ajouterUtilisateur(nom, prenom, email) {
    // Créer et ajouter un utilisateur
}

function afficherUtilisateurs() {
    // Afficher la liste des utilisateurs dans le DOM
}

function supprimerUtilisateur(id) {
    // Supprimer un utilisateur par son ID
}
```

### Emprunts
```javascript
function emprunterLivre(utilisateurId, livreId) {
    // Créer un emprunt et décrémenter la quantité
}

function retournerLivre(empruntId) {
    // Marquer l'emprunt comme retourné et incrémenter la quantité
}

function afficherEmprunts() {
    // Afficher la liste des emprunts actifs
}
```

### Utilitaires
```javascript
function obtenirLivreParId(id) { /* ... */ }
function obtenirUtilisateurParId(id) { /* ... */ }
function verifierEmpruntExistant(utilisateurId, livreId) { /* ... */ }
```

## Étapes de développement recommandées

### Étape 1 - Fondations
1. Structure HTML de base + CSS simple
2. Déclaration des variables globales
3. Fonction ajouterLivre() + afficherLivres()

### Étape 2 - Fonctionnalités core
1. Compléter gestion des livres (suppression)
2. Gestion des utilisateurs complète
3. Système d'emprunts de base

### Étape 3 - Interface et intégration
1. Formulaires fonctionnels
2. Intégration des fonctionnalités
3. Tests des fonctionnalités principales

### Étape 4 - Finitions
1. Améliorations CSS
2. Fonctionnalités bonus si possible
3. Tests finaux et corrections

## Critères d'évaluation

### Fonctionnalité (50%)
- ✅ Ajout/suppression livres et utilisateurs
- ✅ Système d'emprunt/retour fonctionnel
- ✅ Respect des contraintes de base

### Code (30%)
- ✅ Code lisible et commenté
- ✅ Fonctions bien structurées
- ✅ Gestion des erreurs de base

### Interface (20%)
- ✅ Interface fonctionnelle
- ✅ Formulaires opérationnels
- ✅ Affichage des données

## Livrables attendus

1. **index.html** : Interface complète et fonctionnelle
2. **script.js** : Toutes les fonctions essentielles
3. **style.css** : CSS de base (optionnel mais recommandé)

## Conseils de développement

### Approche recommandée
- ⏰ **Priorité aux fonctionnalités essentielles**
- 🎯 **Testez chaque fonction individuellement**
- 🔄 **Intégrez progressivement**
- 🎨 **CSS et bonus seulement si le core fonctionne**

### Debugging
- Utilisez `console.log()` pour déboguer
- Testez avec des données simples d'abord
- Vérifiez les erreurs dans la console du navigateur

## Exemple de données de test

```javascript
// À utiliser pour tester votre application
const donneesTest = {
    livres: [
        {id: 1, titre: "Le Petit Prince", auteur: "Saint-Exupéry", quantiteTotal: 3, quantiteDisponible: 2},
        {id: 2, titre: "1984", auteur: "George Orwell", quantiteTotal: 2, quantiteDisponible: 1}
    ],
    utilisateurs: [
        {id: 1, nom: "Dupont", prenom: "Jean", email: "jean@email.com"},
        {id: 2, nom: "Martin", prenom: "Marie", email: "marie@email.com"}
    ]
};
```

**Temps estimé : 4 heures**

Bonne chance ! 🚀📚