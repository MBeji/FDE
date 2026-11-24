---
name: organiser-passation
description: "Organise la passation formelle d'un système au client : critères de reprise vérifiés, inventaire de ce qui est remis, engagements et anomalies soldés ou transférés, retrait des accès de l'équipe et clôture. À utiliser quand le transfert de compétences est prouvé et le service validé en production, avant de clore la mission."
metadata:
  titre: "Organiser la passation"
  version: "1.0.0"
  statut: publie
  etape: livraison
  sous-processus: passation
  role: binome
  domaine: pilotage
  phases: [perenniser]
  technologies: []
  cas-usage: [tout-projet]
  tags: [passation, cloture, reprise, inventaire, acces, handover, fin-de-mission, reversibilite]
  proprietaire: design
  diffusion: interne
  entrees: ["Preuves d'autonomie et plan de transfert", "Constat de bon fonctionnement en production", "Registres de la mission (RAID, agents, valeur)"]
  sorties: ["Procès-verbal de passation signé", "Inventaire des éléments remis", "Clôture de mission"]
  prerequis: [transferer-competences, valider-mise-en-production]
---

## Mission

Passer la main proprement : le client sait ce qu'il reçoit, ce qui reste ouvert et qui en répond, et l'équipe se retire sans laisser de dépendance cachée. Le Design conduit la passation et la clôture ; le Build prépare l'inventaire technique et le retrait des accès. Une mission sans passation formelle continue à vivre par les appels au FDE.

## Quand l'utiliser

- Le service est validé en production et les preuves d'autonomie sont réunies.
- Le jalon G7 se prépare.
- Une mission s'arrête avant son terme : la passation se fait sur l'état atteint.

Ne pas l'utiliser pour transférer des compétences : c'est [Transférer les compétences](/skills/transferer-competences), qui la précède.

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| Les preuves d'autonomie constatées | Oui | Ne pas présenter le jalon ; le dire au sponsor. |
| Le constat de bon fonctionnement en production | Oui | Terminer la validation d'abord. |
| Le registre RAID, le registre des agents, le registre de valeur | Oui | Les mettre à jour avant l'inventaire. |
| La liste des accès de l'équipe chez le client | Oui | La reconstituer avec l'équipe sécurité du client. |
| La charte de mission et ses critères de fin | Non | Reprendre les engagements du contrat. |

## Procédure

1. **Fixer les critères de reprise** avec le client, à partir de la charte : service en production stable, documentation éprouvée, équipe autonome, valeur mesurée, gouvernance en place.
2. **Vérifier chaque critère** sur preuve et noter : tenu, tenu avec réserve, non tenu.
3. **Dresser l'inventaire de ce qui est remis** : dépôts de code, prompts et définitions d'outils, golden sets et rapports d'évaluation, infrastructure et environnements, pipeline, tableaux de bord et alertes, documentation et runbooks, registres, comptes de service, contrats et abonnements liés. Pour chaque élément : emplacement et propriétaire côté client.
4. **Remettre les skills transférables.** Les skills de la bibliothèque dont la diffusion est « transférable au client » sont remis à l'équipe et à ses agents ; les autres ne le sont pas.
5. **Solder le registre RAID.** Chaque risque, point ouvert et anomalie est clos, ou transféré à une personne nommée du client avec une date. Rien ne reste attribué à l'équipe qui part.
6. **Transférer les propriétés** : chaque agent a un propriétaire métier et un responsable technique côté client au registre ; chaque alerte arrive chez une personne du client.
7. **Retirer les accès** de l'équipe : comptes, droits, secrets renouvelés, équipements. Faire tracer la révocation par le client.
8. **Convenir de l'après** : ce qui est dû au titre de la garantie ou du support, par quel canal, jusqu'à quand.
9. **Tenir la séance de passation** avec le sponsor, le propriétaire du processus et le responsable d'exploitation ; signer le procès-verbal.
10. **Clore la mission** : bilan, valeur réalisée à date, suites possibles, puis lancer la capitalisation.

## Livrable

1. Le procès-verbal de passation : critères de reprise et leur statut, réserves, engagements après mission, signatures.
2. L'inventaire des éléments remis, avec emplacement et propriétaire.
3. Le registre RAID soldé, le [Registre des agents](/templates/registre-agents) à jour.
4. L'attestation de retrait des accès.
5. La [Clôture de mission](/templates/cloture-mission).

## Critères de qualité

- Chaque critère de reprise a un statut et une preuve.
- Chaque élément remis a un emplacement et un propriétaire côté client.
- Aucun point ouvert ne reste attribué à l'équipe sortante.
- Chaque agent en production a ses propriétaires au registre ([ARC-03](/standards#ARC-03)).
- Les accès de l'équipe sont révoqués et la révocation est tracée ([SEC-06](/standards#SEC-06)).
- Les engagements d'après mission sont écrits, bornés dans le temps.

## Garde-fous

- L'autonomie du client est constatée par le sponsor au jalon G7 : la passation ne se décrète pas.
- Ne remettre au client aucun skill à diffusion interne ni aucun élément issu d'une autre mission.
- Ne conserver aucune donnée du client après la mission, sauf accord écrit ; aucun accès « au cas où ».
- Une réserve majeure non levée se porte au sponsor avant la séance, pas pendant.

## Enchaînements

- **Amont** : [Transférer les compétences](/skills/transferer-competences), [Valider la mise en production](/skills/valider-mise-en-production).
- **Aval** : [Mesurer la valeur réalisée](/skills/mesurer-valeur), [Capitaliser un retour d'expérience](/skills/capitaliser-rex).
- **Workflow** : [De la mise en production au client autonome](/skills/workflows/transferer-au-client).
- **Ressources** : [Plan de transfert de compétences](/templates/plan-transfert), [Registre RAID : risques, hypothèses, points ouverts, décisions](/templates/registre-raid), [Phase Pérenniser](/methode/perenniser), [Gouvernance de l'IA et des agents](/frameworks/gouvernance-ia).
