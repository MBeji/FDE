---
id: capitaliser
titre: "Capitaliser : transformer le terrain en savoir collectif"
resume: "Capturer au fil de la mission ce qui servira aux suivantes, le mettre au bon format (REX, pattern, anti-pattern, amélioration de template), l'anonymiser et le publier par pull request relue par les pairs."
phases: [perenniser]
duree: "9 min"
niveau: fondamental
tags: [capitalisation, rex, pull-request, communaute]
frameworks: [usine-agents]
templates: [rex-mission, plan-transfert, plan-de-mission, adr, registre-raid]
---

## Le résultat visé

Qu'un FDE qui n'était pas sur la mission puisse, en dix minutes de lecture, éviter une erreur que l'équipe a payée ou réutiliser une pratique qui a marché. Concrètement, chaque mission laisse au portail au moins un REX, un ou deux patterns ou anti-patterns, et des templates améliorés. Capitaliser, c'est ouvrir une pull request dans le dossier `content/` : ce qui reste dans un support de fin de mission ou dans la mémoire de l'équipe est perdu à la prochaine affectation.

## Capturer au fil de l'eau

Le REX écrit en fin de mission raconte une réussite linéaire : la mémoire a effacé les détours, l'équipe est déjà ailleurs. La matière se prend quand elle est fraîche.

| Moment | Ce qu'on note | Où |
| --- | --- | --- |
| Chaque vendredi, 15 minutes | Trois lignes : ce qui nous a surpris, ce qu'on referait, ce qu'on éviterait | Journal de mission |
| À chaque jalon (G0 à G7) | Une décision structurante et sa raison ; un template qu'il a fallu tordre | [ADR](/templates/adr), note sur le template |
| À chaque incident | Cause, détection, correction, cas de test ajouté | [Registre RAID](/templates/registre-raid) |
| À chaque « on aurait dû » | Un candidat anti-pattern, daté | Journal de mission |
| En fin de mission | Le REX, assemblé à partir du journal | [REX de mission](/templates/rex-mission) |

Test : le REX pourrait-il être écrit à partir du journal par quelqu'un qui n'était pas là ? Sinon, le journal est trop mince.

Trois entrées du journal de la mission Voxalis, et ce qu'elles deviennent.

| Entrée du journal | Contribution proposée |
| --- | --- |
| Diagnostic : « 35 % de la base de connaissances est obsolète. La revue documentaire aurait dû commencer ici, pas à la conception. » | Une ligne de contrôle dans le template [revue des données et du SI](/templates/revue-donnees-si) |
| Prototype : « Un seul agent avec neuf outils : la justesse du diagnostic passe de 91 % à 84 %. Séparer diagnostic et résolution. » | Un exemple chiffré pour [Faut-il un agent ?](/frameworks/faut-il-un-agent) |
| Pilote, S24 : « Messages client en double. L'outil d'écriture n'était pas idempotent. » | Un champ « idempotence » dans la [spécification d'outil](/templates/specification-outil) |

## Choisir le format

| Format | Répond à la question | Critère d'acceptation |
| --- | --- | --- |
| REX (400 à 800 mots) | Que s'est-il passé, et que ferions-nous autrement ? | La section « ce que nous ferions autrement » contient quelque chose d'inconfortable |
| Pattern (300 à 500 mots) | Quelle pratique reproduire, et dans quel contexte ? | Observé dans au moins deux contextes ; limites écrites |
| Anti-pattern (300 à 500 mots) | Quel piège reconnaître avant d'y tomber ? | Symptômes observables de l'extérieur ; une sortie praticable |
| Amélioration de template | Qu'a-t-il fallu ajouter ou tordre pour que le template serve ? | Modification minimale ; l'exemple rempli reste cohérent avec le [cas fil rouge](/guides/cas-fil-rouge) |

Deux règles. Une observation faite une fois vit dans un REX ; elle devient pattern quand elle est vue deux fois. Et avant de créer une page, chercher celle qui existe : compléter vaut mieux que doublonner. Les actifs techniques réutilisables — spécifications d'outils, grilles de modèle juge, harnais d'évaluation — relèvent de l'[usine à agents](/frameworks/usine-agents), pas d'une page de savoir.

Le filtre final : après lecture, un pair en mission fera-t-il quelque chose différemment lundi ?

## Anonymiser

Retirer le nom du client ne suffit pas : un secteur, une taille, une ville et une date identifient aussi sûrement.

| À retirer | À la place |
| --- | --- |
| Nom du client, des personnes, des produits internes | Secteur à gros grain, rôles (« la sponsor », « le RSSI ») |
| Chiffres exacts : clients, effectifs, revenus, volumes | Ratios et ordres de grandeur |
| Lieux et dates précises | « Un plateau régional », date au format AAAA-MM |
| Extraits de prompts, de tickets, de données, captures d'écran | Exemples réécrits |

