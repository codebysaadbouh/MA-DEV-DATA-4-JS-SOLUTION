// ===================================
// ARRAYS ET OBJECTS - CONCEPTS AVANCÉS
// ===================================

// Les tableaux et objets sont des structures de données fondamentales
// qui permettent de stocker et manipuler des collections de données.

// ===================================
// 1. ARRAYS (TABLEAUX) AVANCÉS
// ===================================

// 1.1 Création et initialisation
const fruits = ['pomme', 'banane', 'orange'];
const nombres = [1, 2, 3, 4, 5];
const mixte = [1, 'texte', true, null, {nom: 'objet'}];

// Création avec le constructeur Array
const tableau1 = new Array(5); // Tableau de 5 éléments vides
const tableau2 = new Array(1, 2, 3); // [1, 2, 3]

// Création avec Array.from()
const lettres = Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']
const range = Array.from({length: 5}, (_, i) => i + 1); // [1, 2, 3, 4, 5]

console.log('Fruits:', fruits);
console.log('Range:', range);

// 1.2 Méthodes de modification (mutantes)

// push() - ajoute à la fin
fruits.push('kiwi');
console.log('Après push:', fruits);

// pop() - retire le dernier
const dernierFruit = fruits.pop();
console.log('Fruit retiré:', dernierFruit);
console.log('Après pop:', fruits);

// unshift() - ajoute au début
fruits.unshift('fraise');
console.log('Après unshift:', fruits);

// shift() - retire le premier
const premierFruit = fruits.shift();
console.log('Premier fruit retiré:', premierFruit);

// splice() - ajoute/retire à une position
fruits.splice(1, 1, 'mangue', 'ananas'); // À l'index 1, retire 1 élément, ajoute 2
console.log('Après splice:', fruits);

// sort() - trie le tableau
const nombres2 = [3, 1, 4, 1, 5, 9, 2, 6];
nombres2.sort((a, b) => a - b); // Tri croissant
console.log('Nombres triés:', nombres2);

// reverse() - inverse l'ordre
fruits.reverse();
console.log('Fruits inversés:', fruits);

// 1.3 Méthodes non-mutantes (retournent un nouveau tableau)

// slice() - extrait une portion
const portion = fruits.slice(1, 3);
console.log('Portion extraite:', portion);
console.log('Tableau original:', fruits);

// concat() - concatène des tableaux
const autresFruits = ['cerise', 'pêche'];
const tousLesFruits = fruits.concat(autresFruits);
console.log('Tous les fruits:', tousLesFruits);

// Spread operator pour concaténer
const fruitsEtLegumes = [...fruits, 'carotte', 'brocoli'];
console.log('Fruits et légumes:', fruitsEtLegumes);

// 1.4 Méthodes de recherche et test

// indexOf() et lastIndexOf()
const index = fruits.indexOf('pomme');
console.log('Index de pomme:', index);

// includes() - vérifie la présence
const aPomme = fruits.includes('pomme');
console.log('Contient pomme:', aPomme);

// find() - trouve le premier élément qui satisfait une condition
const nombres3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const premierPair = nombres3.find(n => n % 2 === 0);
console.log('Premier nombre pair:', premierPair);

// findIndex() - trouve l'index du premier élément
const indexPremierPair = nombres3.findIndex(n => n % 2 === 0);
console.log('Index du premier pair:', indexPremierPair);

// some() - teste si au moins un élément satisfait la condition
const aDesNegatifs = nombres3.some(n => n < 0);
console.log('A des négatifs:', aDesNegatifs);

// every() - teste si tous les éléments satisfont la condition
const tousPositifs = nombres3.every(n => n > 0);
console.log('Tous positifs:', tousPositifs);

// 1.5 Méthodes de transformation

// map() - transforme chaque élément
const carres = nombres3.map(n => n * n);
console.log('Carrés:', carres);

// filter() - filtre les éléments
const pairs = nombres3.filter(n => n % 2 === 0);
console.log('Nombres pairs:', pairs);

// reduce() - réduit à une seule valeur
const somme = nombres3.reduce((acc, n) => acc + n, 0);
console.log('Somme:', somme);

