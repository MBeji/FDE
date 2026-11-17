---
id: eliminer-automatiser-agentifier
titre: "Supprimer, réingénierer, automatiser ou agentifier : la grille de décision"
resume: "Quatre verdicts possibles pour chaque segment d'un flux, dans un ordre imposé, à rendre sur des faits mesurés. Évite de construire un agent là où une suppression d'étape, une refonte du flux ou un simple script suffit."
categorie: opportunites
phases: [cibler, reinventer]
origine: "Maison, d'après le Lean, Michael Hammer et le zero-based redesign (Bain)"
niveau: fondamental
tags: [decision, sobriete, reingenierie, automatisation, agents]
templates: [diagnostic-flux-traces, canevas-cas-usage]
lies: [faut-il-un-agent, decomposition-taches, reinvention-zero-base, value-stream-mapping]
---

## En bref

Devant une étape qui coûte du temps ou de l'argent, quatre réponses existent : la **supprimer**, **réingénierer** le flux qui la rend nécessaire, l'**automatiser** par une règle, ou l'**agentifier**, c'est-à-dire la confier à un modèle. Chacune coûte plus cher à construire et à exploiter que la précédente : l'ordre est donc imposé.

La grille rend un verdict par segment de flux, sur des faits mesurés. Elle évite les deux erreurs les plus chères : un agent là où une suppression suffisait, et un agent posé sur un flux cassé. Elle prolonge un principe ancien de la réingénierie, que Michael Hammer résumait par « n'automatisez pas, supprimez », et le zero-based redesign : rien ne survit parce qu'il existait.

## Quand l'utiliser

- En phase [Cibler](/methode/cibler), après le diagnostic, avant d'écrire la moindre fiche de cas d'usage.
- En phase [Réinventer](/methode/reinventer), pour relire le processus cible : chaque étape qui reste doit avoir passé la grille.
- Face à la demande « il nous faut un agent pour cette étape ».

Trois outils s'emboîtent, à ne pas confondre. Cette grille tranche à la maille du **segment de flux**. La [décomposition des tâches](/frameworks/decomposition-taches) répartit ensuite les **tâches d'un poste**. L'[échelle des solutions](/frameworks/faut-il-un-agent) choisit enfin le **niveau de solution**, de l'appel de modèle unique au système multi-agents.

## Comment l'appliquer

### 1. Découper le flux en segments, avec leurs faits

Un segment est une activité, ou un groupe d'activités entre deux passages de relais. Pour chacun, réunir ce que le [diagnostic par les traces](/templates/diagnostic-flux-traces) a mesuré : volume, délai, part d'attente, taux de reprise, catégorie de valeur, enjeu en euros.

### 2. Poser quatre questions, dans l'ordre

1. **Valeur.** L'étape survit-elle au tri de la [carte de flux de valeur](/frameworks/value-stream-mapping) ? Si c'est un gaspillage : supprimer.
2. **Santé du flux.** Le délai ou le coût du segment vient-il du travail lui-même, ou de son organisation : attentes, relais, reprises, parcours multiples pour un même résultat ? Si c'est l'organisation : réingénierer d'abord.
3. **Spécifiabilité.** Les entrées sont-elles structurées et la règle stable, écrite, vérifiable ? Si oui : automatiser, de façon déterministe.
4. **Jugement borné.** Le travail demande-t-il d'interpréter, et passe-t-il les six questions de l'[échelle des solutions](/frameworks/faut-il-un-agent) ? Si oui : agentifier. Sinon, l'étape reste à un humain, que l'on outille.

### 3. Lire la matrice

Un filtre passe avant la matrice : ce qui n'a ni valeur pour le client ni obligation réelle est supprimé, quelle que soit la case.

| | Travail spécifiable : règles écrites, données structurées | Travail de jugement : texte libre, chemin variable |
| --- | --- | --- |
| **Flux sain** : peu d'attente, peu de reprises | **Automatiser** | **Agentifier** |
| **Flux dégradé** : attentes, relais, reprises | **Réingénierer**, puis automatiser ce qui reste | **Réingénierer**, puis agentifier ce qui reste |

La case en bas à droite est la plus dangereuse. C'est là que naît l'agent pansement : il absorbe les défauts du flux au lieu de les faire disparaître.

### 4. Vérifier les signaux de chaque verdict

| Verdict | Signaux mesurés | Ce qu'on livre | Qui construit |
| --- | --- | --- | --- |
| Supprimer | Étape classée gaspillage ; contrôle qui n'a rien arrêté sur la période ; relais qui n'existe que par l'organigramme | Une décision du propriétaire du processus et une procédure mise à jour | Personne |
| Réingénierer | L'attente dépasse le traitement ; reprises ou réouvertures élevées ; plus de trois relais ; parcours nombreux pour un même résultat | Un [processus cible](/templates/processus-cible-ai-native) | Le métier, avec le FDE Design |
| Automatiser | Logique entièrement spécifiable ; données accessibles par API ; volume élevé | Une règle, un script, une intégration : barreau 1 de l'échelle | Le FDE Build ou la DSI, en jours |
| Agentifier | Texte libre ou pièces jointes ; ordre des vérifications qui dépend de ce qu'on trouve ; les six questions de l'échelle des solutions passées | Une [fiche de conception](/templates/fiche-conception-processus-agentique), puis le barreau 2 à 5 fixé par l'échelle | Le binôme, en semaines |
| Garder à l'humain | Relation, arbitrage, responsabilité ; erreur irréversible | Un poste outillé : dossier préparé, recherche, synthèse | Le binôme |

