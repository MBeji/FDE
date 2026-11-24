---
name: concevoir-processus-cible
description: "Reconstruit un processus à partir du résultat attendu, décide du sort de chaque étape (supprimer, réingénierer, automatiser, agentifier), répartit le travail entre humains et agents avec un niveau d'autonomie, et fait éprouver la cible par le terrain. À utiliser quand un pari est retenu et avant toute conception technique."
metadata:
  titre: "Concevoir le processus cible"
  version: "1.0.0"
  statut: publie
  etape: conception
  sous-processus: processus-cible
  role: design
  domaine: conseil
  phases: [reinventer]
  technologies: [process-mining]
  cas-usage: [workflow, agent, multi-agents]
  tags: [processus-cible, reinvention, humain-agent, autonomie, bpmn]
  proprietaire: design
  diffusion: interne
  entrees: ["Fiche du processus existant et référence chiffrée", "Pari retenu au portefeuille", "Propriétaire du processus et experts du terrain"]
  sorties: ["Processus cible validé par le métier", "Matrice de répartition humain-agent", "Segments à spécifier pour le build"]
  prerequis: [diagnostiquer-processus, prioriser-cas-usage]
---

## Mission

Concevoir le processus que l'on veut, plutôt que d'ajouter des agents à celui que l'on a. Le skill aide le FDE Design à repartir du résultat, à trier chaque étape et à répartir le travail entre humains et agents. Automatiser l'existant fige ses défauts : la valeur vient du flux redessiné.

## Quand l'utiliser

- Un pari du portefeuille est retenu et sa référence est connue.
- Un pilote montre que la cible ne tient pas sur le terrain : elle se reprend.

Ne pas l'utiliser pour un simple outillage d'une tâche isolée sans changement de flux. Sans diagnostic du processus réel, repasser par [Diagnostiquer le processus existant](/skills/diagnostiquer-processus).

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| Le processus réel : étapes, volumes, délais, reprises | Oui | S'arrêter : on redessinerait la procédure théorique. |
| Le résultat attendu par le client du processus | Oui | Le faire formuler par le propriétaire du processus. |
| Le propriétaire du processus, disponible | Oui | Alerter le sponsor : pas de cible sans lui. |
| Des cas réels, y compris des exceptions | Non | Les collecter avant l'épreuve terrain. |
| Les contraintes réglementaires et de contrôle interne | Non | Les demander à la conformité avant de supprimer un contrôle. |

## Procédure

1. **Repartir du résultat.** Écrire ce que le processus doit produire, pour qui, à quel niveau de qualité et de délai. Oublier un instant les étapes actuelles.
2. **Passer chaque étape existante à la grille**, dans l'ordre : apporte-t-elle de la valeur, sinon supprimer ; le délai vient-il de l'organisation, alors réingénierer d'abord ; la règle est-elle stable et les entrées structurées, alors automatiser de façon déterministe ; faut-il interpréter dans un cadre borné, alors agentifier ; sinon l'étape reste humaine, et on l'outille.
3. **Reconstruire le flux.** Dessiner le parcours nominal, puis les voies : voie directe sans intervention, voie assistée, voie experte. Viser qu'une large part des cas emprunte la voie la plus courte.
4. **Répartir humains et agents** étape par étape : qui réalise, qui approuve, qui contrôle. Fixer un niveau d'autonomie de départ par étape confiée à un agent, bas, avec les preuves qui permettront de le relever. Le FDE Build dit ce que les évaluations pourront prouver.
5. **Traiter les exceptions.** Lister les cas hors voie nominale, leur fréquence, leur traitement, et le point où un humain reprend la main avec tout le contexte.
6. **Mesurer la cible** contre l'existant : délai, coût, qualité, charge de supervision créée. Une cible qui déplace le travail vers la supervision sans le réduire est à revoir.
7. **Éprouver avec le terrain.** Dérouler la cible sur dix à vingt cas réels avec ceux qui font le travail. Noter chaque endroit où elle casse.
8. **Poser la trajectoire** : étapes de transition, prérequis, ce qui change pour chaque rôle.
9. **Faire valider** par le propriétaire du processus, qui porte la cible au jalon G3.

## Livrable

Le [Processus cible AI-Native](/templates/processus-cible-ai-native) : résultat visé, principes de conception, flux cible, voies, étapes cibles, comparaison avant et après, indicateurs, exceptions, prérequis, trajectoire, mise à l'épreuve. Avec la [Matrice de répartition humain-agent](/templates/matrice-humain-agent) et, si l'organisation change, le [Modèle opérationnel cible](/templates/modele-operationnel-cible).

## Critères de qualité

- La cible part du résultat et non de la liste des étapes actuelles.
- Chaque étape a un sort justifié par la grille.
- Chaque étape confiée à un agent a un niveau d'autonomie, un contrôle humain et une condition de relèvement.
- Les exceptions sont listées avec leur point de reprise humaine.
- La cible a été déroulée sur des cas réels avec le terrain.
- Le gain attendu est chiffré contre la référence, supervision comprise.

## Garde-fous

- La cible est validée par le propriétaire du processus : c'est son processus, pas celui du FDE.
- Ne supprimer aucun contrôle réglementaire ou de contrôle interne sans l'accord écrit de la conformité.
- Ce qui touche à l'organisation du travail et aux postes passe par les managers et les instances prévues, pas par le skill.
- Ne pas promettre un niveau d'autonomie que le FDE Build ne sait pas prouver.

## Enchaînements

- **Amont** : [Diagnostiquer le processus existant](/skills/diagnostiquer-processus), [Prioriser les cas d'usage](/skills/prioriser-cas-usage).
- **Aval** : [Rédiger les spécifications](/skills/rediger-specifications), [Accompagner le client dans le changement](/skills/accompagner-client).
- **Workflow** : [De la cible à la conception approuvée](/skills/workflows/concevoir-la-solution).
- **Ressources** : [Réinvention à base zéro](/frameworks/reinvention-zero-base), [Supprimer, réingénierer, automatiser ou agentifier : la grille de décision](/frameworks/eliminer-automatiser-agentifier), [BPMN augmenté pour les processus agentiques](/frameworks/bpmn-agentique), [Concevoir la collaboration humain-agent](/frameworks/collaboration-humain-agent), [Niveaux d'autonomie des agents](/frameworks/niveaux-autonomie), [Repenser un processus en AI-Native](/guides/repenser-un-processus), [Automatiser l'existant](/savoir/automatiser-l-existant), atelier [Redesign de processus](/outils/redesign-processus).
