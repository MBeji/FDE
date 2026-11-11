---
id: plan-transfert
titre: "Plan de transfert de compétences"
resume: "Le plan qui rend le client capable d'opérer, d'évaluer et de faire évoluer ses agents sans nous : matrice de compétences, modalités, jalons d'autonomie et critères de fin de mission."
phase: perenniser
type: livrable
format: document
effort: "1 à 2 jours, puis 1 h par semaine de suivi"
tags: [transfert, autonomie, competences]
frameworks: [modele-operationnel-cible, agentops, usine-agents]
---

<!-- section: mode-emploi -->
## À quoi ça sert

Faire du départ de l'équipe FDE un non-événement. Le plan dit qui, chez le client, doit savoir faire quoi, à quel niveau et à quelle date, et comment on le constate : par des épreuves réelles, pas par des présentations.

## Quand l'utiliser

Première version en phase Concevoir : les personnes à former sont nommées avant le pilote. Exécution dès la construction, en binômes ; intensification pendant la généralisation ; clôture au jalon G7. Sans lui, la mission glisse vers la [dépendance au FDE](/savoir/dependance-fde).

## Comment le remplir

1. Lister les compétences à partir de ce que l'équipe FDE fait réellement chaque semaine. Le test : « si nous disparaissons vendredi, qu'est-ce qui s'arrête ? »
2. Nommer un titulaire et un suppléant par compétence critique.
3. Coter le niveau de départ et le niveau cible de chacun.
4. Choisir la modalité : binôme pour les gestes, formation pour les concepts, documentation pour la référence.
5. Attacher à chaque jalon d'autonomie des épreuves observables et datées.
6. Faire signer les critères de fin de mission par le sponsor.

## Critères de qualité

- [ ] Chaque compétence critique a un titulaire et un suppléant nommés.
- [ ] Les niveaux sont constatés sur des épreuves réelles, pas déclarés.
- [ ] Chaque jalon a une date, des épreuves et un observateur.
- [ ] Le client a livré seul une évolution complète et géré seul un incident.
- [ ] Dépôts, accès, documents et contrats sont au nom du client.
- [ ] Les critères de fin de mission sont signés par le sponsor.

<!-- section: template -->
# Plan de transfert de compétences — {{client}}

