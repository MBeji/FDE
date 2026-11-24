---
id: traiter-un-incident
titre: "Traiter un incident et en tirer une amélioration"
resume: "Rétablir le service, corriger la cause, vérifier que rien d'autre ne casse, remettre en production et transformer l'incident en amélioration durable."
declencheur: "Une alerte de supervision ou un signalement d'utilisateur qualifié en incident."
resultat: "Un service rétabli, une cause corrigée et couverte par un test, un post-mortem sans blâme et une action d'amélioration inscrite au plan."
version: "1.0.0"
statut: publie
proprietaire: build
etapes:
  - skill: gerer-incident
    intention: "Qualifier, contenir et rétablir le service, en tenant informées les personnes concernées."
    controle: "Clôture de l'incident validée par le responsable d'exploitation."
  - skill: maintenir-evoluer
    intention: "Corriger la cause, pas seulement le symptôme, dans une modification tracée."
  - skill: tester-non-regression
    intention: "Ajouter le cas de l'incident aux tests et vérifier que le correctif ne dégrade rien."
  - skill: mettre-en-production
    intention: "Livrer le correctif par le pipeline, avec le même niveau de contrôle qu'une évolution."
    controle: "Mise en production du correctif approuvée par le responsable d'exploitation."
  - skill: ameliorer-en-continu
    intention: "Tirer de l'incident une action durable : garde-fou, alerte, règle métier, mise à jour d'un skill."
---

## Quand le lancer

Dès qu'un écart est qualifié en incident : service dégradé, réponse erronée à effet sur un client, dérive de qualité ou de coût au-delà du seuil d'alerte. Une simple demande d'assistance relève de [Assurer le support](/skills/assurer-support).

## Règles d'orchestration

- **Rétablir avant de comprendre.** Le coupe-circuit ou le mode dégradé passe avant l'analyse de cause : la première étape se termine quand le service est rétabli, pas quand le correctif est prêt.
- **Un correctif d'urgence repasse par le pipeline.** Aucune modification directe en production ; si l'urgence l'a imposée, elle est régularisée dans les vingt-quatre heures.
- **Chaque incident laisse un test.** Le cas rejoint la suite de non-régression ou le golden set avant la clôture.
- **Post-mortem sans blâme.** On cherche ce qui, dans le système, a rendu l'erreur possible, pas qui l'a commise.
- **L'humain décide de la reprise.** Un agent arrêté par coupe-circuit n'est réactivé que sur décision du responsable d'exploitation.

## Sortie de workflow

Un incident dont la cause est une règle métier ou un périmètre mal défini renvoie à la conception : mettre à jour la fiche agent avec [Spécifier un agent](/skills/specifier-agent) avant de corriger.
