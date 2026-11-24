---
name: specifier-agent
description: "Rédige la fiche d'un agent IA : mission, périmètre, outils, niveau d'autonomie par outil, garde-fous, conditions d'escalade et critères de succès. À utiliser quand un cas d'usage est confirmé comme relevant d'un agent et avant d'écrire le premier prompt ; une fiche par agent, y compris dans un système multi-agents."
metadata:
  titre: "Spécifier un agent"
  version: "1.0.0"
  statut: publie
  etape: conception
  sous-processus: specifications
  role: build
  domaine: ia-agents
  phases: [concevoir]
  technologies: [llm-agents, mcp-outils]
  cas-usage: [agent, multi-agents]
  tags: [fiche-agent, autonomie, outils, escalade, conception-detaillee, concevoir-agent, design-agent]
  proprietaire: build
  diffusion: interne
  entrees: ["Spécifications du segment de processus confié à l'agent", "Architecture technique et inventaire des systèmes accessibles", "Matrice humain-agent validée par le métier"]
  sorties: ["Fiche agent approuvée", "Liste des outils à spécifier", "Modes de défaillance à couvrir par l'évaluation"]
  prerequis: [rediger-specifications, concevoir-architecture-technique]
---

## Mission

Décrire un agent comme on décrirait un poste : ce qu'il doit accomplir, avec quels moyens, dans quelles limites, et comment on juge son travail. La fiche agent est le contrat entre le métier, qui valide la mission et les limites, l'ingénierie, qui construit, la sécurité, qui valide les droits, et l'exploitation, qui opérera. Elle s'écrit avant le system prompt, jamais après.

## Quand l'utiliser

- Un cas d'usage est placé au barreau 4 ou 5 de l'échelle des solutions (agent ou système multi-agents) et le processus cible est validé.
- Un agent existant change de périmètre, reçoit un nouvel outil ou voit son autonomie relevée : la fiche se met à jour avant le code.

Ne pas l'utiliser si une règle, un appel de modèle unique ou un workflow suffit : repasser par [Faut-il un agent ?](/frameworks/faut-il-un-agent). Pour les interactions entre plusieurs agents, la fiche ne suffit pas : elle complète le dossier produit par [Concevoir l'architecture technique](/skills/concevoir-architecture-technique).

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| Le segment de processus confié à l'agent, avec ses règles métier | Oui | S'arrêter : renvoyer vers [Rédiger les spécifications](/skills/rediger-specifications). |
| Le propriétaire métier de l'agent, nommé | Oui | Le demander au FDE Design ; pas de fiche sans propriétaire. |
| Les systèmes et données accessibles, avec leurs droits | Oui | Lister les accès supposés et les marquer `[À CONFIRMER]`. |
| La matrice humain-agent du processus cible | Non | Proposer un niveau d'autonomie prudent (L2) et le faire arbitrer. |
| Des cas réels, y compris des cas difficiles | Non | Les demander au métier : ils nourriront les modes de défaillance. |

## Procédure

1. **Écrire la mission en une phrase** : verbe d'action, résultat produit, bénéficiaire. Si elle ne tient pas en une phrase, l'agent est trop large : le découper.
2. **Fixer les critères de succès** avec le propriétaire métier : deux à quatre mesures reliées à un indicateur du processus, chacune avec son seuil.
3. **Borner le périmètre.** Lister ce que l'agent traite, puis, plus important, ce qu'il ne fait pas. Cette liste évite la majorité des incidents.
4. **Inventorier les outils.** Pour chacun : ce qu'il lit ou écrit, le système visé, le niveau de risque (lecture, écriture réversible, écriture irréversible), le propriétaire. N'exposer aucun outil dont la mission n'a pas besoin.
5. **Fixer l'autonomie outil par outil**, de L1 à L4, jamais globalement. Tout outil qui écrit porte une règle d'approbation explicite. Démarrer bas : l'autonomie se relève sur preuves.
6. **Écrire les conditions d'escalade** vers un humain sous forme testable : seuil de confiance, montant, type de cas, nombre d'étapes dépassé. Préciser à qui, par quel canal, avec quel contexte transmis.
7. **Décrire le contexte et la mémoire** : ce que l'agent reçoit à chaque cas, ce qu'il retrouve, ce qu'il n'a pas le droit de conserver.
8. **Borner l'exécution** : nombre maximal d'étapes, d'appels d'outils, durée et coût par cas, et ce qui se passe au dépassement.
9. **Lister les modes de défaillance** : pour chacun, comment on le détecte et ce qui se passe. Chaque mode devient un cas du golden set.
10. **Faire relire** la mission et les limites par le propriétaire métier, les droits par la sécurité, l'exploitabilité par l'équipe qui opérera.

## Livrable

La [Fiche agent](/templates/fiche-agent) du portail, complète : mission et critères de succès, périmètre et exclusions, outils et niveaux de risque, autonomie par outil, escalade, contexte et mémoire, bornes d'exécution, modes de défaillance, propriétaires. L'atelier [Agent Designer](/outils/agent-designer) en génère l'ossature. En annexe : la liste des outils à détailler avec la [Spécification d'outil](/templates/specification-outil).

## Critères de qualité

- La mission tient en une phrase et nomme un résultat, pas une activité.
- Chaque critère de succès est mesurable et relié à un indicateur métier.
- Chaque outil a un propriétaire, un niveau de risque et une règle d'approbation.
- L'autonomie est fixée par outil ; aucun outil d'écriture irréversible au-dessus de L2 sans décision écrite.
- Les conditions d'escalade sont testables, pas formulées en « si nécessaire ».
- Chaque mode de défaillance a une détection et une parade.
- La fiche respecte les standards [AGT-01](/standards#AGT-01), [AGT-03](/standards#AGT-03), [AGT-04](/standards#AGT-04) et [AGT-07](/standards#AGT-07).

## Garde-fous

- La fiche est approuvée par le propriétaire métier et par le FDE Build avant toute construction : sans approbation, pas de prompt, pas de code.
- Ne jamais donner à l'agent les droits de son concepteur : une identité propre, des permissions minimales.
- Ne pas proposer un niveau d'autonomie que l'évaluation ne pourra pas prouver ; en cas de doute, descendre d'un niveau.
- Tout traitement de données personnelles ou toute décision à effet sur une personne est signalé au FDE Design, qui saisit le DPO du client.
- Ne pas inventer de règle métier : ce qui n'est pas dans les spécifications est une question au métier.

## Enchaînements

- **Amont** : [Rédiger les spécifications](/skills/rediger-specifications), [Concevoir l'architecture technique](/skills/concevoir-architecture-technique).
- **Aval** : [Analyser les risques et poser les garde-fous](/skills/analyser-risques-garde-fous), [Écrire le system prompt d'un agent](/skills/ecrire-system-prompt), [Définir la stratégie de tests](/skills/definir-strategie-tests).
- **Workflow** : [Concevoir la solution](/skills/workflows/concevoir-la-solution).
- **Ressources** : [Concevoir un agent de A à Z](/guides/concevoir-un-agent), [Anatomie d'un agent](/frameworks/anatomie-agent), [Niveaux d'autonomie des agents](/frameworks/niveaux-autonomie), [Concevoir les outils d'un agent](/frameworks/conception-outils), [RACI Design · Build](/raci).
