---
id: ia-responsable
titre: "IA responsable : des principes aux exigences"
resume: "Transformer six principes partagés par les référentiels internationaux en exigences vérifiables, chacune assortie de la preuve qui démontre qu'elle est tenue."
categorie: confiance
phases: [cibler, concevoir, industrialiser]
origine: "Synthèse des référentiels internationaux"
niveau: fondamental
tags: [ethique, exigences, conformite, confiance]
templates: [analyse-risques-agent, plan-evaluation, fiche-agent]
lies: [eu-ai-act, nist-ai-rmf, gouvernance-ia, garde-fous]
---

## En bref

Tous les référentiels d'IA responsable convergent sur une même famille de principes : équité, transparence, explicabilité, vie privée, sécurité, responsabilité humaine. Le problème n'est pas de les énoncer, c'est qu'un principe ne se teste pas. Ce framework impose une traduction systématique : **principe → exigence vérifiable → preuve**. Une exigence qu'on ne peut pas vérifier par une eval, un contrôle ou un document n'est pas une exigence, c'est une intention.

Pour un FDE, c'est le moyen de parler d'éthique avec la DPO, le RSSI et les représentants du personnel dans le même langage que les critères de passage des evals.

## Quand l'utiliser

- En [Cibler](/methode/cibler), pour repérer les cas d'usage qui touchent des personnes de façon sensible et ajuster leur faisabilité.
- En [Concevoir](/methode/concevoir), pour inscrire les exigences dans la [fiche agent](/templates/fiche-agent) et le [plan d'évaluation](/templates/plan-evaluation).
- En [Industrialiser](/methode/industrialiser), pour vérifier que chaque preuve existe avant la mise en service.

Ce framework ne remplace pas la qualification réglementaire : voir [EU AI Act](/frameworks/eu-ai-act).

## Comment l'appliquer

### 1. Identifier les personnes concernées

Lister qui est affecté par les décisions de l'agent : clients, collaborateurs, tiers. Pour chacun, noter ce qui peut mal tourner pour lui.

### 2. Traduire chaque principe

| Principe | Exigence vérifiable (exemple) | Preuve |
| --- | --- | --- |
| Équité | Écart de qualité de service inférieur à un seuil entre segments de clients (taille, région, langue) | Evals ventilées par segment, rapport d'écart |
| Transparence | Le client sait qu'il échange avec un système automatisé | Gabarits de messages relus, contrôle de conformité |
| Explicabilité | Toute action de l'agent est justifiable à partir des éléments consultés | Traces lisibles, justification stockée avec chaque action |
| Vie privée | L'agent n'accède qu'aux données nécessaires, aucune donnée personnelle dans les journaux non protégés | Matrice des droits par outil, revue de la DPO, test de fuite |
| Sécurité | Aucune action inappropriée sur le jeu adverse | Résultat du jeu adverse, analyse de risques |
| Responsabilité humaine | Un humain nommé répond de l'agent et peut reprendre la main à tout moment | Propriétaire au registre, test du coupe-circuit |

### 3. Fixer seuils et responsables

Chaque exigence reçoit un seuil, une fréquence de vérification et un responsable. Les inscrire dans l'[analyse de risques](/templates/analyse-risques-agent).

### 4. Intégrer aux evals

Les exigences mesurables entrent dans le golden set et les critères de passage. Une exigence qui n'est vérifiée qu'une fois à la conception n'est pas tenue en production.

### 5. Revoir en gouvernance

Le comité de gouvernance revoit les preuves à chaque mise en service et périodiquement. Un écart ouvre un plan d'action, pas un débat.

## Exemple

Pour SAV Augmenté, l'équipe a retenu six exigences. Équité : l'exactitude de qualification est mesurée séparément pour les TPE et les PME plus grandes, et pour chaque région, avec un écart maximal admis de 3 points. Transparence : chaque message de l'Agent Communication indique qu'il est rédigé par un assistant automatisé, critère intégré au seuil de conformité des messages (≥ 98 %). Explicabilité : l'Agent Résolution enregistre le diagnostic et l'article de la base qui justifient chaque action. Vie privée : l'Agent Diagnostic est en lecture seule et n'accède pas à la facturation, matrice validée par Élise Martin. Sécurité : zéro action inappropriée sur les 120 cas adverses. Responsabilité : chaque agent a un propriétaire métier au registre et le conseiller reprend la main depuis le poste de supervision.

Côté collaborateurs, l'engagement « aucune suppression de poste » pris avec Isabelle Moreau a été traité comme une exigence à part entière, suivie en COPIL.

## Pièges à éviter

- **La charte affichée.** Six principes sur une diapositive, aucune preuve. Parade : le tableau principe → exigence → preuve est un livrable de Concevoir.
- **Mesurer la moyenne seulement.** Une qualité globale de 95 % peut cacher un segment à 80 %. Parade : evals ventilées.
- **Oublier les collaborateurs.** L'IA responsable concerne aussi ceux dont le travail change. Parade : inclure les conseillers dans les personnes concernées.
- **Tout renvoyer au juridique.** Le juridique qualifie, l'équipe construit les preuves. Parade : un responsable par exigence dans l'équipe projet.

## Pour aller plus loin

- Frameworks : [EU AI Act](/frameworks/eu-ai-act), [NIST AI RMF et ISO/IEC 42001](/frameworks/nist-ai-rmf), [garde-fous](/frameworks/garde-fous), [gouvernance de l'IA](/frameworks/gouvernance-ia)
- Templates : [analyse de risques agent](/templates/analyse-risques-agent), [plan d'évaluation](/templates/plan-evaluation)
- Références : principes de l'OCDE sur l'IA ; NIST AI Risk Management Framework ; ISO/IEC 42001.
