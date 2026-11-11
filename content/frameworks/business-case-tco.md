---
id: business-case-tco
titre: "Business case et coût complet d'un système agentique"
resume: "Construire un business case honnête : bénéfices potentiels et captés, coût complet initial et récurrent d'un système agentique, scénarios et analyse de sensibilité."
categorie: valeur
phases: [cibler]
origine: "Maison"
niveau: fondamental
tags: [business-case, couts, roi]
templates: [business-case]
lies: [arbre-de-valeur, registre-de-valeur, finops-ia, agentops]
---

## En bref

Le business case d'un système agentique se trompe rarement sur les bénéfices potentiels ; il se trompe sur deux autres choses. D'abord la **part captée** : du temps libéré n'est un gain que s'il se traduit en coût évité ou en revenu. Ensuite le **coût récurrent** : inférence, plateforme, équipe d'exploitation, évaluations, maintenance. Un agent n'est pas un projet qu'on livre, c'est un actif qu'on opère.

Le business case est le contrat de valeur de la mission. Validé par la finance, il fixe les références, les cibles et les lignes du registre de valeur.

## Quand l'utiliser

- En phase [Cibler](/methode/cibler), pour arbitrer le portefeuille au jalon G2.
- En revue de fin de pilote, pour remplacer les hypothèses par les mesures.

Ne pas chiffrer chaque cas d'usage isolément quand ils partagent plateforme et équipe : le business case se construit au niveau du domaine.

## Comment l'appliquer

1. **Chiffrer le potentiel** à partir de l'[arbre de valeur](/frameworks/arbre-de-valeur) : référence, cible, volume. Question : « Quel est l'écart entre le coût unitaire actuel et le coût unitaire cible, multiplié par le volume ? »
2. **Appliquer un taux de capture.** Comment le gain devient-il des euros : non-remplacement des départs, baisse de la sous-traitance, réaffectation ? Le taux retenu est justifié et validé par la DRH et la finance.
3. **Chiffrer le coût initial** : équipe mixte, plateforme et intégration, conduite du changement et formation.
4. **Chiffrer le coût récurrent**, poste par poste.

| Poste récurrent | Contenu | Repère de calcul |
| --- | --- | --- |
| Inférence | Appels de modèles | Coût par cas mesuré en prototype × volume |
| Plateforme | Hébergement, passerelle d'outils, observabilité | Contrats et consommation |
| AgentOps | Supervision, évaluations continues, incidents | ETP dédiés |
| Maintenance évolutive | Nouveaux motifs, évolution des outils et des prompts | Part de l'équipe projet maintenue |
| Changement continu | Formation des arrivants, animation | Souvent oublié |

5. **Construire la trajectoire sur trois ans** : montée en charge réaliste, la première année est rarement pleine.
6. **Calculer** gain net, ROI et mois de retour sur investissement.
7. **Tester la sensibilité** : faire varier une à une les hypothèses clés et identifier celles qui font basculer la décision.

L'[outil business case](/outils/business-case) fait les calculs et produit les scénarios.

## Exemple

Business case Voxalis, validé par Julien Faure.

| Poste | Montant |
| --- | --- |
| Gain d'efficacité potentiel | (41 € − 26 €) × 420 000 tickets = 6,3 M€ par an |
| Gain capté (60 %) | 3,8 M€ par an |
| Rétention : churn de 11,5 % à 10,0 % sur 240 M€, marge de 45 % | 1,6 M€ par an |
| Valeur annuelle en croisière | 5,4 M€ |
| Investissement initial | 3,1 M€ : équipe mixte 1,9 M€, plateforme et intégration 0,7 M€, changement et formation 0,5 M€ |
| Coût récurrent | 1,2 M€ par an : inférence et plateforme 0,55 M€, AgentOps 3 ETP 0,35 M€, maintenance évolutive 0,3 M€ |
| Bénéfices sur 3 ans | 1,2 + 4,3 + 5,4 = 10,9 M€ |
| Coûts sur 3 ans | 3,5 + 1,2 + 1,2 = 5,9 M€ |
| Gain net et ROI à 3 ans | 5,0 M€, soit 85 % |
| Retour sur investissement | 21e mois |

Lecture de sensibilité sur la valeur annuelle en croisière :

| Hypothèse modifiée | Valeur en croisière |
| --- | --- |
| Taux de capture à 40 % au lieu de 60 % | 2,5 + 1,6 = 4,1 M€ |
| Aucun effet sur le churn | 3,8 M€ |
| Coût d'inférence doublé | Coût récurrent alourdi d'environ 0,16 M€ |

Le coût d'inférence mesuré en pilote (0,38 € par ticket, soit environ 0,16 M€ par an sur 420 000 tickets) pèse peu. Le business case dépend d'abord du taux de capture et de l'effet rétention : ce sont eux que le registre de valeur suit de près, et la rétention n'est mesurable qu'à 12 mois.

## Pièges à éviter

- **Confondre potentiel et capté.** Parade : une ligne de capture explicite, avec son mécanisme.
- **Oublier l'exploitation.** Parade : pas de business case sans ligne AgentOps ni ligne évaluations.
- **Première année pleine.** Parade : montée en charge alignée sur le calendrier de généralisation.
- **Un seul scénario.** Parade : scénarios prudent, central et haut, et la variable qui fait basculer.
- **Promettre des suppressions de postes non négociées.** Parade : mécanisme de capture validé avec la DRH avant le COPIL.

## Pour aller plus loin

- Outil : [business case](/outils/business-case)
- Template : [business case](/templates/business-case)
- Frameworks : [arbre de valeur](/frameworks/arbre-de-valeur), [FinOps de l'IA](/frameworks/finops-ia), [AgentOps](/frameworks/agentops)
- Guide : [chiffrer la valeur](/guides/chiffrer-la-valeur)
