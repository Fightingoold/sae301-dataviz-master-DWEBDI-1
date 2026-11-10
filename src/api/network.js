const URL_DE_BASE = "https://la-lab4ce.univ-lemans.fr/masters-stats/api/rest";

/**
 * Fonction utilitaire interne pour traiter la réponse HTTP
 * @param {Response} reponse - L'objet Response retourné par fetch
 * @returns {Promise<Object>} Les données au format JSON
 */
async function gererReponse(reponse) {
    // Si le statut HTTP n'est pas bon (ex: erreur 404 ou 500)
    if (!reponse.ok) {
        const texteErreur = await reponse.text();
        throw new Error(`Erreur API (${reponse.status}) : ${texteErreur}`);
    }
    // Si tout va bien, on convertit le texte reçu en objet JavaScript manipulable
    return await reponse.json();
}

/**
 * Requête GET générique pour récupérer les données de contexte (académies, etc.)
 * @param {string} chemin - La fin de l'URL de l'API (ex: '/academies')
 * @returns {Promise<Object>}
 */
export async function recupererDonneesContexte(chemin) {
    try {
        const reponse = await fetch(`${URL_DE_BASE}${chemin}`);
        return await gererReponse(reponse);
    } catch (erreur) {
        console.error(`[Réseau API] Échec de la requête GET sur ${chemin}:`, erreur);
        throw erreur; // On renvoie l'erreur au main.js
    }
}

/**
 * Requête POST pour récupérer les statistiques (candidatures et insertion pro)
 * @param {Object} filtres - Les critères de recherche
 * @param {Object} recolte - Les données spécifiques à retourner (harvest)
 * @returns {Promise<Object>}
 */
export async function recupererStatistiques(filtres, recolte) {
    // On rassemble les filtres et ce qu'on veut récolter dans un seul objet
    const chargeUtile = { filters: filtres, harvest: recolte };
    
    try {
        const reponse = await fetch(`${URL_DE_BASE}/stats/search`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json" // On prévient le serveur qu'on lui envoie du JSON
            },
            // On transforme notre objet JS en texte JSON pour le faire voyager
            body: JSON.stringify(chargeUtile)
        });
        return await gererReponse(reponse);
    } catch (erreur) {
        console.error("[Réseau API] Échec de la requête POST /stats/search:", erreur);
        throw erreur;
    }
}