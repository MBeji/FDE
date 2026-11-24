---
name: cadrer-mission
description: "Transforme une demande exprimée en solution en mandat de mission : problème métier chiffré, hypothèse de réponse initiale, ambition et hypothèse de valeur, périmètre, critères d'arrêt, gouvernance et rituels, réunis dans une charte que le sponsor signe au jalon G0. À utiliser au démarrage d'une mission signée, pendant les deux semaines de cadrage, ou à un jalon quand le périmètre, l'ambition ou le sponsor changent."
metadata:
  titre: "Cadrer la mission"
  version: "1.0.0"
  statut: publie
  etape: cadrage
  sous-processus: cadrage
  role: design
  domaine: conseil
  phases: [cadrer]
  technologies: []
  cas-usage: [tout-projet]
  tags: [cadrage, charte-de-mission, probleme, hypotheses, criteres-arret, jalon-g0]
  proprietaire: design
  diffusion: interne
  entrees: ["Demande initiale du client, mot pour mot", "Notes de besoin et de faisabilité de l'avant-vente", "Volumes, coûts et délais connus du domaine", "État des accès aux données, aux outils et au terrain"]
  sorties: ["Charte de mission prête à signer", "Arbre d'hypothèses et plan d'analyse", "Première ligne du registre de valeur"]
  prerequis: []
---

## Mission

Transformer une demande, presque toujours formulée en solution, en mandat : un problème métier chiffré, une réponse provisoire à tester, une ambition, un périmètre et des règles du jeu. Le skill prépare pour le FDE Design la charte que le sponsor signe au jalon G0 ; tout arbitrage ultérieur s'y réfère.

## Quand l'utiliser

- Une mission signée démarre, ou est reprise sans charte signée.
- À un jalon, le périmètre, l'ambition ou le sponsor changent : la charte se rouvre par avenant signé.

Avant la signature de la mission, utiliser [Analyser le besoin du client](/skills/analyser-besoin-client) ; pour le suivi courant, [Piloter la mission](/skills/piloter-mission).

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| La demande initiale, mot pour mot | Oui | La faire redire par le sponsor ; ne pas la reconstituer. |
| Un sponsor nommé et disponible | Oui | S'arrêter et alerter le FDE Design : pas de cadrage sans arbitre. |
| Les notes de besoin et de faisabilité de l'avant-vente | Non | Repartir de la demande. |
| Les volumes, coûts et délais du domaine | Non | Marquer `[À CONFIRMER]` et demander la source à la finance. |
| L'état des accès : données, outils, terrain | Non | Dater chaque demande et l'inscrire comme risque majeur. |

## Procédure

1. **Préparer avant le premier jour.** Une semaine avant, envoyer la liste des demandes (accès, données, documents), un interlocuteur par ligne. Résultat : démarrer, démarrer sous réserve ou décaler.
2. **Interroger le sponsor sur le résultat, pas sur la solution.** Quatre questions, réponses notées mot pour mot : que doit-il avoir changé dans douze mois, sur quel chiffre ; que coûte l'inaction ; qu'a-t-on déjà tenté ; qui peut faire échouer.
3. **Reformuler la demande en problème.** Une question en « comment », avec un indicateur, une ampleur et une échéance, sans nom de solution. Si elle nomme une technologie, demander « pour obtenir quoi ? ». La faire valider mot pour mot.
4. **Poser l'hypothèse de réponse initiale** dès la première semaine. Trois à cinq branches MECE, la réponse la plus probable, puis une analyse par hypothèse avec le seuil qui la ferait tomber, fixé avant de regarder les données. Une hypothèse au moins teste le présupposé de la demande. Le FDE Build vérifie qu'elle ne promet pas un niveau de solution irréaliste.
5. **Chiffrer l'ambition et l'hypothèse de valeur.** Par objectif : référence, cible, échéance, source ; plus un indicateur qui ne doit pas se dégrader. Valeur en ordre de grandeur, calcul apparent (assiette × hypothèse). Ouvrir le registre de valeur : une à trois lignes au statut « hypothèse », avec un propriétaire côté client.
6. **Délimiter le périmètre.** Écrire le hors périmètre d'abord, sur cinq axes : segments, activités, processus, organisation, systèmes. Un domaine, un segment, un flux : on élargit sur preuve.
7. **Négocier les critères d'arrêt à froid.** Trois au plus : valeur insuffisante, conditions de réalisation non réunies, preuve non faite en conditions réelles. Chacun porte un seuil, une date, la personne qui constate et la conséquence ; le FDE Build propose les critères techniques.
8. **Installer la gouvernance.** COPIL mensuel, points hebdomadaires avec le sponsor et le propriétaire du processus, point d'équipe quotidien, inscrits aux agendas. Dater chaque engagement du client : accès, personnes détachées, délai de décision. Bâtir le plan de mission à partir des dates de jalons.
9. **Faire relire, puis signer en séance.** Relecture séparée par le sponsor et le propriétaire du processus, réserves traitées avant la séance.

## Livrable

La [Charte de mission](/templates/charte-de-mission), en onze rubriques : contexte, problème, ambition et objectifs, périmètre, hypothèse de valeur, livrables et jalons, gouvernance, équipe et engagements réciproques, risques, critères d'arrêt, signatures. En annexes : [Arbre d'hypothèses et plan d'analyse](/templates/arbre-hypotheses), [Plan de mission](/templates/plan-de-mission), [Dossier de préparation de mission](/templates/dossier-preparation-mission).

## Critères de qualité

- Le problème est une question métier chiffrée, sans nom de solution.
- Chaque objectif a une référence, une cible, une échéance et une source ; chaque chiffre porte son statut : déclaré, mesuré ou validé.
- Le hors périmètre nomme au moins trois exclusions.
- Chaque hypothèse est réfutable, avec un seuil écrit à l'avance.
- Chaque engagement réciproque a un responsable et une date ; les accès sont obtenus ou datés.
- Chaque critère d'arrêt est mesurable et dit qui le constate.

## Garde-fous

- Le sponsor et le propriétaire du processus signent ; le FDE Design porte la charte devant eux. L'agent prépare et n'adresse rien au client.
- Ne jamais inventer un volume, un coût ou une cible : marquer `[À CONFIRMER]` et nommer qui fournira la donnée.
- Alerter le FDE Design, sans proposer la signature, devant un motif d'arrêt du jalon G0 : sponsor incapable de nommer l'indicateur à faire bouger, aucun détachement côté métier, démonstration sans intention de production.
- Ne manipuler aucune donnée du client sans classification et autorisation écrites de son RSSI et de son DPO.

## Enchaînements

- **Amont** : aucun prérequis ; reprend, quand elle existe, la sortie de [Étudier la faisabilité](/skills/etudier-faisabilite).
- **Aval** : [Cartographier les parties prenantes](/skills/cartographier-parties-prenantes), [Diagnostiquer le processus existant](/skills/diagnostiquer-processus), [Passer en revue les données et le SI](/skills/evaluer-donnees-si), [Piloter la mission](/skills/piloter-mission).
- **Workflow** : [Du mandat au portefeuille arbitré](/skills/workflows/cadrer-et-cibler).
- **Ressources** : [Réussir les dix premiers jours](/guides/premiers-jours), [Résolution de problèmes par hypothèses](/frameworks/probleme-hypotheses), [MECE : découper sans trou ni recouvrement](/frameworks/mece), [Arbre de valeur](/frameworks/arbre-de-valeur), [Registre de valeur](/frameworks/registre-de-valeur).
