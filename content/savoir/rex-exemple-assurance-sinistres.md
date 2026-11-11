---
id: rex-exemple-assurance-sinistres
titre: "REX — Gestion de sinistres chez un assureur (exemple)"
resume: "Une mission partie pour automatiser les décisions d'indemnisation, réorientée en conception vers le tri, la préparation de dossier et la détection d'anomalies, avec décision humaine. Ce qui n'a pas marché, et pourquoi la réorientation a sauvé la valeur."
type: rex
phases: [cadrer, diagnostiquer, cibler, reinventer, concevoir, construire]
tags: [assurance, sinistres, reorientation, autonomie]
secteur: "Assurance"
date: "2026-06"
---

> [!NOTE]
> Exemple fictif, fourni comme modèle de rédaction d'un REX. Il illustre une mission réorientée en cours de route. Les ordres de grandeur sont plausibles mais ne décrivent aucun client réel.

## Contexte

Un assureur européen multirisque, activité de particuliers. Domaine : gestion des sinistres habitation et automobile de faible montant, traités par plusieurs plateformes régionales. Le comité exécutif demandait « l'indemnisation automatique des sinistres simples », sur le modèle de ce qu'annonçaient des acteurs plus récents du marché. Le business case initial, préparé avant notre arrivée, reposait presque entièrement sur la réduction des effectifs de gestion.

## Ce que nous avons fait

- **Cadrer.** Nous avons accepté l'ambition telle quelle, avec une seule réserve écrite : « décision automatique sous réserve de faisabilité réglementaire et de qualité des données ». Erreur que nous détaillons plus bas.
- **Diagnostiquer.** Entretiens avec gestionnaires, experts, juristes et équipe anti-fraude ; analyse d'un an de dossiers clos. Constat principal : l'essentiel du délai venait des allers-retours pour pièces manquantes et de la recherche des garanties applicables dans des conditions particulières hétérogènes, souvent numérisées en image.
- **Cibler.** Portefeuille centré sur la décision automatique des sinistres de faible montant, plus deux cas d'appui : tri des déclarations et complétude des dossiers.
- **Réinventer.** Processus cible en deux voies : automatique pour les dossiers « simples », gestionnaire pour le reste.
- **Concevoir.** C'est là que l'ambition a cédé, pour trois raisons établies en quatre semaines :
  1. **Pas de vérité de référence stable.** Pour constituer le golden set, nous avons fait annoter les mêmes dossiers par plusieurs gestionnaires expérimentés. Sur les dossiers jugés simples, ils divergeaient sur la décision ou le montant dans une part significative des cas, à cause d'interprétations différentes des exclusions. On ne peut pas évaluer un agent contre une référence que les experts ne partagent pas.
  2. **Un risque juridique non borné.** Le juridique et la conformité ont exigé, pour toute décision défavorable, une motivation opposable et une voie de recours humaine. L'[analyse de risques](/templates/analyse-risques-agent) a classé l'action « décider et payer » comme irréversible et à fort impact individuel.
  3. **Des données de contrat inexploitables en l'état.** Les garanties applicables n'étaient pas structurées ; les extraire relevait d'un projet à part entière.

  Nous avons présenté en comité un choix explicite : poursuivre la décision automatique sur un périmètre réduit à l'extrême, ou réorienter vers trois cas à décision humaine. Le sponsor a choisi la réorientation.
- **Construire.** Pilote sur deux plateformes régionales : agent de tri des déclarations (L3), agent de préparation de dossier qui réclame les pièces manquantes, identifie les garanties candidates et rédige une synthèse (L2), détection d'anomalies qui signale à l'équipe anti-fraude sans jamais bloquer un paiement (L1). La décision d'indemnisation reste au gestionnaire.

## Résultats

- Délai moyen de traitement des sinistres du périmètre pilote réduit d'environ un tiers, porté surtout par la baisse des allers-retours pour pièces manquantes.
- Dossiers complets à la première prise en charge par un gestionnaire : majorité nette, contre une minorité auparavant.
- Taux d'acceptation des synthèses par les gestionnaires élevé après trois semaines d'ajustement ; les garanties candidates restent l'élément le plus corrigé.
- Détection d'anomalies : utile, mais trop bruyante au départ (voir plus bas).
- Le gain financier est inférieur au business case initial, qui ne tenait pas. Il est en revanche mesuré contre une référence validée par la finance.

## Ce qui a marché

- **Le golden set comme instrument de vérité.** C'est l'exercice d'annotation, pas un avis d'expert, qui a montré que l'automatisation de la décision n'était pas évaluable. L'argument a convaincu le comité parce qu'il venait des propres gestionnaires de l'assureur.
- **Un choix présenté en comité, pas un renoncement subi.** Deux options chiffrées, une recommandation, une décision du sponsor.
- **Viser la préparation plutôt que la décision.** La valeur était dans le délai, et le délai dans la collecte.
- **Les gestionnaires associés à l'annotation** sont devenus les premiers utilisateurs du pilote.

## Ce que nous ferions autrement

- **Refuser au cadrage une ambition formulée en solution.** « Indemnisation automatique » était une [techno d'abord](/savoir/techno-d-abord). Une reformulation en problème (« réduire le délai d'indemnisation sans dégrader la qualité des décisions ») aurait évité cinq semaines de ciblage sur un cas impraticable.
- **Tester la vérité de référence dès le diagnostic.** Un échantillon de cinquante dossiers annotés par trois gestionnaires suffit à mesurer l'accord. Nous l'avons fait en conception ; il fallait le faire en phase 1.
- **Associer juridique et conformité au ciblage**, pas à la conception.
- **Ne pas laisser vivre un business case fondé sur les effectifs.** Il a nourri la méfiance des plateformes jusqu'à la réorientation.
- **Calibrer la détection d'anomalies avec l'équipe anti-fraude avant le pilote.** Le premier seuil a généré plus d'alertes que l'équipe ne pouvait en traiter ; deux semaines ont été perdues à le relever.

## À retenir

1. Avant d'automatiser une décision, mesurer si les experts s'accordent sur elle. S'ils divergent, il n'y a rien d'évaluable à automatiser.
2. L'autonomie se fixe par action : trier en L3, préparer en L2, signaler en L1, décider en humain. Voir les [niveaux d'autonomie](/frameworks/niveaux-autonomie).
3. Une réorientation présentée comme un choix chiffré renforce la mission ; subie, elle la discrédite. Voir [redresser une mission](/guides/redresser-mission).
4. Le juridique est un acteur du ciblage, pas un contrôle de fin de conception. Voir [EU AI Act](/frameworks/eu-ai-act) et [IA responsable](/frameworks/ia-responsable).

Voir aussi : [golden set dès le jour 1](/savoir/golden-set-jour-1), [collaboration humain-agent](/frameworks/collaboration-humain-agent), [REX de mission](/templates/rex-mission).
