---
name: conduire-pilote
description: "Prépare et conduit un pilote en conditions réelles : périmètre borné, groupe témoin, mode fantôme avant exposition, critères de succès et d'arrêt fixés à l'avance, animation des équipes, mesure contre la référence, bilan et recommandation. À utiliser quand la recette est prononcée et les évaluations tiennent leurs seuils, avant toute généralisation."
metadata:
  titre: "Conduire le pilote"
  version: "1.0.0"
  statut: publie
  etape: tests
  sous-processus: pilote
  role: design
  domaine: conseil
  phases: [construire]
  technologies: []
  cas-usage: [tout-projet]
  tags: [pilote, mode-fantome, groupe-temoin, preuve-de-valeur, adoption]
  proprietaire: design
  diffusion: interne
  entrees: ["Rapport d'évaluation et recette prononcée", "Référence chiffrée du processus", "Équipes pilotes et managers volontaires"]
  sorties: ["Plan de pilote", "Bilan de pilote avec valeur mesurée", "Recommandation : généraliser, ajuster ou arrêter"]
  prerequis: [evaluer-agent, tester-fonctionnel]
---

## Mission

Prouver la valeur sur le terrain, avec de vrais utilisateurs et de vrais cas, avant d'engager le déploiement. Le skill aide le FDE Design à préparer le pilote, à l'animer et à en tirer une décision ; le FDE Build en assure l'environnement, le support et les mesures. Un pilote n'est pas une démonstration prolongée : il a des critères de succès, des critères d'arrêt et une fin.

## Quand l'utiliser

- La recette est prononcée et les évaluations tiennent leurs seuils.
- Le jalon G5 demande une preuve de valeur.
- Un relèvement d'autonomie doit être prouvé sur un périmètre restreint.

Ne pas l'utiliser pour finir de construire : un pilote lancé sur une solution non recettée épuise la bonne volonté du terrain.

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| La référence chiffrée du processus | Oui | S'arrêter : sans référence, le pilote ne prouvera rien. |
| Le rapport d'évaluation et le procès-verbal de recette | Oui | Terminer la validation d'abord. |
| Un manager et une équipe pilotes volontaires | Oui | Les obtenir du propriétaire du processus. |
| L'environnement, l'instrumentation et le coupe-circuit testé | Oui | Les demander au FDE Build avant toute exposition. |
| L'accord des instances concernées, si le travail change | Non | Le vérifier avec le sponsor avant de démarrer. |

## Procédure

1. **Borner le périmètre** : quels cas, quelle équipe, quelle durée. Assez large pour être représentatif, assez étroit pour être arrêté sans dégât. Quatre à huit semaines sont un ordre de grandeur courant.
2. **Fixer la mesure avant de commencer** : indicateurs, référence, méthode. Constituer un groupe témoin comparable ; à défaut, un avant-après corrigé des effets de saison et de volume.
3. **Écrire les critères de succès et d'arrêt** avec le sponsor : seuil de valeur, seuil de qualité, incident qui arrête tout.
4. **Commencer en mode fantôme.** L'agent traite les cas réels sans effet : ses résultats sont comparés à ceux des humains. On ne l'expose que si l'écart est dans la tolérance.
5. **Préparer les équipes.** Former au nouveau geste : travailler avec l'agent, vérifier, reprendre la main, signaler une erreur. Expliquer ce qui est mesuré et ce qui ne l'est pas.
6. **Exposer progressivement** : niveau d'autonomie bas au départ, relevé outil par outil selon des conditions écrites.
7. **Animer.** Point quotidien court la première semaine, puis hebdomadaire. Recueillir les irritants, les traiter vite, dire ce qui ne sera pas traité.
8. **Suivre trois familles d'indicateurs** : valeur (délai, coût, qualité), confiance (erreurs, escalades, corrections humaines), adoption (usage réel, contournements).
9. **Mesurer et conclure.** Comparer au groupe témoin et à la référence, faire valider les chiffres par la finance, rédiger le bilan.
10. **Recommander** : généraliser, ajuster et prolonger sur un critère précis, ou arrêter. Un arrêt motivé est un résultat.

## Livrable

Le [Plan de pilote](/templates/plan-pilote) avant, le [Bilan de pilote](/templates/bilan-pilote) après : périmètre, méthode de mesure, résultats par indicateur contre la référence et le témoin, incidents, retours du terrain, valeur mesurée, enseignements, recommandation et conditions de la suite.

## Critères de qualité

- Critères de succès et d'arrêt sont datés d'avant le démarrage.
- La valeur est mesurée contre un groupe témoin ou une référence corrigée.
- Le mode fantôme a précédé l'exposition, et son résultat est documenté.
- Les trois familles d'indicateurs sont renseignées, adoption comprise.
- Les retours négatifs du terrain figurent au bilan.
- La finance du client a relu la valeur mesurée.

## Garde-fous

- La décision de généraliser appartient au comité, au jalon G5.
- Le déclenchement d'un critère d'arrêt arrête le pilote : il ne se renégocie pas en cours de route.
- Tout relèvement d'autonomie pendant le pilote suit les conditions écrites et se consigne ([AGT-10](/standards#AGT-10)).
- Les données individuelles d'usage ne servent pas à évaluer les personnes ; le dire aux équipes et s'y tenir.
- Ne pas prolonger un pilote sans critère : c'est le début du purgatoire.

## Enchaînements

- **Amont** : [Évaluer un agent](/skills/evaluer-agent), [Mener les tests fonctionnels et la recette](/skills/tester-fonctionnel).
- **Aval** : [Mettre en production](/skills/mettre-en-production), [Mesurer la valeur réalisée](/skills/mesurer-valeur).
- **Workflow** : [De la validation à la mise en production](/skills/workflows/mettre-en-production).
- **Ressources** : [Réussir un pilote en conditions réelles](/guides/reussir-le-pilote), [Du POC à la production](/frameworks/poc-pilote-production), [Mesurer l'impact réel](/frameworks/mesure-impact), [Niveaux d'autonomie des agents](/frameworks/niveaux-autonomie), [Le mode fantôme](/savoir/mode-fantome), [Le purgatoire des POC](/savoir/poc-purgatoire), [L'autonomie progressive](/savoir/autonomie-progressive).
