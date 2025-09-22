# 🏋️‍♂️ Projet : Calculateur d'IMC (Indice de Masse Corporelle)                                                                                        

Bienvenue dans ce projet de calculateur d'IMC, conçu pour vous aider à mieux comprendre les concepts de base en programmation, tels que la manipulation des fonctions, la validation des données et la gestion des conditions.

---

## 🎯 Objectif du projet

L'objectif est de créer un programme interactif qui calcule l'IMC d'une personne en fonction de son poids et de sa taille.  
Le programme devra non seulement fournir le résultat, mais aussi interpréter cette valeur pour l'utilisateur.

---

## 🛠️ Fonctionnalités à implémenter

### 1. Saisie des données utilisateur
- Le programme doit demander à l'utilisateur de saisir son poids en kilogrammes (kg).
- Le programme doit demander à l'utilisateur de saisir sa taille.
- Deux unités doivent être acceptées :
  - **cm** (centimètres)
  - **m** (mètres)
- Le programme doit guider l'utilisateur pour qu'il choisisse l'unité appropriée.

### 2. Validation des données
- Les valeurs saisies doivent être **des nombres valides et positifs**.
- En cas de saisie invalide (texte, nombre négatif ou zéro), le programme doit afficher un message d'erreur et redemander la valeur.

### 3. Fonction de calcul
- Créez une fonction nommée `imcCalculator(poids, taille, unite)`.
- Paramètres :
  - `poids` en kg
  - `taille` en cm ou m
  - `unite` indiquant si la taille est en `"cm"` ou `"m"`
- Si la taille est donnée en centimètres, elle doit être convertie en mètres.
- Formule :  IMC = poids (kg) / taille² (m)

- La fonction doit **retourner l'IMC arrondi à deux décimales**.

### 4. Affichage des résultats
- Une fois l’IMC calculé, le programme doit afficher :
- La valeur de l'IMC
- La classification selon l’**OMS** :

| IMC              | Classification            |
|------------------|---------------------------|
| Moins de 18.5    | Insuffisance pondérale    |
| 18.5 à 24.9      | Poids normal              |
| 25.0 à 29.9      | Surpoids                  |
| 30.0 et plus     | Obésité                   |

---

## 👨‍💻 Code de départ

Vous devez compléter le code suivant en JavaScript :

```javascript
/**
* - Calculer l'IMC d'une personne
* * L'objectif est de créer une fonction robuste qui prend en charge le poids et la taille
* pour retourner un IMC précis, puis d'afficher un résultat clair et informatif.
*/

function imcCalculator(poids, taille, unite) {
  // Étape 1 : Valider les données
  // Étape 2 : Convertir la taille en mètres si nécessaire
  // Étape 3 : Calculer l'IMC
  // Étape 4 : Retourner le résultat arrondi
}

// Exemple d'utilisation finale du programme
// let poidsUtilisateur = ... ;
// let tailleUtilisateur = ... ;
// let imcFinal = imcCalculator(poidsUtilisateur, tailleUtilisateur, 'cm'); 
// console.log(`Votre IMC est de ${imcFinal}. Vous êtes en classification de ...`);
```


## ✅ Critères de réussite

Le programme gère correctement les entrées invalides sans planter.

La fonction imcCalculator est réutilisable et ne contient aucune logique d'affichage.

Le résultat affiché est clair et inclut à la fois la valeur de l’IMC et sa classification.