---
id: gouvernance-ia
titre: "Gouvernance de l'IA et des agents"
resume: "Instances, registre des agents, cycle de vie en six étapes, revues proportionnées au risque et propriétaire d'agent : le dispositif minimal pour que les agents se multiplient sans perte de contrôle."
categorie: confiance
phases: [reinventer, industrialiser, perenniser]
origine: "Maison"
niveau: fondamental
tags: [gouvernance, registre, cycle-de-vie]
templates: [registre-agents]
lies: [nist-ai-rmf, ia-responsable, usine-agents, modele-operationnel-cible]
---

## En bref

Un agent n'est pas un logiciel comme les autres : il prend des décisions, son comportement évolue avec le modèle, et il agit au nom de l'entreprise. Il faut donc savoir à tout moment **quels agents existent, ce qu'ils ont le droit de faire, qui en répond et quand ils ont été revus**. La gouvernance répond à ces quatre questions avec peu d'éléments : des instances, un registre, un cycle de vie, des revues proportionnées au risque et un propriétaire par agent.

Une gouvernance trop légère laisse proliférer des agents que personne ne maîtrise ; trop lourde, elle pousse les équipes à la contourner. Le bon dosage est l'affaire du FDE.

## Quand l'utiliser

- En [Réinventer](/methode/reinventer), pour décider qui portera les agents dans le modèle opérationnel cible.
- En [Industrialiser](/methode/industrialiser), avant la généralisation : instances et registre doivent exister au premier agent en production.
- En [Pérenniser](/methode/perenniser), pour que la gouvernance tourne sans les FDE.

## Comment l'appliquer

### 1. Mettre en place deux niveaux d'instances

| Instance | Composition | Rôle | Rythme |
| --- | --- | --- | --- |
| Comité de gouvernance IA | Métier, DSI, data et IA, sécurité, DPO, juridique, RH selon l'ordre du jour | Autorise les mises en service à risque élevé, arbitre, revoit le registre | Mensuel |
| Revue d'agent | Propriétaire d'agent, responsable AgentOps, référent sécurité | Valide les évolutions courantes, examine incidents et indicateurs | Bimensuel ou à la demande |

### 2. Tenir le registre des agents

Pour chaque agent : mission, propriétaire, niveau d'autonomie par outil, outils et données accessibles, qualification réglementaire, niveau de risque, résultats des dernières evals, date de la dernière revue, statut. Le [registre](/templates/registre-agents) est la source unique de vérité : un agent absent du registre n'a pas le droit de tourner.

### 3. Appliquer le cycle de vie

1. **Proposition** : besoin, valeur attendue, propriétaire pressenti.
2. **Qualification** : niveau de risque, qualification réglementaire, faisabilité.
3. **Conception** : fiche agent, analyse de risques, plan d'évaluation.
4. **Mise en service** : critères de passage atteints, runbook, inscription au registre.
5. **Revue** : périodique et à chaque changement de modèle, d'outil ou de périmètre.
6. **Retrait** : désactivation, archivage des traces, mise à jour du registre.

### 4. Proportionner les revues au risque

| Niveau de risque | Exemple | Mise en service | Revue périodique |
| --- | --- | --- | --- |
| Faible | Lecture seule, usage interne | Revue d'agent | Annuelle |
| Moyen | Écriture dans le SI, messages externes standardisés | Revue d'agent et sécurité | Semestrielle |
| Élevé | Actions irréversibles, impact financier ou sur des personnes | Comité de gouvernance | Trimestrielle |

### 5. Nommer un propriétaire par agent

Un responsable métier, pas technique. Il répond des résultats et des risques, valide les changements de comportement et décide d'élargir ou de réduire l'autonomie, sur preuves.

## Exemple

En phase Industrialiser, Voxalis crée un **comité de gouvernance IA mensuel coprésidé par Sophie Lambert et Karim Haddad**, avec Thomas Nguyen, Marc Dubois, Élise Martin et, selon les sujets, Isabelle Moreau. Le registre recense les six agents de SAV Augmenté. L'Agent Diagnostic, en lecture seule, est classé à risque faible ; l'Agent Résolution, qui agit sur le réseau, à risque élevé : toute extension de son catalogue d'actions passe en comité. Chaque agent a un propriétaire au sein de la direction de Sophie Lambert.

Première décision notable du comité : refuser l'élargissement de l'Agent Communication aux gestes commerciaux en autonomie, faute de preuves suffisantes, et demander trois mois de données en L2.

## Pièges à éviter

- **Une gouvernance de papier.** Un comité qui valide tout sans regarder les indicateurs. Parade : ordre du jour fondé sur le registre et les tableaux de bord.
- **Tout faire passer en comité.** Le comité devient un goulet. Parade : revues proportionnées au risque.
- **Un propriétaire technique.** La DSI ne peut pas répondre de la qualité métier. Parade : propriétaire métier, appuyé par AgentOps.
- **Oublier le retrait.** Des agents fantômes continuent de tourner. Parade : revue périodique obligatoire, retrait si non revu.

## Pour aller plus loin

- Frameworks : [NIST AI RMF et ISO/IEC 42001](/frameworks/nist-ai-rmf), [IA responsable](/frameworks/ia-responsable), [usine à agents](/frameworks/usine-agents), [modèle opérationnel cible](/frameworks/modele-operationnel-cible), [niveaux d'autonomie](/frameworks/niveaux-autonomie)
- Templates : [registre des agents](/templates/registre-agents), [analyse de risques agent](/templates/analyse-risques-agent)
- Savoir terrain : [autonomie progressive](/savoir/autonomie-progressive)