// Exemple complexe avec reduce : grouper par propriété
const personnes = [
    {nom: 'Alice', age: 25, ville: 'Paris'},
    {nom: 'Bob', age: 30, ville: 'Lyon'},
    {nom: 'Charlie', age: 25, ville: 'Paris'},
    {nom: 'Diana', age: 35, ville: 'Lyon'}
];

const groupeParVille = personnes.reduce((acc, personne) => {
    if (!acc[personne.ville]) {
        acc[personne.ville] = [];
    }
    acc[personne.ville].push(personne);
    return acc;
}, {});

console.log('Groupé par ville:', groupeParVille);

// 1.6 Méthodes d'itération

// forEach() - exécute une fonction pour chaque élément
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

// for...of - itère sur les valeurs
for (const fruit of fruits) {
    console.log('Fruit:', fruit);
}

// for...in - itère sur les indices (déconseillé pour les tableaux)
for (const index in fruits) {
    console.log(`Index ${index}: ${fruits[index]}`);
}

// 1.7 Tableaux multidimensionnels

// Matrice 2D
const matrice = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log('Élément [1][2]:', matrice[1][2]); // 6

// Parcourir une matrice
for (let i = 0; i < matrice.length; i++) {
    for (let j = 0; j < matrice[i].length; j++) {
        console.log(`matrice[${i}][${j}] = ${matrice[i][j]}`);
    }
}

// Aplatir un tableau multidimensionnel
const tableauAplati = matrice.flat();
console.log('Tableau aplati:', tableauAplati);

// flat() avec profondeur
const tableauProfond = [1, [2, [3, [4, 5]]]];
const aplatiProfondeur2 = tableauProfond.flat(2);
console.log('Aplati profondeur 2:', aplatiProfondeur2);

// ===================================
// 2. OBJECTS (OBJETS) AVANCÉS
// ===================================

// 2.1 Création et syntaxes

// Littéral d'objet
const personne = {
    nom: 'Alice',
    age: 25,
    ville: 'Paris',
    hobbies: ['lecture', 'natation'],
    adresse: {
        rue: '123 rue de la Paix',
        codePostal: '75001'
    }
};

// Constructeur Object
const objet1 = new Object();
objet1.propriete = 'valeur';

// Object.create()
const prototype = {saluer: function() { return `Bonjour, je suis ${this.nom}`; }};
const personne2 = Object.create(prototype);
personne2.nom = 'Bob';

console.log('Personne:', personne);
console.log('Salutation:', personne2.saluer());

// 2.2 Accès aux propriétés

// Notation point
console.log('Nom:', personne.nom);

// Notation crochet
console.log('Âge:', personne['age']);

// Propriété dynamique
const propriete = 'ville';
console.log('Ville:', personne[propriete]);

// Propriétés imbriquées
console.log('Code postal:', personne.adresse.codePostal);

// Déstructuration
const {nom, age, ville} = personne;
console.log(`${nom}, ${age} ans, habite à ${ville}`);

// Déstructuration avec renommage
const {nom: nomPersonne, age: agePersonne} = personne;
console.log(`Nom: ${nomPersonne}, Âge: ${agePersonne}`);

// Déstructuration imbriquée
const {adresse: {rue, codePostal}} = personne;
console.log(`Adresse: ${rue}, ${codePostal}`);

// 2.3 Modification des objets

// Ajouter/modifier des propriétés
personne.email = 'alice@example.com';
personne.age = 26;

// Supprimer des propriétés
delete personne.ville;

console.log('Personne modifiée:', personne);

// 2.4 Méthodes Object statiques

// Object.keys() - obtient les clés
const cles = Object.keys(personne);
console.log('Clés:', cles);

// Object.values() - obtient les valeurs
const valeurs = Object.values(personne);
console.log('Valeurs:', valeurs);

// Object.entries() - obtient les paires clé-valeur
const entrees = Object.entries(personne);
console.log('Entrées:', entrees);

// Object.assign() - copie/fusionne des objets
const infosSupplementaires = {profession: 'Développeuse', salaire: 50000};
const personneComplete = Object.assign({}, personne, infosSupplementaires);
console.log('Personne complète:', personneComplete);

// Spread operator pour fusionner
const personneAvecSpread = {...personne, ...infosSupplementaires, age: 27};
console.log('Avec spread:', personneAvecSpread);

// Object.freeze() - rend l'objet immutable
const objetImmutable = Object.freeze({a: 1, b: 2});
// objetImmutable.a = 10; // Erreur en mode strict

