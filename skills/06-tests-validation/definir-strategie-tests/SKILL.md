---
name: definir-strategie-tests
description: "Définit ce que « ça marche » veut dire et comment on le prouve : niveaux de tests, golden set constitué avec les experts métier, méthodes de notation, seuils de passage, environnements, critères d'entrée et de sortie. À utiliser en phase Concevoir, dès les premières spécifications et avant le premier prompt, ou quand un périmètre, un agent ou un outil s'ajoute à une solution déjà testée."
metadata:
  titre: "Définir la stratégie de tests"
  version: "1.0.0"
  statut: publie
  etape: tests
  sous-processus: strategie
  role: binome
  domaine: qualite
  phases: [concevoir]
  technologies: [tests-evals]
  cas-usage: [tout-projet]
  tags: [strategie-tests, golden-set, seuils, plan-evaluation, niveaux-de-tests]
  proprietaire: build
  diffusion: interne
  entrees: ["Spécifications et critères d'acceptation", "Fiches agent et analyse de risques", "Historique de cas réels clos", "Disponibilité des experts métier pour annoter"]
  sorties: ["Stratégie de tests approuvée", "Plan d'évaluation et golden set versionné", "Seuils de passage signés"]
  prerequis: [rediger-specifications]
---

## Mission

Dire, avant de construire, ce que « ça marche » veut dire et comment on le prouvera. Le skill produit la stratégie de tests de la solution : niveaux de tests, jeux de cas, notation, seuils de passage, environnements. Le FDE Design définit le succès avec le métier et organise l'annotation par les experts ; le FDE Build outille les jeux et le protocole. Sans elle, chaque démonstration relance un débat d'opinions et aucun jalon ne se franchit sur un constat.

## Quand l'utiliser

- En phase Concevoir, dès les premières spécifications, en parallèle des fiches agent et avant le premier prompt.
- Quand un périmètre, un agent ou un outil d'écriture s'ajoute : la stratégie se met à jour avant le code.
- Quand une solution tourne déjà sans mesure : geler les évolutions et démarrer par 50 à 100 cas réels tirés des journaux.

Ne pas l'utiliser pour brancher les tests sur le pipeline ([Automatiser les tests](/skills/automatiser-tests)) ni pour mener une campagne ([Évaluer un agent](/skills/evaluer-agent)). Pour une règle déterministe sans appel de modèle, ni golden set ni modèle juge : les tests par code suffisent.

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| Les spécifications et leurs critères d'acceptation | Oui | S'arrêter : renvoyer vers [Rédiger les spécifications](/skills/rediger-specifications). Un critère qui ne se teste pas retourne au métier. |
| Le propriétaire du processus, qui signera les seuils | Oui | Le demander au FDE Design ; pas de seuil sans signataire. |
| Des cas réels clos, à l'issue vérifiée | Oui pour un agent | Démarrer sur dix cas fournis par le métier ; marquer la taille du jeu `[À CONFIRMER]`. |
| Les fiches agent et l'analyse de risques | Non | Bâtir le jeu adverse sur les familles types et le faire compléter par la sécurité. |
| Le temps d'expert disponible pour annoter | Non | Le chiffrer et le faire arbitrer par le sponsor : c'est la ressource critique. |

## Procédure

1. **Lister les décisions à éclairer** : entrée en pilote, sortie du mode fantôme, élargissement d'autonomie, mise en production d'un changement, chacune avec son décideur et sa date. Une mesure qui ne sert aucune décision sort de la stratégie.
2. **Répartir la preuve par niveau.** Rattacher chaque critère d'acceptation et chaque mode de défaillance des fiches agent à un niveau ; ce qui est déterministe se teste par code, pas par évaluation.

   | Niveau | Ce qu'il prouve | Porteur |
   | --- | --- | --- |
   | Unitaire | Règles métier, validations, chemins d'erreur | Build |
   | Intégration | Contrats des API et des outils | Build |
   | Bout en bout | Un parcours complet traverse le système | Build |
   | Évaluation d'agent | Résultat, trajectoire et composants, sur golden set et jeu adverse | Build, experts métier |
   | Technique | Délai, charge, coût par cas, sécurité, robustesse | Build |
   | Recette | Conformité aux critères d'acceptation, constatée par le métier | Design |
   | Pilote | Valeur et adoption en conditions réelles, contre la référence | Design |

