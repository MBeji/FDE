---
id: value-stream-mapping
titre: "Carte de flux de valeur (VSM)"
resume: "Suivre un cas de bout en bout et classer chaque étape : valeur ajoutée, nécessaire sans valeur ajoutée, ou gaspillage. Sert à décider ce qu'on supprime avant de décider ce qu'on confie à un agent."
categorie: processus
phases: [diagnostiquer, cibler]
origine: "Lean (système de production Toyota ; Mike Rother et John Shook)"
niveau: fondamental
tags: [lean, diagnostic, gaspillage, valeur, excellence-operationnelle]
templates: [diagnostic-flux-traces, fiche-processus-existant]
lies: [cartographie-processus, process-mining-dmaic, decomposition-taches, eliminer-automatiser-agentifier]
---

## En bref

La carte de flux de valeur, ou Value Stream Mapping (VSM), suit un cas de son déclenchement à son résultat et classe chaque étape dans l'une de trois catégories : **valeur ajoutée**, **nécessaire sans valeur ajoutée**, **gaspillage**. Elle pose la question que la cartographie ne pose pas : faut-il seulement faire cette étape ?

Une règle en découle : **on n'agentifie pas un gaspillage**. Un agent rend une étape inutile rapide et peu coûteuse. Elle devient invisible, donc définitive, et le flux garde un défaut que plus personne ne regardera.

## Quand l'utiliser

- En phase [Diagnostiquer](/methode/diagnostiquer), une fois le flux mesuré : la carte s'appuie sur des temps, pas sur des impressions.
- En phase [Cibler](/methode/cibler), pour motiver chaque verdict de la [grille de décision](/frameworks/eliminer-automatiser-agentifier).
- Au bilan de pilote, pour vérifier que le système n'a pas créé de nouveaux gaspillages.

Ne pas l'utiliser sur un travail où chaque cas est unique : préférer la [décomposition des tâches](/frameworks/decomposition-taches). Ne pas la dessiner avant d'avoir des temps mesurés : on ne classerait que des opinions.

## Comment l'appliquer

### 1. Choisir une famille de cas

Une carte par population homogène : un motif, un segment, une voie. Une carte unique pour des cas qui suivent des parcours différents ne décrit aucun d'eux.

### 2. Reprendre la ligne de temps

Partir des étapes de la [fiche processus existant](/templates/fiche-processus-existant) : temps de traitement, attente en amont, taux de bon du premier coup. Y ajouter les parcours issus des [traces](/frameworks/process-mining-dmaic).

### 3. Classer chaque étape

Deux tests décident, le troisième isole la reprise.

1. **Le client paierait-il pour cette étape s'il la voyait ?**
2. **Fait-elle avancer le cas vers son résultat ?**
3. **Est-elle faite bien du premier coup ?**

Oui aux deux premiers : valeur ajoutée. La part refaite, que révèle le troisième, se compte à part, en gaspillage de type reprise. Sinon, une question de plus : l'étape est-elle imposée par un texte, un contrat, la sécurité ou une limite réelle du système d'information ? Si oui, elle est nécessaire sans valeur ajoutée. Sinon, c'est un gaspillage. À chaque « c'est obligatoire », demander le texte.

### 4. Nommer les gaspillages

Les sept gaspillages décrits par Taiichi Ohno, et le huitième que les praticiens du Lean y ont ajouté, se transposent au travail de service.

| Gaspillage | Dans un processus de service |
| --- | --- |
| Attente | Dossier dans une file, validation en souffrance, réponse d'un tiers |
| Reprise | Travail refait ou corrigé, réouverture, dossier renvoyé incomplet |
| Transport | Passage de relais, transfert entre équipes ou entre applications |
| Mouvements | Navigation entre écrans, recherche d'une information, copier-coller |
| Sur-traitement | Contrôle redondant, vérification systématique d'un cas sans risque, rapport que personne ne lit |
| Sur-production | Travail fait avant le besoin, dossier ouvert sans suite |
| Stocks | Encours, backlog, messages non traités |
| Compétences inemployées | Un expert occupé à collecter des informations |

### 5. Calculer l'efficience de flux

Efficience de flux = temps à valeur ajoutée ÷ délai de bout en bout. Elle est souvent faible dans les services, comme le rappelle la [cartographie du processus](/frameworks/cartographie-processus). Tant qu'elle est basse, accélérer le traitement change peu de chose pour le client.

### 6. Décider par catégorie