// Object.seal() - empêche l'ajout/suppression de propriétés
const objetScelle = Object.seal({x: 1, y: 2});
objetScelle.x = 10; // OK
// objetScelle.z = 3; // Ignoré

// 2.5 Vérifications sur les objets

// hasOwnProperty() - vérifie si la propriété appartient à l'objet
console.log('A la propriété nom:', personne.hasOwnProperty('nom'));

// in operator - vérifie la présence d'une propriété
console.log('Propriété age existe:', 'age' in personne);

// Object.hasOwn() - version moderne de hasOwnProperty
console.log('Has own email:', Object.hasOwn(personne, 'email'));

// 2.6 Itération sur les objets

// for...in - itère sur les propriétés énumérables
for (const cle in personne) {
    console.log(`${cle}: ${personne[cle]}`);
}

// Object.entries() avec for...of
for (const [cle, valeur] of Object.entries(personne)) {
    console.log(`${cle} => ${valeur}`);
}

// 2.7 Getters et Setters

const utilisateur = {
    _nom: '',
    _age: 0,
    
    // Getter
    get nom() {
        return this._nom.toUpperCase();
    },
    
    // Setter
    set nom(valeur) {
        if (typeof valeur === 'string' && valeur.length > 0) {
            this._nom = valeur;
        } else {
            throw new Error('Le nom doit être une chaîne non vide');
        }
    },
    
    get age() {
        return this._age;
    },
    
    set age(valeur) {
        if (typeof valeur === 'number' && valeur >= 0) {
            this._age = valeur;
        } else {
            throw new Error('L\'âge doit être un nombre positif');
        }
    },
    
    // Propriété calculée
    get description() {
        return `${this.nom}, ${this.age} ans`;
    }
};

utilisateur.nom = 'charlie';
utilisateur.age = 30;
console.log('Description:', utilisateur.description);

// 2.8 Méthodes dans les objets

const calculatrice = {
    resultat: 0,
    
    ajouter(nombre) {
        this.resultat += nombre;
        return this; // Pour le chaînage
    },
    
    soustraire(nombre) {
        this.resultat -= nombre;
        return this;
    },
    
    multiplier(nombre) {
        this.resultat *= nombre;
        return this;
    },
    
    diviser(nombre) {
        if (nombre !== 0) {
            this.resultat /= nombre;
        } else {
            throw new Error('Division par zéro');
        }
        return this;
    },
    
    reinitialiser() {
        this.resultat = 0;
        return this;
    },
    
    obtenirResultat() {
        return this.resultat;
    }
};

// Chaînage de méthodes
const resultatCalcul = calculatrice
    .reinitialiser()
    .ajouter(10)
    .multiplier(2)
    .soustraire(5)
    .obtenirResultat();

console.log('Résultat du calcul:', resultatCalcul);

// ===================================
// 3. TECHNIQUES AVANCÉES
// ===================================

// 3.1 Clonage d'objets

// Clonage superficiel
const cloneSuperficiel = {...personne};
const cloneSuperficiel2 = Object.assign({}, personne);

// Clonage profond (attention aux références)
const cloneProfond = JSON.parse(JSON.stringify(personne));

// Fonction de clonage profond personnalisée
function clonerProfondement(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }
    
    if (obj instanceof Array) {
        return obj.map(item => clonerProfondement(item));
    }
    
    const clone = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = clonerProfondement(obj[key]);
        }
    }
    
    return clone;
}

// 3.2 Comparaison d'objets

function comparerObjets(obj1, obj2) {
    const cles1 = Object.keys(obj1);
    const cles2 = Object.keys(obj2);
    
    if (cles1.length !== cles2.length) {
        return false;
    }
    
    for (const cle of cles1) {
        if (!cles2.includes(cle)) {
            return false;
        }
        
        if (typeof obj1[cle] === 'object' && typeof obj2[cle] === 'object') {
            if (!comparerObjets(obj1[cle], obj2[cle])) {
                return false;
            }
        } else if (obj1[cle] !== obj2[cle]) {
            return false;
        }
    }
    
    return true;
}

// 3.3 Fusion d'objets avancée

