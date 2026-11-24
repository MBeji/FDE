---
name: rediger-specifications
description: "Écrit, segment par segment, les spécifications d'un processus cible : résultat, règles métier, droits de décision, données, exceptions et critères d'acceptation testables, jusqu'à déclarer le segment prêt à construire. À utiliser quand la cible est validée par le métier, avant l'architecture détaillée et le développement."
metadata:
  titre: "Rédiger les spécifications"
  version: "1.0.0"
  statut: publie
  etape: conception
  sous-processus: specifications
  role: design
  domaine: conseil
  phases: [reinventer, concevoir]
  technologies: []
  cas-usage: [tout-projet]
  tags: [specifications, regles-metier, criteres-acceptation, pret-a-construire]
  proprietaire: design
  diffusion: interne
  entrees: ["Processus cible validé et matrice humain-agent", "Règles métier et exemples réels fournis par les experts", "Questions du FDE Build"]
  sorties: ["Fiche de conception par segment, signée", "Critères d'acceptation testables", "Jeu d'exemples réels pour le golden set"]
  prerequis: [concevoir-processus-cible]
---

## Mission

Dire au Build, sans ambiguïté, ce que chaque segment du processus doit produire et selon quelles règles. Le skill aide le FDE Design à écrire les spécifications et à déclarer un segment prêt à construire. Une règle métier laissée implicite sera devinée par un développeur ou par un modèle : elle doit être écrite par le métier.

## Quand l'utiliser

- La cible est validée au jalon G3 et il faut la découper en segments constructibles.
- Le Build remonte une question sans réponse dans les spécifications.
- Une règle métier change : la fiche se met à jour avant le code.

Ne pas l'utiliser pour décrire la solution technique : les spécifications disent quoi et selon quelles règles, pas comment. La conception détaillée d'un agent relève de [Spécifier un agent](/skills/specifier-agent).

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| Le processus cible et la matrice humain-agent | Oui | Repasser par la conception du processus cible. |
| Les experts métier qui détiennent les règles | Oui | Les faire détacher par le propriétaire du processus. |
| Au moins dix cas réels par segment, dont des cas difficiles | Oui | Les collecter avant d'écrire les critères. |
| Les procédures et référentiels en vigueur | Non | Reconstituer les règles en entretien, source notée. |
| Les questions ouvertes du FDE Build | Non | Les demander avant de déclarer le segment prêt. |

## Procédure

1. **Découper la cible en segments.** Un segment produit un résultat vérifiable et peut être construit et testé seul. Ordonner : celui qui traverse tout le flux sur un cas étroit passe en premier.
2. **Écrire le résultat attendu** du segment et l'indicateur qu'il fait bouger, avec sa référence.
3. **Tenir le registre des règles.** Une règle par ligne : énoncé, source, exemple, propriétaire. Distinguer règle ferme, règle avec tolérance, et appréciation laissée au jugement. Une règle sans source est une question au métier.
4. **Fixer les droits de décision.** Pour chaque décision du segment : qui décide (agent, humain, humain sur proposition de l'agent), dans quelles limites de montant ou de type de cas, et qui approuve.
5. **Décrire les données** : ce qui entre, ce qui sort, d'où cela vient, ce qui doit être tracé pour reconstituer une décision.
6. **Écrire les exceptions et les délais** : cas hors périmètre, données manquantes, désaccord, dépassement de délai, et le point de reprise humaine.
7. **Rédiger les critères d'acceptation** avec le métier, sous forme testable : « étant donné tel cas, le résultat attendu est… ». Couvrir le nominal, les limites, les erreurs et les refus légitimes.
8. **Joindre les exemples.** Dix cas réels au moins, avec le résultat attendu par un expert : ils amorcent le golden set.
9. **Passer la définition de prêt** : problème et indicateur écrits, exemples fournis, critères testables, règles sourcées, accès obtenus ou datés, questions du Build répondues, fiche signée.

## Livrable

Une [Fiche de conception de processus agentique](/templates/fiche-conception-processus-agentique) par segment : résultat attendu, indicateurs et critères d'acceptation, flux, registre des règles, droits de décision et approbations, délais et exceptions, données et fil numérique, prêt pour le build.

## Critères de qualité

- Chaque règle a une source et un exemple.
- Chaque critère d'acceptation se vérifie par oui ou par non sur un cas.
- Les droits de décision couvrent toutes les décisions du segment, limites comprises.
- Chaque exception a un traitement et un point de reprise humaine.
- Dix cas réels au moins sont joints, cas difficiles compris.
- La fiche est signée par le propriétaire du processus, le Design et le Build.

## Garde-fous

- Les règles métier appartiennent au métier : le skill les recueille et les formule, il n'en invente aucune. Ce qui manque devient une question, pas une hypothèse.
- Le FDE Build cosigne les critères d'acceptation : un critère qu'il ne sait pas tester est réécrit.
- Les cas réels sont anonymisés avant de quitter leur système d'origine.
- Un changement de règle après signature passe par une nouvelle version de la fiche.

## Enchaînements

- **Amont** : [Concevoir le processus cible](/skills/concevoir-processus-cible).
- **Aval** : [Concevoir l'architecture fonctionnelle](/skills/concevoir-architecture-fonctionnelle), [Spécifier un agent](/skills/specifier-agent), [Définir la stratégie de tests](/skills/definir-strategie-tests), [Générer le code d'un incrément](/skills/generer-code).
- **Workflow** : [De la cible à la conception approuvée](/skills/workflows/concevoir-la-solution).
- **Ressources** : [BPMN augmenté pour les processus agentiques](/frameworks/bpmn-agentique), [RACI augmenté](/frameworks/raci-augmente), [Fil numérique : continuité des données et traçabilité des décisions](/frameworks/fil-numerique), [RACI Design · Build](/raci).
