# 🌤️ Exercice API Météo - JavaScript

## 📋 Énoncé

Créez une application météo avec **deux fonctionnalités principales** :

### 1. 🔍 Recherche par ville
- Un formulaire où l'utilisateur tape le nom d'une ville
- Affichage de la température et informations météo de cette ville

### 2. 📍 Géolocalisation
- Un bouton pour demander la géolocalisation à l'utilisateur
- Si l'utilisateur accepte, afficher sa météo locale dans une section séparée

## 🚀 Configuration

### Étape 1: Obtenir une clé API gratuite
1. Allez sur [OpenWeatherMap](https://openweathermap.org/api)
2. Créez un compte gratuit
3. Récupérez votre clé API dans votre profil

### Étape 2: Configuration du code
Dans `script.js`, remplacez :
```javascript
const API_KEY = 'YOUR_API_KEY';
```
par votre vraie clé API.

## 🎯 Fonctionnalités à implémenter

### ✅ Fonctionnalités de base
- [x] Formulaire de recherche par ville
- [x] Affichage température + description météo
- [x] Bouton géolocalisation
- [x] Gestion des permissions géolocalisation
- [x] Deux sections distinctes sur la page
- [x] Gestion des erreurs (ville introuvable, permission refusée, etc.)

### 🔧 Concepts JavaScript utilisés
- **API Geolocation** - `navigator.geolocation`
- **Fetch API** - Appels HTTP vers OpenWeatherMap
- **Async/Await** - Gestion asynchrone
- **DOM Manipulation** - Affichage dynamique des résultats
- **Event Listeners** - Gestion des clics et soumissions
- **Error Handling** - Try/catch et gestion des cas d'erreur

## 📱 Utilisation

1. **Pour la géolocalisation :**
   - Cliquez sur "Obtenir ma météo locale"
   - Acceptez la demande de géolocalisation du navigateur
   - Votre météo locale s'affiche

2. **Pour la recherche par ville :**
   - Tapez le nom d'une ville dans le formulaire
   - Cliquez sur "Rechercher"
   - La météo de la ville s'affiche

## 🛠️ Structure du projet