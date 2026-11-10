# Documentation Administrateur

## 1. Objectif
Ce document permet à tout développeur de comprendre l'architecture du projet, de l'installer localement et de pouvoir le faire évoluer facilement.

## 2. Stack Technique
- **Langages** : HTML5, CSS3, JavaScript.
- **Outil réseau** : Fetch API (outil natif JavaScript pour communiquer avec les serveurs).
- **Source des données** : API REST OpenData de l'Université du Mans.
- **Visualisation** : D3.js et Echarts (pour la génération des graphiques).

## 3. Arborescence du Projet
Cette section présente l'organisation des fichiers principaux :
- `/docs/` : Contient la documentation du projet (conventions de code, documentation administrateur).
- `/src/api/network.js` : Fichier dédié exclusivement aux requêtes vers l'API.
- `/src/main.js` : Fichier principal qui orchestre l'application.
- `index.html` : Page web principale.

## 4. Déploiement Local

Pour lancer le projet sur votre machine, vous devez d'abord récupérer le code :
1. Cloner le dépôt : `git clone https://github.com/Fightingoold/sae301-dataviz-master-DWEBDI-1.git`
2. Ouvrir le dossier du projet (`sae301-dataviz-master-DWEBDI-1`).

Ensuite, choisissez l'une des deux méthodes suivantes pour lancer le serveur HTTP local :

**Méthode A : Via VS Code (Interface visuelle)**
- **Prérequis** : Utiliser l'éditeur **VS Code** et avoir l'extension **Live Server** installée et activée.
- Ouvrez le dossier du projet dans VS Code.
- Faites un clic droit sur le fichier `index.html` et sélectionnez **"Open with Live Server"**.
- Le navigateur s'ouvrira automatiquement sur une URL locale sécurisée (par exemple : `http://127.0.0.1:5500`).

**Méthode B : Via le Terminal (Ligne de commande)**
- **Prérequis** : Avoir **Node.js** installé sur votre machine.
- Ouvrez votre terminal, placez-vous à la racine du projet et tapez la commande suivante :
  `npx http-server`
- Le terminal va générer un lien local (par exemple : `http://127.0.0.1:8080`). Copiez-collez cette URL dans votre navigateur.

> ⚠️ **Important** : Ne pas ouvrir `index.html` en faisant un simple double-clic dans l'explorateur de fichiers. Le JavaScript de ce projet utilise des modules natifs (`import`/`export`) qui exigent un serveur HTTP pour fonctionner. Un double-clic ouvre le fichier avec le protocole local `file://`, ce qui bloquera les modules et le chargement des données de l'API.

## 5. Configuration
Si l'environnement de l'application doit être modifié, voici les paramètres globaux à mettre à jour manuellement dans le code :
- **URL de l'API** : Située dans la constante `BASE_URL` tout en haut du fichier `src/api/network.js`.
- **Ciblage de la discipline** : L'application est actuellement configurée pour la filière STAPS (Secteur disciplinaire ID = `10`). Ce paramètre d'identifiant se modifie directement dans les filtres envoyés depuis `src/main.js`.

## 6. Conception Logicielle
Le code est découpé en plusieurs composants (fichiers) pour garantir sa lisibilité et faciliter sa maintenance :
- **`network.js` (Composant Réseau)** : Sa seule responsabilité est de communiquer avec internet. Il prépare les requêtes, va chercher les données sur l'API, gère les erreurs de connexion et renvoie les données propres au format JSON.
- **`main.js` (Orchestrateur)** : C'est le chef d'orchestre. Il ne fait aucune requête directe sur internet ; il appelle `network.js` pour obtenir les données STAPS, puis il se chargera de les transmettre aux futurs outils de visualisation (graphiques).

## 7. Roadmap (Évolutions prévues)
- **Sprint 2** : Développement du premier prototype (intégration de l'API, gestion du réseau et préparation de l'architecture).
- **Sprint 3** : Traitement des données et intégration des graphiques interactifs (D3.js/Echarts).

## 8. Bugs tracking
- **Statut actuel** : Aucun bug technique recensé à ce stade du développement.