# Carnet d'observation des sols

> Projet individuel du SAS DFS, brief 3 (sujet : [SUJET.md](SUJET.md)). Remplacez chaque ✏️ par votre texte, puis supprimez cette ligne.

## Contexte

✏️ *En cinq à huit phrases : qui utilise l'outil (son métier, son geste professionnel), son besoin, ce qu'il saisit, ce que le programme lui affiche, ce que l'outil ne fait pas.*

Le carnet est utilisé par l’assistant terrain Agritech de la ferme pédagogique, dont le métier est d’observer des points de sol. Son geste professionnel consiste à observer un point avec la fiche de terrain, à renseigner une classe de texture, le nom de la parcelle, une valeur de pH, et l'état d'humidité puis à relier ces observations aux interactions entre l’eau, le sol et la plante. Son besoin est de conserver ses observations, de retrouver les points concernés et de repérer les valeurs à vérifier avec l’agronome. Pour chaque point, il saisit sa texture, son pH et son état d’humidité. Le programme vérifie ces valeurs, les enregistre, puis lui affiche les observations recherchées et celles qui sont à discuter. En revanche, le carnet ne produit aucun diagnostic de fertilisation : il se contente de repérer des valeurs à discuter. La décision reste donc à l’agronome, que l’outil ne remplace pas.


## Prérequis et lancement

- Node.js 20 ou plus récent, Git ; aucune bibliothèque à installer.

```bash
git clone https://github.com/VOTRE-COMPTE/brief-3-carnet-sols.git
cd brief-3-carnet-sols
node app.js
npm test
```

Sous PowerShell, si `npm` est bloqué : `npm.cmd test`.

## Fonctionnalités

 *Cochez seulement ce qui marche : `- [x]`.*

- *`[x]`* Données lues et enregistrées dans `donnees/observations.json`
- *`[x]`* Ajouter une observation, saisies invalides refusées sans arrêter le programme
- *`[x]`* Lister les observations, message si le carnet est vide
- *`[x]`* Rechercher par point ou par parcelle ; filtrer par texture
- *`[x]`*Trier par pH
- *`[x]`* Synthèse : pH minimum et maximum, nombre par texture, points à discuter (pH < 5,5)
- [ ] Bonus : supprimer et modifier une observation (choix 6 et 7)
- [ ] Bonus : tri par pH décroissant, texture la plus fréquente

## Données

*Le fichier, le nombre d'observations, les champs (voir [docs/dictionnaire-donnees.md](docs/dictionnaire-donnees.md)), le pH sans unité. Rappelez qu'elles sont fictives.*

Le fichier: .donnees\observations.js

Le nombre d'observations: 10

Les champs: Id; Parcelle; Textures; pH; etat d'humidité


## Limites

✏️ *Au moins trois. Par exemple : le carnet repère des valeurs à discuter, mais ne produit aucun diagnostic de fertilisation.*

`-` Les données sont fictives et peu nombreuses : les résultats n’ont aucune valeur agronomique réelle.

`-` Les valeurs à discuter sont repérées avec des seuils fixes, qui ne tiennent pas compte du type de sol ni de la culture.

`-` Le carnet ne contrôle que la forme des saisies; il ne peut pas savoir si une mesure est juste sur le terrain.


## Documents

[Dictionnaire des données](docs/dictionnaire-donnees.md) · [Tâches](docs/taches.md) · [Relevé des tests](docs/releve-tests.md) · [Journal de recherche](docs/journal-recherche.md) · [Fiche agronomique](docs/fiche-agronomique.md) · [Fiche individuelle](docs/fiche-individuelle.md)

## Auteur

**Prénom NOM, compte GitHub:** Ruth TOMEDE, ruthrusu

**Entraide : avec qui, sur quoi:** Anglovia KOUASSI; Jean-Marie Michel DADIE; Junior DJONGON.