| | |
| --- | --- |
| **Mission** | {{mission}} |
| **Domaine** | {{domaine}} |
| **Sponsor** | {{sponsor}} |
| **Responsable côté client** | _[Celui qui dirigera l'équipe après la mission]_ |
| **Responsable côté FDE** | {{auteur}} |
| **Version** | _[1.0]_ du {{date}} |

## 1. Objectif et périmètre

**À la fin de la mission, l'équipe du client sait, seule** : _[Trois à cinq verbes : opérer, évaluer, faire évoluer, gouverner, mesurer.]_

**Hors périmètre du transfert** : _[Ce que le client n'a pas besoin de savoir faire seul, et qui le couvre : fournisseur, autre équipe.]_

## 2. Équipe cible

| Rôle cible | Personne | Origine | Disponibilité | Dans l'équipe depuis |
| --- | --- | --- | --- | --- |
| | _[Un nom. Un rôle sans nom est un risque à inscrire en section 8.]_ | | | |

## 3. Matrice de compétences

**Échelle** : 0 non exposé ; 1 a vu faire ; 2 fait avec appui ; 3 fait seul ; 4 fait seul et sait transmettre.
**Lecture d'une cellule** : niveau de départ → niveau cible / niveau constaté. Un tiret : personne non concernée.
**Règle** : chaque compétence critique compte au moins deux personnes au niveau 3 à la fin de la mission.

| Compétence | Criticité | _[Personne 1]_ | _[Personne 2]_ | _[Personne 3]_ | _[Personne 4]_ |
| --- | --- | --- | --- | --- | --- |
| _[Verbe et objet : « conduire un incident », pas « connaître le runbook »]_ | _[Critique / Importante]_ | _[1 → 3 / …]_ | | | |

**Écarts constatés** : _[Cellules où le constaté est inférieur à la cible, et ce qui est prévu.]_

## 4. Modalités de transfert

| Compétences | Modalité | Contenu | Référent FDE | Bénéficiaires | Période | Preuve d'acquisition |
| --- | --- | --- | --- | --- | --- | --- |
| | _[Binôme / Formation / Documentation]_ | | | | | _[Une production ou un geste observé, pas une feuille de présence]_ |

## 5. Jalons d'autonomie

| Jalon | Principe | Période | Épreuves | Observateur | Constat |
| --- | --- | --- | --- | --- | --- |
| 1. Le client fait avec nous | Le FDE conduit, le client participe à chaque geste, puis conduit sous guidage | | | | |
| 2. Le client fait, nous observons | Le client conduit ; le FDE n'intervient que sur demande ou en cas de danger, et débriefe | | | | |
| 3. Le client fait seul | Le FDE n'a plus la main ; chaque sollicitation est comptée | | | | |

**Compteur de sollicitations de l'équipe FDE** : _[Par jalon : nombre de sollicitations, dont celles qui ont exigé une intervention.]_

## 6. Patrimoine transféré

| Élément | Emplacement | Propriétaire chez le client | État |
| --- | --- | --- | --- |
| _[Code, prompts, jeux d'évaluation, runbooks, registre, tableaux de bord, supports de formation, accès, contrats]_ | | | _[Transféré le … / À faire avant le …]_ |

## 7. Critères de fin de mission

| N° | Critère | Mesure | Seuil | Constat |
| --- | --- | --- | --- | --- |
| 1 | _[Exploitation]_ | | | |
| 2 | _[Incident]_ | | | |
| 3 | _[Évolution]_ | | | |
| 4 | _[Évaluation]_ | | | |
| 5 | _[Gouvernance]_ | | | |
| 6 | _[Compétences]_ | | | |
| 7 | _[Patrimoine]_ | | | |

**Décision** : _[Fin de mission prononcée par {{sponsor}} le …, avec ou sans réserve.]_

## 8. Risques

| Risque | Probabilité | Impact | Parade | Porteur |
| --- | --- | --- | --- | --- |
| | _[Faible / Moyenne / Forte]_ | _[Faible / Moyen / Fort]_ | | |

## 9. Après la mission

_[Points de mesure prévus, appui résiduel et ses limites, canal unique de sollicitation, date de revue de la matrice.]_

<!-- section: exemple -->
# Plan de transfert de compétences — Voxalis

| | |
| --- | --- |
| **Mission** | Réinvention de l'Assistance & SAV Entreprises |
| **Domaine** | Assistance & SAV Entreprises |
| **Sponsor** | Claire Besson, Directrice générale adjointe Marché Entreprises |
| **Responsable côté client** | Thomas Nguyen, Responsable Data & IA |
| **Responsable côté FDE** | Yasmine, lead FDE |
| **Version** | Version finale du 9 octobre 2026 (S39), avec constats. Version 1.0 du 7 mai 2026, jointe au dossier de conception |

## 1. Objectif et périmètre

**À la fin de la mission, l'équipe Voxalis sait, seule** : opérer SAV Augmenté et conduire un incident ; évaluer chaque changement sur le golden set ; faire évoluer les agents, jusqu'à ouvrir un nouveau motif ; gouverner l'autonomie par le registre et le comité ; mesurer la valeur avec la finance.

**Hors périmètre du transfert** : l'exploitation de la plateforme d'inférence, couverte par le contrat du fournisseur ; les applications réseau, qui restent à la Direction Réseau ; la conception d'un système multi-agents pour un nouveau domaine, pour laquelle un appui reste prévu.

## 2. Équipe cible

| Rôle cible | Personne | Origine | Disponibilité | Dans l'équipe depuis |
| --- | --- | --- | --- | --- |
| Responsable AgentOps | Le data engineer de l'équipe détachée | DSI | Plein temps depuis S30 | S3 |
| Analyste évaluation, équipe AgentOps | L'un des deux experts N2 détachés | Plateau de Nantes | Plein temps depuis S30 | S3 |
| Ingénieur agents, équipe AgentOps | Ingénieur recruté en interne | DSI | Plein temps | S32, le 17 août |
| Product owner de SAV Augmenté | Le product owner détaché | Relation Client Entreprises | Plein temps | S6 |
| Architecte SI | L'architecte SI détaché | DSI | 2 jours par semaine | S3 |
| Référent sécurité | Le référent sécurité détaché | Équipe du RSSI | 1 jour par semaine | S3 |
| Expert N2 référent | Le second expert N2 détaché | Plateau | Mi-temps | S3 |
| Animation des superviseurs de cas | Nadia Cherif | Responsable du plateau de Nantes | Selon les vagues | S4 |

## 3. Matrice de compétences

**Échelle** : 0 non exposé ; 1 a vu faire ; 2 fait avec appui ; 3 fait seul ; 4 fait seul et sait transmettre.
**Lecture d'une cellule** : niveau au début de la phase Construire (S18), ou à l'arrivée → niveau cible / niveau constaté le 9 octobre.
**Colonnes** : RA responsable AgentOps ; IA ingénieur agents ; AE analyste évaluation ; PO product owner ; AS architecte SI ; RS référent sécurité ; EN expert N2 référent ; NC Nadia Cherif.

| Compétence | Criticité | RA | IA | AE | PO | AS | RS | EN | NC |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1. Surveiller au quotidien : tableau de bord, alertes, contrôles de routine | Critique | 2 → 4 / 4 | 0 → 3 / 3 | 1 → 3 / 3 | 1 → 2 / 2 | — | — | — | — |
| 2. Conduire un incident : runbook, mode dégradé, retour arrière, post-mortem | Critique | 1 → 4 / 4 | 0 → 3 / 3 | 1 → 2 / 2 | — | 2 → 3 / 3 | 2 → 3 / 3 | — | 1 → 3 / 3 |
| 3. Évaluer : rejouer le golden set, lire un rapport, calibrer le modèle juge | Critique | 2 → 3 / 3 | 0 → 3 / **2** | 2 → 4 / 4 | 1 → 2 / 2 | — | — | 2 → 3 / 3 | — |
| 4. Enrichir le golden set et le jeu adverse | Critique | — | — | 3 → 4 / 4 | — | — | 2 → 3 / 3 | 3 → 4 / 4 | — |
| 5. Modifier un agent et le déployer : prompt, configuration, garde-fous | Critique | 2 → 3 / 3 | 0 → 3 / 3 | 1 → 2 / 2 | — | — | — | — | — |
| 6. Faire évoluer un outil de la passerelle MCP | Importante | 2 → 3 / 3 | 0 → 3 / **2** | — | — | 2 → 4 / 4 | 1 → 2 / 2 | — | — |
| 7. Ouvrir un nouveau motif de bout en bout | Critique | 1 → 3 / 3 | 0 → 3 / 3 | 1 → 3 / 3 | 1 → 3 / 3 | — | — | 2 → 3 / 3 | — |
| 8. Concevoir un nouvel agent : fiche agent, autonomie, analyse de risques | Importante | 1 → 3 / **2** | — | — | 1 → 3 / **2** | 1 → 3 / 3 | 1 → 2 / 2 | — | — |
| 9. Piloter les coûts d'inférence | Importante | 1 → 3 / 3 | 0 → 2 / 2 | — | 1 → 2 / 2 | — | — | — | — |
| 10. Tenir la sécurité : revue des droits, tests adverses, réponse à incident | Critique | 1 → 3 / 3 | — | — | — | 2 → 3 / 3 | 2 → 4 / 4 | — | — |
| 11. Gouverner : registre, dossier d'élargissement, préparation du comité | Critique | 1 → 3 / 3 | — | — | 1 → 4 / 4 | — | — | — | — |
| 12. Mesurer la valeur avec la finance | Importante | — | — | — | 1 → 3 / 3 | — | — | — | — |
| 13. Former et animer les superviseurs de cas | Critique | — | — | — | 1 → 2 / 2 | — | — | 2 → 3 / 3 | 2 → 4 / 4 |

**Écarts constatés**

- Les neuf compétences critiques comptent chacune au moins deux personnes au niveau 3 : la règle est tenue.
- Quatre cellules sont sous la cible. L'ingénieur agents, arrivé en S32, reste au niveau 2 sur l'évaluation et sur les outils de la passerelle : binôme interne avec l'analyste évaluation et l'architecte SI, niveau 3 visé fin novembre, constaté à la mesure à +3 mois.
- La conception d'un nouvel agent reste au niveau 2 pour le responsable AgentOps et le product owner : aucun agent n'a été conçu sans l'équipe FDE pendant la mission. Compétence hors critères de fin de mission, couverte par l'appui décrit en section 9.
- La mesure de la valeur repose sur le seul product owner ; le contrôle de gestion tient le calcul financier et assure la continuité.

## 4. Modalités de transfert

| Compétences | Modalité | Contenu | Référent FDE | Bénéficiaires | Période | Preuve d'acquisition |
| --- | --- | --- | --- | --- | --- | --- |
| Toutes, dès la construction | Binôme | Chaque FDE travaille avec une personne de Voxalis, qui tient le clavier une fois sur deux ; chaque décision est écrite dans un ADR | Léo, Inès | Équipe détachée | S18 à S29 | Prototype et pilote construits dans l'environnement de Voxalis, par l'équipe mixte |
| 1 et 2 | Binôme d'astreinte, puis astreinte seule | Rotation commune pendant la vague 1 ; AgentOps seule ensuite, FDE en second appel jusqu'à S35 | Inès | RA, IA, AE | S30 à S35 | Exercices des 12 août et 16 septembre ; incident réel du 29 septembre |
| 3 et 4 | Formation, puis binôme | Deux demi-journées : lire un rapport d'évaluation, calibrer un modèle juge ; puis campagnes mensuelles menées par l'analyste | Léo | AE, RA, EN | S30 à S35 | Rapport d'évaluation d'août produit par l'analyste, relu par Léo ; celui de septembre produit seul |
| 5, 6 et 7 | Binôme inversé | Voxalis au clavier, FDE en relecture des modifications, puis plus de relecture | Léo, Inès | IA, RA, AS | S33 à S38 | Treizième motif ouvert sans l'équipe FDE |
| 10 | Exercice, puis revue | Exercice d'incident de sécurité ; revue trimestrielle des droits de la passerelle | Inès, avec Marc Dubois | RS, RA | S31, puis S37 | Exercice du 12 août ; revue des droits de septembre menée par le référent sécurité |
| 11 et 12 | Préparation commune, puis relecture, puis retrait | Trois comités de gouvernance IA et trois revues de valeur préparés selon cette progression | Hugo | PO, RA | S30 à S38 | Comité du 1er octobre préparé et tenu sans FDE |
| 13 | Formation de formateurs | Nadia Cherif et les champions animent les modules de formation dès la vague 2 | Expert conduite du changement | NC, champions, EN | S32 à S36 | 78 conseillers de la vague 3 formés sans formateur FDE |
| Toutes | Documentation | Fiches agents, spécifications d'outils, runbooks, guide « ouvrir un nouveau motif », règles du registre | Chacun pour sa partie | Toute l'équipe | S36 à S38 | Chaque document déroulé et corrigé par une personne de Voxalis qui ne l'a pas écrit |

## 5. Jalons d'autonomie

| Jalon | Principe | Période | Épreuves | Observateur | Constat |
| --- | --- | --- | --- | --- | --- |
| 1. Le client fait avec nous | L'équipe FDE mène la vague 1 en binôme avec l'équipe Voxalis | S30 à S32 | Astreinte en binôme ; premier comité de gouvernance IA préparé à deux le 6 août ; exercice d'incident de sécurité du 12 août, arrêt d'urgence déclenché par l'astreinte en 3 minutes ; test de charge au volume national du 20 août mené par l'architecte SI | Yasmine | Atteint le 21 août |
| 2. Le client fait, nous observons | L'équipe Voxalis mène la vague 2 ; l'équipe FDE est en appui, sur demande | S33 à S35 | Astreinte tenue par l'équipe AgentOps ; extension de la voie autonome de 9 à 12 motifs instruite par l'équipe AgentOps et présentée au comité du 3 septembre par le product owner ; rapport d'évaluation d'août produit par l'analyste | Yasmine, Thomas Nguyen | Atteint le 11 septembre |
| 3. Le client fait seul | L'équipe Voxalis mène la vague 3 ; les droits d'écriture de l'équipe FDE sont retirés le 14 septembre | S36 à S39 | Incident du 29 septembre : arrêt d'urgence en 9 minutes, post-mortem publié le 5 octobre ; treizième motif, « renvoi d'appel inopérant », ouvert en voie assistée le 6 octobre après ajout de 40 cas annotés au golden set, seuils tenus ; golden set rejoué sur un second modèle le 24 septembre ; comité du 1er octobre tenu sans FDE | Thomas Nguyen, Sophie Lambert | Atteint le 9 octobre |

**Compteur de sollicitations de l'équipe FDE**

| Jalon | Sollicitations | Dont avec intervention de l'équipe FDE |
| --- | --- | --- |
| 1 | Sans objet : l'équipe FDE mène | Sans objet |
| 2 | 9 | 3 |
| 3 | 2 | 0 |

## 6. Patrimoine transféré

| Élément | Emplacement | Propriétaire chez Voxalis | État |
| --- | --- | --- | --- |
| Code des agents, de la passerelle et du harnais d'évaluation | Forge logicielle de Voxalis, depuis le premier jour | Responsable AgentOps | Droits d'écriture FDE retirés le 14 septembre, accès révoqués le 9 octobre |
| Golden set (704 cas, dont les 600 initiaux) et jeu adverse (126 cas) | Dépôt d'évaluation de Voxalis | Analyste évaluation ; annotation par les experts N2 | Transféré ; guide d'annotation à jour |
| Fiches agents, spécifications des neuf outils, dossier d'architecture, ADR | Espace documentaire de Voxalis | Product owner, architecte SI | Transféré ; relus en S37 |
| Runbooks | Espace documentaire, lien depuis la console | Responsable AgentOps | Runbook de l'Agent Résolution en version 1.3, rédigée par l'équipe AgentOps |
| Registre des agents | Espace du comité de gouvernance IA | Responsable AgentOps | Tenu par Voxalis depuis le 3 septembre |
| Tableau de bord d'exploitation et alertes | Plateforme d'observabilité de Voxalis | Équipe AgentOps | Transféré |
| Tableau de bord de valeur | Contrôle de gestion | Product owner | Tenu par Voxalis ; prochaine mesure en janvier 2027 |
| Supports de formation et simulateur de cas | Relation Client Entreprises | Nadia Cherif | Transféré ; utilisés sans FDE en vague 3 |
| Contrats d'inférence et de plateforme | DSI | Karim Haddad | Au nom de Voxalis depuis l'origine |

## 7. Critères de fin de mission

Critères arrêtés avec la version 1.0 du plan et signés par Claire Besson.

| N° | Critère | Mesure | Seuil | Constat au 9 octobre |
| --- | --- | --- | --- | --- |
| 1 | Exploitation sans l'équipe FDE | Semaines consécutives sans intervention FDE en production | 3 | 4 semaines, de S36 à S39 |
| 2 | Incident conduit seul | Incident réel de gravité G2 au moins, ou à défaut exercice, post-mortem compris | 1 | Incident du 29 septembre |
| 3 | Évolution livrée seule | Évolution complète, des cas d'évaluation à la production | 1 | Treizième motif, le 6 octobre |
| 4 | Évaluation tenue | Rapport d'évaluation mensuel produit seul ; golden set enrichi | 1 rapport ; ajouts chaque mois | Rapport de septembre ; 104 cas ajoutés depuis le début du pilote |
| 5 | Gouvernance tenue | Comité de gouvernance IA préparé et tenu sans FDE ; registre à jour | 1 séance | Séance du 1er octobre |
| 6 | Compétences critiques couvertes | Personnes au niveau 3 par compétence critique | 2 | Tenu sur les neuf compétences |
| 7 | Patrimoine au nom du client | Dépôts, accès, documents, contrats | 100 % | Tenu ; accès FDE révoqués le 9 octobre |

**Décision** : fin de mission prononcée par Claire Besson au COPIL de clôture du 9 octobre 2026, avec une réserve : niveau 3 de l'ingénieur agents sur l'évaluation et les outils, à constater lors de la mesure à +3 mois.

## 8. Risques

| Risque | Probabilité | Impact | Parade | Porteur |
| --- | --- | --- | --- | --- |
| Départ d'un des trois membres de l'équipe AgentOps | Moyenne | Fort | Un suppléant au niveau 3 par compétence critique ; deux ingénieurs de la DSI formés au niveau 2 d'ici mars 2027 | Thomas Nguyen |
| Retour réflexe vers l'équipe FDE à la première difficulté | Moyenne | Moyen | Canal unique de sollicitation, compté et rapporté au comité ; appui limité à 5 jours | Thomas Nguyen, Yasmine |
| Experts N2 rappelés en production : annotation et revue de l'échantillon abandonnées | Forte | Fort | Temps inscrit au planning et aux objectifs ; taux de revue de l'échantillon suivi par le comité | Sophie Lambert |
| Changement de version du modèle imposé par le fournisseur | Moyenne | Fort | Procédure de requalification écrite et déjà jouée le 24 septembre ; délai de prévenance prévu au contrat | Responsable AgentOps |
| Dérive lente de la qualité que personne ne regarde plus | Faible | Fort | Rejeu nocturne bloquant ; indicateurs du registre lus à chaque comité | Comité de gouvernance IA |
| Nouveau domaine lancé sans la méthode : pas de golden set, pas de référence signée | Moyenne | Moyen | Passage obligé par le comité pour tout nouvel agent ; appui à la conception prévu | Karim Haddad |

## 9. Après la mission

- **Points de mesure** : +3 mois en janvier 2027 et +6 mois en avril 2027, avec Hugo et Yasmine ; ils portent sur la valeur et sur la matrice de compétences.
- **Appui résiduel** : 5 jours à la demande jusqu'à la mesure à +6 mois, déclenchés par écrit par Thomas Nguyen. L'équipe FDE conseille et relit ; elle ne reprend pas la main sur la production.
- **Conception d'un nouvel agent** : 2 jours d'accompagnement réservés pour le premier agent conçu par l'équipe Voxalis, afin de porter cette compétence au niveau 3.
- **Revue de la matrice** : chaque semestre, par Thomas Nguyen, et à chaque arrivée ou départ dans l'équipe.
