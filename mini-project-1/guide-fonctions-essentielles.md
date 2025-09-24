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

## ✏️ GUIDE COMPLET : Gestion de la Modification

### 🎯 Méthode 1 : **find() + Modification directe** (RECOMMANDÉE)

#### Principe
1. Trouver l'**objet** à modifier avec `find()`
2. Modifier directement ses propriétés
3. L'objet dans le tableau est automatiquement mis à jour

#### Exemple pratique - Modifier un utilisateur
```javascript
let utilisateurs = [
    {id: 1, nom: 'Jean', email: 'jean@email.com', age: 25},
    {id: 2, nom: 'Marie', email: 'marie@email.com', age: 30},
    {id: 3, nom: 'Paul', email: 'paul@email.com', age: 28}
];

function modifierUtilisateur(id, nouvellesDonnees) {
    // 1. Trouver l'utilisateur
    const utilisateur = utilisateurs.find(user => user.id === id);
    
    // 2. Vérifier s'il existe
    if (utilisateur) {
        // 3. Modifier les propriétés une par une
        if (nouvellesDonnees.nom) utilisateur.nom = nouvellesDonnees.nom;
        if (nouvellesDonnees.email) utilisateur.email = nouvellesDonnees.email;
        if (nouvellesDonnees.age) utilisateur.age = nouvellesDonnees.age;
        
        console.log(`✅ Utilisateur modifié:`, utilisateur);
        return utilisateur;
    } else {
        console.log(`❌ Utilisateur avec ID ${id} non trouvé`);
        return null;
    }
}

// Test
modifierUtilisateur(2, {nom: 'Marie Dupont', age: 31});
console.log(utilisateurs[1]); // {id: 2, nom: 'Marie Dupont', email: 'marie@email.com', age: 31}
```

#### Exemple - Modifier un livre
```javascript
let livres = [
    {id: 1, titre: 'Le Petit Prince', auteur: 'Saint-Exupéry', quantite: 3},
    {id: 2, titre: '1984', auteur: 'Orwell', quantite: 2},
    {id: 3, titre: 'Gatsby', auteur: 'Fitzgerald', quantite: 1}
];

function modifierLivre(id, nouvellesDonnees) {
    const livre = livres.find(l => l.id === id);
    
    if (livre) {
        // Utiliser Object.assign pour fusionner
        Object.assign(livre, nouvellesDonnees);
        console.log(`✅ Livre "${livre.titre}" modifié`);
        return livre;
    }
    
    console.log(`❌ Livre avec ID ${id} non trouvé`);
    return null;
}

// Test
modifierLivre(1, {quantite: 5, auteur: 'Antoine de Saint-Exupéry'});
console.log(livres[0]); // Quantité et auteur mis à jour
```

### 🎯 Méthode 2 : **Spread Operator** (MODERNE)

#### Principe
Utiliser le spread operator `...` pour créer un nouvel objet avec les modifications

```javascript
let utilisateurs = [
    {id: 1, nom: 'Jean', email: 'jean@email.com'},
    {id: 2, nom: 'Marie', email: 'marie@email.com'},
    {id: 3, nom: 'Paul', email: 'paul@email.com'}
];

function modifierUtilisateurAvecSpread(id, nouvellesDonnees) {
    const index = utilisateurs.findIndex(user => user.id === id);
    
    if (index !== -1) {
        // Créer un nouvel objet avec les anciennes + nouvelles données
        utilisateurs[index] = {
            ...utilisateurs[index],  // Anciennes données
            ...nouvellesDonnees      // Nouvelles données (écrasent les anciennes)
        };
        
        console.log(`✅ Utilisateur modifié:`, utilisateurs[index]);
        return utilisateurs[index];
    }
    
    console.log(`❌ Utilisateur non trouvé`);
    return null;
}

// Test
modifierUtilisateurAvecSpread(2, {nom: 'Marie Martin', age: 32});
```

### 🎯 Méthode 3 : **map()** pour modification immutable

#### Principe
Créer un nouveau tableau avec l'élément modifié