Les seuils sont des repères à calibrer sur le domaine, pas des constantes.

### 5. Chiffrer la valeur par verdict

Présenter séparément la valeur des suppressions et de la réingénierie, acquise sans IA, et celle des automatisations et des agents. Trois raisons : une suppression est le seul gain sans coût récurrent ; le sponsor voit ce que l'IA apporte vraiment ; le [business case](/templates/business-case) ne fait pas porter aux agents un gain qu'ils n'ont pas produit. Classer ensuite les segments par effet sur le résultat, avec l'[arbre de valeur](/frameworks/arbre-de-valeur).

### 6. Faire valider les verdicts au jalon G2

Le propriétaire du processus valide chaque suppression : c'est lui qui en répond. Les verdicts écartés sont écrits, avec leur raison.

## Exemple

Les verdicts rendus chez Voxalis sur le traitement d'un incident technique, à partir de la fiche processus et des traces.

| Segment | Fait mesuré | Verdict |
| --- | --- | --- |
| Files entre N1 et N2 | 12,7 h, soit 41 % du délai, sans aucun travail | Réingénierer : trois voies remplacent les deux niveaux |
| Nouvelle collecte par le N2 | 2,4 h ; vérifications refaites sur 41 des 50 tickets relus | Supprimer |
| Rédaction du transfert au N2 | N'existe que par le passage de niveau | Supprimer |
| Complément demandé au client | 23 % des incidents ; 8,5 h avec les attentes | Réingénierer : réunir l'information dès le signalement |
| Qualification du ticket | Texte libre du client ; 9 % d'erreurs | Agentifier, au barreau 2 |
| Choix de la voie | Critères écrits : motif, risque de l'action, incident collectif, réclamation ouverte | Automatiser : règles d'entrée des voies, codées et appliquées par l'orchestration du cas |
| Collecte et diagnostic, hors reprise | 4,5 h dans 4 outils ; l'ordre des vérifications dépend des résultats | Agentifier, au barreau 4 |
| Remédiation des motifs récurrents | 12 motifs documentés, 58 % des incidents | Agentifier sur le catalogue d'actions à risque faible ; décision humaine au-delà |
| Vérification du rétablissement | Un contrôle, un résultat attendu | Automatiser |
| Geste commercial | Décision qui engage l'entreprise | Garder à l'humain |
| Chatbot d'accueil, la demande initiale | L'ouverture du ticket pèse 0,1 h | Écarté |

Sur onze segments, deux sont supprimés, deux relèvent d'abord de la réingénierie et deux d'une simple automatisation. Les agents n'arrivent qu'ensuite, sur trois segments. C'est la disparition des files entre niveaux, pas un agent, qui retire le premier poste de délai.

## Pièges à éviter

- **L'agent pansement.** Un agent qui relance, ressaisit ou réconcilie masque un flux cassé. Parade : la question 2 avant la question 4. Voir [automatiser l'existant](/savoir/automatiser-l-existant).
- **Sauter la suppression parce qu'elle fâche.** Supprimer un contrôle ou un relais touche un territoire. Parade : apporter le fait mesuré et laisser le propriétaire du processus décider.
- **Créditer l'IA de tout le gain.** Parade : deux lignes distinctes dans le business case.
- **Un verdict sans fait.** Parade : pas de verdict sur un segment non mesuré ; l'écrire comme hypothèse à vérifier.
- **Un verdict unique pour tout le processus.** « On agentifie le SAV » n'est pas un verdict. Parade : un verdict par segment. Voir [l'agent partout](/savoir/agent-partout).

## Pour aller plus loin

- Guide : [socle transformation métier](/guides/socle-transformation-metier)
- Outil interactif : [Agent ou pas ?](/outils/agent-ou-pas), pour le niveau de solution des segments agentifiés
- Frameworks : [carte de flux de valeur](/frameworks/value-stream-mapping), [faut-il un agent ?](/frameworks/faut-il-un-agent), [décomposition des tâches](/frameworks/decomposition-taches), [réinvention à base zéro](/frameworks/reinvention-zero-base)
- Templates : [diagnostic de flux par les traces](/templates/diagnostic-flux-traces), [fiche cas d'usage](/templates/canevas-cas-usage)
- Références : Michael Hammer, « Reengineering Work: Don't Automate, Obliterate » (Harvard Business Review, 1990) ; Bain, le zero-based redesign.
