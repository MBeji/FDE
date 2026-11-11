---
id: finops-ia
titre: "FinOps de l'IA"
resume: "Piloter le coût des agents par l'unité économique, le coût par cas traité, et l'arbitrer contre la qualité mesurée par les évaluations."
categorie: industrialisation
phases: [concevoir, industrialiser]
origine: "Maison, d'après la pratique FinOps"
niveau: fondamental
tags: [cout, inference, pilotage, business-case]
templates: [business-case, tableau-de-bord-valeur]
lies: [business-case-tco, agentops, architecture-reference, registre-de-valeur]
---

## En bref

Le coût d'un agent est variable, fragmenté en millions d'appels et difficile à prévoir : la boucle d'un agent peut faire trois appels de modèle ou trente. La FinOps de l'IA ramène ce coût à une seule unité économique, **le coût par cas traité**, qu'on compare à la valeur créée par cas. Elle outille ensuite les leviers de réduction, et surtout l'arbitrage : chaque euro économisé doit être payé en qualité mesurée, jamais en qualité supposée.

Un FDE qui ne sait pas dire combien coûte un ticket traité par ses agents ne peut défendre ni son business case ni son passage à l'échelle.

## Quand l'utiliser

- En [Concevoir](/methode/concevoir), pour estimer le coût par cas et le budget d'inférence du [business case](/templates/business-case).
- En [Construire](/methode/construire), pour mesurer le coût réel sur le pilote.
- En [Industrialiser](/methode/industrialiser), pour fixer budgets, alertes et règles d'arbitrage avant que les volumes ne multiplient la facture.

Inutile de déployer tout l'outillage pour un prototype : mesurer le coût par cas suffit.

## Comment l'appliquer

### 1. Définir l'unité économique

Coût par cas = (inférence + appels d'outils facturés + part de plateforme) ÷ cas traités. Le ventiler par agent, par voie de traitement et par motif. Le comparer au coût complet actuel du cas et à la valeur captée par cas.

### 2. Instrumenter

Rattacher chaque appel de modèle à un identifiant de cas dans les traces (voir [AgentOps](/frameworks/agentops)). Sans ce rattachement, on ne connaît qu'une facture mensuelle, inexploitable.

### 3. Activer les leviers, dans cet ordre

| Levier | Principe | Risque qualité |
| --- | --- | --- |
| Limites par cas | Plafond d'appels et de tokens par cas, escalade au-delà | Faible, protège des boucles |
| Réduction du contexte | Ne passer que l'utile : résumés, recherche ciblée | Moyen, à vérifier par evals |
| Cache de prompt | Mettre en tête les parties stables (instructions, outils) | Nul |
| Choix et routage de modèles | Modèle léger pour les tâches simples, modèle puissant pour les cas difficiles | Moyen à fort, à mesurer |
| Traitement par lots | Regrouper ce qui n'exige pas de réponse immédiate | Nul, mais latence accrue |

### 4. Arbitrer coût et qualité sur preuve

Toute optimisation passe le golden set. Règle de décision : on accepte une économie si aucun seuil de passage n'est franchi à la baisse. Tracer pour chaque variante la courbe coût par cas / score d'evals et choisir explicitement le point retenu.

### 5. Budgéter et alerter

Budget mensuel par agent, alertes à 80 % et 100 %, alerte sur toute dérive du coût par cas supérieure à un seuil fixé (par exemple 20 % sur une semaine). Revue mensuelle avec le contrôle de gestion.

## Exemple

Au pilote de Nantes, SAV Augmenté coûte **0,38 € d'inférence par ticket**. Rapporté aux 420 000 tickets annuels, cela fait environ **160 k€ d'inférence par an**, au sein de l'enveloppe « inférence et plateforme » de 0,55 M€ du business case. Ramené au coût complet de 41 € par ticket, l'inférence pèse moins de 1 % : le levier de valeur est le délai de résolution, pas l'économie de tokens.

L'équipe a néanmoins appliqué trois règles : qualification routée vers un modèle léger après vérification que l'exactitude restait au-dessus de 95 % ; instructions et définitions des neuf outils placées en tête de contexte pour bénéficier du cache ; plafond d'appels par ticket, au-delà duquel l'Orchestrateur bascule le cas en voie assistée. Une alerte se déclenche si le coût par ticket dépasse 0,50 €.

## Pièges à éviter

- **Optimiser les tokens avant la valeur.** Économiser 0,05 € par ticket au prix d'un point de FCR détruit de la valeur. Parade : toujours présenter coût et qualité ensemble.
- **Raisonner sur la facture mensuelle.** Elle ne dit ni quel agent ni quel motif coûte. Parade : coût par cas tracé.
- **Oublier les boucles.** Un agent qui tourne en rond coûte cent fois la moyenne. Parade : limites par cas et alerte sur les extrêmes, pas seulement sur la moyenne.
- **Figer le coût du business case.** Les prix et les modèles évoluent vite. Parade : recalculer à chaque revue trimestrielle et le noter au [registre de valeur](/frameworks/registre-de-valeur).

## Pour aller plus loin

- Frameworks : [business case et TCO](/frameworks/business-case-tco), [AgentOps](/frameworks/agentops), [architecture de référence](/frameworks/architecture-reference)
- Templates : [business case](/templates/business-case), [tableau de bord de valeur](/templates/tableau-de-bord-valeur)
- Outil : [business case](/outils/business-case)
- Référence : FinOps Foundation, principes de la pratique FinOps.
