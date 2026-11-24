---
id: concevoir-la-solution
titre: "De la cible à la conception approuvée"
resume: "Reconstruire le processus autour de la collaboration humain-agent, le spécifier, arrêter l'architecture et les choix, détailler les agents et dire comment on prouvera que cela marche."
declencheur: "Un pari retenu au jalon G2."
resultat: "Un processus cible validé par le métier, des spécifications, un dossier d'architecture, des fiches agent, une analyse de risques et une stratégie de tests, prêts pour le jalon G4."
version: "1.0.0"
statut: publie
proprietaire: build
etapes:
  - skill: concevoir-processus-cible
    intention: "Repartir du résultat attendu et répartir le travail entre humains et agents."
    controle: "Jalon G3 : cible validée par le propriétaire du processus."
  - skill: rediger-specifications
    intention: "Écrire, segment par segment, les règles métier, les droits de décision et les critères d'acceptation."
  - skill: concevoir-architecture-fonctionnelle
    intention: "Découper la solution en blocs fonctionnels, flux et données, indépendamment de la technologie."
  - skill: concevoir-architecture-technique
    intention: "Traduire les blocs en composants, intégrations et environnements, dans les contraintes du SI du client."
  - skill: arbitrer-choix-technologiques
    intention: "Trancher chaque choix structurant par une décision d'architecture écrite, avec ses alternatives."
    controle: "Décisions relues par l'architecte du client."
  - skill: specifier-agent
    intention: "Détailler chaque agent : mission, outils, autonomie, escalade, modes de défaillance."
  - skill: analyser-risques-garde-fous
    intention: "Établir le modèle de menace et les garde-fous avant d'écrire une ligne de code."
    controle: "Analyse validée par la sécurité et la conformité du client."
  - skill: definir-strategie-tests
    intention: "Fixer les niveaux de tests, le golden set et les seuils qui diront si la solution est prête."
    controle: "Jalon G4 : conception approuvée."
---

## Quand le lancer

Pour chaque pari du portefeuille, une fois la référence chiffrée connue. Un pari classé « règle » ou « workflow » sur l'échelle des solutions suit le même enchaînement sans l'étape de spécification d'agent.

## Règles d'orchestration

- **Le métier valide la cible avant toute architecture.** Rien ne se conçoit techniquement sur un processus que son propriétaire n'a pas approuvé.
- **Les spécifications et la stratégie de tests avancent ensemble.** Un critère d'acceptation qui ne se teste pas est réécrit ; la stratégie de tests peut démarrer dès les premières spécifications.
- **Chaque choix structurant laisse une trace.** Une décision prise en réunion sans décision d'architecture écrite n'existe pas pour l'équipe qui reprendra le système.
- **Les évaluations avant les agents.** Les modes de défaillance de chaque fiche agent alimentent le golden set ; aucune construction ne démarre sans lui.
- **Le Build répond de l'architecture, le Design du processus et des règles métier**, selon le [RACI Design · Build](/raci).

## Sortie de workflow

La conception approuvée ouvre [Construire un incrément vérifié](/skills/workflows/construire-un-increment), rejoué pour chaque tranche verticale.