```javascript
let livres = [
    {id: 1, titre: 'Le Petit Prince', quantite: 3},
    {id: 2, titre: '1984', quantite: 2},
    {id: 3, titre: 'Gatsby', quantite: 1}
];

function modifierLivreImmutable(id, nouvellesDonnees) {
    const nouveauxLivres = livres.map(livre => {
        if (livre.id === id) {
            // Retourner un nouvel objet modifié
            return {...livre, ...nouvellesDonnees};
        }
        // Retourner l'objet inchangé
        return livre;
    });
    
    // Remplacer le tableau
    livres = nouveauxLivres;
    
    const livreModifie = livres.find(l => l.id === id);
    console.log(`✅ Livre modifié:`, livreModifie);
    return livreModifie;
}

modifierLivreImmutable(2, {quantite: 5, titre: '1984 - Nouvelle édition'});
```

### 🔄 Modifications Spécifiques

#### Incrémenter/Décrémenter une quantité
```javascript
let livres = [
    {id: 1, titre: 'Le Petit Prince', quantiteDisponible: 3, quantiteTotal: 5},
    {id: 2, titre: '1984', quantiteDisponible: 1, quantiteTotal: 3}
];

function emprunterLivre(livreId) {
    const livre = livres.find(l => l.id === livreId);
    
    if (livre && livre.quantiteDisponible > 0) {
        livre.quantiteDisponible--; // Décrémenter
        console.log(`📚 Livre emprunté. Quantité restante: ${livre.quantiteDisponible}`);
        return true;
    }
    
    console.log(`❌ Livre non disponible`);
    return false;
}

function retournerLivre(livreId) {
    const livre = livres.find(l => l.id === livreId);
    
    if (livre && livre.quantiteDisponible < livre.quantiteTotal) {
        livre.quantiteDisponible++; // Incrémenter
        console.log(`📚 Livre retourné. Quantité disponible: ${livre.quantiteDisponible}`);
        return true;
    }
    
    console.log(`❌ Erreur lors du retour`);
    return false;
}

// Tests
emprunterLivre(1); // Quantité passe de 3 à 2
retournerLivre(1);  // Quantité passe de 2 à 3
```

#### Changer le statut d'un emprunt
```javascript
let emprunts = [
    {id: 1, utilisateurId: 1, livreId: 2, statut: 'actif', dateEmprunt: '2024-01-15'},
    {id: 2, utilisateurId: 2, livreId: 1, statut: 'actif', dateEmprunt: '2024-01-10'}
];

function marquerCommeRetourne(empruntId) {
    const emprunt = emprunts.find(e => e.id === empruntId);
    
    if (emprunt && emprunt.statut === 'actif') {
        emprunt.statut = 'retourné';
        emprunt.dateRetour = new Date().toLocaleDateString();
        
        console.log(`✅ Emprunt ${empruntId} marqué comme retourné`);
        return emprunt;
    }
    
    console.log(`❌ Emprunt non trouvé ou déjà retourné`);
    return null;
}

marquerCommeRetourne(1);
console.log(emprunts[0]); // statut: 'retourné', dateRetour ajoutée
```

### 🎯 Interface Utilisateur - Formulaires de Modification

#### HTML pour modification
```html
<div id="formulaire-modification" style="display: none;">
    <h3>Modifier l'utilisateur</h3>
    <form id="form-modifier-utilisateur">
        <input type="hidden" id="modifier-id">
        <input type="text" id="modifier-nom" placeholder="Nom" required>
        <input type="email" id="modifier-email" placeholder="Email" required>
        <input type="number" id="modifier-age" placeholder="Âge">
        <button type="submit">💾 Sauvegarder</button>
        <button type="button" onclick="annulerModification()">❌ Annuler</button>
    </form>
</div>

<div id="liste-utilisateurs">
    <!-- Liste générée dynamiquement -->
</div>
```

