---
id: passer-en-production
titre: "Passer en production et à l'échelle"
resume: "Du pilote à l'exploitation courante : revue de préparation, déploiement par vagues, traçage, alertes et astreinte, élargissement de l'autonomie sur preuves, maîtrise des coûts, gouvernance et formation."
phases: [industrialiser]
duree: "10 min"
niveau: avance
tags: [production, agentops, deploiement, gouvernance]
frameworks: [agentops, poc-pilote-production, niveaux-autonomie, finops-ia, gouvernance-ia, securite-agents]
templates: [checklist-mise-en-production, runbook-agent, registre-agents, plan-conduite-changement]
---

## Le résultat visé

Un système exploité par l'équipe du client, observable, dont les coûts sont tenus, dont l'autonomie évolue sur décision d'une instance de gouvernance, et que les utilisateurs savent superviser. La différence avec le [pilote](/guides/reussir-le-pilote) n'est pas le volume : l'équipe FDE n'est plus derrière chaque cas. Tout ce qui tenait à sa présence doit devenir un outil, une procédure ou une compétence du client ([du POC à la production](/frameworks/poc-pilote-production)).

## 1. Tenir la revue de préparation

Une revue formelle avant la première vague, appuyée sur la [checklist de mise en production](/templates/checklist-mise-en-production). Chaque domaine apporte une preuve, pas une déclaration, et a un signataire.

| Domaine | Preuve exigée | Signataire chez Voxalis |
| --- | --- | --- |
| Qualité | Seuils du plan d'évaluation tenus sur la version candidate, golden set enrichi des cas du pilote | Sophie Lambert |
| Sécurité | Jeu adverse sans action inappropriée, droits revus outil par outil ([sécurité des agents](/frameworks/securite-agents)) | Marc Dubois |
| Données personnelles | Masquage dans les journaux, durées de conservation | Élise Martin |
| Exploitation | Runbook, alertes, astreinte, arrêt et mode dégradé testés | Karim Haddad |
| Capacité et coûts | Test de charge au volume cible, budget par cas | Karim Haddad, Julien Faure |
| Adoption | Formations planifiées avant chaque bascule, managers préparés | Sophie Lambert, Isabelle Moreau |

Un « non » sur une ligne reporte la vague.

## 2. Déployer par vagues

Chaque vague est un petit pilote, avec ses critères d'entrée et de sortie, et sert aussi à transférer l'exploitation.

| Vague | Périmètre | Semaines | Qui mène |
| --- | --- | --- | --- |
| 1 | Ouest | S30 à S32 | Équipe FDE, en binôme avec l'équipe Voxalis |
| 2 | Nord et Est | S33 à S35 | Équipe Voxalis, FDE en appui |
| 3 | Île-de-France et Sud | S36 à S39 | Équipe Voxalis seule, FDE en observation |

Conditions pour lancer la vague suivante : indicateurs de qualité stables sur la vague en cours, aucun incident majeur ouvert, charge de support absorbée, formation de la vague suivante terminée. Chaque vague a son retour arrière : les tickets repassent en voie assistée. Commencer par la région du pilote, et garder les contextes les moins connus pour le moment où l'exploitation est rodée.

## 3. Organiser l'exploitation

Le cadre est décrit dans [AgentOps](/frameworks/agentops) ; le [runbook](/templates/runbook-agent) en est le livrable.

- **Traçage.** Une trace de bout en bout par cas — orchestrateur, agents, appels d'outils, sorties — corrélée par l'identifiant du ticket, dans un format ouvert comme OpenTelemetry. Données personnelles masquées, conservation définie (13 mois chez Voxalis).
- **Indicateurs.** Trois familles : qualité (justesse sur l'échantillon hebdomadaire de 5 % revu par les experts, taux d'escalade, taux de correction par les conseillers), service (délai au 95e centile, erreurs d'outils), coût (par ticket, par agent).
- **Alertes.** Peu nombreuses, et chacune appelle une action. Chez Voxalis : justesse hebdomadaire sous 88 % ; plus de 5 diagnostics identiques sur une zone en 30 minutes, signe d'un incident collectif non déclaré ; baisse du score sur le golden set rejoué chaque nuit, qui bloque tout déploiement.
- **Astreinte.** Qui est appelé, sous quel délai, avec quel runbook : pour chaque alerte, le diagnostic, l'action immédiate, le mode dégradé, les personnes à prévenir. L'arrêt d'un agent est possible par l'exploitation comme par le métier, et testé régulièrement.
- **Changements.** Toute modification de prompt, d'outil ou de modèle est une mise en production : jeu d'évaluation rejoué, déploiement progressif, retour arrière en une commande, version du modèle figée.

Chez Voxalis, une équipe AgentOps de 3 ETP porte l'ensemble.

## 4. Élargir l'autonomie sur preuves

L'autonomie ne s'élargit ni au calendrier ni à la demande d'un manager pressé ([niveaux d'autonomie](/frameworks/niveaux-autonomie)). Une demande d'élargissement est un dossier : périmètre (quel outil, quel motif), preuves (volume, qualité, incidents), risque résiduel, surveillance prévue, condition de retour. Exemple : l'Agent Diagnostic passe à L4 sur un motif après 500 diagnostics consécutifs à 95 % de justesse au moins sur ce motif. De même, une action ne rejoint le catalogue à risque faible de l'Agent Résolution qu'après avoir fait ses preuves sous approbation humaine. Le mouvement inverse est prévu : un incident ramène le périmètre au niveau précédent sans attendre le comité. Chaque décision est portée au [registre des agents](/templates/registre-agents).