function fusionnerObjets(...objets) {
    return objets.reduce((resultat, obj) => {
        for (const [cle, valeur] of Object.entries(obj)) {
            if (typeof valeur === 'object' && valeur !== null && !Array.isArray(valeur)) {
                resultat[cle] = fusionnerObjets(resultat[cle] || {}, valeur);
            } else {
                resultat[cle] = valeur;
            }
        }
        return resultat;
    }, {});
}

// 3.4 Transformation d'objets

// Mapper les valeurs d'un objet
function mapperObjet(obj, fn) {
    const resultat = {};
    for (const [cle, valeur] of Object.entries(obj)) {
        resultat[cle] = fn(valeur, cle);
    }
    return resultat;
}

// Filtrer un objet
function filtrerObjet(obj, predicate) {
    const resultat = {};
    for (const [cle, valeur] of Object.entries(obj)) {
        if (predicate(valeur, cle)) {
            resultat[cle] = valeur;
        }
    }
    return resultat;
}

// ===================================
// 4. EXEMPLES PRATIQUES AVANCÉS
// ===================================

// 4.1 Gestionnaire de données d'étudiants

const gestionnaireEtudiants = {
    etudiants: [],
    
    ajouterEtudiant(etudiant) {
        const nouvelEtudiant = {
            id: Date.now(),
            ...etudiant,
            notes: etudiant.notes || [],
            moyenne: 0
        };
        
        this.etudiants.push(nouvelEtudiant);
        this.calculerMoyenne(nouvelEtudiant.id);
        return nouvelEtudiant.id;
    },
    
    ajouterNote(idEtudiant, matiere, note) {
        const etudiant = this.etudiants.find(e => e.id === idEtudiant);
        if (etudiant) {
            etudiant.notes.push({matiere, note, date: new Date()});
            this.calculerMoyenne(idEtudiant);
        }
    },
    
    calculerMoyenne(idEtudiant) {
        const etudiant = this.etudiants.find(e => e.id === idEtudiant);
        if (etudiant && etudiant.notes.length > 0) {
            const somme = etudiant.notes.reduce((acc, n) => acc + n.note, 0);
            etudiant.moyenne = somme / etudiant.notes.length;
        }
    },
    
    obtenirClassement() {
        return [...this.etudiants]
            .sort((a, b) => b.moyenne - a.moyenne)
            .map((etudiant, index) => ({
                rang: index + 1,
                nom: etudiant.nom,
                moyenne: etudiant.moyenne
            }));
    },
    
    obtenirStatistiques() {
        if (this.etudiants.length === 0) return null;
        
        const moyennes = this.etudiants.map(e => e.moyenne);
        const moyenneClasse = moyennes.reduce((a, b) => a + b) / moyennes.length;
        const meilleureNote = Math.max(...moyennes);
        const plusFaibleNote = Math.min(...moyennes);
        
        return {
            nombreEtudiants: this.etudiants.length,
            moyenneClasse: moyenneClasse.toFixed(2),
            meilleureNote,
            plusFaibleNote
        };
    }
};

// Test du gestionnaire
gestionnaireEtudiants.ajouterEtudiant({nom: 'Alice', age: 20});
gestionnaireEtudiants.ajouterEtudiant({nom: 'Bob', age: 21});
gestionnaireEtudiants.ajouterEtudiant({nom: 'Charlie', age: 19});

const idAlice = gestionnaireEtudiants.etudiants[0].id;
const idBob = gestionnaireEtudiants.etudiants[1].id;
const idCharlie = gestionnaireEtudiants.etudiants[2].id;

gestionnaireEtudiants.ajouterNote(idAlice, 'Math', 15);
gestionnaireEtudiants.ajouterNote(idAlice, 'Français', 17);
gestionnaireEtudiants.ajouterNote(idBob, 'Math', 12);
gestionnaireEtudiants.ajouterNote(idBob, 'Français', 14);
gestionnaireEtudiants.ajouterNote(idCharlie, 'Math', 18);
gestionnaireEtudiants.ajouterNote(idCharlie, 'Français', 16);

console.log('Classement:', gestionnaireEtudiants.obtenirClassement());
console.log('Statistiques:', gestionnaireEtudiants.obtenirStatistiques());

// 4.2 Cache intelligent

class CacheIntelligent {
    constructor(tailleMax = 100, dureeVie = 300000) { // 5 minutes par défaut
        this.cache = new Map();
        this.tailleMax = tailleMax;
        this.dureeVie = dureeVie;
    }
    
