---
id: raci-augmente
titre: "RACI augmenté"
resume: "Étendre la matrice RACI aux agents : un agent peut réaliser une activité, jamais en répondre. Chaque activité garde un responsable humain nommé."
categorie: processus
phases: [reinventer]
origine: "Maison"
niveau: fondamental
tags: [responsabilite, roles, gouvernance]
templates: [matrice-humain-agent, modele-operationnel-cible]
lies: [modele-operationnel-cible, collaboration-humain-agent, niveaux-autonomie, gouvernance-ia]
---

## En bref

La matrice RACI attribue à chaque activité un ou plusieurs **R** (réalise), un seul **A** (répond du résultat), des **C** (consultés) et des **I** (informés). Le RACI augmenté ajoute les agents en colonnes, avec une règle non négociable : **un agent peut être R, jamais A**. La responsabilité reste humaine, nommée et unique.

Pour un FDE, c'est le moyen le plus rapide de rendre visibles les trous de responsabilité. Quand un agent envoie un message erroné à un client, la question « qui en répond ? » doit avoir une réponse avant la mise en production, pas pendant la crise.

## Quand l'utiliser

- En [Réinventer](/methode/reinventer), une fois le processus cible dessiné et les niveaux d'autonomie esquissés.
- Avant tout élargissement d'autonomie, pour vérifier que le A est d'accord et outillé.
- En revue d'incident, pour vérifier que la matrice a été respectée.

Ne pas l'utiliser pour décrire le comportement détaillé d'un agent : c'est le rôle de la fiche agent.

## Comment l'appliquer

1. **Lister les activités du processus cible**, à la maille d'une décision ou d'une action, pas d'une étape entière. Séparer les activités de construction (modifier un prompt, ajouter un outil) des activités d'exploitation.
2. **Placer humains et agents en colonnes.** Les humains par rôle, et un nom pour chaque rôle.
3. **Attribuer les R.** Un agent R travaille au niveau d'autonomie indiqué dans la case (par exemple R L3). Une activité en L2 a deux R : l'agent prépare, l'humain approuve et déclenche.
4. **Attribuer un seul A, toujours humain.** Question : « Si le résultat est faux, qui l'explique au client, au comité, au régulateur ? » Cette personne est A.
5. **Vérifier les quatre règles de construction.**
   - Un A et un seul par ligne, humain et nommé.
   - Tout agent R a un humain qui le supervise, en temps réel ou par échantillonnage.
   - Le A dispose des moyens d'exercer sa responsabilité : traces, tableau de bord, droit d'arrêt.
   - Les activités de modification d'un agent ont leur propre A, distinct de celui de l'exploitation si nécessaire.
6. **Faire signer la matrice** par les A, puis l'inscrire dans le registre des agents.

## Exemple

RACI augmenté du flux d'incidents Voxalis (extrait). Q : Agent Qualification ; D : Agent Diagnostic ; Rs : Agent Résolution ; Cm : Agent Communication ; SC : superviseur de cas ; N2 : expert N2 ; PA : propriétaire d'agent ; AO : AgentOps ; SL : Sophie Lambert.

| Activité | Q | D | Rs | Cm | SC | N2 | PA | AO | SL |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Qualifier et router un ticket | R L4 | | | | A | | C | I | |
| Diagnostiquer un incident | | R L3 | | | A | C | | | |
| Exécuter une action du catalogue à risque faible | | | R L3 | | A | | I | I | |
| Exécuter une action hors catalogue | | | R L2 | | R, A | C | | | |
| Envoyer un message de statut | | | | R L3 | A | | | | |
| Proposer un geste commercial | | | | R L2 | R | | | | A |
| Mener un cas en voie experte | | R | R | | I | R, A | | | |
| Modifier le prompt ou le catalogue d'un agent | | | | | C | C | A | R | I |
| Arrêter un agent en cas d'anomalie | | | | | R | | A | R | I |

Deux décisions ont découlé de cette matrice. Le geste commercial reste sous la responsabilité de Sophie Lambert, d'où le niveau L2 de l'Agent Communication sur ce point. Et le superviseur de cas reçoit un droit d'arrêt immédiat, sans attendre AgentOps : le A doit pouvoir agir.

## Pièges à éviter

- **Mettre un agent en A**, ou écrire « le système » en A. Parade : refuser la matrice tant qu'une ligne n'a pas de A humain nommé.
- **Un A sans moyens.** Le superviseur répond de cas qu'il ne voit pas. Parade : vérifier traces, tableau de bord et droit d'arrêt pour chaque A.
- **Plusieurs A.** « Le métier et la DSI » répondent ensemble, donc personne. Parade : un seul A, les autres en C.
- **Oublier les activités de modification.** Parade : une ligne par type de changement sur un agent.
- **Matrice figée.** Parade : la mettre à jour à chaque élargissement d'autonomie.

## Pour aller plus loin

- Template : [matrice humain-agent](/templates/matrice-humain-agent)
- Frameworks : [modèle opérationnel AI-Native](/frameworks/modele-operationnel-cible), [collaboration humain-agent](/frameworks/collaboration-humain-agent), [niveaux d'autonomie](/frameworks/niveaux-autonomie)
- Template : [fiche agent](/templates/fiche-agent)
- Savoir terrain : [l'humain oublié](/savoir/humain-oublie), [autonomie progressive](/savoir/autonomie-progressive)