Avant : « Sur le plateau de Nantes, le MTTR est passé de 31 h à 14,5 h en huit semaines. » Après : « Sur un plateau régional d'un opérateur télécom, le délai de résolution a été divisé par deux en huit semaines de pilote. »

Vérifier la clause de confidentialité du contrat et faire valider le texte par le lead de la mission avant d'ouvrir la pull request. Voxalis est un client fictif : c'est ce qui permet au portail de le détailler. Un REX réel suit le niveau d'anonymisation de [cet exemple](/savoir/rex-exemple-assurance-sinistres).

## Contribuer par pull request

1. Créer une branche dans le dépôt du portail.
2. Ajouter ou modifier le fichier dans `content/savoir/`, `content/templates/`, `content/frameworks/` ou `content/guides/`. Le nom du fichier est son `id` ; le front matter et les sections suivent `content/README.md`.
3. Lancer `npm run content` : la validation contrôle les champs obligatoires, les valeurs autorisées et les liens internes.
4. Ouvrir la pull request avec la description ci-dessous et demander deux relecteurs.
5. Intégrer les retours. Une fois fusionnée, la page est publiée au prochain déploiement.

```markdown
## Ce que cette contribution apporte
## D'où elle vient
Secteur anonymisé, phase, nombre de contextes où elle a été observée.
## Ce que le lecteur fera différemment
## Vérifications
- [ ] Anonymisation validée par le lead de la mission
- [ ] `npm run content` passe
- [ ] Pas de doublon avec une page existante
```

## Faire relire par les pairs

Deux relecteurs : un qui connaît le sujet et vérifie l'exactitude, un qui ne le connaît pas et vérifie que la page se comprend seule. Leur grille :

- **Exact** : faits vérifiables, aucun chiffre inventé, framework attribué à son auteur.
- **Utile** : le lecteur sait quoi faire, dans quel ordre, et quand ne pas le faire.
- **Anonyme** : aucune ré-identification possible par recoupement.
- **Sans doublon**, et dans la ligne éditoriale.

Le relecteur propose des reformulations, pas un simple accord. Une pull request sans relecture au bout d'une semaine est traitée au rituel suivant.

## Tenir les rituels du pool

| Rituel | Rythme | Contenu |
| --- | --- | --- |
| Revue de savoir | Toutes les deux semaines, 45 minutes | Une mission présente une chose apprise en dix minutes ; le groupe décide du format, d'un auteur et d'une date |
| Clinique de mission | À la demande | Un lead expose une difficulté, les pairs la contestent (voir [Redresser une mission](/guides/redresser-mission)) |
| REX de fin de mission | Dans les trois semaines après la fin | Une heure avec l'équipe et un pair extérieur ; le REX est publié dans la foulée |
| Revue du portail | Chaque trimestre | Pages périmées retirées, doublons fusionnés, manques repérés |

Inscrire le temps de capitalisation au [plan de mission](/templates/plan-de-mission) dès le cadrage : sans budget, il passe après tout le reste. Côté client, la même matière nourrit le [plan de transfert](/templates/plan-transfert) : les ADR et le journal sont aussi sa mémoire.

## Erreurs fréquentes

- **Tout écrire à la fin.** On obtient un récit de réussite, sans les détours qui instruisent.
- **Capitaliser dans des présentations.** Introuvables, non relues, jamais mises à jour.
- **Ériger un cas unique en pattern.** Une pratique vue une fois est une anecdote.
- **Anonymiser en retirant seulement le nom.** Le recoupement fait le reste.
- **Attendre la page parfaite.** Un anti-pattern de 300 mots fusionné vaut mieux qu'un long brouillon jamais publié.
- **Laisser le lead écrire seul.** Ceux qui ont vécu l'incident l'écrivent mieux.

## Checklist

- [ ] Le journal de mission est tenu chaque semaine depuis le cadrage.
- [ ] Chaque jalon et chaque incident ont laissé une trace exploitable.
- [ ] Le format choisi correspond à la matière : REX, pattern, anti-pattern ou amélioration de template.
- [ ] Un pattern s'appuie sur au moins deux contextes.
- [ ] Le texte est anonymisé contre le recoupement et validé par le lead de la mission.
- [ ] `npm run content` passe sans erreur.
- [ ] La pull request a deux relecteurs, dont un extérieur au sujet.
- [ ] Le REX de fin de mission est publié dans les trois semaines.
- [ ] Le temps de capitalisation figure au plan de mission.
