---
name: preparer-environnements
description: "Prépare les environnements d'un projet (développement, recette, préproduction, production) : isolés, décrits par du code, proches de la production, avec identités, secrets, données de test autorisées, budgets et accès conformes à la politique du client. À utiliser dès le début de la construction, bien avant la première mise en production."
metadata:
  titre: "Préparer les environnements"
  version: "1.0.0"
  statut: publie
  etape: deploiement
  sous-processus: environnements
  role: build
  domaine: ops
  phases: [construire, industrialiser]
  technologies: [cloud]
  cas-usage: [tout-projet]
  tags: [environnements, infrastructure-as-code, secrets, donnees-de-test, parite, infrastructure, recette, preproduction]
  proprietaire: build
  diffusion: interne
  entrees: ["Dossier d'architecture", "Politique de sécurité, d'hébergement et d'accès du client", "Besoins en données de test"]
  sorties: ["Environnements opérationnels décrits par du code", "Matrice des accès et des identités", "Jeux de données de test autorisés"]
  prerequis: [concevoir-architecture-technique]
---

## Mission

Donner à l'équipe des environnements où construire et prouver, qui ressemblent à la production et que l'on peut recréer. Le skill guide le FDE Build depuis la demande d'accès jusqu'à des environnements utilisables. Un environnement monté à la main ne se reproduit pas : ce qui y a été testé ne prouve rien pour la production.

## Quand l'utiliser

- Au démarrage de la construction, dès que l'architecture est esquissée.
- Quand un nouvel environnement, un nouveau composant ou une nouvelle région s'ajoute.
- Quand un écart entre recette et production a causé une anomalie.

Les demandes d'accès se lancent dès la préparation de la mission : c'est le premier facteur de retard. Ne pas attendre ce skill pour les formuler.

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| Le dossier d'architecture : composants, flux, dépendances | Oui | Partir de l'esquisse et marquer `[À CONFIRMER]` ce qui en dépend. |
| La politique du client : hébergement, régions, accès à distance, classification | Oui | La demander au RSSI et à l'équipe infrastructure avant de créer quoi que ce soit. |
| Les comptes ou projets mis à disposition par le client | Oui | Dater la demande et l'inscrire au registre des risques. |
| Les besoins en données de test | Non | Les recueillir auprès du Design et de la stratégie de tests. |

## Procédure

1. **Lister les environnements nécessaires** et l'usage de chacun : développement, recette, préproduction si le risque le justifie, production. Ne pas en créer que personne n'entretiendra.
2. **Séparer strictement.** Comptes ou projets distincts, réseaux distincts, aucun chemin de la recette vers les données de production.
3. **Décrire toute l'infrastructure en code**, versionnée, appliquée par le pipeline. Aucune modification manuelle en console sur un environnement partagé.
4. **Viser la parité.** Mêmes composants, mêmes versions, même configuration de sécurité qu'en production ; seules la taille et les données diffèrent. Écrire les écarts qui restent.
5. **Poser les identités.** Une identité de charge par service, à moindre privilège, par environnement. Comptes nominatifs et authentification multifacteur pour les personnes. Aucun compte partagé, aucune clé longue durée.
6. **Gérer les secrets** dans un coffre, avec rotation. Rien dans le dépôt, les journaux ou les prompts.
7. **Préparer les données de test.** Synthétiques ou anonymisées, représentatives, versionnées et rechargeables. Jamais de données de production hors production sans anonymisation validée.
8. **Respecter la résidence des données**, y compris pour les journaux, les sauvegardes, les index et les appels au fournisseur de modèle.
9. **Étiqueter et borner les coûts** : étiquettes normalisées, budget et alerte par environnement, extinction de ce qui ne sert pas.
10. **Instrumenter dès maintenant** : traces, métriques et journaux dans chaque environnement.
11. **Prouver la reproductibilité** : détruire et recréer l'environnement de recette à partir du code.

## Livrable

1. Le code d'infrastructure, dans le dépôt, avec son guide d'usage.
2. Un tableau des environnements : usage, emplacement, écarts connus avec la production.
3. La matrice des accès : personnes et identités de service, droits, date de revue.
4. Les jeux de données de test : origine, méthode d'anonymisation, version.
5. Les budgets et alertes de coût par environnement.

## Critères de qualité

- Toute l'infrastructure est décrite en code et appliquée par le pipeline ([CLD-01](/standards#CLD-01)).
- Développement, recette et production sont séparés, sans donnée de production non anonymisée hors production ([CLD-02](/standards#CLD-02)).
- Chaque service a une identité dédiée à moindre privilège ([CLD-03](/standards#CLD-03)) ; les accès des personnes sont nominatifs et multifacteur ([SEC-04](/standards#SEC-04)).
- Les données résident dans les régions autorisées ([CLD-04](/standards#CLD-04)).
- Aucun secret hors du coffre ([OPS-01](/standards#OPS-01)).
- Budgets et alertes de coût sont actifs ([CLD-08](/standards#CLD-08)).
- L'environnement de recette a été recréé à partir du code.

## Garde-fous

- Aucun environnement n'est créé hors des comptes du client ni en dehors de sa politique : pas de ressource sur un compte personnel ou de l'entreprise prestataire.
- L'usage d'un extrait de données réelles demande l'accord du propriétaire de la donnée et du DPO.
- La validation des flux et de l'hébergement appartient au RSSI du client.
- Les accès de l'équipe sont revus à intervalle fixe et retirés en fin de mission.

## Enchaînements

- **Amont** : [Concevoir l'architecture technique](/skills/concevoir-architecture-technique).
- **Aval** : [Mettre en place la chaîne CI/CD](/skills/mettre-en-place-ci-cd).
- **Workflow** : [De la validation à la mise en production](/skills/workflows/mettre-en-production).
- **Ressources** : [Dossier de préparation de mission](/templates/dossier-preparation-mission), [Checklist sécurité et conformité](/templates/checklist-securite-conformite), [RACI Design · Build](/raci).
