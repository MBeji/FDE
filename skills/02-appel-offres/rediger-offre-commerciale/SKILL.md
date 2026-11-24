---
name: rediger-offre-commerciale
description: "Construit l'offre commerciale à partir du chiffrage : structure de prix, tranches fermes et optionnelles, coûts récurrents, hypothèses, prérequis du client, modalités de facturation et réserves contractuelles. À utiliser quand l'estimation est validée, et avant toute transmission d'un prix à un client."
metadata:
  titre: "Rédiger l'offre commerciale"
  version: "1.0.0"
  statut: publie
  etape: appel-offres
  sous-processus: offre
  role: design
  domaine: commerce
  phases: []
  technologies: []
  cas-usage: [tout-projet]
  tags: [offre-commerciale, prix, hypotheses, conditions, appel-offres]
  proprietaire: avant-vente
  diffusion: interne
  entrees: ["Estimation validée et registre des hypothèses", "Dossier de solution", "Bordereau de prix et clauses de la consultation"]
  sorties: ["Offre commerciale prête pour validation de la direction", "Note interne de construction du prix"]
  prerequis: [elaborer-solution, estimer-charges-couts]
---

## Mission

Faire d'une estimation une proposition de prix claire, cohérente avec l'offre technique et sans engagement caché. Le skill prépare pour le FDE Design l'offre commerciale et la note interne qui explique le prix. Ce qui n'est pas écrit dans les hypothèses sera réclamé comme dû.

## Quand l'utiliser

- L'estimation des charges et des coûts est validée.
- Une négociation demande une nouvelle version : le périmètre ou les hypothèses bougent, le prix suit.

Ne pas l'utiliser pour estimer : c'est [Estimer les charges et les coûts](/skills/estimer-charges-couts). Ne pas l'utiliser sans dossier de solution.

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| L'estimation en trois points et ses hypothèses | Oui | S'arrêter. |
| Le dossier de solution : lots, phases, engagements | Oui | S'arrêter. |
| Le bordereau de prix ou le format imposé | Oui s'il existe | Proposer une structure par phase. |
| Les règles internes : barèmes, marge, seuils de validation | Oui | Les demander au responsable de l'offre ; ne rien supposer. |
| Les clauses sensibles relevées dans le dossier | Non | Les reprendre de la synthèse de consultation. |

## Procédure

1. **Choisir la structure de prix.** Forfait par phase quand le périmètre est défini ; tranche ferme pour ce qui est connu et tranches optionnelles déclenchées à chaque jalon pour ce qui dépend d'une preuve ; unités d'œuvre pour ce qui se répète. Aligner les tranches sur les jalons de décision.
2. **Passer de la charge au prix** en appliquant les règles internes, sans retoucher les charges. Si le prix cible n'est pas atteint, réduire le périmètre ou déplacer un lot en option, et l'écrire.
3. **Afficher les coûts récurrents.** Inférence, hébergement, exploitation, maintenance : par an, pour le volume annoncé, avec la règle d'évolution si le volume change. Dire qui les porte.
4. **Écrire les hypothèses de prix.** Reprendre le registre du chiffrage : volumes, disponibilité des données et des experts métier, délais de décision, environnements fournis. Chaque hypothèse dit ce qui se passe si elle n'est pas tenue.
5. **Lister les prérequis du client**, datés : accès, interlocuteurs, détachements, décisions.
6. **Fixer les modalités** : échéancier de facturation adossé aux jalons, validité de l'offre, révision de prix, frais.
7. **Traiter les clauses sensibles.** Pour chaque clause classée « à négocier » ou « bloquante » : réserve, contre-proposition ou acceptation, décidée par les personnes habilitées.
8. **Vérifier la cohérence** avec l'offre technique, ligne à ligne : mêmes lots, mêmes durées, mêmes profils, mêmes engagements.
9. **Rédiger la note interne** : construction du prix, marge, risques et provisions, points à faire valider.

## Livrable

1. L'offre commerciale : décomposition du prix par tranche et par phase, bordereau complété, coûts récurrents, hypothèses, prérequis, modalités, validité.
2. Les réserves et contre-propositions contractuelles.
3. La note interne de construction du prix, qui ne sort pas de l'entreprise.

## Critères de qualité

- Le prix se retrouve par addition des lignes, et les lignes sont celles du chiffrage.
- Les coûts récurrents sont visibles et distincts de la construction.
- Chaque hypothèse est vérifiable et dit sa conséquence.
- L'échéancier de facturation suit les jalons.
- Aucun écart avec l'offre technique.
- Toute clause sensible a une position écrite.

## Garde-fous

- Aucun prix, aucune remise, aucun engagement ne part sans la validation de la direction, au seuil prévu par les règles internes : le skill prépare, il ne transmet pas.
- Ne jamais présenter comme certain un coût récurrent estimé : donner la fourchette et sa base.
- Ne pas accepter d'engagement de résultat sans référence mesurée ni conditions écrites.
- La note interne, les barèmes et la marge sont confidentiels.
- Les clauses contractuelles sont relues par le juridique.

## Enchaînements

- **Amont** : [Élaborer la solution proposée](/skills/elaborer-solution), [Estimer les charges et les coûts](/skills/estimer-charges-couts).
- **Aval** : [Préparer la soutenance](/skills/preparer-soutenance).
- **Workflow** : [Répondre à un appel d'offres](/skills/workflows/repondre-appel-offres).
- **Ressources** : [Business case et coût complet d'un système agentique](/frameworks/business-case-tco), [FinOps de l'IA](/frameworks/finops-ia).
