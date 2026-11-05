# Relevé des tests

> Écrivez le résultat attendu avant d'essayer. Un écart n'est pas une faute : notez-le, corrigez, refaites le test.

**Calculs à la main** : refaites à la main les résultats de référence de `SUJET.md`, puis comparez avec votre programme. ✏️
`- le pH min et max avec le point:`
pH min: s04 = 4.8
pH max: s09 = 7.6
`- le nombre observé pour chaque texture:`
argileux: 3
sableux: 3
limoneux: 4
`- les points dont le pH est strictement égal à 5.5:`
s04, s09, s07, s02
**Essais dans le menu** : un ajout valide (encore là après redémarrage), chaque règle refusée, une recherche introuvable, chaque tri, la synthèse, un choix inconnu.

| Action | Attendu | Obtenu | Testeur |
| --- | --- | --- | --- |
| Ajout valide |L'observation doit etre ajoutée | conforme | jean-marie DADIE |
| Chaque règle refusée |Aucune observation |conforme |jean-marie DADIE |
| Chaque tri (pH croissant) |tri succès |conforme |jean-marie DADIE |
| Une recherche introuvable |Intriuvable |conforme |jean-marie DADIE |
| La synthèse |Affichage des statistiques de l'observation |conforme |jean-marie DADIE |
| Un choix inconnu | Aucuneobservation enregistrée |conforme |jean-marie DADIE |

**Sur un autre poste** (`git clone`, `node app.js`, `npm test`, en suivant le README) :
node app.js: toutes les tests données marche
npm test: 30 tests valide 
testeur: Jean-Marie DADIE
