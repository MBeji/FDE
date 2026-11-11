import type { TermeGlossaire } from "./types";

export const glossaire: TermeGlossaire[] = [
  {
    id: "a2a",
    terme: "A2A",
    alias: "Agent2Agent",
    definition:
      "Standard ouvert, initié par Google et gouverné par une fondation ouverte, qui permet à des agents de systèmes ou d'éditeurs différents de se découvrir, de se confier des tâches et d'en suivre l'avancement. À envisager quand des agents doivent coopérer au-delà d'une même équipe ou d'une même plateforme ; à l'intérieur d'un seul système, un orchestrateur et des appels directs suffisent le plus souvent.",
    categorie: "agents",
    voir: ["/frameworks/protocoles-mcp-a2a", "/frameworks/topologies-multi-agents"],
  },
  {
    id: "adr",
    terme: "ADR",
    alias: "Architecture Decision Record",
    definition:
      "Note courte qui consigne une décision d'architecture : le contexte, les options écartées, le choix retenu et ses conséquences. En mission, c'est la mémoire des arbitrages (barreau de l'échelle des solutions, topologie, protocole) et du signal qui conduirait à les rouvrir ; elle évite de rejouer le débat à chaque changement d'équipe.",
    categorie: "delivery",
    voir: ["/templates/adr", "/frameworks/faut-il-un-agent"],
  },
  {
    id: "agent",
    terme: "Agent",
    definition:
      "Système dans lequel un modèle de langage choisit lui-même, en boucle, ses étapes et ses outils pour atteindre un objectif, là où un workflow suit un chemin écrit dans le code. Il échange du coût, de la latence et de l'imprévisibilité contre la capacité à traiter des cas qu'on ne sait pas décrire à l'avance : à ne retenir que lorsque les barreaux inférieurs de l'échelle des solutions ont montré leurs limites.",
    categorie: "agents",
    voir: ["/frameworks/faut-il-un-agent", "/frameworks/anatomie-agent", "/templates/fiche-agent"],
  },
  {
    id: "agentivite-excessive",
    terme: "Agentivité excessive",
    alias: "Excessive agency",
    definition:
      "Risque référencé par l'OWASP : un agent dispose de plus d'outils, de droits ou d'autonomie que sa mission n'en exige, si bien qu'une erreur ou une manipulation produit des dégâts réels. La parade se joue à la conception : moindre privilège, outils d'écriture soumis à approbation, limites dures par cas.",
    categorie: "agents",
    voir: ["/frameworks/securite-agents", "/frameworks/garde-fous", "/frameworks/niveaux-autonomie"],
  },
  {
    id: "agentops",
    terme: "AgentOps",
    definition:
      "Pratiques et équipe qui exploitent des agents en production : traçage, évaluations continues, gestion des incidents, suivi des coûts, évolution des prompts et des outils. Une mise en production sans AgentOps dimensionné et financé ne tient pas dans la durée ; chez Voxalis, 3 ETP et 0,35 M€ par an sont inscrits au business case.",
    categorie: "delivery",
    voir: ["/frameworks/agentops", "/templates/runbook-agent"],
  },
  {
    id: "ai-native",
    terme: "AI-Native",
    definition:
      "Se dit d'une organisation dont les processus, les rôles et la gouvernance sont conçus autour de la collaboration entre humains et agents, par opposition à une organisation qui a ajouté de l'IA à des processus inchangés. C'est le niveau 5 de l'échelle de maturité et la destination du parcours en 8 phases.",
    categorie: "methode",
    voir: ["/methode", "/frameworks/maturite-ai-native", "/outils/maturite"],
  },
  {
    id: "ancrage",
    terme: "Ancrage",
    alias: "Grounding",
    definition:
      "Fait d'obliger le modèle à appuyer sa réponse sur des sources fournies (documents, résultats d'outils, données du SI) plutôt que sur sa mémoire d'entraînement. C'est la première parade contre l'hallucination, et elle se vérifie : chez Voxalis, chaque cause de diagnostic doit citer au moins un résultat d'outil, contrôlé par code.",
    categorie: "ia",
    voir: ["/frameworks/memoire-connaissance", "/frameworks/garde-fous"],
  },
  {
    id: "appel-d-outil",
    terme: "Appel d'outil",
    alias: "Tool call, function calling",
    definition:
      "Requête structurée par laquelle le modèle demande l'exécution d'un outil, avec ses paramètres ; l'application l'exécute et renvoie le résultat au modèle. C'est à cet endroit que se placent les contrôles (droits, approbation, limites) et que se lit ce que l'agent a réellement fait.",
    categorie: "agents",
    voir: ["/frameworks/conception-outils", "/frameworks/anatomie-agent"],
  },
  {
    id: "arbre-de-questions",
    terme: "Arbre de questions",
    alias: "Issue tree",
    definition:
      "Décomposition MECE de la question centrale de la mission en sous-questions, jusqu'à des analyses que l'on peut confier et planifier. Formulé en affirmations à confirmer ou infirmer, il devient l'arbre d'hypothèses et sert de plan de travail au diagnostic.",
    categorie: "conseil",
    voir: ["/frameworks/probleme-hypotheses", "/templates/arbre-hypotheses"],
  },
  {
    id: "boucle-agentique",
    terme: "Boucle agentique",
    alias: "Agent loop",
    definition:
      "Cycle qu'exécute un agent : le modèle lit le contexte, décide d'une action, appelle un outil, observe le résultat, et recommence jusqu'à l'objectif ou jusqu'à une limite. Toute boucle doit porter des bornes explicites (nombre d'étapes, budget, délai), faute de quoi ni le coût ni la durée d'un cas ne sont maîtrisés.",
    categorie: "agents",
    voir: ["/frameworks/anatomie-agent", "/frameworks/patterns-agentiques"],
  },
  {
    id: "business-case",
    terme: "Business case",
    definition:
      "Dossier chiffré qui confronte les bénéfices attendus d'un portefeuille de cas d'usage à son coût complet, investissement et récurrent, avec des hypothèses explicites et leur sensibilité. Il n'engage que s'il est validé par la finance du client ; chez Voxalis, 5,4 M€ de valeur annuelle en régime de croisière pour 3,1 M€ d'investissement initial.",
    categorie: "conseil",
    voir: ["/templates/business-case", "/frameworks/business-case-tco", "/outils/business-case"],
  },
  {
    id: "cache-de-prompt",
    terme: "Cache de prompt",
    alias: "Prompt caching",
    definition:
      "Mécanisme qui évite de retraiter à chaque appel la partie stable d'un prompt (instructions, définitions d'outils, documents de référence), ce qui réduit le coût et la latence. Il impose d'ordonner le contexte du plus stable au plus variable : un levier FinOps à prévoir dès la conception.",
    categorie: "ia",
    voir: ["/frameworks/finops-ia", "/frameworks/context-engineering"],
  },
  {
    id: "cas-adverse",
    terme: "Cas adverse",
    alias: "Adversarial case",
    definition:
      "Cas de test construit pour faire échouer l'agent ou le pousser hors de son périmètre : instruction cachée dans une entrée, demande hors mandat, données contradictoires, pression pour obtenir une action interdite. Le jeu adverse complète le golden set et son seuil est en général zéro écart ; Voxalis en compte 120.",
    categorie: "delivery",
    voir: ["/frameworks/evaluation-agents", "/frameworks/securite-agents", "/templates/plan-evaluation"],
  },
  {
    id: "cas-d-usage",
    terme: "Cas d'usage",
    alias: "Use case",
    definition:
      "Application précise de l'IA à une tâche ou à une décision d'un processus, décrite par son problème, son utilisateur, sa valeur, sa faisabilité et le barreau de solution visé. La méthode ne le traite jamais isolément : il se choisit à l'intérieur d'un domaine, où plusieurs cas d'usage se renforcent sur un même flux.",
    categorie: "methode",
    voir: ["/templates/canevas-cas-usage", "/frameworks/matrice-valeur-faisabilite", "/cas-usage"],
  },
  {
    id: "churn",
    terme: "Churn",
    alias: "Attrition",
    definition:
      "Part des clients, ou du revenu, perdue sur une période. Indicateur lent et influencé par bien d'autres facteurs que la mission : l'attribuer exige un contrefactuel et de la patience. Chez Voxalis, 11,5 % par an sur les PME pour une cible de 10,0 %, et une mesure jugée non concluante à +3 mois.",
    categorie: "conseil",
    voir: ["/frameworks/mesure-impact", "/guides/cas-fil-rouge"],
  },
  {
    id: "comite-de-gouvernance-ia",
    terme: "Comité de gouvernance IA",
    definition:
      "Instance du client qui décide de la mise en service, de l'élargissement d'autonomie et du retrait des agents, sur la base du registre des agents, des résultats d'évaluation et des incidents. Elle doit survivre à la mission : chez Voxalis, elle est mensuelle et coprésidée par le métier et la DSI.",
    categorie: "gouvernance",
    voir: ["/frameworks/gouvernance-ia", "/templates/registre-agents"],
  },
  {
    id: "context-engineering",
    terme: "Context engineering",
    alias: "Ingénierie du contexte",
    definition:
      "Discipline qui consiste à décider ce que le modèle voit à chaque étape : instructions, définitions d'outils, connaissances récupérées, historique, mémoire, le tout dans une fenêtre de contexte limitée. La qualité d'un agent en dépend davantage que de la seule formulation du prompt : avec trop peu de contexte il devine, avec trop il se disperse.",
    categorie: "agents",
    voir: ["/frameworks/context-engineering", "/guides/ecrire-system-prompt"],
  },
  {
    id: "contrefactuel",
    terme: "Contrefactuel",
    definition:
      "Ce qui se serait passé sans l'intervention. Mesurer un impact, c'est comparer le réalisé à ce contrefactuel (groupe témoin, périmètre non déployé, tendance antérieure corrigée) et pas seulement à la situation de départ ; sans cela, on attribue à l'IA ce qui vient de la saisonnalité ou d'un autre projet.",
    categorie: "conseil",
    voir: ["/frameworks/mesure-impact", "/guides/chiffrer-la-valeur"],
  },
  {
    id: "copil",
    terme: "COPIL",
    alias: "Comité de pilotage",
    definition:
      "Instance de décision de la mission, présidée par le sponsor, où se franchissent les jalons et s'arbitrent le périmètre, les moyens et les risques. Un COPIL se prépare pour obtenir une décision, pas pour informer : une question posée, une recommandation, les options écartées.",
    categorie: "conseil",
    voir: ["/templates/support-copil", "/guides/piloter-copil"],
  },
  {
    id: "cout-par-cas",
    terme: "Coût par cas",
    definition:
      "Coût complet du traitement d'une unité de travail (un ticket, un dossier, une demande) : inférence, plateforme, supervision humaine et exploitation. C'est l'unité de compte commune au business case et au FinOps ; chez Voxalis, 41 € par ticket en référence pour une cible de 26 €, à ne pas confondre avec le seul coût d'inférence (0,38 € par ticket pendant le pilote).",
    categorie: "delivery",
    voir: ["/frameworks/finops-ia", "/frameworks/business-case-tco"],
  },
  {
    id: "critere-d-arret",
    terme: "Critère d'arrêt",
    alias: "Kill criterion",
    definition:
      "Condition, fixée à l'avance dans la charte de mission ou le plan de pilote, qui conduit à arrêter ou réorienter le travail si elle se réalise. L'écrire au cadrage rend la décision possible le jour venu, quand l'investissement déjà consenti pousse à continuer.",
    categorie: "methode",
    voir: ["/templates/charte-de-mission", "/templates/plan-pilote", "/frameworks/poc-pilote-production"],
  },
  {
    id: "csat",
    terme: "CSAT",
    alias: "Customer Satisfaction Score",
    definition:
      "Note de satisfaction recueillie à chaud après une interaction, ici sur 5. Elle réagit vite et se rattache à un cas précis, ce qui en fait un bon indicateur de pilote ; chez Voxalis, elle passe de 3,6 à 4,3 pendant le pilote.",
    categorie: "conseil",
    voir: ["/frameworks/mesure-impact", "/templates/bilan-pilote"],
  },
  {
    id: "delai-de-retour",
    terme: "Délai de retour",
    alias: "Payback",
    definition:
      "Temps nécessaire pour que les bénéfices cumulés couvrent les coûts cumulés. Plus parlant que le ROI pour un comité, car il dit quand l'investissement cesse d'être à risque ; chez Voxalis, le 21e mois.",
    categorie: "conseil",
    voir: ["/frameworks/business-case-tco", "/outils/business-case"],
  },
  {
    id: "deploiement-progressif",
    terme: "Déploiement progressif",
    alias: "Progressive rollout",
    definition:
      "Mise en service par paliers (une part du flux, une population ou une région à la fois), avec des critères de passage et un retour arrière prêt à chaque palier. Il limite l'étendue d'un incident et laisse le temps de former ; Voxalis généralise en trois vagues régionales.",
    categorie: "delivery",
    voir: ["/guides/passer-en-production", "/templates/checklist-mise-en-production", "/frameworks/poc-pilote-production"],
  },
  {
    id: "derive",
    terme: "Dérive",
    alias: "Drift",
    definition:
      "Dégradation progressive ou soudaine de la qualité d'un agent en production, sans changement de son code : évolution des demandes, de la base de connaissances, d'un outil ou du modèle sous-jacent. Elle se détecte en rejouant régulièrement le golden set et en échantillonnant la production, pas en attendant les réclamations.",
    categorie: "delivery",
    voir: ["/frameworks/agentops", "/frameworks/evaluation-agents"],
  },
  {
    id: "domaine",
    terme: "Domaine",
    definition:
      "Périmètre métier cohérent de bout en bout, avec un responsable, un flux et des indicateurs propres : l'Assistance & SAV Entreprises chez Voxalis, par exemple. La méthode transforme un domaine entier plutôt que de disperser des cas d'usage, parce que la valeur vient des cas qui se renforcent sur un même flux.",
    categorie: "methode",
    voir: ["/frameworks/approche-par-domaine", "/savoir/lighthouse-d-abord"],
  },
  {
    id: "dpo",
    terme: "DPO",
    alias: "Délégué à la protection des données",
    definition:
      "Responsable, chez le client, de la conformité des traitements de données personnelles. À associer dès le diagnostic et non à la veille de la mise en production : c'est lui qui valide la base légale, les règles de masquage et la durée de conservation des traces.",
    categorie: "gouvernance",
    voir: ["/frameworks/ia-responsable", "/templates/analyse-risques-agent"],
  },
  {
    id: "echelle-des-solutions",
    terme: "Échelle des solutions",
    definition:
      "Cinq barreaux, du plus simple au plus autonome : règle déterministe, appel de modèle unique, workflow, agent, système multi-agents. La règle est de retenir le barreau le plus bas qui suffit et de ne monter que sur preuve, mesurée sur le golden set.",
    categorie: "methode",
    voir: ["/frameworks/faut-il-un-agent", "/outils/agent-ou-pas"],
  },
  {
    id: "embedding",
    terme: "Embedding",
    alias: "Plongement vectoriel",
    definition:
      "Représentation d'un texte sous forme de vecteur, telle que deux contenus de sens proche aient des vecteurs proches. C'est la base de la recherche sémantique d'un RAG ; le résultat dépend autant du découpage et de la fraîcheur des documents que du modèle d'embedding lui-même.",
    categorie: "ia",
    voir: ["/frameworks/memoire-connaissance"],
  },
  {
    id: "escalade",
    terme: "Escalade",
    definition:
      "Transfert d'un cas de l'agent vers un humain, ou d'un niveau de supervision vers un autre, quand une condition définie à l'avance est remplie : confiance faible, action à risque, nombre de tentatives dépassé, outil indisponible. Les conditions d'escalade doivent être explicites et testables, et l'humain doit recevoir un dossier complet, pas un cas à reprendre de zéro.",
    categorie: "agents",
    voir: ["/frameworks/collaboration-humain-agent", "/templates/fiche-agent"],
  },
  {
    id: "eu-ai-act",
    terme: "EU AI Act",
    alias: "Règlement européen sur l'intelligence artificielle",
    definition:
      "Règlement de l'Union européenne qui encadre l'IA par niveaux de risque : pratiques interdites, systèmes à haut risque, obligations de transparence, risque minimal, avec des obligations propres aux modèles d'IA à usage général. Entré en vigueur en août 2024, il s'applique de façon échelonnée : classer chaque cas d'usage tôt et faire confirmer le calendrier applicable par le juridique du client.",
    categorie: "gouvernance",
    voir: ["/frameworks/eu-ai-act", "/frameworks/gouvernance-ia"],
  },
  {
    id: "evals",
    terme: "Evals",
    alias: "Évaluations",
    definition:
      "Tests reproductibles qui mesurent la qualité d'un système d'IA sur des cas représentatifs, notés par du code, par un modèle juge ou par des experts. Elles se construisent avant les agents : sans evals, on ne sait ni si une modification améliore le système, ni quand élargir l'autonomie.",
    categorie: "delivery",
    voir: ["/frameworks/evaluation-agents", "/frameworks/eval-driven-development", "/guides/construire-les-evals"],
  },
  {
    id: "fcr",
    terme: "FCR",
    alias: "First Contact Resolution, résolution au premier contact",
    definition:
      "Part des demandes résolues dès le premier contact, sans rappel ni transfert. Indicateur d'efficacité et d'expérience à la fois ; chez Voxalis, 54 % en référence, 71 % pendant le pilote, pour une cible de 75 %.",
    categorie: "conseil",
    voir: ["/guides/cas-fil-rouge", "/templates/tableau-de-bord-valeur"],
  },
  {
    id: "fde",
    terme: "FDE",
    alias: "Forward Deployed Engineer",
    definition:
      "Ingénieur-consultant déployé chez le client, au sein d'une équipe mixte, qui tient ensemble le problème métier, la conception des agents et leur mise en production. Sa réussite se juge à l'autonomie du client en fin de mission, pas au nombre d'agents livrés.",
    categorie: "methode",
    voir: ["/guides/posture-fde", "/guides/premiers-jours", "/savoir/binome-metier-fde"],
  },
  {
    id: "fenetre-de-contexte",
    terme: "Fenêtre de contexte",
    alias: "Context window",
    definition:
      "Quantité maximale de texte, mesurée en tokens, qu'un modèle peut prendre en compte en un appel : instructions, outils, documents, historique et réponse compris. Elle borne ce qu'un agent peut garder à l'esprit ; un contexte surchargé dégrade la précision et alourdit le coût avant même d'atteindre la limite.",
    categorie: "ia",
    voir: ["/frameworks/context-engineering", "/frameworks/memoire-connaissance"],
  },
  {
    id: "fil-transverse",
    terme: "Fil transverse",
    definition:
      "Préoccupation traitée dans chacune des huit phases plutôt qu'en fin de projet. La méthode en compte trois : Valeur (hypothèse chiffrée, référence, registre), Confiance (risques, sécurité, conformité, gouvernance) et Adoption (les personnes dont le travail change).",
    categorie: "methode",
    voir: ["/methode", "/frameworks/registre-de-valeur", "/frameworks/pilotage-adoption"],
  },
  {
    id: "fine-tuning",
    terme: "Fine-tuning",
    alias: "Ajustement fin",
    definition:
      "Réentraînement partiel d'un modèle sur des exemples propres à une tâche. En mission, c'est rarement le premier levier : le prompt, le contexte, les outils et le RAG se corrigent plus vite et se maintiennent plus facilement. À réserver à un besoin stable, mesuré par les evals, que ces leviers n'atteignent pas.",
    categorie: "ia",
    voir: ["/frameworks/context-engineering", "/frameworks/memoire-connaissance"],
  },
  {
    id: "finops",
    terme: "FinOps",
    definition:
      "Pilotage du coût d'exploitation de l'IA : coût par cas, par agent et par étape, budgets et alertes, arbitrages entre qualité, latence et dépense (taille du modèle, cache de prompt, longueur du contexte). Il relie la consommation technique aux hypothèses du business case.",
    categorie: "delivery",
    voir: ["/frameworks/finops-ia", "/frameworks/business-case-tco"],
  },
  {
    id: "garde-fou",
    terme: "Garde-fou",
    alias: "Guardrail",
    definition:
      "Contrôle placé autour d'un agent pour borner ce qu'il reçoit, produit ou exécute : filtrage des entrées, validation des sorties, restriction des outils et des droits, limites de budget. Un garde-fou efficace est du code vérifiable, pas une consigne dans le prompt, et il se teste sur le jeu adverse.",
    categorie: "agents",
    voir: ["/frameworks/garde-fous", "/frameworks/securite-agents", "/templates/analyse-risques-agent"],
  },
  {
    id: "golden-set",
    terme: "Golden set",
    alias: "Jeu de référence",
    definition:
      "Jeu de cas réels et représentatifs, annotés par les experts du métier avec le résultat attendu, sur lequel on mesure tout changement du système. Il se constitue avant la première ligne de prompt et s'enrichit de chaque erreur de production ; Voxalis en a annoté 600, plus 120 cas adverses.",
    categorie: "methode",
    voir: ["/savoir/golden-set-jour-1", "/templates/plan-evaluation", "/guides/construire-les-evals"],
  },
  {
    id: "hallucination",
    terme: "Hallucination",
    definition:
      "Réponse fausse ou inventée, formulée avec la même assurance qu'une réponse juste. Elle ne s'élimine pas, elle se réduit et se détecte : ancrage sur des sources, obligation de citer, vérifications par code, et droit explicite donné au modèle de dire qu'il ne sait pas.",
    categorie: "ia",
    voir: ["/frameworks/garde-fous", "/frameworks/evaluation-agents"],
  },
  {
    id: "human-in-the-loop",
    terme: "Human-in-the-loop",
    alias: "Humain dans la boucle",
    definition:
      "Mode de supervision où un humain approuve chaque action avant son exécution : c'est le niveau d'autonomie L2. Adapté aux actions à risque ou irréversibles, mais coûteux en attention : quand le volume monte, l'approbation devient un réflexe et ne protège plus.",
    categorie: "agents",
    voir: ["/frameworks/niveaux-autonomie", "/frameworks/collaboration-humain-agent"],
  },
  {
    id: "human-on-the-loop",
    terme: "Human-on-the-loop",
    alias: "Humain sur la boucle",
    definition:
      "Mode de supervision où l'agent agit seul dans un périmètre défini pendant qu'un humain suit en temps réel et peut reprendre la main : c'est le niveau d'autonomie L3. Il suppose un poste de supervision lisible, des alertes utiles et des conditions d'escalade claires.",
    categorie: "agents",
    voir: ["/frameworks/niveaux-autonomie", "/frameworks/collaboration-humain-agent"],
  },
  {
    id: "hypothese-de-reponse-initiale",
    terme: "Hypothèse de réponse initiale",
    alias: "Day-one answer",
    definition:
      "Réponse provisoire à la question centrale de la mission, formulée dès les premiers jours pour orienter le diagnostic vers ce qui peut la confirmer ou la renverser. Elle se partage comme une hypothèse, pas comme une conclusion ; chez Voxalis, elle est posée au jour 3 : le délai vient des attentes entre niveaux de support, pas du temps de traitement.",
    categorie: "conseil",
    voir: ["/frameworks/probleme-hypotheses", "/templates/arbre-hypotheses"],
  },
  {
    id: "ia-responsable",
    terme: "IA responsable",
    alias: "Responsible AI",
    definition:
      "Ensemble des exigences qu'un système d'IA doit tenir au-delà de la performance : équité, transparence, supervision humaine, protection des données, robustesse, responsabilité nommée. Dans la méthode, elle relève du fil Confiance et se traduit en contrôles concrets à chaque phase, pas en charte de principes.",
    categorie: "gouvernance",
    voir: ["/frameworks/ia-responsable", "/frameworks/gouvernance-ia"],
  },
  {
    id: "inference",
    terme: "Inférence",
    definition:
      "Exécution d'un modèle pour produire une réponse, par opposition à son entraînement. C'est elle qui se paie à l'usage, au token, et qui détermine la latence : son coût par cas est une ligne du business case et un indicateur d'exploitation.",
    categorie: "ia",
    voir: ["/frameworks/finops-ia"],
  },
  {
    id: "injection-de-prompt",
    terme: "Injection de prompt",
    alias: "Prompt injection",
    definition:
      "Attaque qui glisse des instructions dans un contenu que l'agent va lire (message d'un client, document, page web, résultat d'outil) pour détourner son comportement ; elle figure en tête des risques recensés par l'OWASP pour les applications LLM. Aucune consigne ne suffit à s'en prémunir : traiter tout contenu externe comme une donnée, limiter les droits des outils et tester sur un jeu adverse.",
    categorie: "agents",
    voir: ["/frameworks/securite-agents", "/frameworks/garde-fous"],
  },
  {
    id: "iso-iec-42001",
    terme: "ISO/IEC 42001",
    alias: "Système de management de l'IA",
    definition:
      "Norme internationale qui définit un système de management de l'IA : politique, rôles, gestion des risques, cycle de vie, amélioration continue. Elle fournit une ossature de gouvernance familière à un client qui pratique déjà les normes de management, et peut donner lieu à certification.",
    categorie: "gouvernance",
    voir: ["/frameworks/gouvernance-ia", "/frameworks/nist-ai-rmf"],
  },
  {
    id: "jalon",
    terme: "Jalon",
    alias: "Gate",
    definition:
      "Point de décision qui clôt chaque phase, de G0 (mandat clair) à G7 (client autonome) : un comité répond à une question précise, sur des critères connus à l'avance, et décide de poursuivre, de réorienter ou d'arrêter. Un jalon franchi sans ses livrables obligatoires est une dette qui se paie à la phase suivante.",
    categorie: "methode",
    voir: ["/methode", "/templates/support-copil"],
  },
  {
    id: "llmops",
    terme: "LLMOps",
    definition:
      "Pratiques d'exploitation des applications fondées sur des modèles de langage : gestion des versions de prompts et de modèles, évaluations, traçage, suivi des coûts. L'AgentOps en est le prolongement pour des systèmes qui agissent, avec en plus la gestion des outils, des droits et de l'autonomie.",
    categorie: "delivery",
    voir: ["/frameworks/agentops", "/frameworks/architecture-reference"],
  },
  {
    id: "mcp",
    terme: "MCP",
    alias: "Model Context Protocol",
    definition:
      "Standard ouvert, initié par Anthropic et gouverné par une fondation ouverte, qui connecte un agent à des outils et à des données par une interface commune. Il évite de recoder chaque intégration et centralise les contrôles d'accès ; chez Voxalis, une passerelle MCP expose neuf outils, dont trois seulement écrivent.",
    categorie: "agents",
    voir: ["/frameworks/protocoles-mcp-a2a", "/frameworks/conception-outils"],
  },
  {
    id: "mece",
    terme: "MECE",
    alias: "Mutuellement exclusif, collectivement exhaustif",
    definition:
      "Qualité d'un découpage dont les parties ne se recouvrent pas et couvrent tout le sujet. C'est le test à appliquer à un arbre de questions, à une liste d'options ou aux arguments d'une recommandation : un recouvrement crée un double compte, un trou laisse une objection sans réponse.",
    categorie: "conseil",
    voir: ["/frameworks/probleme-hypotheses", "/frameworks/pyramide-scqa"],
  },
  {
    id: "memoire",
    terme: "Mémoire",
    definition:
      "Ce qu'un agent conserve au-delà d'un appel : l'état du cas en cours (mémoire de travail) et, éventuellement, des informations d'un cas à l'autre (mémoire persistante). Chaque élément mémorisé doit avoir une raison, une durée de vie et un propriétaire, car la mémoire propage aussi les erreurs et les données sensibles.",
    categorie: "agents",
    voir: ["/frameworks/memoire-connaissance", "/frameworks/context-engineering"],
  },
  {
    id: "mode-fantome",
    terme: "Mode fantôme",
    alias: "Shadow mode",
    definition:
      "Période où l'agent traite les cas réels en parallèle des équipes, sans que ses actions soient exécutées ni ses messages envoyés : on compare ses décisions à celles des humains. C'est la preuve la moins risquée avant toute action réelle ; Voxalis y a consacré deux semaines avant d'ouvrir les actions du pilote.",
    categorie: "methode",
    voir: ["/savoir/mode-fantome", "/guides/reussir-le-pilote", "/templates/plan-pilote"],
  },
  {
    id: "modele-de-langage",
    terme: "Modèle de langage",
    alias: "LLM, Large Language Model",
    definition:
      "Modèle entraîné sur de très grands volumes de texte, qui produit du texte en prédisant la suite la plus probable d'une séquence de tokens. Il raisonne sur ce qu'on lui fournit, ne connaît par défaut ni le client ni ses données, et ne garde rien d'un appel à l'autre : tout ce qui compte doit être mis dans son contexte.",
    categorie: "ia",
    voir: ["/frameworks/anatomie-agent", "/frameworks/context-engineering"],
  },
  {
    id: "modele-juge",
    terme: "Modèle juge",
    alias: "LLM-as-a-judge",
    definition:
      "Modèle chargé de noter les sorties d'un autre modèle selon une grille explicite, pour évaluer ce que le code ne sait pas vérifier : pertinence, ton, qualité d'une justification. Il ne vaut que calibré : comparer ses notes à celles d'experts sur un échantillon avant de s'y fier, comme les 50 cas notés par les experts N2 chez Voxalis.",
    categorie: "delivery",
    voir: ["/frameworks/evaluation-agents", "/guides/construire-les-evals"],
  },
  {
    id: "moindre-privilege",
    terme: "Moindre privilège",
    alias: "Least privilege",
    definition:
      "Principe de sécurité : chaque agent ne reçoit que les outils, les droits et les données strictement nécessaires à sa mission. C'est aussi un critère de découpage en plusieurs agents : chez Voxalis, l'Agent Diagnostic est en lecture seule, et seul l'Agent Résolution peut agir sur le réseau.",
    categorie: "gouvernance",
    voir: ["/frameworks/securite-agents", "/frameworks/conception-outils"],
  },
  {
    id: "mttr",
    terme: "MTTR",
    alias: "Mean Time To Resolution, délai moyen de résolution",
    definition:
      "Délai moyen entre l'ouverture d'un incident et sa résolution. Il ne devient actionnable qu'une fois décomposé : chez Voxalis, sur 31 h, 41 % sont de l'attente entre niveaux de support et 18 % seulement du traitement effectif, ce qui a déplacé la cible de la mission.",
    categorie: "conseil",
    voir: ["/guides/cas-fil-rouge", "/frameworks/cartographie-processus"],
  },
  {
    id: "nist-ai-rmf",
    terme: "NIST AI RMF",
    alias: "AI Risk Management Framework",
    definition:
      "Cadre de gestion des risques de l'IA publié par le NIST, d'application volontaire, organisé en quatre fonctions : Govern, Map, Measure, Manage. Il donne une structure à l'analyse de risques d'un agent et un vocabulaire que les équipes risques et sécurité reconnaissent.",
    categorie: "gouvernance",
    voir: ["/frameworks/nist-ai-rmf", "/templates/analyse-risques-agent"],
  },
  {
    id: "niveau-d-autonomie",
    terme: "Niveau d'autonomie",
    definition:
      "Degré de liberté laissé à un agent, de L0 (manuel) à L5 (autonomie complète), en passant par L2 (l'humain approuve chaque action) et L3 (l'agent agit dans un périmètre défini, l'humain supervise). Il se fixe par outil et par situation, pas globalement, et ne s'élargit que sur preuves.",
    categorie: "agents",
    voir: ["/frameworks/niveaux-autonomie", "/savoir/autonomie-progressive", "/templates/matrice-humain-agent"],
  },
  {
    id: "non-regression",
    terme: "Non-régression",
    alias: "Regression testing",
    definition:
      "Vérification qu'une modification (prompt, outil, modèle, base de connaissances) ne dégrade pas ce qui fonctionnait. Pour un agent, elle consiste à rejouer le golden set et le jeu adverse avant chaque mise en service, et à bloquer le déploiement sous les seuils.",
    categorie: "delivery",
    voir: ["/frameworks/eval-driven-development", "/templates/rapport-evaluation"],
  },
  {
    id: "nps",
    terme: "NPS",
    alias: "Net Promoter Score",
    definition:
      "Indicateur de recommandation : part des promoteurs moins part des détracteurs, de −100 à +100. Il mesure la relation dans la durée, bouge lentement et dépend de bien d'autres facteurs que le périmètre de la mission ; chez Voxalis, +8 en référence, +22 à +3 mois, pour une cible de +30.",
    categorie: "conseil",
    voir: ["/frameworks/mesure-impact", "/templates/tableau-de-bord-valeur"],
  },
  {
    id: "observabilite",
    terme: "Observabilité",
    definition:
      "Capacité à comprendre ce que fait un système en production à partir de ce qu'il émet : traces, métriques, journaux, résultats d'évaluation. Pour des agents, elle doit permettre de répondre à trois questions sur n'importe quel cas : qu'a-t-il fait, pourquoi, et combien cela a coûté.",
    categorie: "delivery",
    voir: ["/frameworks/agentops", "/frameworks/architecture-reference"],
  },
  {
    id: "orchestrateur",
    terme: "Orchestrateur",
    definition:
      "Composant, agent ou code, qui tient l'état d'un cas, répartit le travail entre agents spécialisés et déclenche les escalades. C'est le point de contrôle d'un système multi-agents et aussi son point de fragilité : son périmètre de décision doit être écrit. Chez Voxalis, l'Orchestrateur de cas choisit la voie de traitement et opère en L3.",
    categorie: "agents",
    voir: ["/frameworks/topologies-multi-agents", "/templates/dossier-architecture-multi-agents"],
  },
  {
    id: "outil",
    terme: "Outil",
    alias: "Tool",
    definition:
      "Fonction que l'agent peut appeler pour lire une information ou agir sur un système, décrite par un nom, une description et un schéma de paramètres. L'agent ne peut faire que ce que ses outils permettent : leur conception (granularité, messages d'erreur, lecture ou écriture) pèse sur la qualité et la sécurité au moins autant que le prompt.",
    categorie: "agents",
    voir: ["/frameworks/conception-outils", "/templates/specification-outil", "/savoir/outils-avant-prompts"],
  },
  {
    id: "passage-de-relais",
    terme: "Passage de relais",
    alias: "Handoff",
    definition:
      "Transfert d'un cas d'un acteur à un autre, humain ou agent. Chaque passage de relais crée de l'attente et une perte d'information : c'est là que se logeait l'essentiel du délai chez Voxalis. Les compter dans le processus existant, puis les supprimer ou les outiller dans le processus cible.",
    categorie: "methode",
    voir: ["/frameworks/cartographie-processus", "/frameworks/reinvention-zero-base"],
  },
  {
    id: "pilote",
    terme: "Pilote",
    definition:
      "Mise en conditions réelles sur un périmètre limité (un site, un segment, quelques semaines), avec de vrais utilisateurs, de vrais cas et une mesure contre la référence. Il doit se conclure par une décision ; chez Voxalis, 8 semaines à Nantes, 18 conseillers et 9 400 tickets.",
    categorie: "delivery",
    voir: ["/templates/plan-pilote", "/templates/bilan-pilote", "/guides/reussir-le-pilote"],
  },
  {
    id: "poc",
    terme: "POC",
    alias: "Proof of Concept, preuve de concept",
    definition:
      "Expérience courte qui répond à une question de faisabilité précise, sur des données choisies, sans utilisateurs réels. Il ne prouve ni la valeur ni l'exploitabilité : sans question écrite et critère de succès fixé à l'avance, il mène au purgatoire des POC.",
    categorie: "delivery",
    voir: ["/frameworks/poc-pilote-production", "/savoir/poc-purgatoire"],
  },
  {
    id: "principe-de-la-pyramide",
    terme: "Principe de la pyramide",
    alias: "Pyramid principle",
    definition:
      "Méthode de structuration due à Barbara Minto : énoncer la conclusion d'abord, puis les arguments qui la soutiennent, groupés et MECE, chacun appuyé sur ses preuves. Un dirigeant qui ne lit que la première ligne doit repartir avec le message.",
    categorie: "conseil",
    voir: ["/frameworks/pyramide-scqa", "/templates/support-copil"],
  },
  {
    id: "proprietaire-d-agent",
    terme: "Propriétaire d'agent",
    alias: "Agent owner",
    definition:
      "Responsable métier nommé qui répond des résultats d'un agent en production : il valide sa mission et ses limites, arbitre les élargissements d'autonomie et décide de son arrêt. Un agent sans propriétaire n'est pas mis en service ; son nom figure sur la fiche agent et au registre des agents.",
    categorie: "methode",
    voir: ["/templates/fiche-agent", "/templates/registre-agents", "/frameworks/raci-augmente"],
  },
  {
    id: "prototype",
    terme: "Prototype",
    definition:
      "Version fonctionnelle mais incomplète du système, construite pour apprendre vite sur un périmètre étroit avant le pilote. La méthode le construit en tranche verticale : chez Voxalis, quatre semaines sur un seul motif d'incident, traité de bout en bout.",
    categorie: "delivery",
    voir: ["/frameworks/poc-pilote-production", "/savoir/tranche-verticale"],
  },
  {
    id: "raci",
    terme: "RACI",
    alias: "Responsible, Accountable, Consulted, Informed",
    definition:
      "Matrice qui répartit, pour chaque activité, qui réalise (R), qui en répond (A), qui est consulté (C) et qui est informé (I). Avec des agents, elle doit dire quel humain répond de ce que l'agent réalise : c'est l'objet du RACI augmenté.",
    categorie: "conseil",
    voir: ["/frameworks/raci-augmente", "/templates/modele-operationnel-cible"],
  },
  {
    id: "rag",
    terme: "RAG",
    alias: "Retrieval-Augmented Generation, génération augmentée par la recherche",
    definition:
      "Technique qui recherche des passages pertinents dans une base documentaire et les fournit au modèle pour qu'il réponde à partir d'eux. Sa qualité est plafonnée par celle de la base : chez Voxalis, 35 % des 2 300 articles étaient obsolètes, d'où une recherche limitée aux articles validés depuis moins de 12 mois.",
    categorie: "ia",
    voir: ["/frameworks/memoire-connaissance", "/templates/revue-donnees-si"],
  },
  {
    id: "red-teaming",
    terme: "Red teaming",
    definition:
      "Exercice où une équipe cherche délibérément à faire échouer ou à détourner un système d'IA : injections de prompt, contournement des garde-fous, exfiltration de données, actions hors périmètre. Ses trouvailles alimentent le jeu adverse et se rejouent à chaque version.",
    categorie: "gouvernance",
    voir: ["/frameworks/securite-agents", "/templates/analyse-risques-agent"],
  },
  {
    id: "reference",
    terme: "Référence",
    alias: "Baseline",
    definition:
      "Mesure du point de départ, sur les indicateurs que la mission veut déplacer, établie avant toute intervention et signée par la finance du client. Sans elle, la valeur se déclare au lieu de se mesurer ; chez Voxalis : MTTR de 31 h, FCR de 54 %, 41 € par ticket.",
    categorie: "conseil",
    voir: ["/frameworks/mesure-impact", "/guides/chiffrer-la-valeur", "/savoir/valeur-declarative"],
  },
  {
    id: "registre-de-valeur",
    terme: "Registre de valeur",
    definition:
      "Tableau tenu à jour du cadrage à la mesure finale, qui suit pour chaque source de valeur l'hypothèse, la référence, la cible, le réalisé et le responsable. Il fait le lien entre le business case et les résultats constatés, et se passe en revue chaque semaine.",
    categorie: "methode",
    voir: ["/frameworks/registre-de-valeur", "/templates/tableau-de-bord-valeur", "/savoir/revue-de-valeur-hebdo"],
  },
  {
    id: "registre-des-agents",
    terme: "Registre des agents",
    definition:
      "Inventaire des agents en service chez le client : mission, propriétaire, niveau d'autonomie, outils et droits, version, résultats d'évaluation, incidents. C'est l'outil de travail du comité de gouvernance IA et la pièce de base de tout audit.",
    categorie: "methode",
    voir: ["/templates/registre-agents", "/frameworks/gouvernance-ia"],
  },
  {
    id: "reinvention-a-base-zero",
    terme: "Réinvention à base zéro",
    alias: "Zero-based redesign",
    definition:
      "Démarche qui reconstruit un processus à partir du résultat attendu pour le client final, en supposant que des agents sont disponibles dès l'origine, au lieu d'automatiser les étapes existantes. Chez Voxalis, elle remplace un processus de 9 étapes et 4 passages de relais par trois voies de traitement.",
    categorie: "methode",
    voir: ["/frameworks/reinvention-zero-base", "/guides/repenser-un-processus", "/savoir/automatiser-l-existant"],
  },
  {
    id: "rgpd",
    terme: "RGPD",
    alias: "Règlement général sur la protection des données",
    definition:
      "Règlement européen qui encadre le traitement des données personnelles : base légale, minimisation, durée de conservation, droits des personnes, encadrement des décisions entièrement automatisées. Les traces et la mémoire d'un agent sont des traitements à part entière, à instruire avec le DPO dès la conception.",
    categorie: "gouvernance",
    voir: ["/frameworks/ia-responsable", "/templates/revue-donnees-si"],
  },
  {
    id: "roi",
    terme: "ROI",
    alias: "Return on Investment, retour sur investissement",
    definition:
      "Gain net rapporté aux coûts sur une période donnée. Toujours préciser l'horizon et le périmètre des coûts : chez Voxalis, 5,0 M€ de gain net pour 5,9 M€ de coûts sur 3 ans, soit 85 %.",
    categorie: "conseil",
    voir: ["/frameworks/business-case-tco", "/templates/business-case", "/outils/business-case"],
  },
  {
    id: "runbook",
    terme: "Runbook",
    alias: "Manuel d'exploitation",
    definition:
      "Manuel d'exploitation d'un agent : surveillance, alertes, diagnostic des pannes courantes, procédures d'arrêt, de mode dégradé et de retour arrière, contacts d'astreinte. Il se teste avant la mise en production, avec l'équipe du client qui l'utilisera.",
    categorie: "delivery",
    voir: ["/templates/runbook-agent", "/frameworks/agentops"],
  },
  {
    id: "scqa",
    terme: "SCQA",
    alias: "Situation, Complication, Question, Réponse",
    definition:
      "Trame d'introduction due à Barbara Minto : rappeler une situation admise, nommer ce qui la perturbe, poser la question qui en découle, donner la réponse. Elle ouvre un support de COPIL ou une note de synthèse en amenant le lecteur à la recommandation en quatre phrases.",
    categorie: "conseil",
    voir: ["/frameworks/pyramide-scqa", "/templates/support-copil"],
  },
  {
    id: "sipoc",
    terme: "SIPOC",
    alias: "Suppliers, Inputs, Process, Outputs, Customers",
    definition:
      "Vue d'ensemble d'un processus en cinq colonnes : fournisseurs, entrées, grandes étapes, sorties, clients. Elle sert à fixer les frontières du processus et à s'accorder sur son résultat avant de le cartographier en détail.",
    categorie: "conseil",
    voir: ["/frameworks/cartographie-processus", "/templates/fiche-processus-existant"],
  },
  {
    id: "sous-agent",
    terme: "Sous-agent",
    alias: "Subagent",
    definition:
      "Agent appelé par un autre pour traiter une sous-tâche dans son propre contexte, avec ses propres outils, et qui ne renvoie qu'un résultat condensé. Il protège le contexte de l'agent appelant et permet de séparer les droits, au prix d'un coût et d'une coordination supplémentaires.",
    categorie: "agents",
    voir: ["/frameworks/topologies-multi-agents", "/frameworks/patterns-agentiques"],
  },
  {
    id: "sponsor",
    terme: "Sponsor",
    definition:
      "Dirigeant qui porte la mission, répond de son résultat, arbitre et lève les obstacles ; il préside le COPIL. Un sponsor qui délègue toutes les décisions ou qui n'apparaît plus est le premier risque d'une mission. Chez Voxalis : Claire Besson, Directrice générale adjointe Marché Entreprises.",
    categorie: "conseil",
    voir: ["/templates/carte-parties-prenantes", "/savoir/sponsor-fantome", "/guides/piloter-copil"],
  },
  {
    id: "superviseur-de-cas",
    terme: "Superviseur de cas",
    definition:
      "Métier cible du conseiller dans un processus AI-Native : il ne traite plus chaque cas de bout en bout, il supervise les agents, approuve les actions à risque, reprend les exceptions et contribue aux évaluations. Le rôle se conçoit avec les intéressés et les RH, compétences et parcours compris.",
    categorie: "methode",
    voir: ["/frameworks/collaboration-humain-agent", "/templates/modele-operationnel-cible", "/savoir/humain-oublie"],
  },
  {
    id: "system-prompt",
    terme: "System prompt",
    alias: "Prompt système",
    definition:
      "Instructions permanentes données au modèle : sa mission, son périmètre, ses règles de décision, l'usage de ses outils, le format de ses sorties. Il se rédige à partir de la fiche agent, comme un brief à un collaborateur compétent, puis se versionne et se teste comme du code.",
    categorie: "agents",
    voir: ["/guides/ecrire-system-prompt", "/templates/system-prompt-agent", "/frameworks/context-engineering"],
  },
  {
    id: "systeme-multi-agents",
    terme: "Système multi-agents",
    alias: "Multi-agent system",
    definition:
      "Ensemble d'agents spécialisés qui coopèrent selon une topologie définie, par exemple un orchestrateur et des agents spécialisés, chacun avec son contexte, ses outils et ses droits. C'est le barreau 5 de l'échelle des solutions : il ne se justifie que sur un constat mesuré (contexte saturé, droits distincts, traitements parallèles), jamais par défaut.",
    categorie: "agents",
    voir: ["/frameworks/topologies-multi-agents", "/templates/dossier-architecture-multi-agents", "/savoir/multi-agents-premature"],
  },
  {
    id: "taux-de-captation",
    terme: "Taux de captation",
    definition:
      "Part d'un gain potentiel qui se transforme réellement en économie ou en revenu constaté dans les comptes. Du temps libéré n'est pas une économie tant qu'il n'est ni réaffecté ni retiré du budget : chez Voxalis, 60 % des 6,3 M€ de gain d'efficacité potentiel, soit 3,8 M€.",
    categorie: "conseil",
    voir: ["/frameworks/business-case-tco", "/guides/chiffrer-la-valeur"],
  },
  {
    id: "tco",
    terme: "TCO",
    alias: "Total Cost of Ownership, coût total de possession",
    definition:
      "Coût complet d'une solution sur sa durée de vie : construction, intégration, conduite du changement, puis inférence, plateforme, équipe d'exploitation et maintenance évolutive. Le coût récurrent est le poste qu'on oublie le plus facilement ; chez Voxalis, 1,2 M€ par an après 3,1 M€ d'investissement initial.",
    categorie: "conseil",
    voir: ["/frameworks/business-case-tco", "/frameworks/finops-ia"],
  },
  {
    id: "titre-message",
    terme: "Titre-message",
    alias: "Action title",
    definition:
      "Titre de page qui énonce la conclusion de la page en une phrase complète, au lieu d'en annoncer le sujet. Lus à la suite, les titres-messages d'un support doivent raconter toute l'histoire : c'est le test à faire avant d'envoyer un document de COPIL.",
    categorie: "conseil",
    voir: ["/frameworks/pyramide-scqa", "/templates/support-copil"],
  },
  {
    id: "token",
    terme: "Token",
    alias: "Jeton",
    definition:
      "Unité de découpage du texte pour un modèle, de l'ordre d'un mot court ou d'un fragment de mot. C'est l'unité de compte de la fenêtre de contexte, de la facturation et, pour partie, de la latence : tout ce qu'on ajoute au contexte se paie à chaque appel.",
    categorie: "ia",
    voir: ["/frameworks/finops-ia", "/frameworks/context-engineering"],
  },
  {
    id: "tracage",
    terme: "Traçage",
    alias: "Tracing",
    definition:
      "Enregistrement, pour chaque cas, de la séquence complète des appels de modèle et d'outils, avec leurs entrées, sorties, durées et coûts. C'est la matière première du débogage, de l'analyse d'erreurs et de l'audit ; il s'appuie sur des standards ouverts comme OpenTelemetry et se conçoit avec le DPO, car les traces contiennent des données personnelles.",
    categorie: "delivery",
    voir: ["/frameworks/agentops", "/frameworks/architecture-reference"],
  },
  {
    id: "tranche-verticale",
    terme: "Tranche verticale",
    alias: "Vertical slice",
    definition:
      "Périmètre de prototype étroit mais complet : un seul type de cas, traité de bout en bout à travers toutes les couches (données, outils, agents, supervision, évaluation). Elle révèle les problèmes d'intégration que masque un prototype large et superficiel ; chez Voxalis, le motif « perte de synchronisation de l'accès ».",
    categorie: "methode",
    voir: ["/savoir/tranche-verticale", "/guides/reussir-le-pilote"],
  },
  {
    id: "voies-autonome-assistee-experte",
    terme: "Voies autonome, assistée et experte",
    definition:
      "Les trois voies entre lesquelles un processus cible AI-Native répartit les cas selon leur risque et leur complexité : autonome (les agents résolvent, l'humain contrôle par échantillonnage), assistée (les agents préparent, l'humain décide) et experte (l'expert mène le cas, les agents exécutent à la demande). Chez Voxalis, elles visent respectivement 35 %, 45 % et 20 % des tickets.",
    categorie: "methode",
    voir: ["/templates/processus-cible-ai-native", "/frameworks/collaboration-humain-agent", "/guides/repenser-un-processus"],
  },
  {
    id: "workflow",
    terme: "Workflow",
    definition:
      "Enchaînement d'appels de modèle et de code dont le chemin est fixé à l'avance par le développeur : séquence, routage, parallélisation. C'est le barreau 3 de l'échelle des solutions, plus prévisible, moins cher et plus simple à évaluer qu'un agent : à préférer chaque fois que les étapes sont connues.",
    categorie: "agents",
    voir: ["/frameworks/patterns-agentiques", "/frameworks/faut-il-un-agent"],
  },
];
