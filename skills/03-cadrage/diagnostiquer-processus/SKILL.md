---
name: diagnostiquer-processus
description: "Établit le processus tel qu'il se déroule réellement et la référence chiffrée de la mission : entretiens, observation au poste, analyse des traces applicatives, décomposition du délai, classification de la valeur de chaque étape, irritants et causes. À utiliser une fois la charte signée, pendant la phase Diagnostiquer, pour préparer le jalon G1, et avant tout atelier d'idéation ou toute conception de cible."
metadata:
  titre: "Diagnostiquer le processus existant"
  version: "1.0.0"
  statut: publie
  etape: cadrage
  sous-processus: diagnostic
  role: design
  domaine: conseil
  phases: [diagnostiquer]
  technologies: [process-mining]
  cas-usage: [tout-projet]
  tags: [diagnostic, processus-existant, entretiens, observation-terrain, process-mining, reference-chiffree]
  proprietaire: design
  diffusion: interne
  entrees: ["Charte de mission et arbre d'hypothèses", "Accès au terrain et aux personnes à interroger", "Historique horodaté des cas sur 6 à 12 mois"]
  sorties: ["Fiche processus existant relue par le terrain", "Diagnostic de flux par les traces", "Référence chiffrée signée"]
  prerequis: [cadrer-mission]
---

## Mission

Établir comment le travail se fait réellement, où passent le délai et le coût, et fixer la référence contre laquelle toute la valeur sera mesurée. Le skill produit, pour le FDE Design, la fiche du processus existant, le diagnostic de flux quand des traces existent, et la référence signée sans laquelle ni la priorisation ni le business case ne se lancent.

## Quand l'utiliser

- La charte est signée et le domaine fixé : avant tout atelier d'idéation.
- Le client dit connaître son processus mais ne sait pas dire où passe le délai.

La qualification des données et du SI relève de [Passer en revue les données et le SI](/skills/evaluer-donnees-si), mené en parallèle par le FDE Build.

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| La charte signée et l'arbre d'hypothèses | Oui | Renvoyer vers [Cadrer la mission](/skills/cadrer-mission). |
| L'accès au terrain : entretiens individuels, observation au poste | Oui | S'arrêter et alerter le FDE Design : un terrain fermé est un motif d'arrêt au jalon G1. |
| Six à douze mois d'événements horodatés | Non | S'en tenir à la fiche et à l'observation, et l'écrire. |

## Procédure

1. **Borner le processus** avec son propriétaire, par un SIPOC : l'événement qui démarre le compteur, celui qui l'arrête, l'unité d'œuvre, cinq à sept macro-étapes.
2. **Mener les entretiens.** Quinze à vingt-cinq, dont la moitié au moins avec ceux qui font le travail ; 45 minutes, à deux, au poste, sans le supérieur hiérarchique. Une hypothèse à tester et cinq questions par entretien, à partir du dernier cas réel : « racontez-moi », « montrez-moi ». Aucune mention de solution. Synthèse dans l'heure ; tout chiffre déclaré reste « à vérifier ».
3. **Observer le travail réel.** Deux à trois jours au poste, vingt cas au moins, des profils variés. Relever les écarts entre procédure et pratique : contournements, outils parallèles, ressaisies, savoirs tacites. Au préalable : accord du responsable de site, information des équipes, accès validé par le DPO.
4. **Faire parler les traces.** Écrire la question de décision avant d'extraire. Le FDE Build extrait le journal (cas, activité, horodatage, équipe) et reconstitue parcours, attentes et boucles de reprise. Lire la médiane et le 90e centile, segmenter par motif avant de conclure, documenter les défauts du journal.
5. **Décomposer le délai** en quatre postes : traitement effectif, collecte d'informations, attente interne, attente externe. La somme des étapes doit redonner le délai de bout en bout ; sinon, il manque une étape ou une attente.
6. **Classer la valeur de chaque étape**, par famille de cas, avec deux personnes du terrain. Valeur ajoutée : le client paierait pour l'étape et elle fait avancer le cas. Nécessaire sans valeur ajoutée : imposée par un texte, un contrat, la sécurité ou une limite réelle du SI ; demander le texte. Gaspillage : tout le reste, à nommer (attente, reprise, transport, sur-traitement). Calculer l'efficience de flux : temps à valeur ajoutée ÷ délai total.
7. **Remonter aux causes** des deux ou trois pertes majeures : symptôme chiffré, cinq pourquoi menés avec le terrain, cause vérifiée par les données. Une cause racine ne désigne jamais une personne.
8. **Trianguler.** Un constat entre au diagnostic s'il s'appuie sur deux sources parmi trois : entretiens, observation, données. Un écart entre sources se creuse.
9. **Restituer et faire signer.** Au terrain d'abord, qui corrige. Puis trois messages chiffrés au plus, disant ce qui confirme ou contredit les hypothèses du cadrage. Faire signer chaque indicateur de référence : valeur, période, source, formule.

## Livrable

- La [Fiche processus existant](/templates/fiche-processus-existant), une par processus : identité, SIPOC, étapes, passages de relais, décomposition du délai, irritants, exceptions, données, indicateurs, limites de la mesure.
- Le [Diagnostic de flux par les traces](/templates/diagnostic-flux-traces), sections 1 à 6 ; les verdicts par segment se rendent en phase Cibler.
- Les synthèses d'entretiens, selon le [Guide d'entretien](/templates/guide-entretien).

Le profil de maturité, restitué au même jalon, suit la [Synthèse du diagnostic de maturité](/templates/diagnostic-maturite).

## Critères de qualité

- Le compteur a un début, une fin et une source ; la somme des temps des étapes égale le délai de bout en bout.
- Chaque chiffre porte sa source : journaux, observation ou déclaration.
- Chaque étape est classée, chaque gaspillage nommé, chaque passage de relais dit ce qui se perd.
- Chaque constat s'appuie sur deux sources sur trois.
- Les exceptions sont listées avec leur fréquence ; des opérationnels ont relu la fiche.

## Garde-fous

- L'analyse porte sur le flux, jamais sur des personnes : résultats agrégés, verbatims non attribués, pseudonymisation dès l'extraction, traitement validé par le DPO du client.
- Le FDE Design mène entretiens et observation ; l'agent prépare les trames, synthétise et calcule.
- Ne jamais inventer une durée, un volume ou une fréquence : écrire « non mesuré » ou `[À CONFIRMER]`, avec la vérification prévue.
- La référence n'existe que signée par le propriétaire du processus et la finance ; le FDE Design présente le diagnostic au comité, et l'alerte lui revient si la valeur mesurée est très inférieure à l'ambition du cadrage.

## Enchaînements

- **Amont** : [Cadrer la mission](/skills/cadrer-mission).
- **Aval** : [Prioriser les cas d'usage](/skills/prioriser-cas-usage), [Concevoir le processus cible](/skills/concevoir-processus-cible).
- **Workflow** : [Du mandat au portefeuille arbitré](/skills/workflows/cadrer-et-cibler).
- **Ressources** : [Mener des entretiens de diagnostic](/guides/mener-entretiens), [Cartographier et mesurer le processus existant](/frameworks/cartographie-processus), [Carte de flux de valeur (VSM)](/frameworks/value-stream-mapping), [Process mining et DMAIC augmenté](/frameworks/process-mining-dmaic), [Observation terrain (Gemba)](/frameworks/observation-terrain), [Analyse des causes racines](/frameworks/analyse-causes-racines), [Redesign de processus](/outils/redesign-processus).
