# Guide des Fonctions Essentielles - Arrays et Objects

## 📋 Arrays - Fonctions Essentielles

### 1. **push()** - Ajouter à la fin
```javascript
const fruits = ['pomme', 'banane'];
fruits.push('orange');
console.log(fruits); // ['pomme', 'banane', 'orange']

// Ajouter plusieurs éléments
fruits.push('kiwi', 'mangue');
console.log(fruits); // ['pomme', 'banane', 'orange', 'kiwi', 'mangue']
```

### 2. **pop()** - Supprimer le dernier
```javascript
const fruits = ['pomme', 'banane', 'orange'];
const dernierFruit = fruits.pop();
console.log(dernierFruit); // 'orange'
console.log(fruits); // ['pomme', 'banane']
```

### 3. **find()** - Trouver un élément
```javascript
const utilisateurs = [
    {id: 1, nom: 'Jean'},
    {id: 2, nom: 'Marie'},
    {id: 3, nom: 'Paul'}
];

const utilisateur = utilisateurs.find(user => user.id === 2);
console.log(utilisateur); // {id: 2, nom: 'Marie'}

const introuvable = utilisateurs.find(user => user.id === 99);
console.log(introuvable); // undefined
```

### 4. **filter()** - Filtrer des éléments
```javascript
const nombres = [1, 2, 3, 4, 5, 6];
const pairs = nombres.filter(n => n % 2 === 0);
console.log(pairs); // [2, 4, 6]

const utilisateurs = [
    {nom: 'Jean', age: 25},
    {nom: 'Marie', age: 17},
    {nom: 'Paul', age: 30}
];
const majeurs = utilisateurs.filter(user => user.age >= 18);
console.log(majeurs); // [{nom: 'Jean', age: 25}, {nom: 'Paul', age: 30}]
```

### 5. **map()** - Transformer chaque élément
```javascript
const nombres = [1, 2, 3, 4];
const doubles = nombres.map(n => n * 2);
console.log(doubles); // [2, 4, 6, 8]

const utilisateurs = [{nom: 'Jean'}, {nom: 'Marie'}];
const noms = utilisateurs.map(user => user.nom);
console.log(noms); // ['Jean', 'Marie']
```

### 6. **forEach()** - Parcourir chaque élément
```javascript
const fruits = ['pomme', 'banane', 'orange'];
fruits.forEach(fruit => {
    console.log(`J'aime les ${fruit}s`);
});
// J'aime les pommes
// J'aime les bananes  
// J'aime les oranges

// Avec index
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});
```

### 7. **includes()** - Vérifier la présence
```javascript
const fruits = ['pomme', 'banane', 'orange'];
console.log(fruits.includes('banane')); // true
console.log(fruits.includes('kiwi')); // false

const nombres = [1, 2, 3];
console.log(nombres.includes(2)); // true
```

### 8. **indexOf()** - Trouver l'index
```javascript
const fruits = ['pomme', 'banane', 'orange'];
console.log(fruits.indexOf('banane')); // 1
console.log(fruits.indexOf('kiwi')); // -1 (pas trouvé)
```

### 9. **splice()** - Supprimer/Ajouter à un index
```javascript
const fruits = ['pomme', 'banane', 'orange', 'kiwi'];

// Supprimer 1 élément à l'index 1
fruits.splice(1, 1);
console.log(fruits); // ['pomme', 'orange', 'kiwi']

// Ajouter à l'index 1
fruits.splice(1, 0, 'mangue');
console.log(fruits); // ['pomme', 'mangue', 'orange', 'kiwi']

// Remplacer à l'index 2
fruits.splice(2, 1, 'ananas');
console.log(fruits); // ['pomme', 'mangue', 'ananas', 'kiwi']
```

### 10. **length** - Taille du tableau
```javascript
const fruits = ['pomme', 'banane', 'orange'];
console.log(fruits.length); // 3

// Vider un tableau
fruits.length = 0;
console.log(fruits); // []
```

---

## 🔧 Objects - Fonctions Essentielles

### 1. **Object.keys()** - Obtenir les clés
```javascript
const utilisateur = {
    nom: 'Jean',
    age: 25,
    email: 'jean@email.com'
};

const cles = Object.keys(utilisateur);
console.log(cles); // ['nom', 'age', 'email']
```

### 2. **Object.values()** - Obtenir les valeurs
```javascript
const utilisateur = {
    nom: 'Jean',
    age: 25,
    email: 'jean@email.com'
};

const valeurs = Object.values(utilisateur);
console.log(valeurs); // ['Jean', 25, 'jean@email.com']
```

### 3. **Object.entries()** - Obtenir clés + valeurs
```javascript
const utilisateur = {
    nom: 'Jean',
    age: 25
};

const entrees = Object.entries(utilisateur);
console.log(entrees); // [['nom', 'Jean'], ['age', 25]]

// Parcourir avec forEach
Object.entries(utilisateur).forEach(([cle, valeur]) => {
    console.log(`${cle}: ${valeur}`);
});
```

### 4. **hasOwnProperty()** - Vérifier une propriété
```javascript
const utilisateur = {
    nom: 'Jean',
    age: 25
};

console.log(utilisateur.hasOwnProperty('nom')); // true
console.log(utilisateur.hasOwnProperty('email')); // false

