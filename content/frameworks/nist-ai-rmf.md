---
id: nist-ai-rmf
titre: "NIST AI RMF et ISO/IEC 42001"
resume: "Appliquer les quatre fonctions du cadre de gestion des risques du NIST à une mission, et les articuler avec le système de management de l'IA défini par ISO/IEC 42001."
categorie: confiance
phases: [concevoir, industrialiser]
origine: "NIST, ISO/IEC"
niveau: avance
tags: [risques, normes, gouvernance]
templates: [analyse-risques-agent, registre-agents, plan-evaluation]
lies: [gouvernance-ia, ia-responsable, eu-ai-act, securite-agents]
---

## En bref

Deux référentiels structurent la gestion des risques de l'IA dans les grandes organisations. Le **NIST AI RMF** (AI Risk Management Framework), cadre d'application volontaire, organise la démarche en quatre fonctions : **Govern** (gouverner), **Map** (cartographier le contexte et les risques), **Measure** (mesurer), **Manage** (traiter). **ISO/IEC 42001** définit un système de management de l'IA : politiques, rôles, processus et amélioration continue, à l'échelle de l'organisation.

Le premier dit quoi faire sur un système ; le second, comment l'organisation s'assure de le faire durablement. Le FDE n'a pas à mettre en place une certification ; il doit montrer que les livrables de la mission alimentent naturellement l'un et l'autre, et parler le langage de la direction des risques.

## Quand l'utiliser

- Quand le client a une direction des risques, un audit interne ou une démarche ISO existante : ces référentiels sont leur langue.
- En [Concevoir](/methode/concevoir), pour vérifier que l'analyse de risques couvre les quatre fonctions.
- En [Industrialiser](/methode/industrialiser), pour ancrer la gouvernance dans un système de management.

Pour un premier pilote sans enjeu réglementaire fort, l'[analyse de risques](/templates/analyse-risques-agent) suffit ; garder ce framework pour le passage à l'échelle.

## Comment l'appliquer

### 1. Projeter les quatre fonctions sur la mission

| Fonction | Activités dans une mission | Livrables de notre méthode |
| --- | --- | --- |
| Govern | Nommer les responsables, fixer la tolérance au risque, définir les instances et le cycle de vie des agents | Charte de mission, [registre des agents](/templates/registre-agents), comité de gouvernance |
| Map | Décrire le contexte, les usages prévus et interdits, les personnes concernées, les dépendances, les risques | [Canevas de cas d'usage](/templates/canevas-cas-usage), [fiche agent](/templates/fiche-agent), [analyse de risques](/templates/analyse-risques-agent) |
| Measure | Définir et suivre les métriques de qualité, de robustesse, d'équité, de sécurité | [Plan d'évaluation](/templates/plan-evaluation), golden set, jeu adverse, [rapport d'évaluation](/templates/rapport-evaluation) |
| Manage | Prioriser et traiter les risques, surveiller en production, répondre aux incidents, retirer | [Checklist de mise en production](/templates/checklist-mise-en-production), [runbook](/templates/runbook-agent), revues périodiques |

Govern n'est pas une étape : elle encadre les trois autres tout au long du cycle.

### 2. Vérifier la couverture

Pour chaque risque de l'analyse, s'assurer qu'il est cartographié (Map), mesuré par une métrique ou une eval (Measure), assorti d'un traitement et d'un responsable (Manage), et rattaché à une instance (Govern). Un risque sans mesure est un angle mort.

### 3. Articuler avec ISO/IEC 42001

| ISO/IEC 42001 attend | La mission fournit |
| --- | --- |
| Une politique IA et des objectifs | Principes traduits en exigences ([IA responsable](/frameworks/ia-responsable)) |
| Des rôles et responsabilités | Propriétaires d'agents, comité, équipe AgentOps |
| Une évaluation des risques et des impacts | Analyses de risques par agent |
| Des processus maîtrisés sur le cycle de vie | Cycle proposition, qualification, conception, mise en service, revue, retrait |
| Surveillance, audit interne, amélioration continue | Tableaux de bord, revues périodiques, boucle vers le golden set |

### 4. Remettre une table de correspondance

Livrer au client une table : chaque exigence de son référentiel interne ou de ces cadres, le livrable qui y répond, son propriétaire. C'est ce que l'audit demandera.

## Exemple

Chez Voxalis, l'audit interne prépare une démarche ISO/IEC 42001 pour l'ensemble du groupe. En S36, Hugo remet à Thomas Nguyen une table de correspondance. Govern : comité de gouvernance IA mensuel coprésidé par Sophie Lambert et Karim Haddad, registre des six agents, propriétaires nommés. Map : six fiches agents et l'analyse de risques. Measure : golden set de 600 cas, 120 cas adverses, seuils de passage, evals en ligne. Manage : runbooks, coupe-circuits, post-mortems des deux incidents du pilote. Deux écarts relevés : pas de procédure de retrait d'un agent et pas de revue annuelle des analyses de risques. Ils sont ajoutés au plan de transfert.

## Pièges à éviter

- **Produire des documents pour l'audit.** Une analyse de risques qui ne pilote rien. Parade : chaque livrable sert d'abord au projet.
- **Confondre les deux référentiels.** Le NIST outille la démarche sur un système, l'ISO structure l'organisation. Parade : la table de correspondance les distingue.
- **Oublier Measure.** C'est la fonction la plus faible en pratique. Parade : les evals sont la preuve de mesure.
- **Promettre une certification.** Ce n'est pas l'objet de la mission. Parade : livrer une base prête à être auditée.

## Pour aller plus loin

- Frameworks : [gouvernance de l'IA](/frameworks/gouvernance-ia), [IA responsable](/frameworks/ia-responsable), [EU AI Act](/frameworks/eu-ai-act), [évaluation des agents](/frameworks/evaluation-agents)
- Templates : [analyse de risques agent](/templates/analyse-risques-agent), [registre des agents](/templates/registre-agents)
- Références : NIST, « AI Risk Management Framework (AI RMF 1.0) » ; ISO/IEC 42001, système de management de l'intelligence artificielle.
