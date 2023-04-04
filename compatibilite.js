"use strict";

// Caractéristiques des chiens
let chiens = [
    {
        nom: "Rex",
        race: "berger allemand",
        taille: "grande",
        couleur: "noir",
        temperament: "low"
    },
    {
        nom: "Buddy",
        race: "golden retriever",
        taille: "moyenne",
        couleur: "blond",
        temperament: "actif"
    },
    {
        nom: "Luna",
        race: "labrador",
        taille: "moyenne",
        couleur: "noir",
        temperament: "low"
    },
    {
        nom: "Max",
        race: "chihuahua",
        taille: "petite",
        couleur: "marron",
        temperament: "protecteur"
    }
];

// Fonction pour vérifier la compatibilité avec un chien
function verifierCompatibilite(race, temperament, chien) {
    if (chien.race === race && chien.temperament === temperament) {
        return true;
    } else {
        return false;
    }
}

// Fonction pour récupérer les données du formulaire et lancer la vérification de compatibilité
function verifier() {
    // Récupération des données du formulaire
    let nom = document.getElementById("name").value;
    let race = document.getElementById("breed").value;
    let taille = document.getElementById("house-size").value;
    let temperament = document.getElementById("activity-level").value;

    // Filtrage des chiens compatibles
    let compatibles = chiens.filter(chien => {
        if (chien.taille === taille) {
            return verifierCompatibilite(race, temperament, chien);
        } else {
            return false;
        }
    }).map(chien => chien.nom);

    // Affichage des chiens compatibles
    if (compatibles.length > 0) {
        alert("Ces chiens sont compatibles avec vos critères : " + compatibles.join(", "));
    } else {
        alert("Aucun chien n'est compatible avec vos critères.");
    }
}