#### JavaScript pour l'interface de modification
```javascript
function afficherUtilisateurs() {
    const container = document.getElementById('liste-utilisateurs');
    
    container.innerHTML = utilisateurs.map(user => `
        <div class="utilisateur-item">
            <span>${user.nom} - ${user.email} (${user.age} ans)</span>
            <button onclick="ouvrirModification(${user.id})" class="btn-modifier">
                ✏️ Modifier
            </button>
            <button onclick="confirmerSuppression(${user.id}, '${user.nom}')" class="btn-supprimer">
                🗑️ Supprimer
            </button>
        </div>
    `).join('');
}

function ouvrirModification(id) {
    const utilisateur = utilisateurs.find(user => user.id === id);
    
    if (utilisateur) {
        // Remplir le formulaire avec les données actuelles
        document.getElementById('modifier-id').value = utilisateur.id;
        document.getElementById('modifier-nom').value = utilisateur.nom;
        document.getElementById('modifier-email').value = utilisateur.email;
        document.getElementById('modifier-age').value = utilisateur.age || '';
        
        // Afficher le formulaire
        document.getElementById('formulaire-modification').style.display = 'block';
    }
}

function annulerModification() {
    document.getElementById('formulaire-modification').style.display = 'none';
    document.getElementById('form-modifier-utilisateur').reset();
}

// Gestionnaire de soumission du formulaire
document.getElementById('form-modifier-utilisateur').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const id = parseInt(document.getElementById('modifier-id').value);
    const nouvellesDonnees = {
        nom: document.getElementById('modifier-nom').value,
        email: document.getElementById('modifier-email').value,
        age: parseInt(document.getElementById('modifier-age').value) || undefined
    };
    
    const succes = modifierUtilisateur(id, nouvellesDonnees);
    
    if (succes) {
        afficherUtilisateurs(); // Rafraîchir la liste
        annulerModification(); // Fermer le formulaire
        alert('Utilisateur modifié avec succès !');
    }
});
```

### 🔄 Modification en lot

#### Modifier plusieurs éléments d'un coup
```javascript
let utilisateurs = [
    {id: 1, nom: 'Jean', actif: true, dernierAcces: '2024-01-01'},
    {id: 2, nom: 'Marie', actif: false, dernierAcces: '2023-12-15'},
    {id: 3, nom: 'Paul', actif: true, dernierAcces: '2024-01-10'}
];

function desactiverUtilisateursInactifs() {
    const dateLimit = new Date('2024-01-01');
    let nombreModifies = 0;
    
    utilisateurs.forEach(user => {
        const dernierAcces = new Date(user.dernierAcces);
        
        if (dernierAcces < dateLimit && user.actif) {
            user.actif = false;
            user.raisonDesactivation = 'Inactivité prolongée';
            nombreModifies++;
        }
    });
    
    console.log(`${nombreModifies} utilisateur(s) désactivé(s) pour inactivité`);
    return nombreModifies;
}

desactiverUtilisateursInactifs();
```

#### Mettre à jour les quantités après inventaire
```javascript
let livres = [
    {id: 1, titre: 'Le Petit Prince', quantiteTotal: 5, quantiteDisponible: 3},
    {id: 2, titre: '1984', quantiteTotal: 3, quantiteDisponible: 1},
    {id: 3, titre: 'Gatsby', quantiteTotal: 2, quantiteDisponible: 2}
];

function mettreAJourInventaire(nouvellesQuantites) {
    // nouvellesQuantites = [{id: 1, quantiteTotal: 6}, {id: 2, quantiteTotal: 4}]
    
    nouvellesQuantites.forEach(item => {
        const livre = livres.find(l => l.id === item.id);
        
        if (livre) {
            const difference = item.quantiteTotal - livre.quantiteTotal;
            livre.quantiteTotal = item.quantiteTotal;
            livre.quantiteDisponible += difference; // Ajuster la quantité disponible
            
            console.log(`📚 ${livre.titre}: ${livre.quantiteTotal} exemplaires (${difference > 0 ? '+' : ''}${difference})`);
        }
    });
}

// Test
mettreAJourInventaire([
    {id: 1, quantiteTotal: 6}, // +1 exemplaire
    {id: 2, quantiteTotal: 4}  // +1 exemplaire
]);
```

### ⚠️ Erreurs Courantes à Éviter

#### ❌ Erreur 1 : Modifier un objet inexistant
```javascript
// ❌ MAUVAIS - peut causer une erreur
function modifierUtilisateur(id, donnees) {
    const utilisateur = utilisateurs.find(user => user.id === id);
    utilisateur.nom = donnees.nom; // Erreur si utilisateur = undefined !
}

// ✅ BON - toujours vérifier
function modifierUtilisateur(id, donnees) {
    const utilisateur = utilisateurs.find(user => user.id === id);
    
    if (utilisateur) {
        utilisateur.nom = donnees.nom;
        return utilisateur;
    }
    
    console.log('Utilisateur non trouvé');
    return null;
}
```

