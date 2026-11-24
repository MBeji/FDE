---
id: construire-un-increment
titre: "Construire un incrément vérifié"
resume: "La boucle de construction du FDE Build : produire une tranche verticale, l'intégrer au SI, la tester, la faire relire et l'évaluer avant de la déclarer terminée."
declencheur: "Une tranche de spécifications déclarée prête à construire."
resultat: "Un incrément intégré, conforme aux standards, couvert par des tests automatisés, relu, et évalué contre le golden set."
version: "1.0.0"
statut: publie
proprietaire: build
etapes:
  - skill: generer-code
    intention: "Produire le code de la tranche à partir des spécifications et des conventions du dépôt."
  - skill: ecrire-system-prompt
    intention: "Écrire ou faire évoluer le system prompt de chaque agent touché, à partir de sa fiche."
  - skill: integrer-au-si
    intention: "Brancher l'incrément sur les systèmes du client : API, outils d'agent, droits, données."
  - skill: automatiser-tests
    intention: "Couvrir l'incrément par des tests rejoués à chaque changement."
  - skill: appliquer-standards
    intention: "Vérifier la conformité aux standards d'ingénierie et tracer les écarts."
  - skill: revoir-code
    intention: "Soumettre l'incrément à une relecture indépendante avant fusion."
    controle: "Fusion approuvée par un pair humain."
  - skill: evaluer-agent
    intention: "Mesurer le comportement de l'agent contre le golden set et analyser les erreurs."
  - skill: tester-non-regression
    intention: "Vérifier que rien de ce qui marchait ne s'est dégradé."
    controle: "Incrément déclaré terminé par le FDE Build ; échantillon revu par les experts métier avec le FDE Design."
---

## Quand le lancer

À chaque tranche verticale, du premier parcours de bout en bout jusqu'à la dernière évolution. Le workflow se rejoue autant de fois qu'il y a d'incréments : c'est une boucle, pas une phase.

## Règles d'orchestration

- **Une tranche verticale à la fois.** Un incrément traverse tout le système sur un cas étroit plutôt que d'achever une couche.
- **L'étape de system prompt ne s'exécute que si l'incrément touche un agent.** Pour une application classique, passer directement à l'intégration.
- **Les tests s'écrivent avec le code.** L'automatisation n'attend pas la fin de l'incrément : un test qui échoue renvoie à la génération de code.
- **Itérer contre les évaluations.** Une régression sous le seuil du plan d'évaluation renvoie au prompt ou au code ; on ne relève pas le seuil pour passer.
- **Les écarts aux standards sont tracés, pas tus.** Un écart non résolu s'inscrit au registre des risques avec un responsable et une date.

## Sortie de workflow

Quand les incréments couvrent le périmètre du pilote, lancer [De la validation à la mise en production](/skills/workflows/mettre-en-production).