    set(cle, valeur) {
        // Supprimer l'ancienne entrée si elle existe
        if (this.cache.has(cle)) {
            this.cache.delete(cle);
        }
        
        // Vérifier la taille du cache
        if (this.cache.size >= this.tailleMax) {
            // Supprimer la plus ancienne entrée (LRU)
            const premiereClé = this.cache.keys().next().value;
            this.cache.delete(premiereClé);
        }
        
        // Ajouter la nouvelle entrée
        this.cache.set(cle, {
            valeur,
            timestamp: Date.now()
        });
    }
    
    get(cle) {
        const entree = this.cache.get(cle);
        
        if (!entree) {
            return null;
        }
        
        // Vérifier si l'entrée a expiré
        if (Date.now() - entree.timestamp > this.dureeVie) {
            this.cache.delete(cle);
            return null;
        }
        
        // Remettre l'entrée à la fin (LRU)
        this.cache.delete(cle);
        this.cache.set(cle, entree);
        
        return entree.valeur;
    }
    
    has(cle) {
        return this.get(cle) !== null;
    }
    
    clear() {
        this.cache.clear();
    }
    
    size() {
        return this.cache.size;
    }
    
    nettoyerExpires() {
        const maintenant = Date.now();
        for (const [cle, entree] of this.cache.entries()) {
            if (maintenant - entree.timestamp > this.dureeVie) {
                this.cache.delete(cle);
            }
        }
    }
}

// Test du cache
const cache = new CacheIntelligent(3, 2000); // 3 éléments max, 2 secondes de vie

cache.set('user1', {nom: 'Alice', age: 25});
cache.set('user2', {nom: 'Bob', age: 30});
cache.set('user3', {nom: 'Charlie', age: 35});

console.log('User1 du cache:', cache.get('user1'));
cache.set('user4', {nom: 'Diana', age: 28}); // user2 sera supprimé (LRU)
console.log('User2 du cache (supprimé):', cache.get('user2'));

// ===================================
// 5. BONNES PRATIQUES
// ===================================

// ✅ BONNES PRATIQUES :

// 1. Utiliser const pour les tableaux et objets qui ne seront pas réassignés
const monTableau = [1, 2, 3];
const monObjet = {a: 1, b: 2};

// 2. Préférer les méthodes non-mutantes
const nouveauTableau = monTableau.map(x => x * 2); // Au lieu de modifier monTableau

// 3. Utiliser la déstructuration pour extraire des valeurs
const {a, b} = monObjet;
const [premier, deuxieme] = monTableau;

// 4. Utiliser le spread operator pour copier/fusionner
const copieTableau = [...monTableau];
const copieObjet = {...monObjet};

// 5. Valider les données avant traitement
function traiterTableau(tableau) {
    if (!Array.isArray(tableau)) {
        throw new Error('Le paramètre doit être un tableau');
    }
    return tableau.filter(x => x != null);
}

// 6. Utiliser des noms de propriétés descriptifs
const utilisateurComplet = {
    informationsPersonnelles: {
        nom: 'Alice',
        age: 25
    },
    parametresCompte: {
        themePreference: 'sombre',
        notificationsActivees: true
    }
};

// ❌ PRATIQUES À ÉVITER :

// Éviter la modification directe des paramètres d'objet
// function mauvaiseFonction(obj) {
//     obj.propriete = 'nouvelle valeur'; // Modifie l'objet original
// }

// Éviter les tableaux avec des trous
// const tableauAvecTrous = [1, , , 4]; // Éviter

// Éviter delete sur les tableaux
// delete monTableau[1]; // Crée un trou, utiliser splice() à la place

console.log("\n=== RÉSUMÉ DES ARRAYS ET OBJECTS ===");
console.log("✅ Les tableaux stockent des collections ordonnées");
console.log("✅ Les objets stockent des paires clé-valeur");
console.log("✅ Utilisez map(), filter(), reduce() pour transformer les données");
console.log("✅ La déstructuration simplifie l'extraction de valeurs");
console.log("✅ Le spread operator facilite la copie et fusion");
console.log("✅ Préférez les méthodes non-mutantes pour éviter les effets de bord");
console.log("✅ Validez toujours vos données avant traitement");