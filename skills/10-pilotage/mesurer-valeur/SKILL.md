---
name: mesurer-valeur
description: "Mesure la valeur réalisée d'un système en service contre la référence signée : méthode fixée à l'avance, groupe témoin ou avant-après corrigé, gain capté, coûts réels, écart au business case expliqué, validation par la finance et tableau de bord transféré au client. À utiliser à la fin du pilote, puis à intervalle régulier après la mise en production et à la clôture."
metadata:
  titre: "Mesurer la valeur réalisée"
  version: "1.0.0"
  statut: publie
  etape: pilotage
  sous-processus: valeur
  role: design
  domaine: pilotage
  phases: [construire, perenniser]
  technologies: []
  cas-usage: [tout-projet]
  tags: [valeur, mesure, registre-de-valeur, reference, finance, tableau-de-bord, roi, gains, benefices]
  proprietaire: design
  diffusion: interne
  entrees: ["Référence signée et business case", "Mesures de production : volumes, délais, qualité, coûts", "Interlocuteur à la finance du client"]
  sorties: ["Tableau de bord de valeur", "Registre de valeur mis à jour", "Note d'écart au business case validée par la finance"]
  prerequis: [construire-business-case]
---

## Mission

Établir ce que le système a réellement changé, avec des chiffres que la finance du client signe. Le skill aide le FDE Design, puis le propriétaire du processus, à mesurer le réalisé contre la référence et à expliquer l'écart au business case. Une valeur déclarée ne résiste pas à la première revue budgétaire ; une valeur mesurée finance la suite.

## Quand l'utiliser

- À la fin du pilote, pour la décision de généraliser.
- Après la mise en production, chaque mois ou chaque trimestre.
- À la clôture de la mission et aux revues qui suivent.

Ne pas l'utiliser pour estimer une valeur à venir : c'est [Construire le business case](/skills/construire-business-case).

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| La référence signée : volumes, coûts unitaires, délais, qualité | Oui | S'arrêter : sans point de départ, il n'y a pas de gain mesurable. Le dire au sponsor. |
| Le business case et ses hypothèses | Oui | Reprendre l'hypothèse de valeur de la charte. |
| Les mesures de production, produites par le système | Oui | Les faire instrumenter ; à défaut, une mesure manuelle se déclare comme telle. |
| Un groupe témoin ou une période comparable | Non | Faire un avant-après corrigé et en dire les limites. |
| Un interlocuteur à la finance | Oui | Le faire désigner par le sponsor. |

## Procédure

1. **Reprendre le registre de valeur.** Une ligne par levier : indicateur, référence, cible, méthode de mesure, propriétaire. La méthode a été fixée avant ; si ce n'est pas le cas, la fixer maintenant et l'écrire.
2. **Choisir la comparaison.** Groupe témoin comparable quand il existe ; sinon avant-après, corrigé de la saisonnalité, des volumes et des autres changements survenus en même temps.
3. **Mesurer chaque levier** sur la période : volumes traités, délais, coût unitaire, qualité (erreurs, réouvertures), satisfaction quand elle était visée.
4. **Vérifier ce qui ne devait pas se dégrader** : l'indicateur de garde fixé au cadrage. Un gain de délai payé par une baisse de qualité n'est pas un gain.
5. **Distinguer le gain théorique du gain capté.** Du temps libéré n'est une valeur que s'il a été réaffecté, évité ou converti : dire par quelle décision de gestion, et pour quel montant.
6. **Compter les coûts réels** : inférence, hébergement, exploitation, supervision humaine, maintenance. Les comparer aux coûts prévus.
7. **Calculer la valeur nette** et la situer par rapport aux trois scénarios du business case.
8. **Expliquer l'écart** hypothèse par hypothèse : adoption, part des cas traités, taux d'escalade, coût par cas. C'est cette explication qui oriente les actions.
9. **Faire valider par la finance**, puis présenter au sponsor avec les décisions qui en découlent.
10. **Transférer la mesure** : le tableau de bord est alimenté par le système et tenu par le propriétaire du processus après la mission.

## Livrable

Le [Tableau de bord de valeur](/templates/tableau-de-bord-valeur), le registre de valeur à jour, et une note d'écart : méthode et période, résultats par levier contre référence et cible, gain théorique et gain capté, coûts réels, valeur nette contre business case, explication des écarts, limites de la mesure, décisions proposées.

## Critères de qualité

- Chaque chiffre de gain part de la référence signée et d'une mesure datée.
- La méthode de comparaison est décrite, avec ses limites.
- Gain théorique et gain capté sont distincts.
- L'indicateur de garde est mesuré.
- Les coûts récurrents réels sont comptés.
- La finance du client a validé les chiffres.
- Les indicateurs métier sont produits par le système, sans reconstitution manuelle ([OBS-07](/standards#OBS-07)).

## Garde-fous

- La valeur réalisée est validée par la finance du client : ni le FDE ni un agent ne la proclament.
- Ne jamais extrapoler un pilote à l'échelle sans le dire et sans appliquer la montée en charge.
- Ne pas attribuer au système un gain dû à un autre changement ; dans le doute, ne pas le compter.
- Une valeur inférieure à l'attendu se présente telle quelle, avec son explication.
- Les données financières et individuelles restent dans l'environnement du client.

## Enchaînements

- **Amont** : [Construire le business case](/skills/construire-business-case), [Conduire le pilote](/skills/conduire-pilote).
- **Aval** : [Améliorer en continu](/skills/ameliorer-en-continu), [Capitaliser un retour d'expérience](/skills/capitaliser-rex).
- **Workflow** : [De la mise en production au client autonome](/skills/workflows/transferer-au-client).
- **Ressources** : [Mesurer l'impact réel](/frameworks/mesure-impact), [Registre de valeur](/frameworks/registre-de-valeur), [Arbre de valeur](/frameworks/arbre-de-valeur), [Business case et coût complet d'un système agentique](/frameworks/business-case-tco), [Chiffrer la valeur d'un cas d'usage en deux jours](/guides/chiffrer-la-valeur), [La valeur déclarative](/savoir/valeur-declarative), [La revue de valeur hebdomadaire](/savoir/revue-de-valeur-hebdo), atelier [Business case](/outils/business-case).
