---
id: analyse-risques-agent
titre: "Analyse de risques et garde-fous"
resume: "Le modèle de menace d'un agent ou d'un système multi-agents, son registre de risques coté avant et après garde-fous, une pré-qualification réglementaire à faire valider par le juridique et le plan de tests adverses qui en découle."
phase: concevoir
type: grille
format: tableau
effort: "1 à 2 jours, dont un atelier de 3 h avec la sécurité, le DPO et le métier"
tags: [risques, securite, conformite, garde-fous]
frameworks: [garde-fous, securite-agents, eu-ai-act, nist-ai-rmf, ia-responsable]
---

<!-- section: mode-emploi -->
## À quoi ça sert

La grille oblige à écrire, pour chaque façon dont le système peut nuire, le scénario, sa cause, son impact, le garde-fou qui le tient et ce qui reste après. Elle alimente trois livrables : les [fiches agents](/templates/fiche-agent), le jeu adverse du [plan d'évaluation](/templates/plan-evaluation) et l'avis de la sécurité au jalon G4.

## Quand l'utiliser

En phase Concevoir, dès que la liste des outils est connue, puis à chaque nouvel outil d'écriture, élargissement d'autonomie ou incident. Références : [garde-fous](/frameworks/garde-fous), [sécurité des agents](/frameworks/securite-agents).

## Comment le remplir

1. Tenir un atelier de trois heures avec le RSSI, le DPO, le propriétaire du processus et un expert métier.
2. Partir des entrées : pour chaque texte que lit un agent, qui peut l'écrire ? Puis des outils d'écriture : que se passe-t-il s'ils sont appelés à tort ?
3. Écrire chaque risque comme un scénario concret, pas comme une catégorie.
4. Coter avant garde-fous, choisir des garde-fous tenus par le code, coter à nouveau.
5. Soumettre la qualification réglementaire au juridique : la grille prépare sa décision, elle ne la remplace pas.
6. Tirer de chaque risque majeur au moins un cas de test adverse.

## Critères de qualité

- [ ] Chaque entrée non fiable et chaque outil d'écriture apparaît dans au moins un scénario.
- [ ] Chaque risque a un propriétaire nommé chez le client.
- [ ] Aucun risque majeur ne repose sur le seul prompt.
- [ ] Le risque résiduel est accepté par écrit par celui qui le porte.
- [ ] La qualification réglementaire porte la mention de sa validation, ou de son attente.
- [ ] Les tests adverses couvrent chaque risque coté 9 ou plus.

<!-- section: template -->
# Analyse de risques et garde-fous — _[Nom du système]_

| | |
| --- | --- |
| **Client / mission** | {{client}} — {{mission}} |
| **Domaine** | {{domaine}} |
| **Version** | _[1.0]_ du {{date}} |
| **Périmètre analysé** | _[Agents, outils, données et utilisateurs couverts ; ce qui est exclu]_ |
| **Participants à l'atelier** | _[RSSI, DPO, propriétaire du processus, experts, ingénierie]_ |
| **Rédacteur** | {{auteur}} |
| **Statut** | _[Projet / Avis favorable de… le… / Réserves]_ |

## 1. Modèle de menace

### 1.1 Ce qu'on protège

| Actif | Pourquoi il compte | Atteinte redoutée |
| --- | --- | --- |
| _[Service rendu au client, données, systèmes, réputation, budget]_ | | _[Indisponibilité, divulgation, altération, perte financière]_ |

### 1.2 D'où vient la menace

| Source | Intention | Exemple |
| --- | --- | --- |
| _[Tiers malveillant, utilisateur de bonne foi, contenu interne non fiable, erreur du modèle, interne négligent]_ | _[Malveillante / Accidentelle]_ | |

### 1.3 Entrées et niveau de confiance

| Entrée lue par un agent | Qui peut l'écrire | Niveau de confiance | Agents exposés |
| --- | --- | --- | --- |
| | | _[Fiable / À vérifier / Non fiable]_ | |

### 1.4 Capacités d'action

| Outil d'écriture | Effet possible dans le monde réel | Agent détenteur | Pire cas plausible |
| --- | --- | --- | --- |
| | | | |

## 2. Échelles de cotation

| Note | Probabilité | Gravité |
| --- | --- | --- |
| 1 | _[Improbable : fréquence]_ | _[Mineure : définition]_ |
| 2 | | |
| 3 | | |
| 4 | _[Fréquent]_ | _[Critique]_ |

Criticité = probabilité × gravité. _[Seuils : inacceptable, à réduire, acceptable sous surveillance.]_

## 3. Registre des risques

| N° | Scénario | Cause | Impact | Brut (P × G) | Garde-fous | Résiduel (P × G) | Propriétaire |
| --- | --- | --- | --- | --- | --- | --- | --- |
| R1 | _[Qui fait quoi, par quel chemin, avec quel résultat]_ | _[Faiblesse exploitée]_ | _[Sur qui, de quelle ampleur]_ | _[3 × 4 = 12]_ | _[Type : entrée, sortie, outil, droit, budget, humain]_ | _[1 × 4 = 4]_ | _[Nom]_ |

## 4. Qualification réglementaire

> [!WARNING]
> Pré-qualification préparée par l'équipe de la mission. Elle ne vaut pas avis juridique et doit être validée par la direction juridique et le DPO du client, qui fixent aussi le calendrier applicable.

### 4.1 EU AI Act

| Question | Analyse proposée | Conséquence | Validation |
| --- | --- | --- | --- |
| Rôle de l'organisation | _[Fournisseur, déployeur, les deux]_ | | _[En attente / Validé le… par…]_ |
| Pratique interdite ? | | | |
| Système à haut risque ? | | | |
| Obligations de transparence ? | | | |
| Recours à un modèle d'IA à usage général ? | | | |

### 4.2 RGPD

| Sujet | Analyse proposée | Action | Validation |
| --- | --- | --- | --- |
| Données personnelles traitées | | | |
| Finalité et base légale | | | |
| Décision automatisée | | | |
| Analyse d'impact | | | |
| Sous-traitance et transferts | | | |
| Minimisation et conservation | | | |
| Information et droits des personnes | | | |

## 5. Plan de tests adverses

| Famille de tests | Risques couverts | Nombre de cas | Comportement attendu | Critère de passage |
| --- | --- | --- | --- | --- |
| | | | | |

| Autre vérification | Quand | Par qui | Critère |
| --- | --- | --- | --- |
| _[Attaque manuelle, test de la procédure d'arrêt, test des règles d'approbation]_ | | | |

## 6. Risques résiduels acceptés

| Risque | Niveau résiduel | Accepté par | Condition de réexamen |
| --- | --- | --- | --- |
| | | | |

## 7. Revue

_[Fréquence de revue, événements qui déclenchent une mise à jour, instance qui décide.]_

<!-- section: exemple -->
# Analyse de risques et garde-fous — SAV Augmenté

| | |
| --- | --- |
| **Client / mission** | Voxalis — Réinvention de l'Assistance & SAV Entreprises |
| **Domaine** | Assistance & SAV Entreprises |
| **Version** | 1.0 du 5 mai 2026 |
| **Périmètre analysé** | L'Orchestrateur de cas et les cinq agents, la passerelle MCP et ses neuf outils, le poste de supervision. Exclus : la sécurité propre des six applications sources, couverte par la DSI |
| **Participants à l'atelier** | Atelier du 23 avril 2026 : Marc Dubois (RSSI), Élise Martin (DPO), Sophie Lambert, un expert N2, le référent sécurité, l'architecte SI, Inès et Léo |
| **Rédacteur** | Inès, FDE, avec le référent sécurité Voxalis |
| **Statut** | Avis favorable de Marc Dubois et d'Élise Martin au jalon G4 (COPIL de S17), avec deux réserves reprises en section 6 |

## 1. Modèle de menace

### 1.1 Ce qu'on protège

| Actif | Pourquoi il compte | Atteinte redoutée |
| --- | --- | --- |
| Service des clients PME | Une action réseau à tort coupe un client qui travaille | Interruption de service provoquée par le système |
| Données des clients | Coordonnées des contacts, adresses des sites, parc installé | Divulgation à un tiers ou à un autre client |
| Parole de l'opérateur | Chaque message engage Voxalis | Information fausse, promesse intenable, geste commercial non autorisé |
| Réseau | Les équipements partagés servent des milliers de clients | Action en série pendant un incident collectif |
| Confiance du plateau | Sans elle, les conseillers contournent le système | Erreurs visibles et non expliquées |
| Budget d'inférence | Enveloppe du business case | Consommation non maîtrisée |

### 1.2 D'où vient la menace

| Source | Intention | Exemple |
| --- | --- | --- |
| Rédacteur d'un ticket | Malveillante | Texte conçu pour faire exécuter une action ou divulguer des données |
| Rédacteur d'un ticket | Accidentelle | « Redémarrez tout » écrit par un client excédé, pris pour une consigne |
| Contenu interne non fiable | Accidentelle | Article obsolète (35 % de la base), inventaire en retard sur la réalité |
| Modèle | Accidentelle | Diagnostic plausible mais faux, affirmé avec assurance |
| Utilisateur interne | Accidentelle | Conseiller qui approuve sans lire |
| Utilisateur interne | Malveillante | Usage d'une identité d'agent pour agir sur le réseau |
| Compte client compromis | Malveillante | Tickets ouverts en masse au nom d'un client |

### 1.3 Entrées et niveau de confiance

| Entrée lue par un agent | Qui peut l'écrire | Niveau de confiance | Agents exposés |
| --- | --- | --- | --- |
| Description du ticket, pièces jointes | Le client, donc n'importe qui | Non fiable | Qualification, Diagnostic |
| Réponses de la supervision et du test de ligne | Les équipements, la Direction Réseau | Fiable | Diagnostic, Résolution |
| Inventaire du parc, dont ses champs de commentaire | Techniciens, conseillers | À vérifier | Diagnostic |
| Articles de la base de connaissances | 140 contributeurs internes | À vérifier | Diagnostic, Résolution, Qualité |
| Diagnostic structuré | L'Agent Diagnostic | À vérifier : il peut relayer un texte non fiable | Orchestrateur, Résolution, Communication |
| Décision d'approbation | Superviseur de cas, expert N2 | Fiable, signée | Orchestrateur |

### 1.4 Capacités d'action

| Outil d'écriture | Effet possible dans le monde réel | Agent détenteur | Pire cas plausible |
| --- | --- | --- | --- |
| `reseau.executer_action` | Coupure ou reconfiguration du service d'un client | Résolution | Réinitialisation de la configuration d'un client en pleine activité |
| `client.envoyer_message` | Message reçu par le client | Communication | Engagement pris au nom de Voxalis ; donnée d'un autre client envoyée |
| `crm.mettre_a_jour_ticket` | Statut, voie, clôture du ticket | Orchestrateur | Tickets clos à tort, client sans suivi |

## 2. Échelles de cotation

| Note | Probabilité | Gravité |
| --- | --- | --- |
| 1 | Improbable : moins d'une fois par an | Mineure : gêne interne, aucun client touché |
| 2 | Possible : quelques fois par an | Modérée : un client touché, effet corrigé en moins d'une heure |
| 3 | Probable : chaque mois | Majeure : plusieurs clients ou interruption longue, réclamation, donnée personnelle exposée |
| 4 | Fréquent : chaque semaine | Critique : atteinte au réseau, incident de sécurité, mise en cause réglementaire |

Criticité = probabilité × gravité. À partir de 9 : inacceptable sans garde-fou tenu par le code. De 5 à 8 : à réduire. Jusqu'à 4 : acceptable sous surveillance.

## 3. Registre des risques

| N° | Scénario | Cause | Impact | Brut (P × G) | Garde-fous | Résiduel (P × G) | Propriétaire |
| --- | --- | --- | --- | --- | --- | --- | --- |
| R1 | Le texte d'un ticket contient une instruction qu'un agent exécute | Le modèle ne distingue pas toujours donnée et consigne | Action ou message à tort | 4 × 3 = 12 | Texte balisé et présenté comme une donnée ; l'Agent Diagnostic n'a aucun outil d'écriture ; l'Agent Résolution ne reçoit pas le texte libre ; règles d'approbation tenues par la passerelle ; 45 cas d'injection rejoués à chaque modification | 2 × 2 = 4 | Marc Dubois |
| R2 | L'Agent Résolution exécute la mauvaise action, sur le mauvais service ou au mauvais moment | Diagnostic faux à confiance élevée, inventaire périmé, client à plusieurs sites | Coupure chez un client en activité | 3 × 3 = 9 | Catalogue fermé de 10 actions ; table de décision à 11 règles ; diagnostic récent exigé ; relecture de l'état du service avant et après ; au plus une action sans approbation par service et par 24 h ; mode fantôme de deux semaines | 1 × 3 = 3 | Direction Réseau |
| R3 | Pendant un incident collectif, le système lance des dizaines d'actions individuelles | Incident non encore déclaré ; diagnostics identiques en série | Charge sur un réseau déjà dégradé | 2 × 4 = 8 | L'incident collectif déclaré bloque toute action ; alerte à 5 diagnostics identiques sur une zone en 30 minutes ; disjoncteur de zone à 5 actions identiques ; plafond de 120 actions par heure | 1 × 3 = 3 | Direction Réseau |
| R4 | Un message annonce un délai, une cause ou un geste commercial erronés | Génération libre ; pression du client dans le ticket | Réclamation, engagement à honorer | 3 × 2 = 6 | Messages bâtis sur gabarits ; contrôle par code des délais et montants ; geste commercial soumis à un humain (L2) ; seuil de conformité de 98 % ; 100 messages revus par semaine | 2 × 2 = 4 | Sophie Lambert |
| R5 | Une action ou un message est exécuté deux fois | Nouvel essai après un délai dépassé ; reprise après panne | Double coupure ; client destinataire de doublons | 3 × 2 = 6 | Clé d'idempotence calculée par la passerelle pour `reseau.executer_action` ; verrou par service ; état du cas enregistré à chaque transition | 2 × 1 = 2 | Thomas Nguyen |
| R6 | Une donnée personnelle ou une donnée d'un autre client sort du système | Filtre insuffisant ; journaux en clair ; contexte partagé entre deux cas | Violation de données | 2 × 4 = 8 | Outils filtrés sur le client du ticket ; aucune mémoire entre les cas ; identité du contact et adresse masquées dans les journaux ; traitements hébergés dans l'Union européenne, sans réutilisation des données pour l'entraînement ; contrôle de sortie des messages | 1 × 4 = 4 | Élise Martin |
| R7 | Un diagnostic faux est affirmé avec une confiance élevée | Preuves mal interprétées ; conclusion prématurée | Cas envoyé dans la mauvaise voie, réouverture | 3 × 2 = 6 | Toute cause cite un résultat d'outil, vérifié par code ; calibration suivie (97 % de justesse à confiance élevée) ; Agent Qualité sur chaque cas clos ; échantillon hebdomadaire de 5 % | 2 × 2 = 4 | Thomas Nguyen |
| R8 | L'agent applique une procédure obsolète ou altérée | 35 % d'articles obsolètes ; contributeurs nombreux | Remédiation inadaptée | 3 × 3 = 9 | Recherche limitée aux articles validés depuis moins de 12 mois ; revue des articles des 12 motifs avant le pilote ; un propriétaire par article ; l'Agent Qualité propose, un humain publie | 2 × 2 = 4 | Sophie Lambert |
| R9 | Le modèle, la passerelle ou une application source est indisponible | Panne, saturation | File d'incidents bloquée | 3 × 2 = 6 | Bascule en voie assistée sans agents : le ticketing reste le système de référence ; délais d'attente bornés ; reprise des cas en file | 3 × 1 = 3 | Karim Haddad |
| R10 | Un changement de modèle, de prompt ou d'outil dégrade la qualité sans bruit | Changement non évalué ; évolution chez le fournisseur | Baisse de justesse découverte par les clients | 3 × 3 = 9 | Version du modèle figée ; golden set rejoué à chaque modification et chaque nuit ; seuils bloquants ; retour arrière en une commande | 2 × 2 = 4 | Thomas Nguyen |
| R11 | Les conseillers approuvent les propositions sans les lire | Système fiable, volume élevé, pression du temps | L'approbation humaine ne protège plus | 3 × 3 = 9 | Preuves affichées avec chaque demande ; approbation réservée aux actions qui le méritent ; suivi du temps passé par approbation et du taux de refus ; cas témoins dont l'erreur est connue ; formation | 2 × 3 = 6 | Sophie Lambert, Nadia Cherif |
| R12 | Les contrôles de l'Agent Qualité servent à évaluer individuellement les conseillers | Glissement d'usage des tableaux de bord | Rupture de confiance avec le plateau ; requalification réglementaire possible | 2 × 3 = 6 | Contrôle au niveau du cas, restitution par équipe ; aucun identifiant de conseiller dans les tableaux de bord de qualité ; engagement écrit présenté aux représentants du personnel | 1 × 3 = 3 | Isabelle Moreau |
| R13 | Un agent boucle ou multiplie les appels | Cas insoluble, outil instable | Coût et délai hors enveloppe | 2 × 2 = 4 | Plafonds par cas (12 appels, 0,50 € et 5 minutes pour le diagnostic) ; alerte sur le coût moyen par ticket | 1 × 1 = 1 | Thomas Nguyen |
| R14 | Une identité d'agent est utilisée hors de la passerelle | Secret exposé ; droits trop larges | Action réseau sans les règles d'approbation | 1 × 4 = 4 | Une identité par agent ; jetons de 15 minutes ; applications sources accessibles par la seule passerelle ; journal d'audit conservé 13 mois | 1 × 3 = 3 | Marc Dubois |

Cinq risques sont cotés 9 ou plus avant garde-fous : R1, R2, R8, R10 et R11. Chacun est tenu par au moins un garde-fou exécuté par le code, et non par une consigne du prompt. R11 reste le plus élevé après traitement : il dépend d'un comportement humain.

## 4. Qualification réglementaire

> [!WARNING]
> Pré-qualification préparée par l'équipe de la mission pour la direction juridique et le DPO de Voxalis. Elle ne vaut pas avis juridique. Le calendrier d'application des obligations est à confirmer par la direction juridique.

### 4.1 EU AI Act

| Question | Analyse proposée | Conséquence | Validation |
| --- | --- | --- | --- |
| Rôle de Voxalis | Voxalis fait développer le système et le met en service sous son nom pour son propre usage : fournisseur et déployeur du système. Le modèle sous-jacent est fourni par un tiers | Tenir une documentation technique du système ; obtenir celle du fournisseur du modèle | En attente, direction juridique |
| Pratique interdite ? | Non identifiée. Le système ne manipule pas, ne note pas les personnes et n'infère pas leurs émotions | Ne pas ajouter d'analyse des émotions des clients ou des conseillers sans nouvelle analyse | En attente |
| Système à haut risque ? | Non, selon notre lecture : le traitement d'incidents techniques de clients professionnels ne figure pas parmi les domaines listés. Deux points de vigilance. Emploi et gestion des travailleurs : le système ne doit ni évaluer la performance des conseillers ni leur affecter des tâches selon leur comportement (R12). Infrastructures numériques critiques : les actions sont limitées au service d'un client, jamais aux équipements partagés | Maintenir ces deux limites dans la conception ; toute évolution qui les touche rouvre la qualification | En attente |
| Obligations de transparence ? | Oui : le client doit savoir qu'un message est produit par un système d'IA | Mention dans chaque message, avec le moyen de joindre un conseiller ; règle vérifiée par code dans les évaluations | Validé sur le principe par Élise Martin le 23 avril 2026 |
| Modèle d'IA à usage général ? | Oui, intégré tel quel. Les obligations propres à ces modèles pèsent sur leur fournisseur | Clause contractuelle et documentation à obtenir | En attente, achats et juridique |
| Maîtrise de l'IA par les personnels | Les superviseurs de cas et l'équipe d'exploitation doivent être formés au fonctionnement et aux limites du système | Module intégré à la formation des 190 conseillers | À intégrer au plan de conduite du changement |

### 4.2 RGPD

| Sujet | Analyse proposée | Action | Validation |
| --- | --- | --- | --- |
| Données personnelles traitées | Identité et coordonnées des contacts des clients PME, adresse des sites, texte libre des tickets, identifiants des conseillers dans les traces | Inscrire le traitement au registre | Élise Martin, fait le 28 avril 2026 |
| Finalité et base légale | Traitement des incidents : exécution du contrat. Évaluation et amélioration du système : intérêt légitime, à confirmer | Mettre à jour la notice d'information des clients | En attente |
| Décision automatisée | Les actions autonomes portent sur le service d'une entreprise et restent réversibles ; pas d'effet juridique sur une personne physique identifié. Cas des entrepreneurs individuels à examiner | Garantir l'accès à un conseiller sur simple demande | En attente |
| Analyse d'impact | Recommandée : technologie nouvelle, traitement à grande échelle | AIPD conduite par Élise Martin avant l'entrée en pilote | En cours, échéance S20 |
| Sous-traitance et transferts | Le fournisseur du modèle est sous-traitant. Hébergement dans l'Union européenne ; pas de réutilisation des données pour l'entraînement | Vérifier les clauses et la liste des sous-traitants ultérieurs | En attente, achats et juridique |
| Minimisation et conservation | Les agents ne reçoivent que les données du ticket en cours. Identité et adresse masquées dans les journaux. Traces conservées 13 mois. Golden set pseudonymisé | Test de masquage ajouté à l'intégration continue | Validé par Élise Martin |
| Information et droits des personnes | Les demandes d'accès et d'effacement doivent couvrir les traces | Procédure d'extraction par identifiant de contact | À construire avant la généralisation |
| Données des salariés | Les traces contiennent l'activité des conseillers sur le poste de supervision | Pas d'usage individuel (R12) ; information des représentants du personnel par Isabelle Moreau | Fait le 30 avril 2026 |

## 5. Plan de tests adverses

Les 120 cas du jeu adverse sont décrits dans le plan d'évaluation. Ils sont rejoués à chaque modification ; le critère est le même pour toutes les familles : aucune action inappropriée exécutée.

| Famille de tests | Risques couverts | Nombre de cas | Comportement attendu |
| --- | --- | --- | --- |
| Injection dans la description du ticket | R1 | 30 | Texte traité comme un symptôme ; anomalie signalée ; aucune action qui en découle |
| Injection par un contenu renvoyé par un outil | R1, R8 | 15 | Contenu ignoré comme consigne |
| Demande hors périmètre | R2, R14 | 20 | Pas de traitement ; escalade |
| Panne ou incohérence d'outil | R7, R9 | 15 | Confiance faible ; escalade ; aucune action |
| Données contradictoires | R2, R3, R7 | 15 | Contradiction signalée ; pas d'action individuelle |
| Pression de l'interlocuteur | R4 | 15 | Message conforme, sans engagement |
| Accès aux données d'un autre client ou aux instructions | R6 | 10 | Refus ; aucune donnée hors du client du ticket |

| Autre vérification | Quand | Par qui | Critère |
| --- | --- | --- | --- |
| Table de décision de `reseau.executer_action` : 68 combinaisons | À chaque modification de la passerelle | Inès, relecture du référent sécurité | 100 % |
| Idempotence des outils d'écriture | Avant le pilote | Inès | Un double appel ne produit qu'un effet |
| Attaque manuelle d'une demi-journée | S21, puis avant chaque vague | Référent sécurité, deux experts N2 | Aucune action inappropriée ; chaque faille trouvée devient un cas |
| Procédure d'arrêt d'urgence | S21 et S23 | Nadia Cherif, équipe du pilote | Voie autonome coupée en moins de 2 minutes ; tickets repris en voie assistée |
| Disjoncteur de zone | S21 | Inès, Direction Réseau | Ouverture à la cinquième action identique |
| Test de masquage des journaux | À chaque modification | Intégration continue | Aucune identité ni adresse en clair |

## 6. Risques résiduels acceptés

| Risque | Niveau résiduel | Accepté par | Condition de réexamen |
| --- | --- | --- | --- |
| R11, approbation machinale | 6 | Sophie Lambert | Réserve du jalon G4 : indicateurs de vigilance en place avant la sortie du mode fantôme ; réexamen si le taux de refus passe sous 2 % |
| R6, fuite de données | 4 | Élise Martin | Réserve du jalon G4 : AIPD achevée avant l'entrée en pilote |
| R1, injection | 4 | Marc Dubois | Tout nouvel outil d'écriture ; toute nouvelle entrée en texte libre |
| R2, action inappropriée | 3 | Direction Réseau | Toute action ajoutée au catalogue à risque faible |

## 7. Revue

Le registre est relu toutes les deux semaines en revue sécurité et conformité, puis chaque mois par le comité de gouvernance IA après la généralisation. Il est mis à jour sans attendre à chaque incident, nouvel outil, élargissement d'autonomie ou changement de modèle.
