# PODIOM - Datavisualisation Masters STAPS explications

## 1. Source et récupération des données

Les données proviennent de l'API REST de l'Université du Mans :
* **Base URL :** `https://la-lab4ce.univ-lemans.fr/masters-stats/api/rest`
* **Discipline retenue :** STAPS (Identifiant de secteur disciplinaire = `10`).

### Requête type pour récupérer les données STAPS :

```javascript
// POST https://la-lab4ce.univ-lemans.fr/masters-stats/api/rest/stats/search
const payload = {
  filters: {
    secteurDisciplinaireIds: 10
  },
  harvest: {
    typeStats: "all",
    candidatureDetails: "all",
    insertionProDetails: "all"
  }
};

const res = await fetch("https://la-lab4ce.univ-lemans.fr/masters-stats/api/rest/stats/search", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload)
});
const { candidatures, insertionsPro } = await res.json();
```


## 2. Données disponibles dans `src/data/`

Les données des sessions **2023, 2024 et 2025** (505 masters STAPS) sont stockées prêtes à l'emploi :

* **`staps-master-data.json`** : fichier principal au format JSON, directement exploitable par JavaScript (D3.js / Echarts) sans nécessiter de backend Python.
* **`mon_master_staps_referentiel.csv`** : export CSV conforme au référentiel de données demandé.
* **`mon_master_staps_enrichi.csv`** : CSV incluant les calculs de tension et les profils d'admis.
* **`staps-insertion-pro.json`** : données brutes d'insertion professionnelle issues de l'API (salaires, emplois stables).



## 3. Formules de calcul des indicateurs

* **Taux de pression :** `candidats / capacite` *(nombre de candidats pour 1 place)*
* **Taux de sélectivité (%) :** `(propositions / candidats) * 100`
* **Taux de remplissage (%) :** `(admis / capacite) * 100`
* **Croisement Insertion Pro :** jointure entre le master et l'université via le code UAI (`etabUai` / `uai`).

Des critères peuvent être ajoutés à l'avenir.