#### ❌ Erreur 2 : Écraser toutes les propriétés
```javascript
// ❌ MAUVAIS - perd les autres propriétés
function modifierUtilisateur(id, donnees) {
    const index = utilisateurs.findIndex(user => user.id === id);
    utilisateurs[index] = donnees; // Perd l'ID et autres propriétés !
}

// ✅ BON - fusionner avec les données existantes
function modifierUtilisateur(id, donnees) {
    const index = utilisateurs.findIndex(user => user.id === id);
    if (index !== -1) {
        utilisateurs[index] = {...utilisateurs[index], ...donnees};
    }
}
```

#### ❌ Erreur 3 : Modifier des données sensibles
```javascript
// ❌ MAUVAIS - permettre de modifier l'ID
function modifierUtilisateur(id, donnees) {
    const utilisateur = utilisateurs.find(user => user.id === id);
    if (utilisateur) {
        Object.assign(utilisateur, donnees); // Peut modifier l'ID !
    }
}

// ✅ BON - filtrer les propriétés autorisées
function modifierUtilisateur(id, donnees) {
    const utilisateur = utilisateurs.find(user => user.id === id);
    if (utilisateur) {
        // Seulement les propriétés autorisées
        const proprietesAutorisees = ['nom', 'email', 'age'];
        
        proprietesAutorisees.forEach(prop => {
            if (donnees[prop] !== undefined) {
                utilisateur[prop] = donnees[prop];
            }
        });
    }
}
```

### 📝 Résumé - Checklist Modification

#### ✅ Étapes à suivre
1. **Trouver** l'élément à modifier (avec `find()` ou `findIndex()`)
2. **Vérifier** qu'il existe
3. **Valider** les nouvelles données
4. **Modifier** les propriétés autorisées seulement
5. **Confirmer** à l'utilisateur
6. **Rafraîchir** l'affichage

#### 🔧 Fonctions utiles pour la modification
- `find()` - Trouver l'objet à modifier
- `findIndex()` - Trouver la position dans le tableau
- `Object.assign()` - Fusionner les propriétés
- `...` (spread) - Créer un nouvel objet avec modifications
- `map()` - Modification immutable

#### 💡 Bonnes pratiques
- Toujours vérifier que l'élément existe
- Ne pas modifier les propriétés sensibles (ID, dates de création)
- Valider les données avant modification
- Donner un feedback à l'utilisateur
- Prévoir l'annulation des modifications

---

## 🗑️ GUIDE COMPLET : Gestion de la Suppression

### 🎯 Méthode 1 : **findIndex() + splice()** (RECOMMANDÉE)

#### Principe
1. Trouver l'**index** de l'élément à supprimer avec `findIndex()`
2. Supprimer l'élément avec `splice()` si trouvé

#### Exemple pratique - Supprimer un utilisateur
```javascript
let utilisateurs = [
    {id: 1, nom: 'Jean', email: 'jean@email.com'},
    {id: 2, nom: 'Marie', email: 'marie@email.com'},
    {id: 3, nom: 'Paul', email: 'paul@email.com'}
];

function supprimerUtilisateur(id) {
    // 1. Trouver l'index de l'utilisateur
    const index = utilisateurs.findIndex(user => user.id === id);
    
    // 2. Vérifier si trouvé
    if (index !== -1) {
        // 3. Supprimer avec splice
        const utilisateurSupprime = utilisateurs.splice(index, 1)[0];
        console.log(`Utilisateur supprimé:`, utilisateurSupprime);
        return true; // Succès
    } else {
        console.log(`Utilisateur avec ID ${id} non trouvé`);
        return false; // Échec
    }
}

// Test
console.log('Avant:', utilisateurs.length); // 3
supprimerUtilisateur(2); // Supprime Marie
console.log('Après:', utilisateurs.length); // 2
console.log(utilisateurs); // Jean et Paul restent
```