| Catégorie | Décision par défaut | Suite |
| --- | --- | --- |
| Gaspillage | Supprimer, ou traiter la cause qui le produit | Décision du propriétaire du processus ; rien à construire |
| Nécessaire sans valeur ajoutée | Réduire, puis automatiser au niveau de solution le plus bas | [Échelle des solutions](/frameworks/faut-il-un-agent), barreau 1 d'abord |
| Valeur ajoutée | Renforcer : augmenter l'humain ou confier à un agent | [Grille de décision](/frameworks/eliminer-automatiser-agentifier) |

### 7. Dessiner l'état futur et le chiffrer

Tracer la ligne de temps sans les gaspillages supprimés et avec les étapes restantes à leur délai cible. L'écart avec l'existant donne la valeur de la réingénierie, avant toute IA.

### Surveiller les gaspillages que les agents ajoutent

Un système agentique peut recréer ce qu'on vient de supprimer.

- **Attente** : une approbation humaine exigée pour des actions sans risque.
- **Reprise** : un humain qui refait par prudence ce que l'agent a déjà fait.
- **Sur-traitement** : un contexte trop large, des appels d'outils inutiles, payés en latence et en coût d'inférence.
- **Sur-production** : des messages et des synthèses que personne ne lit.

Les relever au pilote, avec le même tri en trois catégories.

## Exemple

La carte du traitement d'un incident technique chez Voxalis reprend les neuf étapes et les temps de la fiche processus : 31 h de bout en bout.

| Catégorie | Étapes | Durée | Part |
| --- | --- | --- | --- |
| Valeur ajoutée | Résolution au premier contact (étape 4), diagnostic approfondi (6), remédiation (8), vérification et information du client (9) | 9,3 h | 30 % |
| Nécessaire sans valeur ajoutée | Ouverture du ticket (1), qualification (2), collecte et premier diagnostic (3) | 0,9 h | 3 % |
| Gaspillage | Nouvelle collecte par le N2 (5), complément demandé au client (7), attente entre N1 et N2, attente du client | 20,8 h | 67 % |

L'étape 4 mêle la résolution au premier contact et la rédaction du transfert, que les mesures n'isolent pas : elle est comptée entière en valeur ajoutée. Les réouvertures, 14 % des tickets clos, sont une reprise qui s'ajoute à ce compte. L'efficience de flux est donc de 30 % au plus. Elle est moindre en temps réellement travaillé, puisque le temps « en cours » chez un acteur n'est pas sa charge. La fiche processus compte 18 % de traitement effectif : elle classe par nature de travail et range le diagnostic approfondi avec la collecte. La carte de flux classe par valeur pour le client, pour qui un diagnostic juste fait avancer son rétablissement.

Trois décisions suivent, sans aucun agent.

- La nouvelle collecte du N2 (2,4 h) est une reprise : elle disparaît si le dossier arrive complet.
- L'attente entre niveaux (12,7 h) vient de l'organisation en niveaux, pas d'un manque de bras.
- Le complément demandé au client vient d'une information qui manquait au signalement.

La demande initiale, un chatbot d'accueil, visait l'ouverture du ticket : 0,1 h, soit l'étape où il n'y avait rien à gagner.

## Pièges à éviter

- **Classer en salle.** Sans le terrain ni la voix du client, tout paraît utile. Parade : classer avec deux conseillers et relire dix verbatims de clients.
- **Tout déclarer nécessaire.** Parade : pas de texte, pas d'obligation.
- **Optimiser la valeur ajoutée quand le délai est ailleurs.** Parade : lire l'efficience de flux avant de choisir la cible.
- **Une carte pour tout le monde.** Parade : une carte par famille de cas.
- **Agentifier le gaspillage.** Parade : le verdict « supprimer » passe avant tous les autres.

## Pour aller plus loin

- Guide : [socle transformation métier](/guides/socle-transformation-metier)
- Frameworks : [cartographier et mesurer le processus existant](/frameworks/cartographie-processus), [process mining et DMAIC augmenté](/frameworks/process-mining-dmaic), [grille de décision](/frameworks/eliminer-automatiser-agentifier), [réinvention à base zéro](/frameworks/reinvention-zero-base)
- Template : [diagnostic de flux par les traces](/templates/diagnostic-flux-traces)
- Savoir terrain : [automatiser l'existant](/savoir/automatiser-l-existant)
- Références : Taiichi Ohno pour les sept gaspillages d'origine ; Mike Rother et John Shook, « Learning to See », pour la carte de flux de valeur.
