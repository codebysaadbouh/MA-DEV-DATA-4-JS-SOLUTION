# Projet Final - Application CRUD avec Supabase

## Objectif
Créer une application web simple utilisant Supabase pour gérer des profils utilisateurs avec authentification et opérations CRUD.

## Technologies requises
- HTML/CSS/JavaScript
- Supabase (Backend as a Service)
- Authentification Supabase

## Structure du projet

### 1. Configuration Supabase

#### Étape 1 : Création du compte et du projet
1. Créer un compte sur [supabase.com](https://supabase.com)
2. Créer un nouveau projet
3. Noter l'URL du projet et la clé API publique

#### Étape 2 : Configuration de la base de données

**Table `profiles` (obligatoire)**

Créer une table `profiles` pour stocker les informations des utilisateurs.

### 2. Fonctionnalités à implémenter

#### Authentification (obligatoire)
- Inscription d'un nouvel utilisateur
- Connexion utilisateur
- Déconnexion utilisateur
- Gestion des sessions utilisateur

#### Opérations CRUD sur `profiles` (obligatoire)
- **Create** : Créer un profil automatiquement après inscription
- **Read** : Afficher le profil de l'utilisateur connecté
- **Update** : Permettre à l'utilisateur de modifier ses informations
- **Delete** : Permettre la suppression du profil (optionnel)

#### Fonctionnalités supplémentaires
- Validation des formulaires côté client
- Messages d'erreur et de succès appropriés
- Interface utilisateur responsive
- Gestion des états de chargement

### 3. Critères d'évaluation

#### Fonctionnalités de base (18 points)
- Configuration Supabase correcte (3 points)
- Authentification complète (5 points)
- Opérations CRUD fonctionnelles (7 points)
- Interface utilisateur claire et fonctionnelle (3 points)

#### Qualité technique (7 points)
- Code propre et bien structuré (2 points)
- Gestion appropriée des erreurs (2 points)
- Sécurité et validation des données (2 points)
- Documentation et README (1 point)

### 4. Livrables

1. **Code source complet** : Tous les fichiers HTML, CSS et JavaScript
2. **Base de données** : Export ou capture d'écran de la structure des tables
3. **Documentation** : README avec instructions d'installation et d'utilisation
4. **Démonstration** : Application fonctionnelle ou vidéo de présentation

### 5. Ressources utiles

- [Documentation officielle Supabase](https://supabase.com/docs)
- [Guide d'authentification Supabase](https://supabase.com/docs/guides/auth)
- [Documentation JavaScript Client](https://supabase.com/docs/reference/javascript)
- [Guide Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)

### 6. Conseils pour réussir

1. **Planification** : Commencez par configurer Supabase et testez la connexion
2. **Étapes progressives** : Implémentez d'abord l'authentification, puis les profils
3. **Tests réguliers** : Vérifiez chaque fonctionnalité avant de passer à la suivante
5. **Expérience utilisateur** : Ajoutez des messages de feedback et des états de chargement
6. **Documentation** : Commentez votre code et rédigez un README avec votre Prénom & Nom

### 7. Date de rendu
**À définir par l'enseignant**

---

**Bon travail ! 🚀**