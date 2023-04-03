const animaux = require('./animauxproposes.json');
const express = require('express');
const app = express();
const port = 3000;

// Configuration du moteur de rendu EJS
app.set('view engine', 'ejs');

// Middleware pour gérer les données du formulaire
app.use(express.urlencoded({ extended: true }));

// Route pour le test de compatibilité
app.post('/compatibilite', (req, res) => {
  // Récupération des données du formulaire
  const nom = req.body.nom;
  const email = req.body.email;
  const tempsLibre = req.body.tempsLibre;
  const tailleMaison = req.body.tailleMaison;

  // Exécution des algorithmes d'apprentissage automatique
  // pour recommander des animaux de compagnie

  // Redirection vers la page de résultats
  res.redirect('/resultats');
});

// Route pour afficher les résultats
app.post('/resultats', (req, res) => {
  const recherche = req.body;
  const animauxTrouvés = [];

  for (const animal of animaux.animaux) {
    if (animal.caractéristiques.taille === recherche.tailleMaison &&
        animal.caractéristiques.tempérament === recherche.tempsLibre) {
      animauxTrouvés.push(animal);
    }
  }

  res.render('resultats', { animaux: animauxTrouvés });
});


// Démarrage du serveur
app.listen(port, () => {
  console.log(`Le serveur est démarré sur le port ${port}`);
});
