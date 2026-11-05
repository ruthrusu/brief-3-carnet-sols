# Tableau des tâches

> Planifiez vous-même, puis tenez le tableau à jour. Une preuve : un commit, un test vert, un document.

| Tâche | Prévu | Fait le | Preuve |
| --- | --- | --- | --- |
| Poste et dépôt prêts ; besoin compris ; documents commencés |02/11/2026| 02/11/2026| |
| Fiche 2 : lire et écrire le JSON | 02/11/2026| 02/11/2026| |
| Fiche 3 : ajouter et lister ; choix 1 et 2 ; erreurs |03/11/2026|03/11/2026 | |
| Fiche 4 : rechercher et trier ; choix 3 et 4 |02/11/2026| 03/11/2026| |
| Fiche 5 : synthèse ; choix 5 | 02/11/2026|04/11/2026 | |
| Tests par un camarade ; mes propres tests |03/11/2026 |05/11/2026 | |
| Fiche agronomique ; README ; documents |03/11/2026 |03/11/2026 - 05/11/2026 | |
| Dépôt cloné et lancé ailleurs ; démonstration répétée | | | |
| Bonus | _|_ |_ |

**Blocages** (le message exact, ce que j'ai essayé, la solution) : 

`- Message exact:`

1- PS C:\Users\rutht\Desktop\sas_red_line\brief-3-carnet-sols> git add fiche-individuel.md
fatal: pathspec 'fiche-individuel.md' did not match any files
PS C:\Users\rutht\Desktop\sas_red_line\brief-3-carnet-sols> 

2- ! [rejected]        main -> main (non-fast-forward)
error: failed to push some refs to 'https://github.com/ruthrusu/brief-3-carnet-sols.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. If you want to integrate the remote changes,
hint: use 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.

`ce que j'ai essayé:`

1- J'essayais de faire enregistrer le document fiche-individuel uniquement en mettant le nom fiche-individuelle.md après le **git add**

2- J'essayais de changer le nom de mon commit en l'ecrivant sans mettre la bonne syntaxe.

`la solution:`

1- Puisque le fichier figurait dans un sous-dossier, il fallait donc précéder le nom du fichier par docs/

2- il fallait mettre: git commit --amend -m "le message" puis entrer et faire git push --force-with-lease




