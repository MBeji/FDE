---
name: arbitrer-choix-technologiques
description: "Tranche un choix technologique structurant (modèle, plateforme, stockage, hébergement, protocole, construire ou acheter) par des critères fixés à l'avance, des options réelles comparées, un essai borné si nécessaire, et le consigne dans un relevé de décision d'architecture. À utiliser chaque fois qu'un choix engage le système au-delà d'un sprint."
metadata:
  titre: "Arbitrer un choix technologique"
  version: "1.0.0"
  statut: publie
  etape: conception
  sous-processus: choix-technologiques
  role: build
  domaine: architecture
  phases: [concevoir]
  technologies: [llm-agents, cloud]
  cas-usage: [tout-projet]
  tags: [adr, choix-technologique, decision, architecture, reversibilite, choisir, comparer, technologie, modele, stockage, plateforme]
  proprietaire: build
  diffusion: interne
  entrees: ["Question à trancher et son contexte", "Exigences chiffrées et contraintes du client", "Options envisageables"]
  sorties: ["Relevé de décision d'architecture (ADR)", "Signal de révision de la décision"]
  prerequis: [concevoir-architecture-fonctionnelle]
---

## Mission

Prendre un choix technologique de façon que quelqu'un d'autre puisse, dans un an, comprendre pourquoi il a été fait et quand le revoir. Le skill aide le FDE Build à comparer des options sur des critères posés avant, et à écrire la décision. Un choix non écrit se rediscute à chaque arrivée dans l'équipe.

## Quand l'utiliser

- Un choix engage durablement : modèle ou famille de modèles, plateforme d'agents, stockage et recherche, hébergement, protocole d'intégration, construire ou acheter.
- Deux membres de l'équipe, ou l'équipe et le client, divergent sur une option.
- Un signal de révision d'une décision passée se déclenche.

Ne pas l'utiliser pour un choix réversible en une journée : le faire, et passer. Ne pas l'utiliser pour justifier après coup un choix déjà fait.

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| La question, formulée en une phrase | Oui | La reformuler avec le demandeur avant tout. |
| Les exigences chiffrées : volumes, latence, coût par cas, sécurité | Oui | Les reprendre du dossier d'architecture ; sinon les faire fixer. |
| Les contraintes du client : standards, contrats, compétences, politique d'achat | Oui | Interroger son architecte : une option interdite ne se compare pas. |
| Des cas réels pour un essai | Non | Limiter la comparaison au documentaire et le dire. |

## Procédure

1. **Formuler la décision à prendre** et ce qu'elle engage : ce qui deviendra difficile à défaire, pour qui, pendant combien de temps.
2. **Fixer les critères avant de regarder les options**, avec leur poids : adéquation au besoin, qualité mesurée sur nos cas, coût complet, sécurité et conformité, exploitabilité par l'équipe du client, réversibilité, maturité. Cinq à sept critères, pas davantage.
3. **Lister deux à quatre options réelles**, dont « ne rien ajouter » ou « utiliser ce que le client a déjà ». Écarter d'emblée, par écrit, celles qu'une contrainte interdit.
4. **Documenter chaque option** sur chaque critère, à partir de faits vérifiables : documentation, mesure, retour d'expérience. Signaler ce qui est déclaré par un fournisseur et non vérifié.
5. **Essayer quand le doute pèse.** Un essai borné, de quelques jours, sur les mêmes cas réels pour toutes les options, avec les critères de succès écrits avant. Pour un modèle : le golden set, la qualité, la latence et le coût par cas.
6. **Évaluer la réversibilité.** Ce que coûterait un changement dans un an, et ce qu'il faut isoler dès maintenant pour le rendre possible : une couche d'abstraction, un format ouvert, des évaluations rejouables.
7. **Décider.** Noter les options, mais faire primer le raisonnement sur le total : dire quel critère a emporté la décision et ce que l'on sacrifie.
8. **Écrire les conséquences et le signal de révision** : l'événement qui devra rouvrir la décision (hausse de coût, évolution d'un besoin, fin de support).
9. **Faire relire** par l'architecte du client, puis verser la décision au dépôt.

## Livrable

Un [Relevé de décision d'architecture (ADR)](/templates/adr) : contexte, critères de décision, options envisagées, décision, conséquences, signal de révision, mise en œuvre. Une page ou deux, versionnées dans le dépôt.

## Critères de qualité

- Les critères et leur poids sont datés d'avant la comparaison.
- Au moins deux options réelles sont comparées, dont l'option la plus simple.
- Chaque appréciation s'appuie sur un fait, avec sa source.
- Le coût complet inclut l'exploitation et la sortie.
- Le signal de révision est observable.
- La décision respecte [ARC-01](/standards#ARC-01) ; un choix de modèle respecte [MLO-02](/standards#MLO-02).

## Garde-fous

- La décision est prise par le FDE Build avec l'architecte du client ; quand elle engage un contrat ou un budget, elle remonte au sponsor.
- Aucune préférence personnelle ni habitude ne tient lieu de critère.
- Ne rapporter aucun chiffre de performance non mesuré sur nos cas sans le marquer comme déclaratif.
- Ne pas engager le client auprès d'un fournisseur ; ne transmettre à un fournisseur aucune donnée du client pour un essai sans autorisation écrite.

## Enchaînements

- **Amont** : [Concevoir l'architecture fonctionnelle](/skills/concevoir-architecture-fonctionnelle).
- **Aval** : [Concevoir l'architecture technique](/skills/concevoir-architecture-technique), qui référence les décisions.
- **Workflow** : [De la cible à la conception approuvée](/skills/workflows/concevoir-la-solution).
- **Ressources** : [Faut-il un agent ? L'échelle des solutions](/frameworks/faut-il-un-agent), [Business case et coût complet d'un système agentique](/frameworks/business-case-tco), [FinOps de l'IA](/frameworks/finops-ia), [Protocoles d'interopérabilité : MCP et A2A](/frameworks/protocoles-mcp-a2a), [La techno d'abord](/savoir/techno-d-abord).
