---
name: analyser-risques-garde-fous
description: "Établit le modèle de menace d'un agent ou d'un système d'IA, qualifie son niveau de risque réglementaire, cote les risques et définit les garde-fous en couches, les tests adverses et les risques résiduels à faire accepter. À utiliser dès qu'un cas d'usage est retenu, puis à chaque nouvel outil ou nouvelle source de données."
metadata:
  titre: "Analyser les risques et poser les garde-fous"
  version: "1.0.0"
  statut: publie
  etape: conception
  sous-processus: specifications
  role: build
  domaine: securite
  phases: [cibler, concevoir]
  technologies: [llm-agents]
  cas-usage: [assistant, agent, multi-agents]
  tags: [risques, garde-fous, securite, conformite, modele-de-menace, tests-adverses, guardrails, injection, rgpd, ai-act]
  proprietaire: build
  diffusion: interne
  entrees: ["Fiche agent et dossier d'architecture", "Données traitées et actions à effet de l'agent", "Politique de sécurité et exigences de conformité du client"]
  sorties: ["Analyse de risques et garde-fous", "Plan de tests adverses", "Risques résiduels soumis à acceptation"]
  prerequis: [specifier-agent]
---

## Mission

Savoir, avant de construire, ce qui peut mal tourner et ce qui l'empêchera. Le skill produit pour le FDE Build l'analyse de risques : menaces, cotation, garde-fous, tests, et ce qui reste à accepter. Un agent lit des contenus qu'il ne maîtrise pas et agit dans des systèmes réels : ses risques ne sont pas ceux d'une application classique.

## Quand l'utiliser

- Un cas d'usage est retenu : première qualification, avant le jalon G2.
- La fiche agent est écrite : analyse complète, avant le jalon G4.
- Un outil, une source de données ou un niveau d'autonomie change.
- Un incident révèle un risque non prévu.

Ne pas l'utiliser comme une formalité de fin de projet : faite après la construction, elle ne change plus rien.

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| La fiche agent : mission, outils, autonomie, escalade | Oui | Repasser par la spécification de l'agent. |
| Les données traitées, leur sensibilité et leur origine | Oui | Les reprendre de la revue des données. |
| Les actions à effet : ce que l'agent peut écrire, envoyer, déclencher | Oui | Les lister avec le propriétaire de chaque système. |
| La politique de sécurité et les exigences sectorielles | Non | Les demander au RSSI et à la conformité. |

## Procédure

1. **Décrire le système à protéger** : ce qui entre (utilisateurs, documents, résultats d'outils), ce qui sort, ce que l'agent peut faire, avec quels droits.
2. **Parcourir les surfaces de menace.** Entrées : injection directe et indirecte par un contenu lu. Sorties : fuite de données, contenu faux ou inapproprié. Outils : action non voulue, abus de droits, effet en série. Données et mémoire : empoisonnement, accès indu. Chaîne d'approvisionnement : modèle, dépendances, outils tiers.
3. **Écrire les scénarios** en clair : qui, par quel moyen, avec quel effet. Ajouter les défaillances sans attaquant : erreur plausible mais fausse, boucle, dérive de coût.
4. **Qualifier le niveau réglementaire** du cas d'usage : pratique interdite, risque élevé, obligations de transparence, risque minimal ; présence de données personnelles ; décision à effet sur une personne. En déduire les obligations.
5. **Coter chaque risque** en gravité et en vraisemblance, sur l'échelle convenue avec le client. Coter avant garde-fous, puis après.
6. **Poser les garde-fous en couches** : filtrage des entrées, validation des sorties par schéma et bornes, permissions minimales et approbation des écritures, bornes d'exécution, isolement, supervision humaine. Aucun risque majeur ne repose sur une seule couche, ni sur la seule consigne donnée au modèle.
7. **Relier chaque garde-fou** à la mesure technique qui le réalise et au test qui le vérifie.
8. **Écrire le plan de tests adverses** : injections, exfiltration, abus d'outils, cas limites, intégrés au jeu d'évaluation.
9. **Présenter les risques résiduels** à ceux qui peuvent les accepter, avec leur justification et leur date de revue.

## Livrable

L'[Analyse de risques et garde-fous](/templates/analyse-risques-agent) : modèle de menace, échelles de cotation, registre des risques, qualification réglementaire, plan de tests adverses, risques résiduels acceptés, revue. Complétée par la [Checklist sécurité et conformité](/templates/checklist-securite-conformite).

## Critères de qualité

- Chaque surface de menace est examinée, y compris l'injection par un contenu lu.
- Chaque risque est coté avant et après garde-fous.
- Chaque risque majeur est couvert par au moins deux couches indépendantes.
- Chaque garde-fou renvoie à une mesure technique et à un test ([ARC-07](/standards#ARC-07)).
- Les tests adverses sont dans le jeu d'évaluation ([SEC-03](/standards#SEC-03)).
- Chaque risque résiduel a un acceptant nommé et une date de revue.
- L'analyse respecte [SEC-01](/standards#SEC-01), [AGT-05](/standards#AGT-05), [AGT-06](/standards#AGT-06) et [AGT-08](/standards#AGT-08).

## Garde-fous

- L'acceptation d'un risque résiduel appartient au client : propriétaire métier pour le risque métier, RSSI pour la sécurité. Le FDE ne l'accepte pas à leur place.
- La qualification réglementaire est proposée ; elle est arrêtée par le juridique et le DPO du client.
- Ne pas décrire dans un document largement diffusé le détail d'une faille non corrigée.
- Ne mener aucun test adverse sur un environnement de production sans autorisation écrite.

## Enchaînements

- **Amont** : [Spécifier un agent](/skills/specifier-agent).
- **Aval** : [Définir la stratégie de tests](/skills/definir-strategie-tests), [Mener les tests techniques](/skills/tester-technique), [Écrire le system prompt d'un agent](/skills/ecrire-system-prompt).
- **Workflow** : [De la cible à la conception approuvée](/skills/workflows/concevoir-la-solution).
- **Ressources** : [Sécurité des agents](/frameworks/securite-agents), [Garde-fous : la défense en profondeur](/frameworks/garde-fous), [EU AI Act : qualifier un cas d'usage](/frameworks/eu-ai-act), [NIST AI RMF et ISO/IEC 42001](/frameworks/nist-ai-rmf), [IA responsable : des principes aux exigences](/frameworks/ia-responsable), [Gouvernance de l'IA et des agents](/frameworks/gouvernance-ia).
