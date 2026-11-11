---
id: automatiser-l-existant
titre: "Automatiser l'existant"
resume: "Plaquer des agents sur un processus conçu pour des humains. Les tâches vont plus vite, les files d'attente et les passages de relais restent, et le résultat de bout en bout bouge à peine."
type: anti-pattern
phases: [diagnostiquer, reinventer]
tags: [processus, reinvention, valeur]
secteur: ""
date: ""
---

## Symptômes

- Le processus cible a les mêmes étapes, les mêmes passages de relais et les mêmes files que l'existant, avec « agent » écrit dans chaque case.
- Un agent par rôle ou par service : « agent N1 », « agent N2 », « agent back-office ».
- Les agents remplissent des formulaires conçus pour des humains et attendent des validations dont plus personne ne connaît la raison.
- Le temps de traitement baisse, le délai de bout en bout presque pas.
- Le business case multiplie un « temps gagné par tâche » par un volume.

## Pourquoi ça arrive

- **C'est politiquement indolore.** Aucun périmètre ne change, aucun directeur ne perd une équipe.
- **L'existant est documenté, la cible ne l'est pas.** On part de ce qu'on a.
- **Le diagnostic a mesuré les tâches, pas les attentes.**
- **Réinventer exige un propriétaire de processus** dont l'autorité dépasse son silo. Il manque souvent.

## Conséquences

Le gain est plafonné par la part de travail effectif. Chez Voxalis, sur 31 h de délai de résolution, 41 % sont de l'attente entre N1 et N2 et 18 % de l'attente client. Automatiser à la perfection le traitement (18 %) et la collecte manuelle (23 %) laissait donc 59 % du délai, soit plus de 18 h. Le pilote est descendu à 14,5 h parce que des files ont été supprimées, pas accélérées.

S'y ajoutent des contrôles pensés pour des erreurs humaines que l'agent ne commet pas, l'absence de ceux qu'exigent les siennes, et des relais entre agents qui reproduisent ceux des services.

## Comment en sortir

1. **Décomposer le délai de bout en bout** en attente et en travail ; voir la [cartographie des processus](/frameworks/cartographie-processus). Si l'attente domine, cesser d'optimiser les tâches.
2. **Repartir du résultat attendu** — chez Voxalis, « un client rétabli et informé » — et demander pour chaque étape : quelle contrainte la justifiait ? Tient-elle encore quand un agent lit six systèmes en une minute ?
3. **Découper le flux par type de cas**, selon le risque et la complexité, pas par niveau hiérarchique. Les trois voies de Voxalis (autonome, assistée, experte) n'existaient pas dans l'organisation de départ.
4. **Assumer les conséquences d'organisation** : rôles, responsabilités, indicateurs des managers, dans le [modèle opérationnel cible](/templates/modele-operationnel-cible).

## Comment l'éviter

- Mesurer la décomposition du délai dès le diagnostic, dans la [fiche de processus existant](/templates/fiche-processus-existant).
- Au jalon G3, refuser une cible qui compte autant de passages de relais que l'existant.
- Poser la question de la [réinvention à base zéro](/frameworks/reinvention-zero-base) : si l'on créait cette activité aujourd'hui, avec des agents, la construirait-on ainsi ?
- Associer la DRH avant de dessiner. Une cible que l'organisation ne peut pas absorber sera ramenée à l'existant.
- Nommer les contraintes qui demeurent, réglementaires ou contractuelles, pour ne pas réinventer contre elles.

Voir aussi : [repenser un processus](/guides/repenser-un-processus), [processus cible AI-Native](/templates/processus-cible-ai-native), [décomposition en tâches](/frameworks/decomposition-taches), l'outil [Redesign de processus](/outils/redesign-processus).
