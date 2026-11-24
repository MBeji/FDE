---
name: piloter-mission
description: "Tient le rythme de pilotage d'une mission : point d'avancement hebdomadaire, registre RAID, préparation du COPIL autour des décisions à obtenir, suivi des jalons G0 à G7 et de leurs critères, alerte précoce et escalade. À utiliser chaque semaine pendant toute la mission, avant chaque comité et dès qu'un signal de dérive apparaît."
metadata:
  titre: "Piloter la mission"
  version: "1.0.0"
  statut: publie
  etape: pilotage
  sous-processus: pilotage
  role: design
  domaine: pilotage
  phases: [cadrer, diagnostiquer, cibler, reinventer, concevoir, construire, industrialiser, perenniser]
  technologies: []
  cas-usage: [tout-projet]
  tags: [pilotage, point-hebdo, copil, raid, jalons, alerte, comite-de-pilotage, reporting, avancement, risques]
  proprietaire: design
  diffusion: interne
  entrees: ["Charte et plan de mission", "Avancement de la semaine côté Design et côté Build", "Registre RAID et registre de valeur"]
  sorties: ["Point d'avancement hebdomadaire", "Registre RAID à jour", "Support de COPIL et relevé de décisions"]
  prerequis: [cadrer-mission]
---

## Mission

Rendre la mission lisible chaque semaine, pour le sponsor comme pour le pool, et obtenir à temps les décisions dont elle dépend. Le skill aide le FDE Design à tenir le point hebdomadaire, le registre RAID et les comités. Un pilotage utile ne raconte pas l'activité : il dit où l'on en est du résultat, ce qui menace et ce qu'il faut décider.

## Quand l'utiliser

- Chaque semaine : point d'avancement et mise à jour des registres.
- Avant chaque COPIL et chaque jalon.
- Dès qu'un signal de dérive apparaît : sponsor absent, accès qui n'arrivent pas, valeur qui s'érode, jalon qui glisse.

Ne pas l'utiliser pour poser le cadre de la mission : c'est [Cadrer la mission](/skills/cadrer-mission). Pour une mission déjà en difficulté, s'appuyer sur le guide de redressement cité plus bas.

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| La charte de mission : objectif, périmètre, critères d'arrêt | Oui | Alerter : une mission sans charte signée se pilote à vue. |
| L'avancement réel, côté Design et côté Build | Oui | Le demander aux deux ; ne pas le déduire du plan. |
| Le registre RAID et le registre de valeur | Oui | Les ouvrir : c'est la première action. |
| Le plan de mission et les dates de jalons | Non | Reconstituer les jalons à partir de la charte. |

## Procédure

1. **Recueillir les faits de la semaine** auprès du binôme : ce qui est terminé (pas « en cours »), ce qui est bloqué, ce qui a été appris.
2. **Situer la mission par rapport au jalon suivant.** Passer ses critères un à un : tenu, en bonne voie, menacé. C'est cela, l'avancement.
3. **Mettre à jour la valeur.** Reprendre le registre de valeur : hypothèse, référence, mesure la plus récente. Dire si l'ambition tient.
4. **Tenir le registre RAID.** Risques (probabilité, effet, parade, responsable), hypothèses à vérifier, points ouverts (responsable, échéance), décisions prises (qui, quand, pourquoi). Fermer ce qui est clos ; faire remonter ce qui vieillit.
5. **Écrire le point hebdomadaire** en une page : un message en tête, l'état par rapport au jalon, la valeur, trois risques au plus, les décisions attendues avec leur échéance, les engagements du client en retard.
6. **Donner l'alerte tôt.** Un critère de jalon menacé, un engagement du client en retard de deux semaines, un sponsor injoignable : le dire au sponsor et au pool cette semaine, avec une proposition.
7. **Préparer le COPIL à partir des décisions à obtenir.** Lister les décisions, préparer pour chacune les options, une recommandation et ses conséquences. Pré-rencontrer les membres qui pèsent : pas de surprise en séance.
8. **Tenir la séance** : rappel de l'objectif, état, valeur, décisions. Diffuser le relevé de décisions dans les vingt-quatre heures.
9. **Vérifier les critères d'arrêt** à chaque jalon : s'ils sont atteints, le dire et proposer d'arrêter ou de réorienter.

## Livrable

1. Le [Point d'avancement hebdomadaire](/templates/point-hebdo).
2. Le [Registre RAID : risques, hypothèses, points ouverts, décisions](/templates/registre-raid), à jour.
3. Avant chaque comité, le support selon la [Trame de support de COPIL](/templates/support-copil) ; après, le relevé de décisions.
4. Le plan de mission recalé quand un jalon bouge.

## Critères de qualité

- Le point tient en une page et s'ouvre sur un message, pas sur une liste d'activités.
- L'avancement est exprimé par rapport aux critères du prochain jalon.
- La valeur figure à chaque point, avec sa dernière mesure.
- Chaque risque et chaque point ouvert a un responsable et une échéance.
- Chaque décision attendue nomme le décideur et la date limite.
- Le relevé de décisions est diffusé sous vingt-quatre heures.

## Garde-fous

- Les décisions de jalon appartiennent au client ; le skill prépare les options et la recommandation du binôme.
- Ne jamais présenter au client une décision ou un chiffre que l'autre moitié du binôme découvre : Design et Build valident le point avant envoi.
- Ne pas afficher un voyant vert sur un critère menacé : l'optimisme d'un point hebdomadaire se paie au comité suivant.
- Le point destiné au client ne contient ni élément commercial interne, ni appréciation sur des personnes.

## Enchaînements

- **Amont** : [Cadrer la mission](/skills/cadrer-mission).
- **Aval** : [Mesurer la valeur réalisée](/skills/mesurer-valeur), [Capitaliser un retour d'expérience](/skills/capitaliser-rex).
- **Workflows** : transverse à tous les workflows de mission, de [Du mandat au portefeuille arbitré](/skills/workflows/cadrer-et-cibler) à [De la mise en production au client autonome](/skills/workflows/transferer-au-client).
- **Ressources** : [Préparer et piloter un COPIL](/guides/piloter-copil), [Redresser une mission en difficulté](/guides/redresser-mission), [Communication exécutive](/frameworks/communication-executive), [Principe de la pyramide et SCQA](/frameworks/pyramide-scqa), [Plan de sprint et revue de démonstration](/templates/plan-de-sprint), [Le sponsor fantôme](/savoir/sponsor-fantome), [RACI Design · Build](/raci).
