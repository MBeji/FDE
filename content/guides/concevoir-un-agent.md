---
id: concevoir-un-agent
titre: "Concevoir un agent de A à Z"
resume: "De la mission à la fiche agent en huit étapes, dans l'ordre qui évite de tout réécrire : périmètre, outils, autonomie, garde-fous, critères d'évaluation, et seulement ensuite le prompt."
phases: [concevoir]
duree: "9 min"
niveau: fondamental
tags: [agent, conception, outils, autonomie]
frameworks: [faut-il-un-agent, anatomie-agent, conception-outils, niveaux-autonomie, garde-fous, evaluation-agents]
templates: [fiche-agent, specification-outil, analyse-risques-agent, plan-evaluation, system-prompt-agent, adr]
---

## Le résultat visé

Une [fiche agent](/templates/fiche-agent) validée par le propriétaire métier, la sécurité et l'exploitation, et un jeu d'évaluation exécutable, avant la première ligne de prompt. L'ordre des étapes n'est pas une convention : chacune contraint la suivante. Les outils bornent ce que l'agent peut faire, l'autonomie ce qu'il peut faire seul, les garde-fous ce qui peut mal tourner, les critères ce qui sera jugé. Le prompt ne fait que mettre ces décisions en mots.

Remplir la fiche prend 3 à 4 heures ; les décisions qu'elle consigne demandent plusieurs jours avec le métier, la sécurité et les propriétaires des systèmes. L'outil [Agent Designer](/outils/agent-designer) en produit la trame, sans dispenser d'aucune de ces décisions. L'exemple suivi ici est l'Agent Diagnostic du [cas Voxalis](/guides/cas-fil-rouge).

## La démarche en huit étapes

### 1. Vérifier qu'il faut un agent

Passer le cas d'usage aux six questions de [l'échelle des solutions](/frameworks/faut-il-un-agent), ou à l'outil [Agent ou pas ?](/outils/agent-ou-pas). Exiger le résultat du barreau inférieur sur des cas réels avant de monter. Chez Voxalis, la qualification des tickets reste un appel de modèle unique ; le diagnostic justifie un agent parce que l'ordre des vérifications dépend de ce que révèlent la supervision et le test de ligne. Consigner la décision dans un [ADR](/templates/adr).

### 2. Écrire la mission en une phrase

Verbe d'action, résultat produit, bénéficiaire. La phrase nomme un résultat, pas une activité.

| | Formulation |
| --- | --- |
| À refaire | « Aider les conseillers à diagnostiquer les incidents. » |
| Retenue | « Établir le diagnostic technique d'un incident PME, preuves à l'appui, pour que le cas soit résolu sans aller-retour entre niveaux de support. » |

Deux tests. Si la phrase relie deux résultats par « et », l'agent est trop large. Si l'on ne peut pas y accrocher trois ou quatre critères mesurables, elle est trop vague. Ceux de l'Agent Diagnostic : justesse d'au moins 90 % sur le golden set, diagnostic rendu en 3 minutes au 95e centile, 0,20 € au plus par diagnostic, 85 % de diagnostics acceptés sans correction par le conseiller.

### 3. Lister ce qu'il ne fait pas

Trois catégories : tâches exclues, décisions réservées à l'humain, populations ou cas exclus. L'Agent Diagnostic ne remédie pas, ne modifie aucune configuration, ne contacte pas le client, et ne traite ni les liaisons des grands comptes ni les incidents de sécurité.

> [!IMPORTANT]
> Chaque exclusion doit être tenue par autre chose qu'une consigne : un outil absent, un filtre, un droit refusé. Une exclusion qui ne repose que sur le prompt est un souhait.

### 4. Concevoir les outils avant le prompt

Les capacités réelles d'un agent sont ses outils. Les concevoir d'abord (voir [conception des outils](/frameworks/conception-outils) et le pattern [outils avant prompts](/savoir/outils-avant-prompts)), avec une [spécification](/templates/specification-outil) par outil.

- **Peu d'outils, sans recouvrement.** Si deux outils répondent à la même question, l'agent hésite. Voxalis l'a mesuré : avec neuf outils et les règles de remédiation dans un seul agent, la justesse du diagnostic tombait de 91 % à 84 %. L'Agent Diagnostic n'en garde que cinq, tous en lecture.
- **Conçus pour le modèle, pas calqués sur l'API.** Un outil renvoie ce qu'il faut pour décider, pas la charge utile brute du système source.
- **Des erreurs qui disent quoi faire.** « Supervision indisponible, réessayer une fois puis conclure à confiance faible » vaut mieux qu'un code d'erreur.
- **Le risque jugé sur l'effet, pas sur le verbe.** `ligne.lancer_test` lit, mais peut provoquer une micro-coupure : risque moyen.