3. **Définir le succès avec le métier** (Design). Deux heures avec le propriétaire du processus et deux experts, autour de dix cas réels : qu'est-ce qu'une bonne réponse, qu'est-ce qui serait inacceptable ? En tirer les dimensions, chacune avec une définition calculable et un indicateur métier.
4. **Constituer le golden set.** Le Design organise l'annotation : consigne écrite, double annotation d'un échantillon, arbitrage des désaccords. Le Build outille : tirage stratifié, cas rares et coûteux sur-représentés, pseudonymisation, versionnement, réserve jamais consultée pendant la mise au point. Annoter le comportement cible, pas ce qui a été fait à l'époque. L'accord mesuré entre experts est le plafond réaliste d'un seuil.
5. **Construire le jeu adverse** avec la sécurité, depuis l'analyse de risques : injection directe et indirecte, demande hors périmètre, panne d'outil, données contradictoires, accès aux données d'un tiers. Chaque cas précise le comportement attendu.
6. **Choisir la notation par dimension** : code partout où la réponse est vérifiable ; modèle juge avec grille là où il faut apprécier, calibré sur des annotations d'experts ; expert pour calibrer et trancher.
7. **Faire fixer les seuils avant toute mesure** par le propriétaire du processus, en trois types : bloquant (sécurité, sans dérogation), cible, non-régression. Dériver chacun de la référence et du niveau d'autonomie visé. Écrire la règle de décision et qui peut déroger.
8. **Écrire le protocole** : environnement et données de test par niveau, fréquence de rejeu, traitement du non-déterminisme, critères d'entrée et de sortie de chaque niveau, responsabilités, y compris après la mission.

## Livrable

Une stratégie de tests, dont la partie évaluation suit le [Plan d'évaluation](/templates/plan-evaluation) du portail :

1. Décisions à éclairer.
2. Matrice des niveaux : objet, jeux, environnement, critères d'entrée et de sortie, porteur.
3. Dimensions et jeux de test : golden set, jeu adverse, réserve, vie des jeux.
4. Méthodes de notation et seuils de passage signés.
5. Protocole, responsabilités, limites connues.

## Critères de qualité

- Chaque critère d'acceptation est rattaché à un niveau de test.
- Chaque dimension se calcule sans interprétation et se relie à un indicateur métier.
- Le golden set vient de cas réels annotés par des experts ; l'accord entre annotateurs est mesuré.
- Les seuils sont signés avant la première mesure, signataire et date à l'appui.
- Le jeu adverse précise le comportement attendu de chaque cas.
- La stratégie permet de tenir [AGT-02](/standards#AGT-02), [MLO-03](/standards#MLO-03) et [MLO-04](/standards#MLO-04) : rejeu automatique, blocage sous le seuil, jeux versionnés et séparés des exemples des prompts.

## Garde-fous

- Les seuils appartiennent au propriétaire du processus : l'agent propose et argumente par la référence, il ne signe pas. Le jeu adverse est validé par la sécurité du client ; la stratégie est approuvée par le FDE Build au jalon G4.
- Ne jamais inventer un cas du socle, une annotation ni un seuil. Un cas synthétique comble un trou et se marque comme tel ; une valeur manquante porte `[À CONFIRMER]`.
- Ne pas abaisser un seuil après avoir vu un score : toute dérogation se décide en comité de pilotage, par écrit.
- Les cas réels contiennent des données du client : pseudonymisation selon la règle validée par le DPO, aucune copie hors de son environnement.

## Enchaînements

- **Amont** : [Rédiger les spécifications](/skills/rediger-specifications) ; [Spécifier un agent](/skills/specifier-agent) et [Analyser les risques et poser les garde-fous](/skills/analyser-risques-garde-fous) nourrissent le jeu adverse.
- **Aval** : [Automatiser les tests](/skills/automatiser-tests), [Évaluer un agent](/skills/evaluer-agent), [Mener les tests fonctionnels et la recette](/skills/tester-fonctionnel), [Mener les tests techniques](/skills/tester-technique).
- **Workflow** : [De la cible à la conception approuvée](/skills/workflows/concevoir-la-solution).
- **Ressources** : [Construire les évaluations d'un agent](/guides/construire-les-evals), [Évaluer un agent](/frameworks/evaluation-agents), [Développement piloté par les évaluations](/frameworks/eval-driven-development), [Le golden set dès le premier jour](/savoir/golden-set-jour-1), [Livrer sans évaluations](/savoir/livrer-sans-evals), [RACI Design · Build](/raci).