// Alternative moderne
console.log('nom' in utilisateur); // true
```

### 5. **delete** - Supprimer une propriété
```javascript
const utilisateur = {
    nom: 'Jean',
    age: 25,
    email: 'jean@email.com'
};

delete utilisateur.email;
console.log(utilisateur); // {nom: 'Jean', age: 25}
```

### 6. **Object.assign()** - Copier/Fusionner
```javascript
const utilisateur = {nom: 'Jean', age: 25};
const infosSupp = {email: 'jean@email.com', ville: 'Paris'};

// Fusionner
const utilisateurComplet = Object.assign({}, utilisateur, infosSupp);
console.log(utilisateurComplet); 
// {nom: 'Jean', age: 25, email: 'jean@email.com', ville: 'Paris'}

// Copie simple
const copie = Object.assign({}, utilisateur);
```

### 7. **Spread Operator (...)** - Copier/Fusionner (moderne)
```javascript
const utilisateur = {nom: 'Jean', age: 25};
const infosSupp = {email: 'jean@email.com'};

// Fusionner
const utilisateurComplet = {...utilisateur, ...infosSupp};
console.log(utilisateurComplet); 
// {nom: 'Jean', age: 25, email: 'jean@email.com'}

// Copie
const copie = {...utilisateur};

// Modifier en copiant
const utilisateurModifie = {...utilisateur, age: 26};
```

---

## 🎯 Exemples Pratiques pour Bibliothèque

### Rechercher un livre par ID
```javascript
const livres = [
    {id: 1, titre: 'Le Petit Prince'},
    {id: 2, titre: '1984'},
    {id: 3, titre: 'Gatsby'}
];

function obtenirLivreParId(id) {
    return livres.find(livre => livre.id === id);
}

const livre = obtenirLivreParId(2);
console.log(livre); // {id: 2, titre: '1984'}
```

### Supprimer un utilisateur
```javascript
let utilisateurs = [
    {id: 1, nom: 'Jean'},
    {id: 2, nom: 'Marie'},
    {id: 3, nom: 'Paul'}
];

function supprimerUtilisateur(id) {
    const index = utilisateurs.findIndex(user => user.id === id);
    if (index !== -1) {
        utilisateurs.splice(index, 1);
        return true;
    }
    return false;
}

supprimerUtilisateur(2);
console.log(utilisateurs); // [{id: 1, nom: 'Jean'}, {id: 3, nom: 'Paul'}]
```

### Filtrer les emprunts actifs
```javascript
const emprunts = [
    {id: 1, statut: 'actif'},
    {id: 2, statut: 'retourné'},
    {id: 3, statut: 'actif'}
];

function obtenirEmpruntsActifs() {
    return emprunts.filter(emprunt => emprunt.statut === 'actif');
}

const empruntsActifs = obtenirEmpruntsActifs();
console.log(empruntsActifs); // [{id: 1, statut: 'actif'}, {id: 3, statut: 'actif'}]
```

### Vérifier si un livre est déjà emprunté par un utilisateur
```javascript
const emprunts = [
    {utilisateurId: 1, livreId: 5, statut: 'actif'},
    {utilisateurId: 2, livreId: 3, statut: 'actif'}
];

function verifierEmpruntExistant(utilisateurId, livreId) {
    return emprunts.find(emprunt => 
        emprunt.utilisateurId === utilisateurId && 
        emprunt.livreId === livreId && 
        emprunt.statut === 'actif'
    );
}

const dejaEmprunte = verifierEmpruntExistant(1, 5);
console.log(!!dejaEmprunte); // true
```

### Mettre à jour un objet
```javascript
let livre = {
    id: 1,
    titre: 'Le Petit Prince',
    quantiteDisponible: 3
};

function modifierLivre(id, nouvellesDonnees) {
    // Fusionner les nouvelles données
    livre = {...livre, ...nouvellesDonnees};
    return livre;
}

const livreModifie = modifierLivre(1, {quantiteDisponible: 2});
console.log(livreModifie); 
// {id: 1, titre: 'Le Petit Prince', quantiteDisponible: 2}
```

---

## 💡 Conseils d'utilisation

### ✅ À retenir
- **find()** retourne l'élément ou `undefined`
- **filter()** retourne toujours un tableau (même vide)
- **map()** retourne un nouveau tableau de même taille
- **forEach()** ne retourne rien, sert à exécuter du code
- **Spread operator (...)** est plus moderne qu'Object.assign()

### ⚠️ Pièges courants
```javascript
// ❌ Mauvais - modifie le tableau original
const nombres = [1, 2, 3];
nombres.push(4); // modifie 'nombres'

// ✅ Bon - crée un nouveau tableau
const nombres = [1, 2, 3];
const nouveauxNombres = [...nombres, 4]; // 'nombres' reste intact

// ❌ Mauvais - référence partagée
const utilisateur1 = {nom: 'Jean'};
const utilisateur2 = utilisateur1;
utilisateur2.nom = 'Marie'; // modifie aussi utilisateur1 !

// ✅ Bon - copie indépendante
const utilisateur1 = {nom: 'Jean'};
const utilisateur2 = {...utilisateur1};
utilisateur2.nom = 'Marie'; // utilisateur1 reste 'Jean'
```

Ces fonctions couvrent 90% des besoins pour manipuler arrays et objets en JavaScript ! 🚀