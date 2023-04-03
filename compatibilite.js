"use strict";
// Récupérer les éléments du formulaire
var nom = document.getElementById("nom").value;
var email = document.getElementById("email").value;
var tempsLibre = document.getElementById("temps-libre").value;
var tailleMaison = document.getElementById("taille-maison").value;

// Envoyer les données à un serveur pour le traitement
// (à remplacer par votre propre code pour envoyer les données)
sendDataToServer(nom, email, tempsLibre, tailleMaison);
