---
name: estimer-charges-couts
description: "Estime la charge en jours par profil et le coût complet d'une mission ou d'un lot : construction, conduite du changement, pilotage, puis coûts récurrents d'inférence et d'exploitation, avec hypothèses, fourchettes et provisions. À utiliser après l'étude de faisabilité, avant toute proposition chiffrée ou offre commerciale."
metadata:
  titre: "Estimer les charges et les coûts"
  version: "1.0.0"
  statut: publie
  etape: avant-vente
  sous-processus: estimation
  role: binome
  domaine: commerce
  phases: []
  technologies: []
  cas-usage: [tout-projet]
  tags: [estimation, chiffrage, charges, couts, tco, hypotheses]
  proprietaire: avant-vente
  diffusion: interne
  entrees: ["Périmètre retenu et note de faisabilité", "Solution envisagée par lot", "Barème des profils et conditions commerciales internes"]
  sorties: ["Estimation par lot en trois points", "Registre des hypothèses de chiffrage", "Coûts récurrents annuels"]
  prerequis: [etudier-faisabilite]
---

## Mission

Produire un chiffrage qui se défend ligne par ligne : la charge par lot et par profil, le coût de construction, et ce que la solution coûtera chaque année une fois en service. Le Build chiffre la construction et l'exploitation ; le Design chiffre le cadrage, la conduite du changement et le pilotage. Un chiffrage sans hypothèses écrites devient un engagement sur ce que personne n'a précisé.

## Quand l'utiliser

- La faisabilité est établie et un périmètre est retenu.
- Une solution vient d'être élaborée pour une réponse à appel d'offres.
- Le périmètre ou une hypothèse majeure change après une première estimation.

Ne pas l'utiliser pour fixer un prix : le prix, les remises et les conditions relèvent de [Rédiger l'offre commerciale](/skills/rediger-offre-commerciale). Ne pas chiffrer un périmètre dont la faisabilité n'a pas été regardée.

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| Le périmètre découpé en lots ou en capacités | Oui | Le construire à partir de la note de faisabilité avant de chiffrer. |
| La note de faisabilité et ses conditions | Oui | S'arrêter : chiffrer sans elle, c'est chiffrer à l'aveugle. |
| Les volumes d'activité attendus (cas par mois) | Oui pour les coûts récurrents | Donner une fourchette et marquer `[À CONFIRMER]`. |
| Le barème interne des profils | Oui pour les coûts | Rendre l'estimation en jours seulement. |
| Des missions comparables déjà réalisées | Non | Élargir la fourchette. |

## Procédure

1. **Découper.** Décomposer le périmètre selon les phases du Parcours AI-Native, puis en lots de moins de vingt jours. Un lot qu'on ne sait pas décrire en une phrase n'est pas chiffrable : le renvoyer à la faisabilité.
2. **Répartir entre Design et Build.** Le Design estime cadrage, diagnostic, conception métier, pilote, conduite du changement, pilotage. Le Build estime architecture, développement, intégrations, évaluations, industrialisation, transfert d'exploitation.
3. **Estimer chaque lot en trois points** : basse, probable, haute. L'écart entre basse et haute mesure l'incertitude ; au-delà d'un facteur trois, le lot demande une phase d'étude avant engagement.
4. **Ne pas oublier ce qu'on oublie toujours** : obtention des accès, constitution du golden set avec les experts métier, intégrations au SI, sécurité et conformité, recette, déploiement par vagues, documentation, transfert. Vérifier la part de chacune : la technologie ne représente qu'une fraction de l'effort, l'essentiel va au processus et aux personnes.
5. **Chiffrer les coûts récurrents.** Inférence (coût par cas × volume, avec la marge de montée en charge), hébergement, supervision, maintenance et évolutions, temps des personnes qui supervisent les agents. Les présenter par an, à côté du coût de construction.
6. **Écrire les hypothèses.** Chaque condition de la faisabilité et chaque `[À CONFIRMER]` devient une hypothèse numérotée, avec son effet sur la charge si elle tombe.
7. **Provisionner les risques.** Une provision par risque identifié, proportionnée à sa probabilité et à son effet, plutôt qu'un pourcentage uniforme.
8. **Faire relire.** Un pair qui n'a pas participé relit le découpage et conteste les trois lots les plus lourds.

## Livrable

1. Tableau d'estimation : lot, phase, profil, charge basse, probable et haute, hypothèses liées.
2. Synthèse par phase et par profil (Design, Build), avec le total en trois points.
3. Coûts récurrents annuels, par poste, pour le volume attendu.
4. Registre des hypothèses : énoncé, source, effet si elle est fausse.
5. Provisions pour risques, risque par risque.
6. Ce qui est exclu de l'estimation, écrit explicitement.

## Critères de qualité

- Aucun lot au-dessus de vingt jours sans décomposition.
- Chaque lot porte trois valeurs et au moins une hypothèse ou une référence comparable.
- Les coûts récurrents sont chiffrés et présentés séparément de la construction.
- La charge demandée au client (experts métier, équipe SI) est estimée elle aussi.
- Les exclusions sont listées.
- Le total se retrouve par addition des lignes.

## Garde-fous

- L'estimation est validée par le responsable de l'offre avant toute communication ; le skill ne transmet rien au client.
- Ne jamais ajuster une charge pour atteindre un prix cible : si le prix doit baisser, c'est le périmètre qui se réduit, et c'est écrit.
- Ne pas inventer de coût unitaire d'inférence : partir d'une mesure, ou d'une fourchette marquée `[À CONFIRMER]`.
- Barèmes, marges et conditions internes ne sortent pas de l'entreprise.

## Enchaînements

- **Amont** : [Étudier la faisabilité](/skills/etudier-faisabilite).
- **Aval** : [Rédiger l'offre commerciale](/skills/rediger-offre-commerciale).
- **Workflows** : [De l'opportunité à l'estimation](/skills/workflows/qualifier-et-chiffrer), [Répondre à un appel d'offres](/skills/workflows/repondre-appel-offres).
- **Ressources** : [Business case et coût complet d'un système agentique](/frameworks/business-case-tco), [FinOps de l'IA](/frameworks/finops-ia), [Règle 10-20-70](/frameworks/regle-10-20-70), [Plan de mission](/templates/plan-de-mission).
