// Carnet d'observation des sols — point d'entrée : le menu.
// À vous d'écrire tout le menu : accueil, chargement des données, menu affiché avant chaque choix,
// actions, sortie et gestion des erreurs. Comportement et textes imposés : fiches/3-ajouter-lister.md.
// Lancer : node app.js
import { demander, fermerSaisie, ouvrirSaisie } from './src/saisie.js';
import { chargerJson, enregistrerJson } from './src/stockage.js';
import { HUMIDITES, TEXTURES, ajouterObservation, formaterObservation, listerObservations, trouverParId } from './src/registre.js';
import { filtrerParParcelle, filtrerParTexture, trierParPh } from './src/recherche.js';
import { SEUIL_PH_A_DISCUTER, compterParTexture, phMinMax, pointsADiscuter } from './src/synthese.js';

const FICHIER_DONNEES = 'donnees/observations.json';
// INSECTION D'UNE FONCTION POUR AFFICHER L'ACCUEIL
function AfficherAccueil(){
  console.log("==================================================")
  console.log("  Carnet d'observation des sols/Ferme pédagogique  ")
  console.log("==================================================")
}
let observations = [];
async function ChargementCarnet(){
  try{
    const donnees = await chargerJson(FICHIER_DONNEES);
    if(!Array.isArray(donnees)){
      throw new Error('Le fichier ne contient pas de tableau')
    }
    observations = donnees;
    console.log(`${observations.length} observation(s) chargée(s) depuis ${FICHIER_DONNEES}.`);
  }catch (error){
    observations = [];
    console.log(`Impossible de lire ${FICHIER_DONNEES} : ${error.message}. Carnet vide.`);
  }
}

async function main() {
  ouvrirSaisie();
  AfficherAccueil();
  ChargementCarnet();
  //console.log("À compléter : écrivez le menu dans app.js (fiches/3-ajouter-lister.md).");
  fermerSaisie();
}

main();
