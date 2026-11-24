---
id: mettre-en-production
titre: "De la validation à la mise en production"
resume: "Préparer les environnements et la chaîne de livraison, prouver la solution par les tests techniques, la recette et le pilote, puis mettre en production par étapes et le constater."
declencheur: "Un périmètre construit et évalué, candidat au pilote puis à la production."
resultat: "Un service en production, validé techniquement et par le métier, avec un retour arrière testé et un constat de bon fonctionnement signé."
version: "1.0.0"
statut: publie
proprietaire: build
etapes:
  - skill: preparer-environnements
    intention: "Disposer d'environnements isolés, reproductibles et conformes à la politique du client."
  - skill: mettre-en-place-ci-cd
    intention: "Livrer par un pipeline qui teste, évalue et déploie, sans geste manuel."
  - skill: tester-technique
    intention: "Éprouver performance, charge, sécurité et robustesse avant d'exposer des utilisateurs."
  - skill: tester-fonctionnel
    intention: "Faire vérifier par le métier que la solution fait ce qui était spécifié."
    controle: "Recette prononcée par le propriétaire du processus."
  - skill: conduire-pilote
    intention: "Prouver la valeur en conditions réelles, sur un périmètre borné, contre la référence."
    controle: "Jalon G5 : preuve de valeur, décision de généraliser prise par le comité."
  - skill: mettre-en-production
    intention: "Passer la revue de préparation et déployer par étapes, avec retour arrière prêt."
    controle: "Jalon G6 : feu vert de mise en production donné par le client."
  - skill: valider-mise-en-production
    intention: "Constater en production que le service tient ses indicateurs, techniques et métier."
    controle: "Constat de bon fonctionnement signé par le client."
---

## Quand le lancer

Quand le périmètre du pilote est construit et que ses évaluations tiennent les seuils. Les deux premières étapes peuvent démarrer bien plus tôt : un environnement et un pipeline prêts dès la première tranche évitent le mur de la mise en production.

## Règles d'orchestration

- **Environnements et pipeline d'abord.** Aucun test technique ne vaut sur un environnement monté à la main.
- **Trois preuves, dans l'ordre.** Technique, fonctionnelle, puis terrain : le pilote ne démarre pas sur une recette non prononcée.
- **Un jalon est une décision du client.** G5 et G6 arrêtent le workflow ; un refus renvoie à l'étape dont la preuve manque.
- **Pas de mise en production sans retour arrière testé** ni coupe-circuit vérifié. Le déploiement est progressif : une vague, une mesure, une décision.
- **Le Build opère la mise en service, le Design tient le pilote et l'adoption**, selon le [RACI Design · Build](/raci).

## Sortie de workflow

La validation en production ouvre [De la mise en production au client autonome](/skills/workflows/transferer-au-client).
