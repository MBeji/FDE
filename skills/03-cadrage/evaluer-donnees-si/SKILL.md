---
name: evaluer-donnees-si
description: "Passe en revue les données, les systèmes, les interfaces, les droits et les contraintes de sécurité du client, et dit ce qu'ils rendent possible ou non, cas d'usage par cas d'usage. À utiliser pendant le diagnostic, avant de prioriser les cas d'usage et de concevoir l'architecture."
metadata:
  titre: "Passer en revue les données et le SI"
  version: "1.0.0"
  statut: publie
  etape: cadrage
  sous-processus: diagnostic
  role: build
  domaine: architecture
  phases: [diagnostiquer]
  technologies: [donnees, api-integration]
  cas-usage: [tout-projet]
  tags: [donnees, si, revue, integration, securite, diagnostic, audit-donnees, qualite-des-donnees, inventaire]
  proprietaire: build
  diffusion: interne
  entrees: ["Charte de mission et périmètre", "Accès aux sources de données et à leurs propriétaires", "Cartographie applicative et politique de sécurité du client"]
  sorties: ["Revue de préparation des données et du SI", "Verdict par cas d'usage et plan de remédiation"]
  prerequis: [cadrer-mission]
---

## Mission

Établir l'état réel des données et du SI avant de choisir quoi construire. Le skill produit pour le FDE Build la revue de préparation : inventaire des sources, cartographie applicative, contraintes, et un verdict par cas d'usage envisagé. C'est elle qui évite de prioriser un cas d'usage que les données interdisent.

## Quand l'utiliser

- La mission est cadrée et le diagnostic démarre.
- Un nouveau cas d'usage entre dans le portefeuille : la revue s'étend à ses sources.
- Une source ou un système change de statut : accès refusé, migration annoncée.

En avant-vente, sans accès au SI, utiliser [Étudier la faisabilité](/skills/etudier-faisabilite) : la revue repose sur des constats, pas sur des déclarations.

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| Le périmètre et les cas d'usage pressentis | Oui | Les reprendre de la charte de mission. |
| Un accès en lecture aux sources, ou un extrait représentatif | Oui | Dater la demande, l'inscrire comme risque, noter la source « non vue ». |
| Les propriétaires métier et techniques des sources | Oui | Les faire désigner par le sponsor. |
| La cartographie applicative et les interfaces existantes | Non | La reconstituer en entretien avec l'équipe SI. |
| La politique de sécurité, de classification et d'hébergement | Non | La demander au RSSI ; supposer le régime le plus strict en attendant. |

## Procédure

1. **Partir des questions métier.** Demander au FDE Design ce que les données doivent permettre de décider ou de mesurer pour chaque cas d'usage. Résultat : la liste des sources à examiner, et seulement celles-là.
2. **Inventorier chaque source.** Propriétaire, contenu, volume, fraîcheur, historique disponible, mode d'accès, présence de données personnelles ou sensibles, base légale de l'usage visé.
3. **Mesurer la qualité sur pièces.** Tirer un échantillon soi-même, jamais un extrait choisi par le client. Mesurer complétude, cohérence, doublons, champs libres, écart entre ce que dit la documentation et ce que contient la base.
4. **Cartographier les systèmes touchés.** Pour chacun : interface de lecture, interface d'écriture, environnement de test, limites de débit, équipe responsable, calendrier de changement.
5. **Relever les contraintes.** Classification, résidence des données, règles d'accès à distance, exigences d'homologation, journalisation imposée, délais des comités.
6. **Examiner l'existant en IA** : plateforme, modèles autorisés, outils d'évaluation et d'observabilité déjà en place. Réutiliser avant d'ajouter.
7. **Rendre un verdict par cas d'usage** : prêt, prêt sous conditions, non prêt. Chaque condition est une action avec un responsable et une date.
8. **Chiffrer la remédiation.** Ce qu'il faut corriger, par qui, en combien de temps, et ce que l'on peut faire sans attendre.
9. **Restituer** au FDE Design avant le jalon G1 : ce que le SI rend possible, ce qu'il interdit, ce qu'il retarde.

## Livrable

La [Revue de préparation des données et du SI](/templates/revue-donnees-si) : synthèse, inventaire des sources, cartographie applicative, contraintes de sécurité et de conformité, plateforme IA existante, verdict par cas d'usage, plan de remédiation, et ce que la revue ne traite pas.

## Critères de qualité

- Chaque source a un propriétaire nommé et une mesure de qualité faite sur un échantillon tiré par nous.
- Les sources non vues sont marquées comme telles, sans verdict favorable.
- Chaque système à écrire a une interface et un environnement de test identifiés, ou un risque inscrit.
- Les données personnelles sont repérées, avec leur base légale ou la question posée au DPO.
- Chaque verdict « sous conditions » porte des actions datées et attribuées.
- La revue respecte [DAT-01](/standards#DAT-01), [DAT-02](/standards#DAT-02) et [CLD-04](/standards#CLD-04).

## Garde-fous

- Ne sortir aucune donnée de l'environnement du client ; ne copier aucune donnée de production hors production sans anonymisation.
- Ne demander que les accès nécessaires, nominatifs, et les faire tracer.
- La qualification juridique d'un traitement appartient au DPO du client ; la validation des flux, à son RSSI.
- Un verdict « non prêt » se dit tôt et par écrit au FDE Design : il ne s'adoucit pas pour préserver un cas d'usage attendu.

## Enchaînements

- **Amont** : [Cadrer la mission](/skills/cadrer-mission).
- **Aval** : [Prioriser les cas d'usage](/skills/prioriser-cas-usage), [Concevoir l'architecture technique](/skills/concevoir-architecture-technique).
- **Workflow** : [Du mandat au portefeuille arbitré](/skills/workflows/cadrer-et-cibler).
- **Ressources** : [Architecture de référence d'un système agentique](/frameworks/architecture-reference), [Fil numérique : continuité des données et traçabilité des décisions](/frameworks/fil-numerique), [RACI Design · Build](/raci).
