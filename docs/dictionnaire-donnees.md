# Dictionnaire des données

> Un champ par ligne, d'après `SUJET.md` et le fichier de `donnees/`. La première ligne sert de modèle.

| Champ | Signification | Type | Règle de validation | Unité | Exemple |
| --- | --- | --- | --- | --- | --- |
| `id` | Identifiant unique | texte | non vide, absent des données | — | P02 |
| `parcelle` |Surface délimitée et identifiée |texte |Obligatoire, non vide|- |P2 |
| `texture` |Classe granulométrique du sol |texte |`sableux, limoneux, argileux`|- |sableux |
| `pH`| Mesure du potentienl d'hydrogène|nombre |compris entre 0 et 14 inclus|Aucune|4.8 |
| `etatHumidite`|Humidité du sol lors du relevé |texte |`sec, intermédiaire, humidité` |- |sec |

**Listes de valeurs autorisées** : 

`-`Texture: `sableux, limoneux, argileux`

`-` Etats d'humidité: `sec, intermédiaire, humidité`

`-`pH: compris entre 0 et 14 inclus

**Sources** : 

`-` SUJET.md

`-` .donnees\observations.json   
