---
name: prioriser-cas-usage
description: "Fait émerger les cas d'usage d'un domaine, qualifie le niveau de solution de chacun, les note en valeur et en faisabilité et arbitre un portefeuille par vagues. À utiliser après le diagnostic, quand la référence chiffrée et la revue des données existent, ou quand une liste d'idées doit devenir une feuille de route."
metadata:
  titre: "Prioriser les cas d'usage"
  version: "1.0.0"
  statut: publie
  etape: cadrage
  sous-processus: ciblage
  role: design
  domaine: conseil
  phases: [cibler]
  technologies: []
  cas-usage: [tout-projet]
  tags: [cas-usage, priorisation, portefeuille, valeur, faisabilite, feuille-de-route, use-cases, backlog, opportunites]
  proprietaire: design
  diffusion: interne
  entrees: ["Diagnostic du processus et référence chiffrée", "Revue de préparation des données et du SI", "Idées et attentes exprimées par le métier"]
  sorties: ["Portefeuille priorisé et feuille de route par vagues", "Fiches des cas d'usage retenus"]
  prerequis: [diagnostiquer-processus, evaluer-donnees-si]
---

## Mission

Choisir où créer de la valeur, et dans quel ordre. Le skill aide le FDE Design à passer d'une liste d'idées à un portefeuille arbitré : peu de cas d'usage, qui se renforcent sur un même flux, notés à données ouvertes. Cinq cas d'usage qui transforment un domaine valent plus que quinze dispersés.

## Quand l'utiliser

- Le diagnostic est partagé et il faut décider quoi lancer.
- Le client arrive avec une liste de cas d'usage déjà dressée.
- Un jalon remet le portefeuille en question : un pari échoue, une donnée devient disponible.

Ne pas l'utiliser sans référence chiffrée du processus : repasser par [Diagnostiquer le processus existant](/skills/diagnostiquer-processus).

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| Les irritants et la référence chiffrée du diagnostic | Oui | S'arrêter : on noterait des impressions. |
| La revue des données et du SI | Oui | Noter la faisabilité « non évaluée » et le dire. |
| Les objectifs du sponsor et l'ambition de la charte | Oui | Les relire dans la charte de mission. |
| Les idées déjà exprimées par le métier | Non | Les faire émerger en atelier. |
| La capacité du binôme et du client sur la période | Non | La demander avant de fixer les vagues. |

## Procédure

1. **Faire émerger large.** Partir des étapes du processus et de leurs irritants, pas de la technologie. Décomposer chaque étape en tâches et demander laquelle gagnerait à être supprimée, simplifiée, automatisée ou confiée à un agent. Compléter avec la bibliothèque de cas d'usage du secteur.
2. **Regrouper par domaine.** Rassembler les idées qui touchent le même flux, les mêmes données, les mêmes équipes. Écarter les idées orphelines sauf valeur exceptionnelle.
3. **Formuler chaque cas d'usage** en une fiche : problème, utilisateurs, résultat attendu, indicateur, données nécessaires.
4. **Qualifier le niveau de solution.** Placer chaque cas sur l'échelle des solutions, au barreau le plus bas qui suffit. Un cas qui se règle par une règle ou un workflow reste dans le portefeuille, à son vrai coût.
5. **Fixer la grille avant de noter.** Valeur : effet sur l'indicateur cible, volume concerné, délai d'obtention. Faisabilité : données, intégration, risque, adoption. Échelle de 1 à 5, critères écrits pour chaque niveau.
6. **Noter à données ouvertes.** Le Design note la valeur avec le métier et la finance ; le Build note la faisabilité à partir de la revue. Chaque note cite son fait.
7. **Lire la matrice.** Valeur et faisabilité hautes : première vague. Valeur haute et faisabilité basse : pari à préparer, avec ses prérequis. Faisabilité haute et valeur basse : seulement s'il sert un cas voisin. Le reste : écarté, et c'est écrit.
8. **Arbitrer en séance** avec le sponsor : trois à cinq cas pour la première vague, dont un qui prouve vite. Vérifier que la capacité suit.
9. **Tracer la feuille de route** par vagues, avec dépendances et décisions attendues.

## Livrable

Le [Portefeuille priorisé et feuille de route](/templates/portefeuille-priorise) : synthèse, grille de notation, cas notés, matrice, arbitrages, feuille de route par vagues, dépendances, capacité, décisions demandées. En annexe, une [Fiche cas d'usage](/templates/canevas-cas-usage) par cas retenu.

## Critères de qualité

- Chaque cas retenu se rattache à un irritant mesuré et à un indicateur.
- La grille a été fixée avant la notation, et chaque note cite un fait.
- Le niveau de solution est justifié pour chaque cas.
- Les cas écartés figurent au document, avec la raison.
- La première vague tient dans la capacité disponible et contient un cas à preuve rapide.
- Les cas retenus se renforcent : mêmes données, même flux ou mêmes équipes.

## Garde-fous

- L'arbitrage appartient au sponsor, au jalon G2 : le skill prépare la décision, il ne la prend pas.
- La faisabilité est notée par le FDE Build ; le Design ne la corrige pas pour sauver un cas attendu.
- Ne pas afficher de gain chiffré sans référence : un ordre de grandeur se présente comme tel, avec son calcul.
- Les risques réglementaires d'un cas sont signalés avant l'arbitrage, pas après.

## Enchaînements

- **Amont** : [Diagnostiquer le processus existant](/skills/diagnostiquer-processus), [Passer en revue les données et le SI](/skills/evaluer-donnees-si).
- **Aval** : [Construire le business case](/skills/construire-business-case), [Concevoir le processus cible](/skills/concevoir-processus-cible).
- **Workflow** : [Du mandat au portefeuille arbitré](/skills/workflows/cadrer-et-cibler).
- **Ressources** : [Matrice valeur × faisabilité](/frameworks/matrice-valeur-faisabilite), [Faut-il un agent ? L'échelle des solutions](/frameworks/faut-il-un-agent), [Portefeuille et horizons](/frameworks/portefeuille-horizons), [L'approche par domaine](/frameworks/approche-par-domaine), [Animer un atelier d'identification des opportunités](/guides/animer-atelier-ideation), atelier [Priorisation des cas d'usage](/outils/priorisation), [Cas d'usage](/cas-usage).
