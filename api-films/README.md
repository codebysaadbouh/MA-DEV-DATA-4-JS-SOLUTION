# 🎬 Exercice API Films - TMDB

## 📋 Énoncé

Créez une application de recherche de films utilisant l'API gratuite de **The Movie Database (TMDB)**.

### Fonctionnalités à implémenter :

1. **🔍 Recherche de films**
   - Un formulaire pour taper le nom d'un film
   - Affichage des résultats sous forme de cartes
   - Informations : titre, affiche, année, note, description

2. **📱 Interface responsive**
   - Design moderne avec Bootstrap
   - Cartes de films attractives
   - Messages d'erreur et de chargement

## 🚀 Configuration

### Étape 1: Obtenir une clé API gratuite TMDB <mcreference link="https://developer.themoviedb.org/docs/getting-started" index="0">0</mcreference>

1. Allez sur [TMDB](https://www.themoviedb.org/)
2. Créez un compte gratuit
3. Allez dans **Paramètres** → **API**
4. Demandez une clé API (gratuite)
5. Copiez votre clé API

### Étape 2: Configuration du code

Dans `script.js`, remplacez :
```javascript
const API_KEY = 'YOUR_API_KEY';
```
par votre vraie clé API TMDB.

## 🎯 Fonctionnalités implémentées

### ✅ Fonctionnalités de base
- [x] Formulaire de recherche de films
- [x] Affichage des résultats en cartes
- [x] Informations film : titre, affiche, année, note
- [x] Gestion des erreurs (film non trouvé, clé API invalide)
- [x] Interface responsive
- [x] Indicateurs de chargement

### 🎁 Fonctionnalités bonus
- [x] Bouton "Voir détails" avec popup d'informations
- [x] Gestion des images manquantes
- [x] Limitation à 12 résultats pour la performance
- [x] Descriptions tronquées automatiquement

## 🛠️ Technologies utilisées

- **HTML5** - Structure de la page
- **CSS3** - Styles personnalisés + Bootstrap 5
- **JavaScript ES6+** - Logique de l'application
- **Fetch API** - Appels HTTP vers TMDB
- **TMDB API** - Base de données de films

## 📚 Concepts JavaScript abordés

1. **API REST et Fetch**
   - Appels HTTP asynchrones
   - Gestion des paramètres d'URL
   - Traitement des réponses JSON

2. **Manipulation du DOM**
   - Création dynamique d'éléments HTML
   - Template literals pour le HTML
   - Gestion des événements

3. **Gestion des erreurs**
   - Try/catch avec async/await
   - Codes de statut HTTP
   - Messages utilisateur appropriés

4. **Fonctions modernes**
   - Async/await
   - Array methods (map, slice)
   - Template literals
   - Destructuring

## 🎮 Utilisation

1. **Recherche simple :**
   - Tapez "Avatar" dans le champ de recherche
   - Cliquez sur "Rechercher"
   - Explorez les résultats

2. **Exemples de recherches :**
   - "Spider-Man" → Films Spider-Man
   - "Avengers" → Films Marvel
   - "Harry Potter" → Saga Harry Potter
   - "Titanic" → Film de James Cameron

## 🎯 Exercices d'extension possibles

1. **Filtres avancés** - Par année, genre, note minimale
2. **Pagination** - Charger plus de résultats
3. **Favoris** - Sauvegarder des films en local
4. **Détails complets** - Page dédiée pour chaque film
5. **Acteurs** - Recherche par acteur
6. **Trending** - Films populaires du moment

## 🔧 Dépannage

### Erreur "Clé API invalide"
- Vérifiez que vous avez bien remplacé `YOUR_API_KEY`
- Assurez-vous que votre clé API TMDB est active

### Aucun résultat trouvé
- Vérifiez l'orthographe du film
- Essayez avec le titre original en anglais
- Testez avec des films populaires (Avatar, Titanic)

### Images ne s'affichent pas
- Normal pour certains films anciens
- L'application gère automatiquement les images manquantes

## 📖 Documentation API

- [TMDB API Documentation](https://developer.themoviedb.org/docs) <mcreference link="https://developer.themoviedb.org/docs/getting-started" index="0">0</mcreference>
- [Endpoints disponibles](https://developer.themoviedb.org/reference)
- [Guide d'authentification](https://developer.themoviedb.org/docs/authentication-application)

## 💡 Conseils pédagogiques

- **Commencez simple** : testez d'abord avec une recherche basique
- **Explorez l'API** : regardez les données retournées dans la console
- **Gérez les erreurs** : testez avec des films inexistants
- **Personnalisez** : modifiez les couleurs, ajoutez des fonctionnalités
- **Optimisez** : limitez le nombre de résultats pour la performance

## 🏆 Objectifs d'apprentissage

À la fin de cet exercice, les étudiants sauront :

1. **Utiliser une API REST** externe
2. **Gérer l'asynchrone** avec async/await
3. **Manipuler le DOM** dynamiquement
4. **Créer une interface** responsive
5. **Gérer les erreurs** utilisateur
6. **Travailler avec des images** externes
7. **Structurer un projet** JavaScript

Bon développement ! 🚀🎬