#### Exemple - Supprimer un livre
```javascript
let livres = [
    {id: 1, titre: 'Le Petit Prince', quantite: 3},
    {id: 2, titre: '1984', quantite: 2},
    {id: 3, titre: 'Gatsby', quantite: 1}
];

function supprimerLivre(id) {
    const index = livres.findIndex(livre => livre.id === id);
    
    if (index !== -1) {
        const livreSupprime = livres.splice(index, 1)[0];
        console.log(`Livre "${livreSupprime.titre}" supprimé`);
        return livreSupprime;
    }
    
    console.log(`Livre avec ID ${id} non trouvé`);
    return null;
}

supprimerLivre(2); // Supprime "1984"
```

### 🎯 Méthode 2 : **filter()** (ALTERNATIVE)

#### Principe
Créer un **nouveau tableau** sans l'élément à supprimer

```javascript
let utilisateurs = [
    {id: 1, nom: 'Jean'},
    {id: 2, nom: 'Marie'},
    {id: 3, nom: 'Paul'}
];

function supprimerUtilisateurAvecFilter(id) {
    const tailleBefore = utilisateurs.length;
    
    // Garder tous les utilisateurs SAUF celui avec l'ID donné
    utilisateurs = utilisateurs.filter(user => user.id !== id);
    
    const tailleAfter = utilisateurs.length;
    
    if (tailleBefore > tailleAfter) {
        console.log(`Utilisateur avec ID ${id} supprimé`);
        return true;
    } else {
        console.log(`Utilisateur avec ID ${id} non trouvé`);
        return false;
    }
}

supprimerUtilisateurAvecFilter(2); // Supprime Marie
```

### 🚨 Suppression avec Contraintes Métier

#### Exemple : Ne pas supprimer un utilisateur avec emprunts actifs
```javascript
let utilisateurs = [
    {id: 1, nom: 'Jean'},
    {id: 2, nom: 'Marie'},
    {id: 3, nom: 'Paul'}
];

let emprunts = [
    {id: 1, utilisateurId: 1, livreId: 5, statut: 'actif'},
    {id: 2, utilisateurId: 3, livreId: 2, statut: 'retourné'}
];

function supprimerUtilisateurSecurise(id) {
    // 1. Vérifier s'il a des emprunts actifs
    const aEmpruntsActifs = emprunts.some(emprunt => 
        emprunt.utilisateurId === id && emprunt.statut === 'actif'
    );
    
    if (aEmpruntsActifs) {
        console.log(`❌ Impossible de supprimer: l'utilisateur a des emprunts actifs`);
        return false;
    }
    
    // 2. Supprimer si pas d'emprunts actifs
    const index = utilisateurs.findIndex(user => user.id === id);
    if (index !== -1) {
        const utilisateurSupprime = utilisateurs.splice(index, 1)[0];
        console.log(`✅ Utilisateur "${utilisateurSupprime.nom}" supprimé`);
        return true;
    }
    
    console.log(`❌ Utilisateur non trouvé`);
    return false;
}

// Tests
supprimerUtilisateurSecurise(1); // ❌ Jean a un emprunt actif
supprimerUtilisateurSecurise(3); // ✅ Paul n'a pas d'emprunt actif
```

#### Exemple : Ne pas supprimer un livre emprunté
```javascript
let livres = [
    {id: 1, titre: 'Le Petit Prince'},
    {id: 2, titre: '1984'},
    {id: 3, titre: 'Gatsby'}
];

let emprunts = [
    {id: 1, livreId: 1, statut: 'actif'},
    {id: 2, livreId: 2, statut: 'retourné'}
];

function supprimerLivreSecurise(id) {
    // 1. Vérifier si le livre est emprunté
    const estEmprunte = emprunts.some(emprunt => 
        emprunt.livreId === id && emprunt.statut === 'actif'
    );
    
    if (estEmprunte) {
        console.log(`❌ Impossible de supprimer: le livre est actuellement emprunté`);
        return false;
    }
    
    // 2. Supprimer si pas emprunté
    const index = livres.findIndex(livre => livre.id === id);
    if (index !== -1) {
        const livreSupprime = livres.splice(index, 1)[0];
        console.log(`✅ Livre "${livreSupprime.titre}" supprimé`);
        return true;
    }
    
    console.log(`❌ Livre non trouvé`);
    return false;
}

