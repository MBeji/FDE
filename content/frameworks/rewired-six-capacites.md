---
id: rewired-six-capacites
titre: "Les six capacités d'une transformation réussie"
resume: "Les six capacités que McKinsey identifie dans « Rewired », utilisées comme grille de diagnostic et comme ossature de la feuille de route d'une transformation AI-Native."
categorie: strategie
phases: [cadrer, diagnostiquer]
origine: "McKinsey (Rewired)"
niveau: fondamental
tags: [transformation, diagnostic, feuille-de-route]
templates: [diagnostic-maturite, charte-de-mission, plan-de-mission]
lies: [maturite-ai-native, regle-10-20-70, approche-par-domaine, modele-operationnel-cible]
---

## En bref

« Rewired » (McKinsey, 2023) part d'un constat : les transformations numériques et IA échouent rarement sur la technologie, presque toujours sur l'organisation. Le livre identifie six capacités à construire ensemble : une **feuille de route alignée sur la valeur, par domaine** ; les **talents** ; le **modèle opérationnel** ; la **technologie** ; les **données** ; l'**adoption et le passage à l'échelle**.

Pour un FDE, la grille sert deux fois. Au cadrage, elle révèle ce que la mission ne couvre pas et qui la fera échouer. Au diagnostic, elle structure l'évaluation et la feuille de route. Un agent excellent posé sur une organisation qui n'a ni propriétaire, ni données gouvernées, ni plan d'adoption reste un POC.

## Quand l'utiliser

- Au [cadrage](/methode/cadrer), pour vérifier que la charte traite les six capacités ou nomme explicitement celles qui restent hors périmètre, avec leur propriétaire.
- Au [diagnostic](/methode/diagnostiquer), comme lecture de synthèse des sept dimensions de maturité.
- Quand un client a multiplié les POC sans passage à l'échelle : la cause se trouve presque toujours dans les capacités 3, 5 ou 6.

Ne pas l'utiliser comme note détaillée : la grille est trop large pour noter finement. Pour cela, utiliser le [modèle de maturité AI-Native](/frameworks/maturite-ai-native).

## Comment l'appliquer

### 1. Articuler les six capacités avec nos sept dimensions

| Capacité Rewired | Dimensions de maturité correspondantes | Question décisive |
| --- | --- | --- |
| Feuille de route alignée sur la valeur, par domaine | Vision & stratégie ; Cas d'usage & valeur | Le comité de direction a-t-il choisi un ou deux domaines et chiffré la valeur attendue ? |
| Talents | Talents & culture | Qui, en interne, saura opérer et faire évoluer les agents après notre départ ? |
| Modèle opérationnel | Modèle opérationnel & gouvernance | Existe-t-il des équipes pluridisciplinaires dotées d'un propriétaire métier ? |
| Technologie | Technologie & plateforme | Une équipe peut-elle livrer en production sans ticket à trois services ? |
| Données | Données & connaissances | Les données et la base de connaissances du domaine sont-elles fiables et possédées ? |
| Adoption et passage à l'échelle | Maturité agentique ; Cas d'usage & valeur | Un cas d'usage a-t-il déjà été généralisé et mesuré ? |

La dimension **Maturité agentique** est un ajout de notre méthode : Rewired ne traite pas spécifiquement l'autonomie des agents, leurs évaluations ni leur supervision.

### 2. Collecter des preuves, pas des opinions

Pour chaque capacité, demander un artefact : feuille de route signée, organigramme d'une équipe produit, chaîne de déploiement, dictionnaire de données, tableau de bord d'adoption. Absence d'artefact = capacité faible, quel que soit le discours.

### 3. Identifier la capacité limitante

La transformation avance au rythme de la capacité la plus faible. Classer les six capacités en trois états : en place, partielle, absente. Toute capacité absente sur le domaine visé devient un chantier de la feuille de route ou un critère d'arrêt.

### 4. Construire la feuille de route sur les six fronts

Pour chaque vague de cas d'usage, prévoir ce qui avance en parallèle sur les cinq autres capacités. Résultat attendu : une feuille de route où la ligne « agents » n'est qu'une ligne sur six.

## Exemple

Chez Voxalis, la lecture Rewired du diagnostic (moyenne 2,1 sur 5) est nette.

| Capacité | État | Constat | Réponse dans la mission |
| --- | --- | --- | --- |
| Feuille de route par domaine | Partielle | 7 POC en deux ans, dispersés, aucun mesuré | Un seul domaine : Assistance & SAV Entreprises |
| Talents | Partielle | Talents & culture à 2,0 | Équipe Voxalis détachée, transfert en S39 |
| Modèle opérationnel | Absente | Gouvernance à 1,5 | Équipe AgentOps de 3 ETP, comité de gouvernance IA mensuel |
| Technologie | En place | 3,0, 4 applications sur 6 exposent des API | Passerelle MCP exposant neuf outils |
| Données | Partielle | 35 % des 2 300 articles obsolètes | Nettoyage de la base, Agent Qualité qui l'alimente |
| Adoption et passage à l'échelle | Absente | Un seul POC en production | Mode fantôme, pilote à Nantes, 3 vagues, 190 conseillers formés |

Le modèle opérationnel, et non la technologie, était la capacité limitante. C'est pourquoi la phase Réinventer a pesé autant que la phase Construire.

## Pièges à éviter

- **Traiter les six capacités en séquence.** Attendre la plateforme pour lancer les cas d'usage tue l'élan. Parade : faire avancer chaque capacité au rythme des cas d'usage du domaine.
- **Confondre capacité et investissement.** Un budget plateforme ne fait pas une capacité technologique. Parade : exiger une preuve d'usage.
- **Laisser hors champ ce qui dérange.** Talents et modèle opérationnel sont souvent exclus du mandat. Parade : les inscrire dans la charte, avec un propriétaire côté client.
- **Oublier l'agentique.** La grille Rewired ne dit rien de l'autonomie des agents. Parade : la compléter par la dimension Maturité agentique.

## Pour aller plus loin

- Frameworks : [modèle de maturité AI-Native](/frameworks/maturite-ai-native), [règle 10-20-70](/frameworks/regle-10-20-70), [approche par domaine](/frameworks/approche-par-domaine), [modèle opérationnel AI-Native](/frameworks/modele-operationnel-cible)
- Templates : [diagnostic de maturité](/templates/diagnostic-maturite), [charte de mission](/templates/charte-de-mission)
- Outil : [auto-diagnostic de maturité](/outils/maturite)
- Référence : McKinsey, « Rewired: The McKinsey Guide to Outcompeting in the Age of Digital and AI » (2023).
