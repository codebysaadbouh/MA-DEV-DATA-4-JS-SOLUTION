// ========================================
// LES DIFFÉRENTES MANIÈRES DE DÉCLARER DES FONCTIONS EN JAVASCRIPT
// ========================================

console.log("=== GUIDE DES DÉCLARATIONS DE FONCTIONS ===");

// ========================================
// 1. DÉCLARATION DE FONCTION CLASSIQUE (Function Declaration)
// ========================================

// Syntaxe: function nomFonction(paramètres) { ... }
// Caractéristiques:
// - Hissée (hoisted) : peut être appelée avant sa déclaration
// - Crée une fonction nommée
// - Disponible dans tout le scope

function saluer(nom) {
    return `Bonjour ${nom}!`;
}

// Test de la fonction déclarée
console.log("\n1. Déclaration classique:");
console.log(saluer("Alice")); // Fonctionne

// ========================================
// 2. EXPRESSION DE FONCTION (Function Expression)
// ========================================

// Syntaxe: const nomVariable = function(paramètres) { ... }
// Caractéristiques:
// - NON hissée : doit être déclarée avant utilisation
// - Assignée à une variable
// - Fonction anonyme (pas de nom)

const calculer = function(a, b) {
    return a + b;
};

console.log("\n2. Expression de fonction:");
console.log(calculer(5, 3)); // Résultat: 8

// ========================================
// 3. FONCTION FLÉCHÉE (Arrow Function)
// ========================================

// Syntaxe courte: const nom = (paramètres) => expression
// Syntaxe longue: const nom = (paramètres) => { ... }
// Caractéristiques:
// - Syntaxe plus concise
// - Pas de 'this' propre
// - Toujours anonyme
// - NON hissée

// Version courte (une seule expression)
const multiplier = (a, b) => a * b;

// Version longue (plusieurs instructions)
const diviser = (a, b) => {
    if (b === 0) {
        return "Division par zéro impossible";
    }
    return a / b;
};

// Cas spéciaux des fonctions fléchées
const direBonjour = () => "Bonjour tout le monde!"; // Pas de paramètres
const doubler = x => x * 2; // Un seul paramètre (parenthèses optionnelles)

console.log("\n3. Fonctions fléchées:");
console.log(multiplier(4, 3)); // 12
console.log(diviser(10, 2)); // 5
console.log(direBonjour()); // "Bonjour tout le monde!"
console.log(doubler(7)); // 14

// ========================================
// 4. EXPRESSION DE FONCTION NOMMÉE
// ========================================

// Syntaxe: const variable = function nomFonction(paramètres) { ... }
// Caractéristiques:
// - Fonction avec un nom interne
// - Utile pour la récursion
// - Le nom n'est accessible que dans la fonction

const factorielle = function calculFactorielle(n) {
    if (n <= 1) return 1;
    return n * calculFactorielle(n - 1); // Récursion avec le nom interne
};

console.log("\n4. Expression de fonction nommée:");
console.log(factorielle(5)); // 120

// ========================================
// 5. MÉTHODES D'OBJET
// ========================================

// Différentes façons de définir des méthodes dans un objet

const calculatrice = {
    // Méthode classique
    additionner: function(a, b) {
        return a + b;
    },
    
    // Syntaxe raccourcie ES6
    soustraire(a, b) {
        return a - b;
    },
    
    // Fonction fléchée (attention au 'this')
    afficherResultat: (resultat) => {
        console.log(`Résultat: ${resultat}`);
    }
};

console.log("\n5. Méthodes d'objet:");
console.log(calculatrice.additionner(8, 2)); // 10
console.log(calculatrice.soustraire(8, 2)); // 6
calculatrice.afficherResultat(42);

// ========================================
// 6. FONCTION CONSTRUCTEUR
// ========================================

// Syntaxe: function NomConstructeur(paramètres) { ... }
// Caractéristiques:
// - Utilisée avec 'new'
// - Crée des objets
// - Convention: nom en PascalCase

function Personne(nom, age) {
    this.nom = nom;
    this.age = age;
    this.sePresenter = function() {
        return `Je suis ${this.nom}, j'ai ${this.age} ans`;
    };
}

const personne1 = new Personne("Bob", 25);

console.log("\n6. Fonction constructeur:");
console.log(personne1.sePresenter());

// ========================================
// 7. FONCTION IMMÉDIATEMENT INVOQUÉE (IIFE)
// ========================================

// Syntaxe: (function() { ... })() ou (() => { ... })()
// Caractéristiques:
// - Exécutée immédiatement
// - Crée un scope isolé
// - Évite la pollution du scope global

console.log("\n7. IIFE (Immediately Invoked Function Expression):");

(function() {
    const messagePrivé = "Ce message est dans un scope isolé";
    console.log(messagePrivé);
})();

// Version avec fonction fléchée
(() => {
    const autreMessage = "IIFE avec fonction fléchée";
    console.log(autreMessage);
})();

// ========================================
// 8. COMPARAISON DES COMPORTEMENTS
// ========================================

console.log("\n=== COMPARAISON DES COMPORTEMENTS ===");

// Hoisting (hissage)
console.log("\n8a. Hoisting:");
try {
    console.log(fonctionHissee()); // Fonctionne grâce au hoisting
} catch (e) {
    console.log("Erreur:", e.message);
}

function fonctionHissee() {
    return "Je suis hissée!";
}

try {
    console.log(expressionNonHissee()); // Erreur: Cannot access before initialization
} catch (e) {
    console.log("Erreur avec expression:", e.message);
}

const expressionNonHissee = function() {
    return "Je ne suis pas hissée";
};

// Contexte 'this'
console.log("\n8b. Contexte 'this':");

const objetTest = {
    nom: "MonObjet",
    
    methodeClassique: function() {
        console.log("Méthode classique - this.nom:", this.nom);
    },
    
    methodeFlechee: () => {
        console.log("Méthode fléchée - this.nom:", this?.nom || "undefined");
    }
};

objetTest.methodeClassique(); // Affiche "MonObjet"
objetTest.methodeFlechee(); // Affiche "undefined" (this ne pointe pas vers l'objet)

// ========================================
// 9. BONNES PRATIQUES
// ========================================

console.log("\n=== BONNES PRATIQUES ===");

//