```text
ligne.lancer_test(identifiant_ligne)
Mesure la synchronisation et le débit d'une ligne. Provoque une micro-coupure
du service : à réserver aux cas où le résultat départage deux hypothèses.
Renvoie : état de synchronisation, débits mesurés, horodatage.
Erreur « ligne_introuvable » : vérifier l'identifiant avec inventaire.lire_parc.
```

Test rapide : un collègue extérieur à la mission sait-il utiliser l'outil avec sa seule description ?

### 5. Fixer l'autonomie par outil

Un niveau global (« l'agent est L3 ») ne suffit pas. Croiser outils et situations, selon les [niveaux d'autonomie](/frameworks/niveaux-autonomie).

| Outil | Situation | Règle |
| --- | --- | --- |
| Supervision, inventaire, incidents connus, base de connaissances | Toutes | Sans approbation |
| `ligne.lancer_test` | Hors heures ouvrées du client | Sans approbation |
| `ligne.lancer_test` | Heures ouvrées du client | Approbation du superviseur de cas |

Écrire dans le même mouvement la condition d'élargissement : passage à L4 sur un motif après 500 diagnostics consécutifs à 95 % de justesse au moins, validé en comité de gouvernance IA.

### 6. Définir les garde-fous

Partir de l'[analyse de risques](/templates/analyse-risques-agent) : à chaque risque, un [garde-fou](/frameworks/garde-fous) placé de préférence hors du modèle. Ordre de préférence : droit d'accès, contrôle par code, limite de budget, et en dernier la consigne.

| Risque | Garde-fou |
| --- | --- |
| Instruction malveillante dans le ticket | Texte du client transmis comme donnée, jeu adverse de 120 cas |
| Diagnostic sans preuve | Chaque cause cite un résultat d'outil, vérifié par code |
| Accès hors périmètre | Les outils filtrent sur l'identifiant client du ticket |
| Boucle d'appels | 12 appels d'outils, 0,50 € et 5 minutes au plus par cas |

Ajouter les conditions d'escalade, formulées pour être testées : confiance faible, plus de 8 appels sans conclusion, outil indisponible plus de 60 secondes, suspicion d'incident de sécurité.

### 7. Écrire les critères d'évaluation

Une ligne par dimension : jeu de test, méthode de notation, seuil. Pour l'Agent Diagnostic : justesse de la cause sur 600 cas, notée par code ; qualité des preuves sur 150 cas, par un modèle juge calibré sur 50 cas notés par les experts ; robustesse sur les 120 cas adverses, à 100 % ; calibration, pour que la confiance « élevée » soit juste dans au moins 97 % des cas. Un critère dont on ne sait pas écrire le test n'est pas un critère. La méthode complète est dans [Construire les évaluations](/guides/construire-les-evals).

### 8. Écrire le prompt, enfin

À ce stade, le [system prompt](/templates/system-prompt-agent) est en grande partie une transcription : mission, situation, usage des outils, format de sortie, cas d'escalade. Voir [Écrire le system prompt](/guides/ecrire-system-prompt). Lancer ensuite le golden set, lire les échecs et corriger au bon endroit.

| Symptôme | Corriger d'abord |
| --- | --- |
| Mauvais outil appelé, appels inutiles | La description et le découpage des outils |
| Action ou accès hors périmètre | Les droits et les filtres |
| Sortie mal formée | Le schéma de sortie et sa validation |
| Raisonnement faux sur un motif | Le prompt ou les connaissances fournies |

## Erreurs fréquentes

- **Commencer par le prompt.** On obtient une démonstration, puis on découvre les outils, les droits et les critères en réécrivant tout.
- **Calquer les outils sur les API existantes.** L'agent hérite de la complexité du SI au lieu d'une interface pensée pour lui.
- **Rédiger la fiche sans le métier.** La mission et les limites se valident avec le propriétaire métier, pas après coup.
- **Oublier l'arrêt.** Qui désactive l'agent, comment, et quel est le mode dégradé : à écrire avant le pilote, pas pendant l'incident.
- **Multiplier les agents par anticipation.** Découper sur une mesure, comme Voxalis, pas sur une intuition ([multi-agents prématuré](/savoir/multi-agents-premature)).

## Checklist

- [ ] Le barreau retenu est justifié et consigné dans un ADR.
- [ ] La mission tient en une phrase, nomme un résultat et porte des critères mesurables.
- [ ] La liste « ne fait pas » existe, et chaque exclusion est tenue hors du prompt.
- [ ] Chaque outil a une description testée, un niveau de risque et un propriétaire.
- [ ] L'autonomie est fixée par outil et par situation, avec sa condition d'élargissement.
- [ ] Chaque risque a un garde-fou, les limites dures sont chiffrées, les escalades sont testables.
- [ ] Chaque critère a son jeu de test, sa méthode de notation et son seuil.
- [ ] Le prompt a été écrit en dernier et évalué sur le golden set.
- [ ] Le propriétaire métier, la sécurité et l'exploitation ont validé la fiche.
