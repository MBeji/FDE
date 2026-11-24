---
name: revoir-code
description: "Mène la revue d'une demande de fusion (pull request) : intention, justesse, sécurité, tests, lisibilité, conformité aux standards, avec les points propres au code d'agent (prompts, outils, garde-fous, bornes). Rend des commentaires classés et motivés. À utiliser avant toute fusion sur la branche principale, en appui du relecteur humain."
metadata:
  titre: "Mener une revue de code"
  version: "1.0.0"
  statut: publie
  etape: developpement
  sous-processus: revue
  role: build
  domaine: ingenierie
  phases: [construire]
  technologies: []
  cas-usage: [tout-projet]
  tags: [revue-de-code, demande-de-fusion, qualite, securite, relecture, pull-request, relire]
  proprietaire: build
  diffusion: interne
  entrees: ["Demande de fusion et sa description", "Fiche de conception et critères d'acceptation", "Conventions du dépôt et standards applicables"]
  sorties: ["Commentaires de revue classés et motivés", "Avis : approuver, corriger, refuser"]
  prerequis: [generer-code]
---

## Mission

Trouver ce qui casserait en production avant que cela n'y arrive, et laisser le code plus clair qu'on ne l'a trouvé. Le skill guide une revue de demande de fusion et prépare l'avis du relecteur. Une revue utile dit peu de choses, vraies, et dit pourquoi.

## Quand l'utiliser

- Une demande de fusion est ouverte, par un humain ou par un agent.
- L'auteur veut un premier regard avant de solliciter son pair.

Ne pas l'utiliser pour relire son propre travail en guise de revue : l'auteur ne s'approuve pas. Pour vérifier un système entier contre le référentiel, utiliser [Appliquer les standards d'ingénierie](/skills/appliquer-standards).

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| Le diff complet et sa description | Oui | Demander la description : sans intention, pas de revue. |
| La fiche de conception ou le ticket d'origine | Oui | Demander ce que le changement doit accomplir. |
| Le code environnant et ses tests | Oui | Lire les fichiers appelants avant de commenter. |
| Le résultat du pipeline : tests, analyse, évaluations | Non | Le lancer ou le demander ; ne pas approuver sur un pipeline rouge. |

## Procédure

1. **Comprendre l'intention.** Lire la description et la spécification. Si le changement fait autre chose que ce qu'il annonce, le dire avant tout.
2. **Juger la taille.** Une demande qui mêle plusieurs objets ou dépasse ce qu'on peut relire sérieusement se renvoie à découper.
3. **Vérifier la justesse d'abord.** Suivre le chemin nominal, puis les limites : valeur vide, doublon, panne d'un appel externe, rejeu, concurrence. Chercher ce qui n'est pas dans le diff et aurait dû y être : un appelant non adapté, une migration oubliée.
4. **Vérifier les tests.** Couvrent-ils les critères d'acceptation et les chemins d'erreur ? Un test qui ne peut pas échouer ne prouve rien.
5. **Regarder la sécurité** : entrées validées côté serveur, autorisation sur chaque appel, aucun secret, aucune donnée personnelle dans les journaux, dépendances nouvelles justifiées.
6. **Pour le code d'agent**, vérifier en plus : le prompt et les outils sont versionnés et les évaluations ont tourné ; tout outil qui écrit a sa règle d'approbation et son idempotence ; les sorties du modèle sont validées avant usage ; l'exécution est bornée ; un contenu externe ne peut pas déclencher seul une action.
7. **Regarder la lisibilité et la conception** : nommage, duplication, complexité inutile, cohérence avec le reste du dépôt.
8. **Classer chaque commentaire** : bloquant (bogue, faille, régression), à corriger (défaut réel non critique), suggestion (amélioration facultative). Chaque commentaire dit le problème, le cas qui le déclenche et une piste.
9. **Rendre l'avis** : approuver, approuver après corrections, refuser, avec les trois points les plus importants en tête.

## Livrable

1. Un avis en une ligne et ses trois raisons principales.
2. Les commentaires, attachés aux lignes, classés bloquant, à corriger ou suggestion.
3. Ce qui a été vérifié et ce qui ne l'a pas été.

## Critères de qualité

- Chaque commentaire bloquant décrit un cas concret qui produit le défaut.
- Aucune préférence de style présentée comme un défaut : le formateur du dépôt fait foi.
- Les suggestions sont peu nombreuses et clairement facultatives.
- La revue dit ce qu'elle n'a pas pu vérifier.
- Les vérifications propres aux agents sont faites dès qu'un prompt ou un outil est touché ([AGT-03](/standards#AGT-03), [AGT-06](/standards#AGT-06), [AGT-07](/standards#AGT-07)).

## Garde-fous

- L'approbation finale est donnée par un pair humain autre que l'auteur ([LOG-01](/standards#LOG-01)) ; une revue faite par un agent l'éclaire, elle ne la remplace pas.
- L'auteur d'un changement ne le déploie pas seul en production ([OPS-06](/standards#OPS-06)).
- Ne pas approuver ce qu'on n'a pas compris : demander.
- Signaler une faille de sécurité par le canal prévu, pas dans un commentaire public si le dépôt est largement ouvert.
- Critiquer le code, jamais son auteur.

## Enchaînements

- **Amont** : [Générer le code d'un incrément](/skills/generer-code).
- **Aval** : [Garantir la non-régression](/skills/tester-non-regression), puis fusion.
- **Workflow** : [Construire un incrément vérifié](/skills/workflows/construire-un-increment).
- **Ressources** : [Standards d'ingénierie](/standards), [Sécurité des agents](/frameworks/securite-agents), [Garde-fous : la défense en profondeur](/frameworks/garde-fous).
