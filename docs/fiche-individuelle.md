# Fiche individuelle

> Une page, avant la livraison. Prénom, nom, compte GitHub : 

**Prénom** : Ruth

**Nom** : Tomede

**Compte GitHub** : ruthrusu


1. **Une fonction que j'ai écrite**, et comment elle marche : 

**1.1:**
export async function **chargerJson**(chemin) {
const contenu = await readFile(chemin, "utf-8");
  const donnees = JSON.parse(contenu);
  return donnees;
} 

**1.2:**
Cette fonction appelée **chargerJson** permet de lire un fichier *JSON* et de récupérer son contenu sous forme de données JavaScript.
Elle prend en paramètre le chemin du fichier. Elle commence par lire son contenu sous forme de texte grâce à *readFile*, en utilisant l'encodage *UTF-8*. Elle attend la fin de cette lecture avec *await*.
Ensuite, elle utilise *JSON.parse()* pour convertir le texte en données exploitables par JavaScript, puis retourne le résultat avec *return*.
Comme cette fonction est asynchrone, on peut l'appeler avec await depuis une autre fonction asynchrone.
Si le fichier *JSON* est introuvable, inaccessible ou si son contenu JSON est invalide, une erreur se produit.

2. **Une difficulté, et sa solution** :

J'avais du mal à faire valider ma fonction verifierObservation, je mettais un return à chaque condition. Pour le resoudre, j'ai finir par comprendre que le return devait figurer en dessous de la fonction principale qui englobait les autres fonctions.


3. **L'entraide** (qui m'a aidé, qui j'ai aidé, sur quoi) :

**qui m'a aidé, sur quoi ?**

Anglovia Kouassi m'a assisté (explication et verification des fonctions des fichiers stockage.js, régistre.js et app.js)

Jean-Marie Michel Dadié m'a expliqué comment faire le dictionnaire de données

Junior Djongon m'a expliqué le principe d'une fonction dans une fonction et comment faire pour éviter les bugs.

**qui j'ai aidé, sur quoi ?**

 J'ai aidé Assié Cédric Konan à comprendre pourquoi il fallait mettre ""pH" encore avant ceci: ${observation.pH} dans la fonction trierParPh.

 J'ai expliqué à Victoire Grâce Adom le principe des a.pH - b-pH dans la fonction.