## 5. Maîtriser les coûts

Suivre le coût par ticket, par agent et par voie, pas seulement la facture ([FinOps de l'IA](/frameworks/finops-ia)). Le pilote Voxalis donnait 0,38 € d'inférence par ticket : sur 420 000 tickets, environ 0,16 M€ par an, à l'intérieur des 0,55 M€ prévus pour l'inférence et la plateforme. Refaire ce calcul à chaque vague.

Leviers, dans l'ordre : supprimer les appels inutiles en lisant les trajectoires, réduire le contexte transmis, mettre en cache ses parties stables, confier les tâches simples à des modèles plus légers, traiter en différé ce qui n'est pas urgent. Chaque optimisation passe par le jeu d'évaluation, comme tout changement. Garder une limite de budget par cas et une alerte sur la dérive du coût unitaire.

## 6. Installer la gouvernance

Deux objets suffisent pour commencer ([gouvernance de l'IA](/frameworks/gouvernance-ia)). Le registre des agents : pour chacun, propriétaire métier, version, outils, niveaux d'autonomie, date de dernière évaluation. Et une instance qui décide : chez Voxalis, un comité de gouvernance IA mensuel coprésidé par Sophie Lambert et Karim Haddad. Ordre du jour fixe : qualité et incidents, demandes d'élargissement, changements à venir, coûts, nouveaux agents. Pour les obligations réglementaires, s'appuyer sur le juridique du client.

## 7. Former

Former au métier qui change, pas à l'outil ([plan de conduite du changement](/templates/plan-conduite-changement)). Le conseiller devient superviseur de cas : quand faire confiance, quand reprendre la main, comment signaler. Trois règles : les managers d'abord, puisqu'ils piloteront avec de nouveaux indicateurs ; des cas réels plutôt qu'une présentation ; la formation avant la bascule de chaque vague. Voxalis a formé ses 190 conseillers au rythme des vagues. L'équipe AgentOps, elle, se forme en faisant : lire une trace, rejouer une évaluation, modifier un prompt, conduire un incident.

## Erreurs fréquentes

- **Basculer d'un coup.** Un défaut touche alors tous les plateaux le même jour.
- **Alerter sur tout.** Au bout de deux semaines, personne ne regarde plus. Une alerte sans action associée se supprime.
- **Laisser l'astreinte aux FDE.** Le client n'apprend pas à opérer et la mission ne peut pas se terminer ([dépendance aux FDE](/savoir/dependance-fde)).
- **Subir les mises à jour de modèle.** Sans version figée ni rejeu du golden set, une régression arrive en production sans prévenir.
- **Découvrir les coûts à la facture.** Le coût unitaire se suit chaque semaine, à côté de la qualité.

## Checklist

- [ ] La revue de préparation est tenue ; chaque domaine a sa preuve et son signataire.
- [ ] Les vagues ont des critères d'entrée, de sortie et un retour arrière testé.
- [ ] Chaque cas produit une trace complète, corrélée et masquée.
- [ ] Chaque alerte a un seuil, un destinataire et une action dans le runbook.
- [ ] L'astreinte et l'arrêt d'urgence sont tenus par le client et ont été testés.
- [ ] Tout changement de prompt, d'outil ou de modèle rejoue le jeu d'évaluation.
- [ ] Les règles d'élargissement et de retrait de l'autonomie sont écrites et appliquées par le comité.
- [ ] Le coût par ticket est suivi et comparé à l'enveloppe du business case.
- [ ] Le registre des agents est à jour et le comité de gouvernance se réunit.
- [ ] Les utilisateurs et l'équipe d'exploitation sont formés avant chaque bascule.
