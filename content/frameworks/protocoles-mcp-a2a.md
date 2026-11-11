---
id: protocoles-mcp-a2a
titre: "Protocoles d'interopérabilité : MCP et A2A"
resume: "Le rôle respectif de MCP (connecter un agent à des outils et des données) et d'A2A (faire communiquer des agents), quand les adopter, et comment sécuriser une passerelle MCP d'entreprise."
categorie: agents
phases: [concevoir, industrialiser]
origine: "Standards ouverts"
niveau: avance
tags: [interoperabilite, mcp, securite, architecture]
templates: [specification-outil, dossier-architecture-multi-agents, analyse-risques-agent]
lies: [conception-outils, topologies-multi-agents, securite-agents, architecture-reference]
---

## En bref

Deux standards ouverts structurent l'interopérabilité des agents. **MCP (Model Context Protocol)**, initié par Anthropic, normalise la connexion d'un agent à des outils et à des données : un serveur MCP expose des outils, des ressources et des modèles de prompts ; l'application qui héberge l'agent s'y connecte comme client. **A2A (Agent2Agent)**, initié par Google, normalise la communication entre agents : un agent décrit publiquement ses capacités et reçoit des tâches d'autres agents, sans exposer ses outils ni son fonctionnement interne. Les deux sont aujourd'hui gouvernés par des fondations ouvertes.

En une phrase : **MCP relie un agent à ses outils, A2A relie des agents entre eux.** Pour un FDE, ces standards évitent des intégrations propriétaires que le client devra maintenir seul, mais ils déplacent la question de la sécurité vers la passerelle.

## Quand l'utiliser

| Situation | Choix |
| --- | --- |
| Plusieurs agents ou applications doivent accéder aux mêmes systèmes | MCP, derrière une passerelle d'entreprise |
| Un seul agent, un seul outil, sans perspective de réutilisation | Appel direct possible ; MCP reste un bon choix si la plateforme le prévoit |
| Agents d'un même système, conçus et opérés par la même équipe | Orchestration interne ; A2A n'apporte rien |
| Agents de domaines, d'équipes ou d'éditeurs différents qui doivent se confier des tâches | A2A |

Ne pas adopter A2A pour faire « multi-agents » : un protocole inter-agents ajoute de la latence et de la surface d'attaque à l'intérieur d'un système qui gagne à rester centralisé.

## Comment l'appliquer

### 1. Cartographier les accès

Construire la matrice agent × outil : quel agent appelle quel outil, en lecture ou en écriture. C'est la base de l'autorisation.

### 2. Mettre une passerelle MCP d'entreprise entre agents et SI

Les agents ne se connectent jamais directement aux serveurs MCP. La passerelle assure :

- **Authentification** : identité de l'agent, et de l'utilisateur ou du cas pour le compte duquel il agit.
- **Autorisation** : liste blanche d'outils par agent, filtrage des données par périmètre (client du cas), règles d'approbation sur les écritures.
- **Audit** : journal de chaque appel (agent, cas, paramètres, résultat, durée), relié aux traces de l'agent.
- **Maîtrise** : quotas, limites de débit, catalogue de serveurs approuvés, versions figées des descriptions d'outils.

### 3. Traiter les risques propres au protocole

| Risque | Parade |
| --- | --- |
| Description d'outil malveillante ou modifiée après approbation | Catalogue interne, descriptions versionnées et revues, toute modification soumise à validation |
| Injection indirecte via un résultat d'outil | Résultats traités comme données ; écritures soumises à des contrôles hors du modèle |
| Serveur tiers non vérifié (chaîne d'approvisionnement) | Seuls les serveurs du catalogue approuvé sont joignables |
| Sur-privilège : un serveur agit avec des droits plus larges que l'agent | Jetons à portée réduite, délivrés par la passerelle pour le cas en cours |
| Exfiltration par un outil d'écriture vers l'extérieur | Destinataires et contenus contrôlés, journalisés |

### 4. Pour A2A, contractualiser

Si des agents d'équipes différentes doivent coopérer : capacités déclarées, format des tâches et des résultats, authentification mutuelle, responsabilité de chaque partie en cas d'erreur.

## Exemple

Chez Voxalis, l'architecte SI et Marc Dubois (RSSI) ont conçu une passerelle MCP unique, qui expose neuf outils, dont trois en écriture.

| Agent | Outils autorisés |
| --- | --- |
| Orchestrateur de cas | `crm.lire_ticket`, `crm.mettre_a_jour_ticket` |
| Agent Qualification | `crm.lire_ticket`, `crm.mettre_a_jour_ticket` |
| Agent Diagnostic | `supervision.etat_service`, `ligne.lancer_test`, `inventaire.lire_parc`, `incidents.rechercher_connus`, `kb.rechercher` |
| Agent Résolution | `reseau.executer_action`, `supervision.etat_service`, `kb.rechercher` |
| Agent Communication | `crm.lire_ticket`, `client.envoyer_message` |
| Agent Qualité | `crm.lire_ticket`, `kb.rechercher` |

Chaque appel porte l'identifiant du cas ; la passerelle filtre les données sur le client du ticket et refuse tout appel hors périmètre. `reseau.executer_action` hors catalogue à risque faible déclenche une demande d'approbation. Le journal d'audit est conservé 13 mois, comme les traces des agents.

A2A n'a pas été retenu : les six agents forment un système opéré par une seule équipe, sous un orchestrateur. Le sujet sera rouvert si un agent d'un autre domaine, la facturation par exemple, doit recevoir des tâches de SAV Augmenté.

## Pièges à éviter

- **Brancher des serveurs MCP trouvés en ligne.** Parade : catalogue approuvé, revue de code et de description.
- **Une passerelle sans identité d'agent.** Tous les appels se ressemblent, l'audit est inutile. Parade : un compte de service par agent, l'identifiant du cas sur chaque appel.
- **Confondre protocole et sécurité.** MCP standardise la connexion, pas les droits. Parade : l'autorisation vit dans la passerelle.
- **A2A à l'intérieur d'un même système.** Parade : orchestration interne tant que les agents ont un seul propriétaire.

## Pour aller plus loin

- Frameworks : [concevoir les outils](/frameworks/conception-outils), [sécurité des agents](/frameworks/securite-agents), [architecture de référence](/frameworks/architecture-reference)
- Templates : [spécification d'outil](/templates/specification-outil), [analyse de risques](/templates/analyse-risques-agent)
- Références : spécifications publiques de MCP et d'A2A ; OWASP Top 10 pour les applications LLM (agentivité excessive, chaîne d'approvisionnement).
