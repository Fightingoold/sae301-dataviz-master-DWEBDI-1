# Conventions de développement

**SAE 3.01 / 3.03 | Datavisualisation STAPS**

Ce document définit les conventions communes à respecter pour garantir la cohérence du code et faciliter l'intégration des différentes parties du projet.

## 1. Conventions de nommage

| Élément | Convention | Exemple |
|---|---|---|
| Dossiers | kebab-case | `data-processing/` |
| Fichiers JavaScript | kebab-case | `api-service.js` |
| Variables | camelCase | `selectedRegion` |
| Fonctions | camelCase | `getStatistics()` |
| Constantes globales | UPPER_SNAKE_CASE | `API_BASE_URL` |
| Classes JavaScript | PascalCase | `ChartManager` |
| Classes CSS | kebab-case | `.chart-container` |
| Identifiants HTML | kebab-case | `id="main-chart"` |

Les noms dans le code sont rédigés en **anglais**. Les commentaires et la documentation sont rédigés en **français**.

## 2. Architecture du projet

L'organisation des fichiers se fait par responsabilité technique.

```text
projet-staps/
├── index.html
├── src/
│   ├── main.js
│   ├── api/
│   ├── data/
│   ├── components/
│   ├── visualizations/
│   └── styles/
├── README.md
└── .gitignore
```

- `api/` : communication avec l'API REST.
- `data/` : filtrage, transformation et calculs.
- `components/` : éléments réutilisables de l'interface.
- `visualizations/` : graphiques et visualisations.
- `styles/` : feuilles de style.
- `main.js` : initialisation et coordination de l'application.

## 3. Modules JavaScript

Utiliser les modules ES (ESM), avec des **exports nommés** et des **chemins relatifs**.

```js
// data/statistics.js
export function getStatistics() {
  // ...
}
```

```js
// main.js
import { getStatistics } from './data/statistics.js';
```

Chaque module doit avoir une responsabilité clairement définie.

Éviter les dépendances circulaires et les duplications de code.

## 4. Conventions Git

### Branches

Utiliser des préfixes selon le type de modification :

| Préfixe | Utilisation |
|---|---|
| `feature/` | Nouvelle fonctionnalité |
| `fix/` | Correction |
| `docs/` | Documentation |
| `refactor/` | Réorganisation du code |

Exemples : `feature/api-integration`, `fix/chart-display`.

### Commits

Utiliser les **Conventional Commits en anglais**.

```bash
git commit -m "feat: add region filter"
git commit -m "fix: correct chart rendering"
git commit -m "docs: update README"
```

### Collaboration

- Ne pas développer directement sur `main`.
- Créer une branche par fonctionnalité ou correction.
- Passer par une Pull Request avant toute fusion.
- Vérifier le fonctionnement du code avant de fusionner.
- Prévenir le groupe avant toute modification importante de l'architecture.

## 5. Règles d'intégration

- Les modules doivent être indépendants autant que possible.
- Les fonctions partagées doivent avoir des noms explicites.
- Les données échangées entre modules doivent avoir une structure cohérente et documentée.
- Éviter de mélanger récupération des données, traitement et affichage dans un même module.
- Centraliser les configurations communes.
- Ne pas introduire de nouvelle dépendance sans en informer le groupe.