// Tests
supprimerLivreSecurise(1); // ❌ Le Petit Prince est emprunté
supprimerLivreSecurise(2); // ✅ 1984 n'est pas emprunté
```

### 🔧 Suppression Multiple

#### Supprimer plusieurs éléments d'un coup
```javascript
let utilisateurs = [
    {id: 1, nom: 'Jean', actif: false},
    {id: 2, nom: 'Marie', actif: true},
    {id: 3, nom: 'Paul', actif: false},
    {id: 4, nom: 'Sophie', actif: true}
];

function supprimerUtilisateursInactifs() {
    const avant = utilisateurs.length;
    
    // Garder seulement les utilisateurs actifs
    utilisateurs = utilisateurs.filter(user => user.actif === true);
    
    const apres = utilisateurs.length;
    const nombreSupprimes = avant - apres;
    
    console.log(`${nombreSupprimes} utilisateur(s) inactif(s) supprimé(s)`);
    return nombreSupprimes;
}

supprimerUtilisateursInactifs(); // Supprime Jean et Paul
console.log(utilisateurs); // Reste Marie et Sophie
```

### 🎯 Interface Utilisateur - Boutons de Suppression

#### HTML avec boutons de suppression
```html
<div id="liste-utilisateurs">
    <!-- Généré dynamiquement -->
</div>
```

#### JavaScript pour afficher avec boutons
```javascript
function afficherUtilisateurs() {
    const container = document.getElementById('liste-utilisateurs');
    
    container.innerHTML = utilisateurs.map(user => `
        <div class="utilisateur-item">
            <span>${user.nom} (${user.email})</span>
            <button onclick="confirmerSuppression(${user.id}, '${user.nom}')" 
                    class="btn-supprimer">
                🗑️ Supprimer
            </button>
        </div>
    `).join('');
}

function confirmerSuppression(id, nom) {
    // Demander confirmation
    const confirmation = confirm(`Êtes-vous sûr de vouloir supprimer "${nom}" ?`);
    
    if (confirmation) {
        const succes = supprimerUtilisateur(id);
        if (succes) {
            afficherUtilisateurs(); // Rafraîchir l'affichage
            alert(`"${nom}" a été supprimé avec succès`);
        }
    }
}
```

### ⚠️ Erreurs Courantes à Éviter

#### ❌ Erreur 1 : Modifier un tableau pendant qu'on le parcourt
```javascript
// ❌ MAUVAIS - peut causer des bugs
for (let i = 0; i < utilisateurs.length; i++) {
    if (utilisateurs[i].actif === false) {
        utilisateurs.splice(i, 1); // Modifie la taille pendant la boucle !
    }
}

// ✅ BON - parcourir à l'envers
for (let i = utilisateurs.length - 1; i >= 0; i--) {
    if (utilisateurs[i].actif === false) {
        utilisateurs.splice(i, 1);
    }
}

// ✅ MEILLEUR - utiliser filter
utilisateurs = utilisateurs.filter(user => user.actif === true);
```

#### ❌ Erreur 2 : Ne pas vérifier si l'élément existe
```javascript
// ❌ MAUVAIS
function supprimerUtilisateur(id) {
    const index = utilisateurs.findIndex(user => user.id === id);
    utilisateurs.splice(index, 1); // Erreur si index = -1 !
}

// ✅ BON
function supprimerUtilisateur(id) {
    const index = utilisateurs.findIndex(user => user.id === id);
    if (index !== -1) {
        utilisateurs.splice(index, 1);
        return true;
    }
    return false;
}
```

### 📝 Résumé - Checklist Suppression

#### ✅ Étapes à suivre
1. **Trouver** l'élément (avec `findIndex()`)
2. **Vérifier** qu'il existe (`index !== -1`)
3. **Contrôler** les contraintes métier (emprunts, etc.)
4. **Supprimer** avec `splice()` ou `filter()`
5. **Confirmer** à l'utilisateur
6. **Rafraîchir** l'affichage

#### 🔧 Fonctions utiles pour la suppression
- `findIndex()` - Trouver la position
- `splice()` - Supprimer à une position
- `filter()` - Créer un nouveau tableau sans l'élément
- `some()` - Vérifier des contraintes
- `confirm()` - Demander confirmation à l'utilisateur

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