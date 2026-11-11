import type { CasUsage } from "./types";

/**
 * Bibliothèque de cas d'usage de l'IA générative et agentique, par secteur et par fonction.
 * Les notes de valeur et de faisabilité sont des ordres de grandeur typiques,
 * à recalibrer chez chaque client (voir /frameworks/matrice-valeur-faisabilite).
 * Le niveau d'autonomie est celui recommandé au démarrage ; il s'élargit sur preuves.
 */
export const casUsage: CasUsage[] = [
  /* ---------------------------------------------------------------- */
  /* Télécoms                                                          */
  /* ---------------------------------------------------------------- */
  {
    id: "telecoms-qualification-routage-tickets",
    titre: "Qualification et routage automatiques des tickets",
    secteur: "telecoms",
    fonction: "service-client",
    probleme:
      "Les tickets entrants sont qualifiés à la main, avec des erreurs de classement qui les envoient dans la mauvaise file et allongent le délai de résolution.",
    description:
      "À la création du ticket, la solution lit le message du client, classe le motif, extrait les informations utiles (service, site, symptômes) et enrichit le dossier depuis le CRM et l'inventaire du parc. Elle affecte ensuite le ticket à la bonne file avec un niveau de priorité. Les conseillers ne reprennent que les cas à faible confiance ; le reste est contrôlé par échantillonnage.",
    solution: "workflow",
    autonomie: 4,
    leviers: ["delai", "cout", "qualite"],
    kpis: [
      "Taux d'erreur de qualification",
      "Délai de prise en charge du ticket",
      "Part des tickets réaffectés après le premier routage",
    ],
    prerequis: [
      "Historique de tickets annotés par motif pour constituer le jeu d'évaluation",
      "API de lecture et d'écriture sur l'outil de ticketing et le CRM",
      "Référentiel de motifs stabilisé et partagé entre les niveaux de support",
      "Période en mode fantôme pour mesurer l'exactitude avant d'activer le routage réel",
    ],
    risques: [
      "Référentiel de motifs ambigu ou trop fin, qui plafonne l'exactitude",
      "Dérive silencieuse du classement à l'arrivée de nouvelles offres ou de nouveaux motifs",
    ],
    valeur: 4,
    faisabilite: 5,
    horizon: "gain-rapide",
  },
  {
    id: "telecoms-diagnostic-technique-automatise",
    titre: "Diagnostic technique automatisé des incidents",
    secteur: "telecoms",
    fonction: "service-client",
    probleme:
      "Le diagnostic impose de consulter à la main plusieurs outils de supervision, de test et d'inventaire, ce qui consomme du temps d'expert et retarde la résolution.",
    description:
      "Un agent interroge en lecture seule la supervision réseau, les tests de ligne et l'inventaire du parc, puis corrèle les résultats avec les incidents connus et la base de connaissances. Il produit un diagnostic argumenté, avec ses éléments de preuve et un niveau de confiance. Le conseiller ou l'expert valide le diagnostic avant toute action de remédiation.",
    solution: "agent",
    autonomie: 3,
    leviers: ["delai", "qualite", "cout"],
    kpis: [
      "Délai moyen de résolution (MTTR)",
      "Taux de résolution au premier contact (FCR)",
      "Justesse du diagnostic mesurée sur un jeu de cas annotés",
      "Taux d'escalade vers le niveau 2",
    ],
    prerequis: [
      "API de lecture sur la supervision, les tests de ligne et l'inventaire",
      "Jeu de cas historiques dont le diagnostic a été annoté par des experts",
      "Base des incidents connus tenue à jour",
    ],
    risques: [
      "Diagnostic plausible mais faux, suivi sans esprit critique par un conseiller pressé",
      "Données d'inventaire incomplètes ou périmées qui faussent la corrélation",
    ],
    valeur: 5,
    faisabilite: 4,
    horizon: "coeur",
  },
  {
    id: "telecoms-resolution-autonome-motifs-recurrents",
    titre: "Résolution autonome des motifs d'incident récurrents",
    secteur: "telecoms",
    fonction: "service-client",
    probleme:
      "Une majorité d'incidents relève de quelques motifs récurrents dont la résolution est documentée, mais chacun attend en file qu'un technicien applique la même procédure.",
    description:
      "Un système d'agents spécialisés (qualification, diagnostic, résolution, communication), coordonné par un orchestrateur, traite de bout en bout les motifs récurrents à risque faible. L'agent de résolution exécute uniquement les actions d'un catalogue de remédiation validé (réinitialisation, reconfiguration à distance, relance de service) et le client est informé à chaque étape. Toute action hors catalogue ou tout échec est escaladé vers un conseiller avec le dossier complet.",
    solution: "multi-agents",
    autonomie: 3,
    leviers: ["delai", "cout", "experience"],
    kpis: [
      "Part des tickets résolus sans intervention humaine",
      "Délai moyen de résolution (MTTR)",
      "Taux de réouverture",
      "Coût par ticket",
    ],
    prerequis: [
      "Catalogue d'actions de remédiation classées par niveau de risque",
      "API d'écriture sécurisée sur les équipements réseau et l'outil de ticketing",
      "Jeu de cas adverses et période en mode fantôme avant toute action réelle",
      "Supervision humaine en temps réel, avec reprise en main possible",
    ],
    risques: [
      "Action inappropriée sur le réseau d'un client, à effet immédiat sur son activité",
      "Élargissement du catalogue d'actions plus rapide que les preuves ne le justifient",
      "Inquiétude des conseillers sur l'évolution de leur métier",
    ],
    valeur: 5,
    faisabilite: 3,
    horizon: "pari",
  },
  {
    id: "telecoms-communication-proactive-incident",
    titre: "Communication proactive vers le client pendant l'incident",
    secteur: "telecoms",
    fonction: "service-client",
    probleme:
      "Les clients ne sont pas tenus informés de l'avancement de leur incident et rappellent le support, ce qui dégrade la satisfaction et encombre les files.",
    description:
      "À chaque changement d'état du ticket, la solution rédige et envoie au client un message de statut clair : diagnostic posé, action en cours, délai estimé, rétablissement. Les messages de statut partent sans validation, dans un cadre de modèles et de règles de ton ; tout geste commercial ou message sensible est soumis à un conseiller.",
    solution: "workflow",
    autonomie: 3,
    leviers: ["experience", "cout"],
    kpis: [
      "Taux de rappels pour un même incident",
      "Satisfaction client après incident (CSAT)",
      "Conformité des messages contrôlée par échantillonnage",
    ],
    prerequis: [
      "Événements de changement d'état accessibles depuis l'outil de ticketing",
      "Canal d'envoi (courriel, SMS) relié au CRM, avec les préférences de contact",
      "Charte de ton et liste des engagements autorisés",
    ],
    risques: [
      "Promesse de délai non tenue, plus dommageable qu'un silence",
      "Messages en double ou contradictoires en cas de réouverture du ticket",
    ],
    valeur: 4,
    faisabilite: 4,
    horizon: "gain-rapide",
  },
  {
    id: "telecoms-assistant-expert-niveau-2",
    titre: "Assistant de l'expert de niveau 2 : recherche et synthèse de dossier",
    secteur: "telecoms",
    fonction: "service-client",
    probleme:
      "Les experts de niveau 2 passent une part importante de leur temps à reconstituer l'historique d'un cas et à chercher dans une base de connaissances en partie obsolète.",
    description:
      "L'assistant synthétise l'historique du ticket, les interventions passées sur le site et les incidents similaires, puis recherche les procédures applicables dans la base de connaissances en citant ses sources. L'expert mène le cas et décide de tout ; l'assistant signale aussi les articles contradictoires ou périmés qu'il rencontre.",
    solution: "assistant",
    autonomie: 1,
    leviers: ["delai", "qualite"],
    kpis: [
      "Temps de traitement moyen d'un cas de niveau 2",
      "Taux d'utilisation quotidienne par les experts",
      "Nombre d'articles obsolètes signalés puis corrigés",
    ],
    prerequis: [
      "Base de connaissances indexée, avec date de validité et propriétaire par article",
      "Accès en lecture à l'historique des tickets et des interventions",
      "Experts référents associés à la conception et à l'évaluation",
    ],
    risques: [
      "Réponses fondées sur des articles périmés si la base n'est pas assainie",
      "Adoption faible si l'assistant n'est pas intégré au poste de travail de l'expert",
    ],
    valeur: 3,
    faisabilite: 4,
    horizon: "gain-rapide",
  },
  {
    id: "telecoms-detection-predictive-pannes",
    titre: "Détection prédictive des pannes d'accès",
    secteur: "telecoms",
    fonction: "operations",
    probleme:
      "Les pannes sont découvertes quand le client appelle, alors que des signaux de dégradation étaient visibles sur le réseau plusieurs heures ou plusieurs jours avant.",
    description:
      "La solution analyse en continu les mesures de qualité de ligne, les alarmes des équipements et l'historique d'incidents pour repérer les accès en cours de dégradation. Elle produit une liste priorisée d'accès à risque, avec la cause probable et l'action préventive suggérée. L'exploitation décide des interventions ; aucune action sur le réseau n'est déclenchée automatiquement.",
    solution: "workflow",
    autonomie: 1,
    leviers: ["experience", "cout", "risque"],
    kpis: [
      "Part des incidents détectés avant l'appel du client",
      "Taux de fausses alertes",
      "Nombre d'incidents évités par intervention préventive",
    ],
    prerequis: [
      "Historique long et fiable des mesures de ligne, relié aux incidents constatés",
      "Collecte en flux des données de supervision",
      "Capacité d'intervention préventive dimensionnée côté exploitation",
    ],
    risques: [
      "Données insuffisantes ou mal étiquetées, premier motif d'échec de ce type de projet",
      "Fausses alertes qui saturent les équipes et discréditent l'outil",
    ],
    valeur: 4,
    faisabilite: 2,
    horizon: "pari",
  },
  {
    id: "telecoms-correlation-alarmes-supervision",
    titre: "Corrélation des alarmes et analyse de cause racine au centre de supervision",
    secteur: "telecoms",
    fonction: "operations",
    probleme:
      "Un incident réseau génère des centaines d'alarmes en cascade, et les opérateurs de supervision perdent un temps précieux à isoler la cause racine.",
    description:
      "Un agent regroupe les alarmes liées à un même événement en s'appuyant sur la topologie du réseau, les changements récents et les incidents passés. Il propose une cause racine probable, le périmètre de clients touchés et la fiche réflexe à appliquer, puis prépare le ticket d'incident. L'opérateur valide l'analyse et déclenche lui-même les actions sur le réseau.",
    solution: "agent",
    autonomie: 2,
    leviers: ["delai", "qualite", "risque"],
    kpis: [
      "Délai d'identification de la cause racine",
      "Durée moyenne de rétablissement des incidents réseau",
      "Nombre d'alarmes à traiter par opérateur",
    ],
    prerequis: [
      "Référentiel de topologie réseau à jour et interrogeable",
      "Accès aux flux d'alarmes et au journal des changements",
      "Fiches réflexes formalisées pour les incidents types",
    ],
    risques: [
      "Cause racine erronée qui oriente les équipes dans la mauvaise direction lors d'un incident majeur",
      "Topologie non fiable sur les segments de réseau les plus anciens",
    ],
    valeur: 4,
    faisabilite: 3,
    horizon: "coeur",
  },
  {
    id: "telecoms-plans-retention-comptes-pme",
    titre: "Préparation des plans de rétention des comptes PME à risque",
    secteur: "telecoms",
    fonction: "ventes-marketing",
    probleme:
      "Les commerciaux découvrent le risque de départ au moment de la demande de résiliation, trop tard pour agir, et n'ont pas le temps de préparer chaque compte.",
    description:
      "La solution croise les signaux de risque (incidents répétés, réclamations, échéance d'engagement, baisse d'usage) et rédige pour chaque compte à risque une note de situation et une proposition d'action dans la grille commerciale autorisée. Le commercial décide de l'offre et mène l'échange ; la proposition est tracée dans le CRM pour mesurer ce qui fonctionne.",
    solution: "assistant",
    autonomie: 2,
    leviers: ["revenu", "experience"],
    kpis: [
      "Taux de résiliation (churn) des comptes traités",
      "Taux de transformation des actions de rétention",
      "Revenu récurrent préservé",
    ],
    prerequis: [
      "Score ou signaux de risque de résiliation disponibles par compte",
      "Vue consolidée du compte : parc, incidents, facturation, engagements",
      "Grille des gestes commerciaux autorisés par segment",
    ],
    risques: [
      "Gestes commerciaux accordés à des clients qui ne seraient pas partis",
      "Signal de risque peu fiable, qui détourne les commerciaux des bons comptes",
    ],
    valeur: 4,
    faisabilite: 3,
    horizon: "coeur",
  },
  {
    id: "telecoms-controle-factures-entreprises",
    titre: "Contrôle des factures Entreprises avant émission",
    secteur: "telecoms",
    fonction: "finance",
    probleme:
      "Les erreurs de facturation sur les contrats sur mesure sont découvertes par le client et génèrent réclamations, avoirs et retards de paiement.",
    description:
      "Avant chaque cycle de facturation, la solution rapproche les factures des comptes Entreprises des conditions contractuelles, du parc réellement en service et des modifications récentes. Elle signale les écarts (ligne résiliée encore facturée, remise oubliée, tarif erroné), les justifie et prépare la correction. Le back-office facturation approuve ou rejette chaque correction ; aucun avoir n'est émis automatiquement.",
    solution: "workflow",
    autonomie: 2,
    leviers: ["qualite", "revenu", "experience"],
    kpis: [
      "Taux de factures contestées",
      "Montant des avoirs émis pour erreur",
      "Délai moyen de paiement des clients Entreprises",
    ],
    prerequis: [
      "Contrats et conditions particulières numérisés et exploitables",
      "Accès en lecture à la facturation et à l'inventaire du parc",
      "Processus de correction avant émission défini avec le back-office",
    ],
    risques: [
      "Conditions contractuelles hétérogènes ou non numérisées sur les contrats anciens",
      "Volume de faux écarts qui retarde le cycle de facturation",
    ],
    valeur: 4,
    faisabilite: 3,
    horizon: "coeur",
  },

  /* ---------------------------------------------------------------- */
  /* Banque                                                            */
  /* ---------------------------------------------------------------- */
  {
    id: "banque-dossiers-kyc-personnes-morales",
    titre: "Constitution et revue des dossiers KYC des personnes morales",
    secteur: "banque",
    fonction: "juridique-conformite",
    probleme:
      "L'entrée en relation et la revue périodique des clients entreprises mobilisent des analystes pendant des jours à collecter des pièces et à reconstituer les chaînes de détention.",
    description:
      "La solution lit les statuts, les extraits de registre et les pièces d'identité, reconstitue la chaîne de détention jusqu'aux bénéficiaires effectifs et contrôle les personnes identifiées contre les listes de sanctions et de personnes politiquement exposées. Elle produit un dossier pré-rempli signalant les pièces manquantes, les incohérences et une proposition de niveau de risque. L'analyste conformité vérifie, complète et valide ; lui seul arrête la classification du client.",
    solution: "workflow",
    autonomie: 2,
    leviers: ["delai", "cout", "risque"],
    kpis: [
      "Délai d'entrée en relation",
      "Nombre de dossiers traités par analyste",
      "Taux de dossiers conformes au contrôle de second niveau",
      "Stock de revues périodiques en retard",
    ],
    prerequis: [
      "Accès aux registres d'entreprises et aux listes de sanctions par API",
      "Politique d'acceptation des risques et grille de classification formalisées",
      "Gestion électronique des documents reliée à l'outil KYC",
    ],
    risques: [
      "Bénéficiaire effectif ou homonyme mal identifié, exposant la banque à une sanction du superviseur",
      "Piste d'audit insuffisante pour justifier les diligences en cas de contrôle",
      "Documents étrangers ou structures de détention complexes mal interprétés",
    ],
    valeur: 4,
    faisabilite: 3,
    horizon: "coeur",
  },
  {
    id: "banque-pre-instruction-alertes-lcb-ft",
    titre: "Pré-instruction des alertes de lutte contre le blanchiment",
    secteur: "banque",
    fonction: "juridique-conformite",
    probleme:
      "Les outils de surveillance des transactions produisent une grande majorité de fausses alertes que les analystes LCB-FT doivent pourtant instruire une à une.",
    description:
      "Pour chaque alerte, un agent rassemble le profil KYC du client, l'historique de ses opérations, ses contreparties et les alertes passées, puis rédige une analyse argumentée proposant le classement sans suite ou l'escalade. Chaque élément de l'analyse renvoie à sa source pour faciliter le contrôle. L'analyste lit, corrige et décide ; la déclaration de soupçon reste une décision entièrement humaine.",
    solution: "agent",
    autonomie: 2,
    leviers: ["cout", "risque", "delai"],
    kpis: [
      "Temps moyen d'instruction d'une alerte",
      "Stock d'alertes en attente",
      "Taux de concordance entre la proposition et la décision de l'analyste",
      "Qualité des dossiers au contrôle de second niveau",
    ],
    prerequis: [
      "Accès en lecture à l'outil de surveillance, au référentiel client et aux opérations",
      "Jeu d'alertes historiques avec leur décision et sa motivation",
      "Validation du dispositif par la conformité et le contrôle permanent",
    ],
    risques: [
      "Vrai cas de blanchiment classé sans suite : risque pénal et sanction réglementaire",
      "Analystes qui valident sans relire quand le volume est élevé",
      "Confidentialité des déclarations et secret bancaire à garantir de bout en bout",
    ],
    valeur: 5,
    faisabilite: 3,
    horizon: "coeur",
  },
  {
    id: "banque-instruction-credit-immobilier",
    titre: "Instruction des demandes de crédit immobilier",
    secteur: "banque",
    fonction: "operations",
    probleme:
      "Le délai entre le dépôt d'un dossier de crédit immobilier et l'édition de l'offre fait perdre des clients au profit de concurrents plus rapides.",
    description:
      "Des agents spécialisés se répartissent la collecte et le contrôle des pièces, l'analyse des revenus et des charges, la vérification du bien et des garanties, puis la préparation de la note de synthèse. Le système relance l'emprunteur pour les pièces manquantes et signale les incohérences. L'analyste crédit et le délégataire décident de l'octroi ; le système ne prononce ni accord ni refus.",
    solution: "multi-agents",
    autonomie: 2,
    leviers: ["delai", "revenu", "cout"],
    kpis: [
      "Délai entre dossier complet et offre de prêt",
      "Taux de transformation des demandes",
      "Nombre d'allers-retours avec l'emprunteur",
      "Nombre de dossiers instruits par analyste",
    ],
    prerequis: [
      "Outil d'instruction crédit ouvert par API",
      "Normes d'octroi et règles de délégation formalisées",
      "Jeu de dossiers historiques avec décision et motifs",
      "Analyse de conformité préalable sur l'usage de l'IA dans l'octroi de crédit",
    ],
    risques: [
      "Évaluation de la solvabilité de personnes physiques : usage à haut risque au sens de l'AI Act, décision humaine obligatoire",
      "Biais discriminatoires dans l'analyse des situations atypiques",
      "Pièces justificatives falsifiées non détectées",
    ],
    valeur: 5,
    faisabilite: 2,
    horizon: "pari",
  },
  {
    id: "banque-preparation-entretiens-conseiller",
    titre: "Préparation des entretiens du conseiller clientèle",
    secteur: "banque",
    fonction: "ventes-marketing",
    probleme:
      "Les conseillers arrivent en rendez-vous sans vision à jour de la situation du client, faute de temps pour consulter de multiples écrans.",
    description:
      "Avant chaque rendez-vous, l'assistant synthétise la situation du client : équipement, flux récents, événements de vie détectés, échéances de contrats, derniers échanges. Il suggère les sujets à aborder et prépare le compte rendu après l'entretien. Le conseiller reste seul responsable du conseil et de toute recommandation de produit.",
    solution: "assistant",
    autonomie: 1,
    leviers: ["revenu", "experience", "delai"],
    kpis: [
      "Temps de préparation par rendez-vous",
      "Nombre de rendez-vous par conseiller",
      "Taux d'équipement des clients rencontrés",
      "Satisfaction client après entretien",
    ],
    prerequis: [
      "Vue client consolidée accessible depuis le poste du conseiller",
      "Règles de protection de la clientèle et de devoir de conseil intégrées aux consignes",
      "Formation des conseillers à la relecture critique des synthèses",
    ],
    risques: [
      "Suggestion commerciale inadaptée au profil du client, constitutive d'un manquement au devoir de conseil",
      "Usage de données de paiement à des fins commerciales au-delà du consentement du client",
    ],
    valeur: 3,
    faisabilite: 4,
    horizon: "gain-rapide",
  },
  {
    id: "banque-traitement-reclamations-clients",
    titre: "Traitement des réclamations clients",
    secteur: "banque",
    fonction: "service-client",
    probleme:
      "Les réclamations sont traitées avec des délais et une qualité de réponse inégaux, alors que les délais de réponse sont encadrés et suivis par le superviseur.",
    description:
      "La solution classe la réclamation, rassemble les opérations et les échanges concernés, vérifie son bien-fondé au regard des conditions tarifaires et contractuelles, puis rédige un projet de réponse motivée. Le chargé de réclamations valide la réponse et décide de tout geste commercial. Les motifs sont agrégés pour alimenter l'analyse des causes racines.",
    solution: "workflow",
    autonomie: 2,
    leviers: ["delai", "qualite", "risque"],
    kpis: [
      "Délai moyen de réponse aux réclamations",
      "Part des réclamations traitées dans le délai réglementaire",
      "Taux de recours au médiateur",
      "Taux de réclamations réitérées",
    ],
    prerequis: [
      "Outil de gestion des réclamations ouvert par API",
      "Conditions générales et tarifaires versionnées et datées",
      "Grille de délégation des gestes commerciaux",
    ],
    risques: [
      "Réponse juridiquement inexacte engageant la banque",
      "Ton inadapté face à un client en situation de fragilité financière",
    ],
    valeur: 3,
    faisabilite: 4,
    horizon: "gain-rapide",
  },
  {
    id: "banque-contestations-operations-carte",
    titre: "Instruction des contestations d'opérations par carte",
    secteur: "banque",
    fonction: "service-client",
    probleme:
      "Chaque contestation d'opération par carte exige une instruction manuelle dans des délais réglementaires courts, avec des volumes en forte hausse du fait de la fraude.",
    description:
      "Un agent recueille la déclaration du client, analyse l'opération contestée (authentification, commerçant, habitudes de paiement) et qualifie le cas : fraude, litige commercial, opération oubliée. Il propose le remboursement ou la demande de pièces et prépare le dossier de rétrofacturation auprès du réseau de paiement. Un gestionnaire approuve chaque proposition ; tout refus de remboursement est motivé par lui.",
    solution: "agent",
    autonomie: 2,
    leviers: ["cout", "delai", "experience"],
    kpis: [
      "Délai de traitement d'une contestation",
      "Taux de recouvrement par rétrofacturation",
      "Coût de traitement par dossier",
      "Taux de contestations rouvertes",
    ],
    prerequis: [
      "Accès aux données d'autorisation et d'authentification des paiements",
      "Règles de rétrofacturation des réseaux de paiement formalisées",
      "Seuils de délégation et cas de validation renforcée définis",
    ],
    risques: [
      "Refus de remboursement injustifié, contraire aux obligations de la réglementation sur les services de paiement",
      "Fraude au remboursement exploitant un traitement trop automatique",
    ],
    valeur: 4,
    faisabilite: 3,
    horizon: "coeur",
  },
  {
    id: "banque-modernisation-code-coeur-bancaire",
    titre: "Rétro-documentation et modernisation du code du cœur bancaire",
    secteur: "banque",
    fonction: "it",
    probleme:
      "Les applications du cœur bancaire reposent sur un volume considérable de code ancien que de moins en moins d'experts maîtrisent, ce qui renchérit et ralentit chaque évolution.",
    description:
      "Des agents de développement analysent le code existant, en extraient les règles de gestion, produisent la documentation fonctionnelle et proposent une réécriture module par module, accompagnée de tests de non-régression. Les développeurs et les experts fonctionnels relisent chaque lot ; rien n'est mis en production sans revue humaine et campagne de tests complète.",
    solution: "agent",
    autonomie: 2,
    leviers: ["cout", "risque", "delai"],
    kpis: [
      "Part du patrimoine applicatif documenté",
      "Délai de mise en œuvre d'une évolution réglementaire",
      "Taux de couverture par les tests de non-régression",
      "Nombre d'anomalies détectées en recette par lot migré",
    ],
    prerequis: [
      "Accès au code source et aux jeux de données de test",
      "Environnement de test représentatif de la production",
      "Experts fonctionnels disponibles pour valider les règles de gestion extraites",
    ],
    risques: [
      "Règle de gestion mal comprise, à l'origine d'une erreur comptable en production",
      "Exigences de résilience opérationnelle applicables aux systèmes critiques",
      "Sous-estimation de l'effort de validation humaine",
    ],
    valeur: 4,
    faisabilite: 2,
    horizon: "pari",
  },
  {
    id: "banque-instruction-dossiers-succession",
    titre: "Instruction des dossiers de succession",
    secteur: "banque",
    fonction: "operations",
    probleme:
      "Le règlement d'une succession prend des mois, entre pièces manquantes et échanges avec les notaires, au moment où les familles sont le plus vulnérables.",
    description:
      "La solution lit l'acte de décès, l'acte de notoriété et les courriers du notaire, recense les avoirs et les contrats du défunt, puis établit la liste des pièces manquantes et des opérations à réaliser. Elle prépare les courriers aux héritiers et au notaire. Le gestionnaire de successions valide chaque courrier et exécute lui-même le déblocage des fonds.",
    solution: "workflow",
    autonomie: 2,
    leviers: ["delai", "experience", "cout"],
    kpis: [
      "Délai de règlement d'une succession",
      "Nombre d'échanges par dossier",
      "Nombre de dossiers traités par gestionnaire",
      "Nombre de réclamations liées aux successions",
    ],
    prerequis: [
      "Recensement fiable des avoirs par client dans les différents systèmes",
      "Modèles de courriers validés par le juridique",
      "Numérisation des pièces reçues par courrier",
    ],
    risques: [
      "Déblocage de fonds au profit d'une personne qui n'y a pas droit",
      "Maladresse de ton envers des proches endeuillés",
    ],
    valeur: 3,
    faisabilite: 4,
    horizon: "gain-rapide",
  },
  {
    id: "banque-memos-credit-entreprises",
    titre: "Rédaction des mémos de crédit entreprises",
    secteur: "banque",
    fonction: "operations",
    probleme:
      "Les analystes crédit consacrent l'essentiel de leur temps à saisir des comptes et à rédiger, au détriment de l'analyse du risque elle-même.",
    description:
      "L'assistant lit les liasses fiscales, les comptes consolidés et les informations sectorielles, calcule les ratios, repère les évolutions notables et rédige un projet de mémo de crédit selon la trame de la banque. Chaque chiffre renvoie au document source. L'analyste apporte son jugement, ajuste la notation et porte le dossier en comité, qui décide.",
    solution: "assistant",
    autonomie: 1,
    leviers: ["delai", "qualite"],
    kpis: [
      "Temps de production d'un mémo de crédit",
      "Délai de réponse au client entreprise",
      "Nombre de dossiers par analyste",
      "Taux d'erreurs de saisie relevées en revue",
    ],
    prerequis: [
      "Liasses et comptes disponibles sous forme numérique",
      "Trame de mémo et méthodologie de notation documentées",
      "Environnement conforme au secret bancaire pour les données des clients",
    ],
    risques: [
      "Chiffre mal extrait d'un document financier, qui fausse l'analyse",
      "Uniformisation des analyses et affaiblissement de l'esprit critique",
    ],
    valeur: 4,
    faisabilite: 4,
    horizon: "gain-rapide",
  },

  /* ---------------------------------------------------------------- */
  /* Assurance                                                         */
  /* ---------------------------------------------------------------- */
  {
    id: "assurance-ouverture-qualification-sinistres",
    titre: "Ouverture et qualification des déclarations de sinistre",
    secteur: "assurance",
    fonction: "service-client",
    probleme:
      "La déclaration de sinistre arrive par téléphone, courriel ou formulaire, et sa saisie manuelle retarde l'ouverture du dossier et multiplie les demandes de pièces.",
    description:
      "La solution lit la déclaration, les photos et le constat, extrait les circonstances, vérifie le contrat et les garanties en vigueur, puis ouvre le dossier dans l'outil de gestion. Elle demande à l'assuré les pièces manquantes et oriente le dossier vers la bonne filière. Les cas ambigus, corporels ou à fort enjeu sont transmis à un gestionnaire dès l'ouverture.",
    solution: "workflow",
    autonomie: 3,
    leviers: ["delai", "cout", "experience"],
    kpis: [
      "Délai d'ouverture du dossier",
      "Part des dossiers complets au premier échange",
      "Taux d'erreur d'orientation",
      "Satisfaction de l'assuré à la déclaration",
    ],
    prerequis: [
      "API d'écriture sur l'outil de gestion des sinistres",
      "Accès aux contrats, garanties et franchises en vigueur",
      "Règles d'orientation par filière formalisées",
    ],
    risques: [
      "Garantie mal interprétée dès l'ouverture, qui oriente le dossier à tort",
      "Assurés âgés ou en détresse mal servis par un parcours trop automatisé",
    ],
    valeur: 4,
    faisabilite: 4,
    horizon: "gain-rapide",
  },
  {
    id: "assurance-proposition-reglement-sinistres-simples",
    titre: "Proposition de règlement des sinistres habitation simples",
    secteur: "assurance",
    fonction: "operations",
    probleme:
      "Les sinistres simples et de faible montant attendent dans la même file que les dossiers complexes, alors que leur traitement est répétitif.",
    description:
      "Pour les sinistres de faible montant (dégât des eaux, bris de glace), un agent vérifie la garantie, contrôle les justificatifs et les devis, applique franchise et vétusté, puis prépare une proposition d'indemnisation motivée. Le gestionnaire approuve chaque proposition avant paiement ; tout refus ou toute réduction d'indemnité relève de lui seul.",
    solution: "agent",
    autonomie: 2,
    leviers: ["delai", "cout", "experience"],
    kpis: [
      "Délai entre déclaration et règlement",
      "Coût de gestion par sinistre",
      "Taux de réouverture des dossiers",
      "Écart entre la proposition et le montant finalement réglé",
    ],
    prerequis: [
      "Barèmes de vétusté et règles d'indemnisation formalisés",
      "Jeu de sinistres clos avec leurs pièces et le montant réglé",
      "Seuils de montant et critères d'éligibilité à la filière simple",
    ],
    risques: [
      "Décision d'indemnisation touchant une personne : validation humaine obligatoire, refus motivé par un gestionnaire",
      "Sur-indemnisation systématique passée inaperçue",
      "Devis ou factures falsifiés",
    ],
    valeur: 5,
    faisabilite: 3,
    horizon: "coeur",
  },
  {
    id: "assurance-gestion-sinistres-auto-materiels",
    titre: "Gestion de bout en bout des sinistres automobiles matériels",
    secteur: "assurance",
    fonction: "operations",
    probleme:
      "Un sinistre automobile matériel mobilise successivement gestionnaire, expert, réparateur et parfois l'assureur adverse, avec des temps morts à chaque passage de relais.",
    description:
      "Un système d'agents coordonne la détermination des responsabilités à partir du constat, le chiffrage des dommages sur photos, l'orientation vers un réparateur et le suivi de la réparation jusqu'au règlement. Un orchestrateur tient l'état du dossier et informe l'assuré. Le gestionnaire valide les responsabilités, les chiffrages et tout règlement ; l'expert intervient sur les cas complexes.",
    solution: "multi-agents",
    autonomie: 2,
    leviers: ["delai", "cout", "experience"],
    kpis: [
      "Durée de vie moyenne d'un dossier",
      "Coût moyen du sinistre et coût de gestion",
      "Part des dossiers sans reprise manuelle",
      "Satisfaction de l'assuré en fin de dossier",
    ],
    prerequis: [
      "Intégration avec les outils des experts et du réseau de réparateurs",
      "Historique de sinistres avec photos, chiffrages et responsabilités",
      "Règles des conventions d'indemnisation entre assureurs formalisées",
      "Supervision humaine outillée à chaque étape",
    ],
    risques: [
      "Erreur de responsabilité, aux conséquences sur le bonus-malus de l'assuré",
      "Chiffrage sur photos peu fiable pour les dommages non visibles",
      "Complexité d'intégration avec de nombreux partenaires",
    ],
    valeur: 5,
    faisabilite: 2,
    horizon: "pari",
  },
  {
    id: "assurance-detection-indices-fraude",
    titre: "Détection des indices de fraude et préparation du dossier d'enquête",
    secteur: "assurance",
    fonction: "juridique-conformite",
    probleme:
      "Les indices de fraude sont dispersés dans les pièces du dossier et échappent à des gestionnaires qui n'ont pas le temps de tout recouper.",
    description:
      "Un agent recoupe les déclarations, les pièces justificatives, l'historique de l'assuré et les sinistres similaires pour relever les incohérences : dates, montants, documents retouchés, intervenants récurrents. Il produit une note d'indices sourcée à destination de la cellule antifraude. L'enquêteur décide des suites ; aucun dossier n'est refusé ni aucun assuré mis en cause sur la seule base de cette note.",
    solution: "agent",
    autonomie: 1,
    leviers: ["cout", "risque"],
    kpis: [
      "Montant de fraude détectée et évitée",
      "Taux de dossiers signalés confirmés après enquête",
      "Délai d'instruction des dossiers suspects",
    ],
    prerequis: [
      "Historique de fraudes avérées et de fausses suspicions",
      "Accès transverse aux dossiers sinistres et à leurs pièces",
      "Procédure antifraude et cadre de protection des données validés",
    ],
    risques: [
      "Suspicion à tort d'un assuré de bonne foi, avec retard d'indemnisation",
      "Biais visant indirectement certaines populations ou zones géographiques",
      "Traitement de lutte contre la fraude soumis à un encadrement strict en matière de données personnelles",
    ],
    valeur: 4,
    faisabilite: 3,
    horizon: "coeur",
  },
  {
    id: "assurance-synthese-dossiers-dommage-corporel",
    titre: "Synthèse des dossiers de dommage corporel",
    secteur: "assurance",
    fonction: "operations",
    probleme:
      "Un dossier corporel grave contient des centaines de pages de rapports médicaux et d'expertise que le gestionnaire doit relire à chaque étape.",
    description:
      "L'assistant lit les rapports d'expertise médicale, les comptes rendus et les justificatifs, puis établit une chronologie, une synthèse par poste de préjudice et la liste des pièces manquantes ou contradictoires. Chaque élément renvoie à la page source. Le gestionnaire spécialisé et le médecin-conseil évaluent le préjudice et conduisent seuls la négociation.",
    solution: "assistant",
    autonomie: 1,
    leviers: ["delai", "qualite"],
    kpis: [
      "Temps de prise de connaissance d'un dossier",
      "Délai de présentation de l'offre d'indemnisation",
      "Nombre de dossiers suivis par gestionnaire",
    ],
    prerequis: [
      "Dossiers numérisés avec une reconnaissance de caractères de qualité",
      "Hébergement et habilitations adaptés aux données de santé",
      "Nomenclature des postes de préjudice utilisée comme trame",
    ],
    risques: [
      "Omission d'un élément médical déterminant pour l'évaluation du préjudice",
      "Données de santé : accès restreint et confidentialité médicale",
      "Délais légaux de présentation de l'offre à respecter quel que soit l'outil",
    ],
    valeur: 4,
    faisabilite: 3,
    horizon: "coeur",
  },
  {
    id: "assurance-preparation-souscription-risques-entreprises",
    titre: "Préparation de la souscription des risques d'entreprise",
    secteur: "assurance",
    fonction: "ventes-marketing",
    probleme:
      "Les souscripteurs reçoivent des demandes de courtiers volumineuses et hétérogènes, et répondent trop tard sur les affaires qui en valent la peine.",
    description:
      "Un agent lit la demande du courtier (questionnaires, rapports de visite de risque, états de sinistralité), extrait les caractéristiques du risque et les confronte aux règles de souscription et à l'appétit au risque. Il classe la demande par priorité, signale les points durs et prépare une base de cotation. Le souscripteur décide de l'acceptation, du tarif et des clauses.",
    solution: "agent",
    autonomie: 2,
    leviers: ["revenu", "delai", "qualite"],
    kpis: [
      "Délai de réponse au courtier",
      "Taux de transformation des cotations",
      "Nombre d'affaires étudiées par souscripteur",
      "Ratio sinistres à primes des affaires souscrites",
    ],
    prerequis: [
      "Guide de souscription et délégations à jour",
      "Historique des demandes avec décision et tarif",
      "Accès à l'outil de cotation et au référentiel des courtiers",
    ],
    risques: [
      "Facteur aggravant non détecté dans une pièce annexe",
      "Dérive de la politique de souscription si les propositions sont suivies sans recul",
    ],
    valeur: 4,
    faisabilite: 3,
    horizon: "coeur",
  },
  {
    id: "assurance-assistant-garanties-intermediaires",
    titre: "Réponses aux questions de garantie des agents et courtiers",
    secteur: "assurance",
    fonction: "ventes-marketing",
    probleme:
      "Les intermédiaires appellent les équipes de l'assureur pour vérifier ce qu'un contrat couvre, et attendent la réponse pendant que le client s'impatiente.",
    description:
      "L'assistant répond aux questions des intermédiaires sur les garanties, exclusions et franchises en s'appuyant sur les conditions générales et particulières applicables au contrat, avec citation de l'article. Il signale explicitement les cas où le texte ne permet pas de conclure et renvoie alors vers un souscripteur. Il ne prend aucun engagement de prise en charge.",
    solution: "assistant",
    autonomie: 1,
    leviers: ["delai", "experience", "cout"],
    kpis: [
      "Volume d'appels des intermédiaires vers les équipes internes",
      "Délai de réponse à une question de garantie",
      "Exactitude des réponses sur un jeu de questions de référence",
    ],
    prerequis: [
      "Conditions générales versionnées par produit et par date d'effet",
      "Accès aux conditions particulières du contrat concerné",
      "Jeu de questions-réponses validé par les experts produit",
    ],
    risques: [
      "Réponse erronée sur une exclusion, présentée ensuite au client comme un engagement",
      "Confusion entre versions successives des conditions générales",
    ],
    valeur: 3,
    faisabilite: 5,
    horizon: "gain-rapide",
  },
  {
    id: "assurance-actes-gestion-contrats",
    titre: "Traitement des actes de gestion courants sur les contrats",
    secteur: "assurance",
    fonction: "service-client",
    probleme:
      "Changements d'adresse, de véhicule ou de coordonnées bancaires et demandes d'attestation saturent les centres de gestion pour une valeur ajoutée faible.",
    description:
      "Un agent comprend la demande de l'assuré, vérifie son identité et les pièces fournies, puis réalise l'acte dans l'outil de gestion : avenant simple, attestation, mise à jour de coordonnées. Il agit seul sur une liste d'actes sans effet tarifaire significatif ; les actes qui modifient la prime au-delà d'un seuil et les résiliations sont préparés puis validés par un gestionnaire.",
    solution: "agent",
    autonomie: 3,
    leviers: ["cout", "delai", "experience"],
    kpis: [
      "Part des actes traités sans intervention humaine",
      "Délai de traitement d'un acte de gestion",
      "Taux d'erreur sur les avenants",
      "Coût par acte",
    ],
    prerequis: [
      "API d'écriture sur l'outil de gestion des contrats",
      "Liste des actes éligibles et seuils de validation",
      "Dispositif d'authentification de l'assuré",
    ],
    risques: [
      "Modification frauduleuse de coordonnées bancaires par usurpation d'identité",
      "Avenant erroné créant un défaut de garantie découvert au moment du sinistre",
    ],
    valeur: 3,
    faisabilite: 4,
    horizon: "gain-rapide",
  },
  {
    id: "assurance-recours-contre-tiers",
    titre: "Identification et exercice des recours contre les tiers responsables",
    secteur: "assurance",
    fonction: "finance",
    probleme:
      "Des recours possibles contre des tiers responsables ou leurs assureurs ne sont jamais exercés, faute de temps pour les repérer et les suivre.",
    description:
      "La solution passe en revue les sinistres réglés, repère ceux où la responsabilité d'un tiers est engagée et évalue les chances de recours au vu des pièces. Elle prépare la réclamation chiffrée et les relances selon un calendrier. Le gestionnaire de recours valide chaque envoi et arbitre les contestations.",
    solution: "workflow",
    autonomie: 2,
    leviers: ["revenu", "cout"],
    kpis: [
      "Montant des recours encaissés",
      "Taux de sinistres avec recours identifié",
      "Délai moyen d'encaissement d'un recours",
    ],
    prerequis: [
      "Dossiers sinistres clos accessibles avec leurs pièces",
      "Règles de recours et conventions entre assureurs formalisées",
      "Suivi des recours dans l'outil de gestion ou la comptabilité technique",
    ],
    risques: [
      "Recours engagés à tort, qui dégradent la relation avec les autres assureurs",
      "Prescription dépassée faute d'un stock traité dans le bon ordre",
    ],
    valeur: 3,
    faisabilite: 4,
    horizon: "gain-rapide",
  },

  /* ---------------------------------------------------------------- */
  /* Distribution                                                      */
  /* ---------------------------------------------------------------- */
  {
    id: "distribution-enrichissement-fiches-produit",
    titre: "Production et enrichissement des fiches produit",
    secteur: "distribution",
    fonction: "ventes-marketing",
    probleme:
      "Des milliers de références sont mises en ligne avec des fiches incomplètes ou pauvres, ce qui pénalise le référencement, la conversion et le taux de retour.",
    description:
      "À partir des données fournisseur, des visuels et des fiches techniques, la solution rédige titres, descriptions et attributs normalisés, selon la charte de l'enseigne et les règles de chaque catégorie. Les fiches des catégories courantes sont publiées après contrôles automatiques ; les catégories réglementées (alimentaire, cosmétique, jouet) passent par une validation humaine.",
    solution: "workflow",
    autonomie: 3,
    leviers: ["revenu", "cout", "delai"],
    kpis: [
      "Délai de mise en ligne d'une nouvelle référence",
      "Taux de complétude des attributs",
      "Taux de conversion des fiches enrichies",
      "Taux de retour pour produit non conforme à la description",
    ],
    prerequis: [
      "Référentiel produit ouvert par API",
      "Charte éditoriale et taxonomie d'attributs par catégorie",
      "Données fournisseur structurées a minima",
    ],
    risques: [
      "Allégation ou caractéristique inventée, engageant la responsabilité de l'enseigne",
      "Mentions obligatoires erronées sur les produits réglementés (allergènes, composition)",
    ],
    valeur: 3,
    faisabilite: 5,
    horizon: "gain-rapide",
  },
  {
    id: "distribution-suivi-retours-commandes",
    titre: "Traitement autonome des demandes de suivi et de retour de commande",
    secteur: "distribution",
    fonction: "service-client",
    probleme:
      "Où est ma commande, comment la retourner, quand serai-je remboursé : ces demandes simples saturent le service client, surtout en période de pic.",
    description:
      "Un agent conversationnel identifie le client et la commande, interroge le système de gestion des commandes et le transporteur, puis répond et agit : replanifier une livraison, générer une étiquette de retour, déclencher un remboursement dans les limites de la politique commerciale. Les litiges, les montants élevés et les clients mécontents sont transférés à un conseiller avec le contexte complet.",
    solution: "agent",
    autonomie: 3,
    leviers: ["cout", "experience", "delai"],
    kpis: [
      "Part des demandes résolues sans conseiller",
      "Délai de résolution",
      "Satisfaction client après contact",
      "Coût par contact",
    ],
    prerequis: [
      "API du système de gestion des commandes et des transporteurs",
      "Politique de retour et de remboursement exprimée en règles",
      "Plafonds d'action autonome et procédure de transfert à un conseiller",
    ],
    risques: [
      "Remboursements abusifs obtenus en manipulant l'agent",
      "Promesse de livraison erronée faute de données transporteur fiables",
    ],
    valeur: 4,
    faisabilite: 4,
    horizon: "gain-rapide",
  },
  {
    id: "distribution-ajustement-commandes-reapprovisionnement",
    titre: "Ajustement des commandes de réapprovisionnement des magasins",
    secteur: "distribution",
    fonction: "achats-supply",
    probleme:
      "Les propositions de commande automatiques ignorent les événements locaux et les approvisionneurs n'ont pas le temps de les corriger référence par référence, d'où ruptures et surstocks.",
    description:
      "Un agent examine les propositions du moteur de prévision à la lumière des stocks réels, des promotions, de la météo, des événements locaux et des remontées des magasins. Il propose des ajustements motivés, que l'approvisionneur valide par lot. Seules les corrections mineures, dans une plage fixée à l'avance, pourront être appliquées sans validation une fois la fiabilité démontrée.",
    solution: "agent",
    autonomie: 2,
    leviers: ["revenu", "cout", "qualite"],
    kpis: [
      "Taux de rupture en linéaire",
      "Niveau de stock et couverture en jours",
      "Démarque liée au surstock",
      "Part des propositions acceptées sans modification",
    ],
    prerequis: [
      "Prévisions de ventes et stocks magasin fiables au niveau de la référence",
      "API de l'outil de réapprovisionnement",
      "Calendrier promotionnel et données d'événements locaux accessibles",
    ],
    risques: [
      "Stocks théoriques faux, qui rendent toute recommandation inopérante",
      "Erreur de commande à grande échelle, coûteuse sur les produits frais",
    ],
    valeur: 5,
    faisabilite: 3,
    horizon: "coeur",
  },
  {
    id: "distribution-preparation-negociations-fournisseurs",
    titre: "Préparation des négociations annuelles avec les fournisseurs",
    secteur: "distribution",
    fonction: "achats-supply",
    probleme:
      "Les acheteurs préparent leurs négociations dans l'urgence, sans exploiter toutes les données de performance du fournisseur ni l'historique des engagements.",
    description:
      "L'assistant compile pour chaque fournisseur l'évolution des ventes et des marges, le taux de service, les pénalités, les engagements de l'accord précédent et l'évolution des cours des matières premières. Il rédige un dossier de négociation avec arguments, contre-arguments probables et scénarios chiffrés. L'acheteur fixe sa stratégie et négocie lui-même.",
    solution: "assistant",
    autonomie: 1,
    leviers: ["revenu", "delai"],
    kpis: [
      "Temps de préparation d'un dossier de négociation",
      "Gain de marge négocié par rapport à l'objectif",
      "Part des fournisseurs négociés avec un dossier complet",
    ],
    prerequis: [
      "Données de performance fournisseur consolidées (ventes, marge, taux de service)",
      "Accords commerciaux précédents numérisés",
      "Indices de cours des matières premières par catégorie",
    ],
    risques: [
      "Chiffre erroné utilisé en négociation, qui décrédibilise l'acheteur",
      "Confidentialité des conditions commerciales et cadre légal des relations entre fournisseurs et distributeurs",
    ],
    valeur: 4,
    faisabilite: 4,
    horizon: "gain-rapide",
  },
  {
    id: "distribution-pilotage-prix-promotions",
    titre: "Pilotage coordonné des prix et des promotions par catégorie",
    secteur: "distribution",
    fonction: "ventes-marketing",
    probleme:
      "Prix, promotions et assortiment sont pilotés par des équipes séparées, avec des opérations qui se cannibalisent et dont la rentabilité réelle est rarement mesurée.",
    description:
      "Des agents spécialisés analysent l'élasticité, les prix concurrents, les stocks et les accords fournisseurs, puis construisent ensemble des scénarios de prix et de plan promotionnel par catégorie, avec l'effet attendu sur le chiffre d'affaires et la marge. Le responsable de catégorie arbitre et valide chaque plan ; aucun prix n'est modifié sans son accord.",
    solution: "multi-agents",
    autonomie: 2,
    leviers: ["revenu", "qualite"],
    kpis: [
      "Marge par catégorie",
      "Rentabilité incrémentale des opérations promotionnelles",
      "Indice de prix face aux concurrents",
      "Temps de construction d'un plan promotionnel",
    ],
    prerequis: [
      "Historique des ventes, des prix et des promotions au niveau de la référence et du magasin",
      "Relevés de prix concurrents réguliers",
      "Modèles d'élasticité validés par les équipes de tarification",
      "Processus d'arbitrage clair entre achats, marketing et magasins",
    ],
    risques: [
      "Erreur de prix diffusée à grande échelle, en magasin et en ligne",
      "Règles légales sur les promotions et la revente à perte",
      "Organisation en silos qui refuse l'arbitrage commun",
    ],
    valeur: 5,
    faisabilite: 2,
    horizon: "pari",
  },
  {
    id: "distribution-conseiller-achat-conversationnel",
    titre: "Conseiller d'achat conversationnel sur le site marchand",
    secteur: "distribution",
    fonction: "ventes-marketing",
    probleme:
      "Sur les catégories techniques, les clients abandonnent leur panier faute de trouver le produit adapté à leur besoin parmi des centaines de références.",
    description:
      "Un agent dialogue avec le client pour comprendre son besoin, interroge le catalogue, les stocks et les avis, puis recommande quelques produits en expliquant ses choix et les compromis. Il compose le panier et propose les accessoires compatibles, en s'en tenant strictement aux informations du catalogue. Sur demande ou en cas de doute, il passe la main à un vendeur à distance.",
    solution: "agent",
    autonomie: 3,
    leviers: ["revenu", "experience"],
    kpis: [
      "Taux de conversion des sessions assistées",
      "Panier moyen",
      "Taux de retour des produits recommandés",
      "Satisfaction après achat",
    ],
    prerequis: [
      "Catalogue aux attributs riches et fiables",
      "Stocks et prix accessibles en temps réel",
      "Jeu d'évaluation des recommandations construit avec les vendeurs experts",
    ],
    risques: [
      "Recommandation d'un produit inadapté ou incompatible, source de retours",
      "Affirmation inexacte sur un produit, engageante vis-à-vis du consommateur",
      "Biais vers les produits à forte marge, perçu comme une tromperie",
    ],
    valeur: 4,
    faisabilite: 3,
    horizon: "coeur",
  },
  {
    id: "distribution-reduction-demarque-frais",
    titre: "Réduction de la démarque sur les produits frais",
    secteur: "distribution",
    fonction: "operations",
    probleme:
      "Les produits frais approchant de leur date limite sont remisés trop tard ou jetés, et la démarque pèse lourdement sur la marge des magasins.",
    description:
      "Chaque jour, la solution croise les stocks par date limite de consommation, les prévisions de ventes et la fréquentation attendue pour recommander, rayon par rayon, les remises à date courte, les transferts et les dons aux associations. Le chef de rayon valide la liste sur son terminal, ce qui lance l'étiquetage. Les résultats nourrissent ensuite les recommandations de commande.",
    solution: "workflow",
    autonomie: 2,
    leviers: ["cout", "revenu", "risque"],
    kpis: [
      "Taux de démarque connue sur le frais",
      "Part des produits à date courte vendus plutôt que jetés",
      "Volume donné aux associations",
      "Temps passé par le chef de rayon sur la gestion des dates",
    ],
    prerequis: [
      "Suivi des stocks par lot ou par date limite",
      "Prévisions de ventes par magasin et par jour",
      "Terminaux en rayon reliés à l'étiquetage",
    ],
    risques: [
      "Stocks par date indisponibles dans une grande partie des systèmes magasin",
      "Sécurité alimentaire : aucun produit périmé ne doit rester en rayon",
      "Charge supplémentaire pour les équipes si l'outil est mal intégré à leur routine",
    ],
    valeur: 4,
    faisabilite: 3,
    horizon: "coeur",
  },
  {
    id: "distribution-litiges-reception-fournisseurs",
    titre: "Résolution des écarts de réception et des litiges fournisseurs",
    secteur: "distribution",
    fonction: "finance",
    probleme:
      "Les écarts entre commande, réception et facture bloquent des milliers de factures et nourrissent des litiges interminables avec les fournisseurs.",
    description:
      "Un agent rapproche bon de commande, bon de réception et facture, qualifie l'écart (prix, quantité, casse, retard) et applique l'accord commercial pour proposer la résolution : avoir à demander, pénalité logistique, régularisation. Il prépare le courrier au fournisseur avec les justificatifs. Le comptable fournisseurs valide chaque résolution avant envoi.",
    solution: "agent",
    autonomie: 2,
    leviers: ["cout", "delai", "qualite"],
    kpis: [
      "Stock de factures bloquées",
      "Délai de résolution d'un litige",
      "Montant des avoirs et pénalités récupérés",
      "Respect des délais de paiement fournisseurs",
    ],
    prerequis: [
      "Accès à l'ERP : commandes, réceptions, factures",
      "Accords commerciaux et barèmes de pénalités numérisés",
      "Règles de validation définies avec la comptabilité et les achats",
    ],
    risques: [
      "Pénalités appliquées à tort, qui dégradent la relation avec le fournisseur",
      "Encadrement légal des pénalités logistiques et des délais de paiement",
    ],
    valeur: 3,
    faisabilite: 4,
    horizon: "gain-rapide",
  },
  {
    id: "distribution-analyse-avis-clients",
    titre: "Analyse des avis et verbatims clients pour le pilotage de l'offre",
    secteur: "distribution",
    fonction: "produit-rd",
    probleme:
      "Des milliers d'avis, de motifs de retour et de verbatims restent inexploités, et les défauts d'un produit sont repérés après des semaines de ventes.",
    description:
      "La solution lit en continu les avis, les motifs de retour et les contacts au service client, les classe par produit et par thème, détecte les signaux émergents (défaut récurrent, taille mal indiquée, notice incomprise) et produit une synthèse hebdomadaire par catégorie. Elle n'engage aucune action : les équipes offre et qualité décident des suites.",
    solution: "workflow",
    autonomie: 1,
    leviers: ["qualite", "experience"],
    kpis: [
      "Délai de détection d'un défaut produit",
      "Taux de retour sur les références signalées",
      "Nombre de décisions d'offre appuyées sur les synthèses",
    ],
    prerequis: [
      "Flux d'avis, de retours et de contacts centralisés et reliés à la référence produit",
      "Taxonomie de thèmes validée par les équipes offre et qualité",
      "Destinataires désignés pour agir sur les alertes",
    ],
    risques: [
      "Synthèses que personne n'exploite, faute de responsable désigné",
      "Surinterprétation de signaux reposant sur quelques avis",
    ],
    valeur: 3,
    faisabilite: 5,
    horizon: "gain-rapide",
  },

  /* ---------------------------------------------------------------- */
  /* Industrie                                                         */
  /* ---------------------------------------------------------------- */
  {
    id: "industrie-assistant-diagnostic-maintenance",
    titre: "Assistant de diagnostic de panne pour les techniciens de maintenance",
    secteur: "industrie",
    fonction: "operations",
    probleme:
      "Face à une panne, le technicien cherche dans des classeurs et des historiques épars, et le savoir des anciens part à la retraite avec eux.",
    description:
      "Depuis sa tablette, le technicien décrit le symptôme ; l'assistant interroge l'historique de la GMAO, la documentation constructeur, les schémas et les retours d'expérience, puis propose les causes probables classées, les contrôles à effectuer et la gamme d'intervention. Le technicien diagnostique et intervient ; son compte rendu, dicté, enrichit la base.",
    solution: "assistant",
    autonomie: 1,
    leviers: ["delai", "qualite", "cout"],
    kpis: [
      "Temps moyen de réparation (MTTR)",
      "Taux de rendement synthétique (TRS) des lignes concernées",
      "Taux de pannes résolues à la première intervention",
      "Qualité des comptes rendus d'intervention",
    ],
    prerequis: [
      "Historique d'interventions de la GMAO exploitable",
      "Documentation technique numérisée, schémas compris",
      "Tablettes ou terminaux utilisables en atelier",
    ],
    risques: [
      "Consigne erronée sur un équipement dangereux : les règles de consignation et de sécurité priment toujours",
      "Comptes rendus historiques trop pauvres pour être utiles",
    ],
    valeur: 4,
    faisabilite: 4,
    horizon: "gain-rapide",
  },
  {
    id: "industrie-planification-maintenance-predictive",
    titre: "Planification des interventions issues de la maintenance prédictive",
    secteur: "industrie",
    fonction: "operations",
    probleme:
      "Les alertes de maintenance prédictive s'accumulent sans être converties en interventions planifiées au bon moment, et la panne finit par survenir.",
    description:
      "Un agent reçoit les alertes des modèles de surveillance, évalue la criticité de l'équipement, vérifie la disponibilité des pièces et des compétences, et cherche le meilleur créneau dans le plan de production. Il prépare l'ordre de travail complet dans la GMAO et la réservation des pièces. Le responsable maintenance approuve chaque ordre et arbitre avec la production.",
    solution: "agent",
    autonomie: 2,
    leviers: ["cout", "qualite", "delai"],
    kpis: [
      "Taux d'arrêts non planifiés",
      "Part de la maintenance préventive et prédictive dans le total",
      "Délai entre alerte et intervention",
      "Taux de rendement synthétique (TRS)",
    ],
    prerequis: [
      "Modèles de détection fiables sur les équipements critiques",
      "GMAO, stock de pièces et planning de production accessibles par API",
      "Classement de criticité des équipements partagé entre maintenance et production",
    ],
    risques: [
      "Fausses alertes entraînant des arrêts inutiles et une perte de confiance",
      "Arbitrage entre production et maintenance non tranché dans l'organisation",
    ],
    valeur: 5,
    faisabilite: 3,
    horizon: "coeur",
  },
  {
    id: "industrie-analyse-non-conformites",
    titre: "Analyse des non-conformités et rédaction des rapports 8D",
    secteur: "industrie",
    fonction: "operations",
    probleme:
      "Chaque non-conformité déclenche une analyse de causes longue à documenter, et les mêmes défauts réapparaissent faute d'exploiter les analyses passées.",
    description:
      "La solution lit la fiche de non-conformité et les données du lot (paramètres de procédé, contrôles, matières), puis recherche les cas similaires déjà traités. Elle propose des hypothèses de causes racines, des actions de sécurisation et un projet de rapport 8D. L'ingénieur qualité conduit l'analyse, tranche les causes et valide le rapport transmis au client.",
    solution: "workflow",
    autonomie: 1,
    leviers: ["qualite", "delai", "cout"],
    kpis: [
      "Délai de clôture d'une non-conformité",
      "Taux de récurrence des défauts",
      "Coût de la non-qualité",
      "Délai de réponse aux réclamations clients",
    ],
    prerequis: [
      "Historique de non-conformités et de rapports 8D numérisé",
      "Traçabilité des lots reliée aux paramètres de procédé",
      "Trame 8D et exigences clients formalisées",
    ],
    risques: [
      "Cause racine séduisante mais fausse, qui laisse le défaut se reproduire",
      "Rapport transmis au client sans relecture, engageant contractuellement l'entreprise",
    ],
    valeur: 3,
    faisabilite: 4,
    horizon: "gain-rapide",
  },
  {
    id: "industrie-reponse-appels-offres-techniques",
    titre: "Réponse aux appels d'offres techniques et chiffrage des affaires",
    secteur: "industrie",
    fonction: "ventes-marketing",
    probleme:
      "Répondre à un appel d'offres mobilise le bureau d'études pendant des semaines pour décortiquer le cahier des charges, et certaines consultations sont abandonnées faute de temps.",
    description:
      "La solution décompose le cahier des charges en exigences, établit la matrice de conformité, retrouve les affaires comparables et prépare un premier chiffrage à partir des nomenclatures et des temps passés. Elle rédige le mémoire technique selon la trame de l'entreprise. Le responsable d'affaire et le bureau d'études corrigent, arbitrent les écarts et engagent l'offre.",
    solution: "workflow",
    autonomie: 2,
    leviers: ["revenu", "delai"],
    kpis: [
      "Délai de réponse à un appel d'offres",
      "Nombre d'offres remises",
      "Taux de succès des offres",
      "Écart entre le chiffrage initial et le coût réel de l'affaire",
    ],
    prerequis: [
      "Base des affaires passées avec chiffrage et coûts réels",
      "Nomenclatures et temps standards accessibles",
      "Bibliothèque de mémoires techniques de référence",
    ],
    risques: [
      "Exigence contractuelle omise, découverte en cours d'exécution",
      "Chiffrage sous-estimé, qui engage la marge de l'affaire",
      "Confidentialité des documents clients, parfois soumis à des restrictions d'exportation",
    ],
    valeur: 4,
    faisabilite: 3,
    horizon: "coeur",
  },
  {
    id: "industrie-gestion-retards-fournisseurs",
    titre: "Gestion des retards et des ruptures d'approvisionnement",
    secteur: "industrie",
    fonction: "achats-supply",
    probleme:
      "Les approvisionneurs découvrent les retards des fournisseurs trop tard et passent leurs journées à relancer, pendant que les lignes s'arrêtent faute de composants.",
    description:
      "Un agent surveille les accusés de réception, les avis d'expédition et les encours, relance seul les fournisseurs sur les commandes à risque et met à jour les dates dans l'ERP. Pour les ruptures avérées, il évalue l'effet sur le plan de production et propose des parades : source alternative, changement de mode de transport, réordonnancement. L'approvisionneur décide de toute parade qui engage un coût.",
    solution: "agent",
    autonomie: 3,
    leviers: ["delai", "cout", "risque"],
    kpis: [
      "Taux de service des fournisseurs (OTIF)",
      "Nombre d'arrêts de ligne pour manque de pièces",
      "Délai de détection d'un retard",
      "Coût des transports exceptionnels",
    ],
    prerequis: [
      "Encours de commandes et besoins nets à jour dans l'ERP",
      "Canal d'échange structuré avec les fournisseurs (portail, EDI ou messagerie)",
      "Liste des sources alternatives homologuées",
    ],
    risques: [
      "Dates fournisseurs non fiables, qui propagent des erreurs dans la planification",
      "Relances automatiques mal vécues par des fournisseurs stratégiques",
    ],
    valeur: 4,
    faisabilite: 3,
    horizon: "coeur",
  },
  {
    id: "industrie-tracabilite-exigences-conception",
    titre: "Analyse et traçabilité des exigences en conception",
    secteur: "industrie",
    fonction: "produit-rd",
    probleme:
      "Les spécifications clients et les normes applicables représentent des milliers d'exigences, dont certaines sont oubliées ou se révèlent contradictoires en fin de développement.",
    description:
      "L'assistant extrait les exigences des cahiers des charges et des normes, les classe, détecte les doublons, les ambiguïtés et les contradictions, puis propose leur rattachement aux éléments de conception et aux essais de validation. Les ingénieurs système valident chaque exigence et chaque lien ; l'outil signale ensuite les conséquences de toute modification.",
    solution: "assistant",
    autonomie: 1,
    leviers: ["qualite", "delai", "risque"],
    kpis: [
      "Nombre d'exigences découvertes tardivement",
      "Temps d'analyse d'un nouveau cahier des charges",
      "Taux de couverture des exigences par les essais",
      "Nombre de modifications de conception en phase tardive",
    ],
    prerequis: [
      "Outil de gestion des exigences ou référentiel structuré",
      "Normes et spécifications accessibles sous forme numérique",
      "Ingénieurs système disponibles pour valider les extractions",
    ],
    risques: [
      "Exigence de sécurité mal interprétée dans un secteur soumis à certification",
      "Confiance excessive dans l'exhaustivité de l'extraction",
    ],
    valeur: 3,
    faisabilite: 4,
    horizon: "gain-rapide",
  },
  {
    id: "industrie-replanification-production-aleas",
    titre: "Replanification de la production face aux aléas",
    secteur: "industrie",
    fonction: "operations",
    probleme:
      "Panne machine, rupture de composant ou commande urgente : chaque aléa oblige à refaire le plan à la main, avec des arbitrages sous-optimaux entre ateliers.",
    description:
      "Des agents représentant l'ordonnancement, la maintenance, les approvisionnements et la qualité évaluent ensemble l'effet d'un aléa et construisent des scénarios de replanification en s'appuyant sur le moteur d'ordonnancement. Ils chiffrent pour chaque scénario les retards clients, les coûts et les risques. Le responsable de production choisit le scénario et lance son exécution.",
    solution: "multi-agents",
    autonomie: 2,
    leviers: ["delai", "cout", "experience"],
    kpis: [
      "Taux de service client (OTIF)",
      "Temps de replanification après un aléa",
      "Taux de rendement synthétique (TRS)",
      "Niveau des encours de production",
    ],
    prerequis: [
      "Système de pilotage de la production et ERP ouverts et fiables",
      "Moteur d'ordonnancement interrogeable par les agents",
      "Données en temps réel sur l'état des machines et des stocks",
      "Règles de priorité entre clients explicitées",
    ],
    risques: [
      "Données d'atelier insuffisamment fiables pour une décision en temps réel",
      "Plan instable, modifié trop souvent pour être suivi par les équipes",
      "Complexité technique disproportionnée pour des ateliers peu variables",
    ],
    valeur: 5,
    faisabilite: 2,
    horizon: "pari",
  },
  {
    id: "industrie-documentation-technique-instructions",
    titre: "Production de la documentation technique et des instructions de travail",
    secteur: "industrie",
    fonction: "produit-rd",
    probleme:
      "Notices, manuels de maintenance et instructions de travail sont rédigés tardivement, mis à jour avec retard après chaque modification et traduits à grands frais.",
    description:
      "À partir des données de conception, des nomenclatures et des modifications techniques, la solution rédige ou met à jour les documents concernés, les décline par variante de produit et les traduit. Elle dresse la liste des documents touchés par chaque modification. Les rédacteurs techniques et les méthodes relisent et approuvent avant diffusion.",
    solution: "workflow",
    autonomie: 2,
    leviers: ["cout", "delai", "qualite"],
    kpis: [
      "Délai de mise à jour documentaire après une modification technique",
      "Coût de production et de traduction par document",
      "Nombre d'écarts entre documentation et produit relevés en audit",
    ],
    prerequis: [
      "Données de conception et nomenclatures accessibles",
      "Gabarits documentaires et terminologie maîtrisée",
      "Circuit d'approbation documentaire défini",
    ],
    risques: [
      "Instruction erronée touchant à la sécurité des opérateurs ou des utilisateurs",
      "Exigences réglementaires sur les notices (sécurité des machines, marquage)",
    ],
    valeur: 3,
    faisabilite: 4,
    horizon: "gain-rapide",
  },
  {
    id: "industrie-support-apres-vente-equipements",
    titre: "Support technique après-vente des équipements installés",
    secteur: "industrie",
    fonction: "service-client",
    probleme:
      "Les clients dont un équipement est à l'arrêt attendent qu'un expert se libère, alors que chaque heure d'immobilisation leur coûte cher.",
    description:
      "Un agent analyse la demande du client, consulte la configuration exacte de l'équipement installé, son historique et, quand elle existe, sa télémétrie, puis prépare un guide de dépannage pas à pas et la liste des pièces de rechange nécessaires. Le technicien de support valide la réponse avant envoi au client. Les cas touchant à la sécurité ou à la garantie sont traités par un expert.",
    solution: "agent",
    autonomie: 2,
    leviers: ["experience", "revenu", "delai"],
    kpis: [
      "Délai de remise en service chez le client",
      "Taux de résolution à distance",
      "Chiffre d'affaires pièces et services",
      "Satisfaction des clients sous contrat de service",
    ],
    prerequis: [
      "Base installée connue : configuration et historique par numéro de série",
      "Documentation de dépannage et catalogue de pièces structurés",
      "Accès à la télémétrie des équipements connectés",
    ],
    risques: [
      "Conseil de dépannage dangereux pour l'opérateur du client",
      "Responsabilité engagée en cas d'erreur sur un équipement sous garantie",
    ],
    valeur: 4,
    faisabilite: 3,
    horizon: "coeur",
  },

  /* ---------------------------------------------------------------- */
  /* Énergie                                                           */
  /* ---------------------------------------------------------------- */
  {
    id: "energie-reclamations-facturation",
    titre: "Instruction des réclamations de facturation",
    secteur: "energie",
    fonction: "service-client",
    probleme:
      "Les réclamations sur facture (index estimé, régularisation, changement de compteur) demandent une enquête dans plusieurs systèmes et dépassent souvent les délais de réponse.",
    description:
      "Un agent reconstitue l'historique du point de livraison : relevés, index, changements d'offre, interventions, paiements. Il identifie l'origine de l'anomalie, calcule la rectification et rédige la réponse qui explique le calcul. Le conseiller valide la réponse et la rectification avant envoi ; les cas relevant du gestionnaire de réseau lui sont transmis avec le dossier.",
    solution: "agent",
    autonomie: 2,
    leviers: ["delai", "cout", "experience"],
    kpis: [
      "Délai de traitement d'une réclamation",
      "Taux de réclamations réitérées",
      "Taux de saisine du médiateur",
      "Coût par réclamation",
    ],
    prerequis: [
      "Accès aux données de comptage, de facturation et de contrat par point de livraison",
      "Règles de facturation et de régularisation formalisées",
      "Circuit d'échange défini avec le gestionnaire de réseau",
    ],
    risques: [
      "Rectification erronée, qui aggrave le litige avec le client",
      "Règles protectrices du consommateur sur les rattrapages de facturation",
    ],
    valeur: 4,
    faisabilite: 4,
    horizon: "gain-rapide",
  },
  {
    id: "energie-instruction-demandes-raccordement",
    titre: "Instruction des demandes de raccordement au réseau",
    secteur: "energie",
    fonction: "operations",
    probleme:
      "Les demandes de raccordement, portées par l'essor des renouvelables et de la mobilité électrique, s'accumulent et les délais d'instruction s'allongent.",
    description:
      "La solution contrôle la complétude du dossier, extrait les caractéristiques du projet, vérifie la cohérence avec les capacités d'accueil du réseau et prépare les éléments de la proposition technique et financière à partir des barèmes. Elle prépare aussi la demande de pièces manquantes au demandeur. Le chargé d'études valide la solution technique et le chiffrage.",
    solution: "workflow",
    autonomie: 2,
    leviers: ["delai", "experience", "cout"],
    kpis: [
      "Délai d'envoi de la proposition de raccordement",
      "Part des dossiers complets à la première soumission",
      "Nombre de dossiers instruits par chargé d'études",
      "Respect des délais réglementaires",
    ],
    prerequis: [
      "Données de capacité d'accueil et de topologie du réseau accessibles",
      "Barèmes de raccordement formalisés",
      "Portail de dépôt des demandes relié à l'outil d'instruction",
    ],
    risques: [
      "Erreur de dimensionnement se traduisant par des surcoûts de travaux",
      "Procédure encadrée par le régulateur : égalité de traitement et traçabilité des demandes",
    ],
    valeur: 4,
    faisabilite: 3,
    horizon: "coeur",
  },
  {
    id: "energie-priorisation-maintenance-ouvrages",
    titre: "Exploitation des rapports d'inspection et priorisation de la maintenance des ouvrages",
    secteur: "energie",
    fonction: "operations",
    probleme:
      "Les inspections de lignes, de postes et de canalisations produisent des volumes de photos et de rapports que les équipes ne parviennent pas à exploiter à temps.",
    description:
      "Un agent analyse les rapports et les images d'inspection, qualifie les anomalies selon le référentiel technique et les rapproche de l'historique de l'ouvrage et de sa criticité pour le réseau. Il propose un classement des interventions et des regroupements de chantiers. Les experts de maintenance valident la qualification des anomalies et arrêtent le programme.",
    solution: "agent",
    autonomie: 1,
    leviers: ["risque", "cout", "qualite"],
    kpis: [
      "Délai entre inspection et décision de maintenance",
      "Taux d'incidents sur les ouvrages inspectés",
      "Part du programme de maintenance fondée sur l'état réel des ouvrages",
      "Durée moyenne de coupure par client",
    ],
    prerequis: [
      "Images et rapports d'inspection centralisés et géolocalisés",
      "Référentiel de classification des anomalies",
      "Base patrimoniale des ouvrages à jour",
    ],
    risques: [
      "Anomalie critique non détectée sur un ouvrage : enjeu de sécurité des personnes et de continuité de service",
      "Qualité inégale des images selon les campagnes d'inspection",
    ],
    valeur: 5,
    faisabilite: 3,
    horizon: "coeur",
  },
  {
    id: "energie-retablissement-incident-majeur",
    titre: "Coordination du rétablissement après un incident réseau majeur",
    secteur: "energie",
    fonction: "operations",
    probleme:
      "Lors d'une tempête, des milliers de défauts simultanés saturent la conduite du réseau, la répartition des équipes et l'information des clients et des collectivités.",
    description:
      "Des agents spécialisés consolident les signalements et les données de conduite, estiment l'étendue des dégâts, proposent l'ordre de rétablissement et l'affectation des équipes, et préparent l'information des clients, des élus et des services de l'État. La cellule de crise valide les priorités et les messages ; aucune manœuvre sur le réseau n'est commandée par le système.",
    solution: "multi-agents",
    autonomie: 2,
    leviers: ["delai", "experience", "risque"],
    kpis: [
      "Délai de rétablissement des clients coupés",
      "Durée moyenne de coupure par client",
      "Exactitude des délais de rétablissement annoncés",
      "Volume d'appels entrants pendant la crise",
    ],
    prerequis: [
      "Données de conduite, de comptage communicant et de signalements accessibles en temps réel",
      "Référentiel des clients prioritaires et sensibles",
      "Procédures de crise formalisées et exercices réguliers",
      "Mode dégradé prévu en cas d'indisponibilité du système",
    ],
    risques: [
      "Erreur de priorisation touchant des clients sensibles (établissements de santé, patients à domicile)",
      "Système critique soumis aux exigences de sécurité et de résilience des opérateurs d'importance vitale",
      "Outil peu éprouvé, car sollicité seulement lors d'événements rares",
    ],
    valeur: 5,
    faisabilite: 2,
    horizon: "pari",
  },
  {
    id: "energie-retour-experience-exploitation",
    titre: "Recherche dans le retour d'expérience d'exploitation",
    secteur: "energie",
    fonction: "operations",
    probleme:
      "Des décennies de comptes rendus d'événements et d'analyses d'incidents existent, mais les exploitants ne les retrouvent pas au moment de préparer une activité.",
    description:
      "L'assistant recherche dans les comptes rendus d'événements, les analyses d'incidents et les fiches de retour d'expérience ceux qui concernent l'activité ou le matériel en préparation. Il restitue les enseignements et les parades, avec renvoi aux documents sources. Le préparateur reste responsable de l'analyse de risques ; l'assistant ne valide aucun dossier d'intervention.",
    solution: "assistant",
    autonomie: 1,
    leviers: ["risque", "qualite", "delai"],
    kpis: [
      "Temps de préparation d'une intervention",
      "Part des dossiers d'intervention intégrant le retour d'expérience",
      "Nombre d'événements récurrents",
    ],
    prerequis: [
      "Base documentaire de retour d'expérience numérisée et indexée",
      "Référentiel des matériels et des activités pour relier les documents",
      "Hébergement conforme au niveau de sensibilité des documents",
    ],
    risques: [
      "Enseignement issu d'un contexte technique différent, appliqué à tort",
      "Documents sensibles pour la sûreté ou la sécurité des installations",
    ],
    valeur: 3,
    faisabilite: 4,
    horizon: "gain-rapide",
  },
  {
    id: "energie-conseil-maitrise-consommation",
    titre: "Conseil personnalisé de maîtrise de la consommation",
    secteur: "energie",
    fonction: "ventes-marketing",
    probleme:
      "Les clients ne comprennent ni leur facture ni les leviers pour la réduire, et les conseillers n'ont pas le temps d'analyser chaque courbe de consommation.",
    description:
      "Un agent analyse la courbe de charge du client, son logement ou son activité et son contrat, puis explique sa consommation et recommande des actions : option tarifaire mieux adaptée, déplacement d'usages, équipements, aides mobilisables. Il répond seul aux questions du client dans son espace en ligne. Tout changement de contrat est confirmé par le client, et les cas complexes sont repris par un conseiller.",
    solution: "agent",
    autonomie: 3,
    leviers: ["experience", "revenu"],
    kpis: [
      "Satisfaction et taux de recommandation des clients accompagnés",
      "Taux de résiliation des clients accompagnés",
      "Souscription d'offres et de services associés",
      "Baisse de consommation constatée",
    ],
    prerequis: [
      "Données de comptage communicant accessibles avec le consentement du client",
      "Catalogue d'offres, de services et d'aides à jour",
      "Espace client capable d'accueillir un agent conversationnel",
    ],
    risques: [
      "Conseil tarifaire défavorable au client, assimilable à une pratique commerciale trompeuse",
      "Consentement requis pour l'usage des données de consommation détaillées",
      "Promesse d'économies non tenue",
    ],
    valeur: 3,
    faisabilite: 4,
    horizon: "gain-rapide",
  },
  {
    id: "energie-accompagnement-clients-difficulte-paiement",
    titre: "Accompagnement des clients en difficulté de paiement",
    secteur: "energie",
    fonction: "service-client",
    probleme:
      "Les impayés augmentent et les relances standardisées n'aident ni le client en difficulté ni le recouvrement.",
    description:
      "La solution repère les situations de fragilité (incidents de paiement répétés, hausse brutale de facture) et prépare une proposition adaptée : échéancier, mensualisation, orientation vers les aides et les services sociaux. Le conseiller solidarité valide la proposition et contacte le client. Toute décision de réduction de puissance ou de suspension de fourniture reste humaine et suit la procédure légale.",
    solution: "workflow",
    autonomie: 2,
    leviers: ["risque", "cout", "experience"],
    kpis: [
      "Taux d'impayés et montant des créances irrécouvrables",
      "Part des échéanciers respectés",
      "Nombre de suspensions de fourniture évitées",
      "Délai de prise en charge d'un client en difficulté",
    ],
    prerequis: [
      "Historique de paiement et de facturation par client",
      "Règles d'échéancier et dispositifs d'aide formalisés",
      "Équipe solidarité formée et partenariats avec les services sociaux",
    ],
    risques: [
      "Accès à un service essentiel : aucune décision défavorable automatisée, protections légales des clients vulnérables",
      "Stigmatisation ou ciblage discriminatoire de certains clients",
      "Échéancier irréaliste, qui aggrave l'endettement",
    ],
    valeur: 4,
    faisabilite: 3,
    horizon: "coeur",
  },
  {
    id: "energie-prefaisabilite-projets-renouvelables",
    titre: "Étude de préfaisabilité des projets d'énergie renouvelable",
    secteur: "energie",
    fonction: "produit-rd",
    probleme:
      "Les développeurs de projets passent des semaines à étudier des terrains dont la plupart seront écartés pour une contrainte d'urbanisme, d'environnement ou de raccordement.",
    description:
      "Pour chaque site candidat, un agent rassemble et lit les documents d'urbanisme, les servitudes, les zonages environnementaux et les capacités de raccordement, puis rédige une note de préfaisabilité listant contraintes, risques et points à vérifier, sources à l'appui. Le chef de projet décide de poursuivre ou non et engage les études détaillées.",
    solution: "agent",
    autonomie: 1,
    leviers: ["delai", "cout", "revenu"],
    kpis: [
      "Nombre de sites étudiés par développeur",
      "Délai de préqualification d'un site",
      "Taux de projets abandonnés après engagement d'études coûteuses",
    ],
    prerequis: [
      "Accès aux données publiques d'urbanisme, d'environnement et de réseau",
      "Grille de critères de préqualification de l'entreprise",
      "Chefs de projet référents pour évaluer la qualité des notes",
    ],
    risques: [
      "Contrainte rédhibitoire manquée, découverte après des dépenses d'études",
      "Documents d'urbanisme hétérogènes, parfois non numérisés ou obsolètes",
    ],
    valeur: 4,
    faisabilite: 3,
    horizon: "coeur",
  },
  {
    id: "energie-analyse-contrats-achat-electricite",
    titre: "Analyse des contrats d'achat d'électricité de long terme",
    secteur: "energie",
    fonction: "achats-supply",
    probleme:
      "Chaque contrat d'achat d'électricité de long terme est négocié sur mesure, et l'entreprise ne sait plus dire rapidement à quoi elle s'est engagée sur l'ensemble de son portefeuille.",
    description:
      "L'assistant lit les contrats et leurs avenants, en extrait les clauses clés (prix et indexation, volumes, pénalités, garanties, résiliation) dans une grille commune et signale les écarts par rapport aux positions standard de l'entreprise. Juristes et gestionnaires de portefeuille valident les extractions et conservent l'interprétation des clauses.",
    solution: "assistant",
    autonomie: 1,
    leviers: ["risque", "delai"],
    kpis: [
      "Temps de revue d'un contrat",
      "Part du portefeuille de contrats cartographiée",
      "Nombre d'écarts aux positions standard détectés avant signature",
    ],
    prerequis: [
      "Contrats et avenants numérisés et centralisés",
      "Grille des clauses clés et positions standard définies par le juridique",
      "Jeu de contrats déjà analysés pour l'évaluation",
    ],
    risques: [
      "Clause d'indexation ou de pénalité mal interprétée, aux conséquences financières lourdes",
      "Confidentialité de contrats couverts par des clauses de non-divulgation",
    ],
    valeur: 3,
    faisabilite: 5,
    horizon: "gain-rapide",
  },

  /* ---------------------------------------------------------------- */
  /* Secteur public                                                    */
  /* ---------------------------------------------------------------- */
  {
    id: "secteur-public-pre-instruction-demandes-aides",
    titre: "Pré-instruction des demandes d'aides et de prestations",
    secteur: "secteur-public",
    fonction: "operations",
    probleme:
      "Les demandes d'aides s'empilent, les délais d'instruction s'allongent et les usagers attendent des mois une décision dont dépend leur budget.",
    description:
      "La solution vérifie la complétude du dossier, extrait les informations des pièces justificatives, les recoupe avec les données déjà détenues par l'administration et contrôle les conditions d'éligibilité au regard des textes. Elle remet à l'agent instructeur une fiche de synthèse avec les points à vérifier et les pièces à réclamer. L'agent instructeur décide ; le système ne prononce ni attribution ni rejet.",
    solution: "workflow",
    autonomie: 2,
    leviers: ["delai", "qualite", "experience"],
    kpis: [
      "Délai moyen d'instruction",
      "Stock de dossiers en attente",
      "Part des dossiers complets au premier dépôt",
      "Taux de décisions réformées après recours",
    ],
    prerequis: [
      "Dossiers et pièces dématérialisés",
      "Règles d'éligibilité formalisées et tenues à jour avec les textes",
      "Accès aux échanges de données entre administrations",
      "Analyse d'impact sur la protection des données et consultation des instances représentatives",
    ],
    risques: [
      "Droits sociaux de personnes : usage à haut risque au sens de l'AI Act, décision humaine et motivée obligatoire",
      "Obligation d'informer l'usager du recours à un traitement algorithmique et d'en expliquer la logique",
      "Biais défavorable aux situations atypiques ou aux publics éloignés du numérique",
    ],
    valeur: 5,
    faisabilite: 3,
    horizon: "coeur",
  },
  {
    id: "secteur-public-reponses-ecrites-usagers",
    titre: "Rédaction assistée des réponses écrites aux usagers",
    secteur: "secteur-public",
    fonction: "service-client",
    probleme:
      "Les messages des usagers reçoivent des réponses tardives, inégales d'un agent à l'autre et souvent rédigées dans un langage administratif peu compréhensible.",
    description:
      "Pour chaque message reçu, l'assistant identifie la démarche concernée, recherche la réglementation et les fiches pratiques applicables, puis rédige un projet de réponse en langage clair, sources à l'appui. L'agent relit, corrige si besoin et envoie ; il reste l'auteur de la réponse. Les situations individuelles complexes sont signalées pour être traitées par un agent expert.",
    solution: "assistant",
    autonomie: 2,
    leviers: ["delai", "qualite", "experience"],
    kpis: [
      "Délai de réponse aux usagers",
      "Satisfaction des usagers sur la clarté de la réponse",
      "Taux de nouvelles sollicitations sur le même sujet",
      "Part des projets de réponse envoyés sans modification majeure",
    ],
    prerequis: [
      "Base documentaire réglementaire et fiches pratiques à jour",
      "Intégration à l'outil de gestion de la relation avec les usagers",
      "Hébergement conforme aux exigences de l'administration pour les données des usagers",
    ],
    risques: [
      "Réponse inexacte engageant l'administration vis-à-vis de l'usager",
      "Relecture de pure forme par des agents sous pression de volume",
      "Acceptabilité par les agents, à traiter dans le dialogue social",
    ],
    valeur: 4,
    faisabilite: 4,
    horizon: "gain-rapide",
  },
  {
    id: "secteur-public-analyse-offres-marches-publics",
    titre: "Préparation de l'analyse des offres dans les marchés publics",
    secteur: "secteur-public",
    fonction: "achats-supply",
    probleme:
      "L'analyse des offres immobilise les acheteurs et les services prescripteurs pendant des semaines et retarde la notification des marchés.",
    description:
      "L'assistant lit les offres, vérifie la présence des pièces exigées, extrait pour chaque critère du règlement de la consultation les éléments de réponse de chaque candidat et les présente dans un tableau comparatif sourcé. Il prépare la trame du rapport d'analyse des offres. L'acheteur et le prescripteur apprécient les offres et attribuent seuls les notes.",
    solution: "assistant",
    autonomie: 1,
    leviers: ["delai", "qualite", "risque"],
    kpis: [
      "Délai entre la remise des offres et l'attribution",
      "Temps d'analyse par offre",
      "Nombre de recours liés à l'analyse des offres",
    ],
    prerequis: [
      "Offres déposées sous une forme dématérialisée exploitable",
      "Critères et sous-critères précisément définis dans le règlement de la consultation",
      "Environnement garantissant la confidentialité des offres",
    ],
    risques: [
      "Rupture de l'égalité de traitement des candidats si l'extraction est inégale d'une offre à l'autre",
      "Contentieux en cas d'erreur d'analyse : la notation et sa motivation restent humaines",
      "Secret des affaires des candidats",
    ],
    valeur: 4,
    faisabilite: 3,
    horizon: "coeur",
  },
  {
    id: "secteur-public-redaction-actes-administratifs",
    titre: "Rédaction des projets d'actes et de délibérations",
    secteur: "secteur-public",
    fonction: "juridique-conformite",
    probleme:
      "Arrêtés, délibérations et notes de présentation sont rédigés à partir d'anciens modèles, avec des visas périmés et des fragilités juridiques découvertes au contrôle de légalité.",
    description:
      "À partir des éléments fournis par le service, l'assistant rédige le projet d'acte selon le modèle de la collectivité, propose les visas et les considérants à jour et signale les points de vigilance juridique. Le service juridique et le service instructeur relisent, corrigent et valident ; la signature et l'adoption suivent le circuit habituel.",
    solution: "assistant",
    autonomie: 1,
    leviers: ["delai", "qualite", "risque"],
    kpis: [
      "Temps de rédaction d'un acte",
      "Nombre d'observations du contrôle de légalité",
      "Taux d'actes retournés par le service juridique pour correction",
    ],
    prerequis: [
      "Bibliothèque de modèles d'actes validés",
      "Accès à une base juridique à jour",
      "Circuit de validation juridique maintenu",
    ],
    risques: [
      "Référence juridique inexistante ou abrogée insérée dans un acte",
      "Acte entaché d'illégalité, exposant la collectivité à une annulation",
    ],
    valeur: 3,
    faisabilite: 4,
    horizon: "gain-rapide",
  },
  {
    id: "secteur-public-synthese-consultations-publiques",
    titre: "Synthèse des contributions aux consultations publiques",
    secteur: "secteur-public",
    fonction: "operations",
    probleme:
      "Une consultation publique recueille des milliers de contributions libres que l'administration n'a pas les moyens de lire intégralement dans le délai imparti.",
    description:
      "La solution lit toutes les contributions, les regroupe par thème et par position, repère les arguments nouveaux, les propositions concrètes et les campagnes de messages identiques, puis produit une synthèse fidèle avec des citations représentatives. Les chargés de mission contrôlent la synthèse par sondage dans les contributions sources et rédigent eux-mêmes les conclusions.",
    solution: "workflow",
    autonomie: 2,
    leviers: ["delai", "qualite"],
    kpis: [
      "Délai de publication de la synthèse",
      "Part des contributions effectivement prises en compte",
      "Écart constaté lors du contrôle par sondage",
    ],
    prerequis: [
      "Contributions disponibles sous une forme numérique exploitable",
      "Méthode d'analyse et grille de thèmes publiées",
      "Temps de contrôle par sondage prévu dans le calendrier",
    ],
    risques: [
      "Positions minoritaires écrasées par la synthèse, au détriment de la sincérité de la consultation",
      "Contestation de la méthode si elle n'est pas transparente",
    ],
    valeur: 3,
    faisabilite: 5,
    horizon: "gain-rapide",
  },
  {
    id: "secteur-public-instruction-autorisations-urbanisme",
    titre: "Instruction des demandes d'autorisation d'urbanisme",
    secteur: "secteur-public",
    fonction: "operations",
    probleme:
      "Les services instructeurs peinent à tenir les délais légaux, et un dossier incomplet détecté tardivement fait perdre des semaines au demandeur.",
    description:
      "Un agent contrôle la complétude du dossier dès le dépôt, lit les plans et la notice, confronte le projet aux règles du document d'urbanisme applicables à la parcelle et identifie les services à consulter. Il prépare la demande de pièces complémentaires et une note d'analyse, article par article. L'instructeur vérifie, apprécie les points soumis à interprétation et propose la décision à l'autorité compétente.",
    solution: "agent",
    autonomie: 2,
    leviers: ["delai", "qualite", "experience"],
    kpis: [
      "Délai moyen d'instruction",
      "Part des demandes de pièces émises dans le premier mois",
      "Nombre de dossiers instruits par agent",
      "Taux d'autorisations tacites subies",
    ],
    prerequis: [
      "Dépôt dématérialisé des demandes",
      "Règlement d'urbanisme numérisé et structuré par zone",
      "Système d'information géographique accessible par API",
      "Jeu de dossiers déjà instruits servant de référence",
    ],
    risques: [
      "Lecture erronée de plans ou d'une règle soumise à interprétation",
      "Décision illégale exposant la collectivité à un contentieux : l'instructeur et l'autorité signataire décident",
      "Règlements hétérogènes d'un territoire à l'autre",
    ],
    valeur: 4,
    faisabilite: 3,
    horizon: "coeur",
  },
  {
    id: "secteur-public-guichet-evenements-de-vie",
    titre: "Accompagnement des usagers par événement de vie",
    secteur: "secteur-public",
    fonction: "service-client",
    probleme:
      "Pour une naissance, un déménagement ou un décès, l'usager doit accomplir lui-même de multiples démarches auprès d'administrations qui ne se parlent pas.",
    description:
      "L'usager décrit sa situation une seule fois ; un orchestrateur mobilise des agents spécialisés par domaine (état civil, prestations, fiscalité, logement) qui identifient les démarches et les droits concernés et préparent les dossiers avec les données déjà connues. L'usager valide chaque démarche avant son dépôt. Chaque administration conserve l'instruction et la décision.",
    solution: "multi-agents",
    autonomie: 2,
    leviers: ["experience", "delai", "qualite"],
    kpis: [
      "Nombre de démarches réalisées par parcours",
      "Taux de non-recours aux droits",
      "Délai global de réalisation d'un parcours",
      "Satisfaction des usagers",
    ],
    prerequis: [
      "Échanges de données entre administrations opérationnels et juridiquement fondés",
      "Identité numérique de l'usager et recueil de son consentement",
      "Gouvernance interadministrative du parcours",
      "Accompagnement humain maintenu pour les publics éloignés du numérique",
    ],
    risques: [
      "Information erronée sur un droit, conduisant l'usager à y renoncer",
      "Partage de données entre administrations strictement encadré",
      "Gouvernance complexe entre de multiples administrations",
    ],
    valeur: 5,
    faisabilite: 1,
    horizon: "pari",
  },
  {
    id: "secteur-public-questions-rh-statutaires",
    titre: "Réponses aux questions statutaires et de carrière des agents",
    secteur: "secteur-public",
    fonction: "rh",
    probleme:
      "Les gestionnaires RH sont submergés de questions sur les congés, la carrière, la rémunération ou la retraite, dont les réponses dépendent de règles statutaires complexes.",
    description:
      "L'assistant répond aux questions des agents et des gestionnaires en s'appuyant sur les textes statutaires, les règles de gestion de l'employeur et les notes internes, en citant ses sources. Il ne donne qu'une information générale ; toute situation individuelle (simulation de carrière, droit à pension, contentieux) est renvoyée au gestionnaire RH compétent.",
    solution: "assistant",
    autonomie: 1,
    leviers: ["delai", "cout", "experience"],
    kpis: [
      "Volume de sollicitations de premier niveau adressées aux gestionnaires RH",
      "Délai de réponse aux agents",
      "Exactitude des réponses sur un jeu de questions de référence",
    ],
    prerequis: [
      "Corpus statutaire et règles de gestion internes à jour et versionnés",
      "Jeu de questions-réponses validé par les experts RH",
      "Canal d'escalade vers les gestionnaires",
    ],
    risques: [
      "Réponse inexacte sur un droit individuel, source de préjudice et de contentieux",
      "Textes modifiés sans mise à jour du corpus",
    ],
    valeur: 3,
    faisabilite: 4,
    horizon: "gain-rapide",
  },
  {
    id: "secteur-public-controle-pieces-depense",
    titre: "Contrôle des pièces justificatives de la dépense",
    secteur: "secteur-public",
    fonction: "finance",
    probleme:
      "Le contrôle des pièces avant paiement est répétitif, mobilise des agents qualifiés et allonge le délai de paiement des fournisseurs.",
    description:
      "La solution rapproche facture, engagement juridique et attestation de service fait, vérifie la présence et la validité des pièces exigées par la nomenclature, et contrôle les montants, les imputations et les références du marché. Les dossiers conformes sont présentés prêts à valider ; les anomalies sont signalées et motivées. Le gestionnaire ou l'agent comptable valide chaque mise en paiement.",
    solution: "workflow",
    autonomie: 2,
    leviers: ["delai", "cout", "risque"],
    kpis: [
      "Délai global de paiement",
      "Taux de rejet des demandes de paiement",
      "Nombre de dossiers contrôlés par agent",
      "Montant des intérêts moratoires versés",
    ],
    prerequis: [
      "Factures et pièces dématérialisées",
      "Accès au système d'information financier et aux données des marchés",
      "Nomenclature des pièces justificatives traduite en règles de contrôle",
    ],
    risques: [
      "Paiement indu ou double paiement non détecté",
      "Responsabilité des gestionnaires publics : la validation de la dépense ne se délègue pas à un système",
    ],
    valeur: 3,
    faisabilite: 4,
    horizon: "gain-rapide",
  },

  /* ---------------------------------------------------------------- */
  /* Santé                                                             */
  /* ---------------------------------------------------------------- */
  {
    id: "sante-comptes-rendus-consultation",
    titre: "Rédaction des comptes rendus de consultation à partir de l'échange",
    secteur: "sante",
    fonction: "operations",
    probleme:
      "Les médecins consacrent une part croissante de leur temps à la saisie dans le dossier patient, au détriment du temps passé avec le patient.",
    description:
      "Avec l'accord du patient, l'assistant transcrit la consultation, structure le compte rendu (motif, antécédents, examen, conclusion, conduite à tenir) et prépare les courriers et les éléments à verser au dossier patient. Le médecin relit, corrige et valide chaque document ; rien n'est enregistré au dossier sans sa validation.",
    solution: "assistant",
    autonomie: 2,
    leviers: ["delai", "qualite", "experience"],
    kpis: [
      "Temps de documentation par consultation",
      "Délai d'envoi du compte rendu au médecin traitant",
      "Taux de corrections apportées par le médecin",
      "Satisfaction des praticiens",
    ],
    prerequis: [
      "Intégration au dossier patient informatisé",
      "Hébergement certifié pour les données de santé",
      "Information du patient et recueil de son accord à l'enregistrement",
      "Évaluation par spécialité avec des praticiens référents",
    ],
    risques: [
      "Erreur ou omission dans le compte rendu (posologie, latéralité, négation) validée sans relecture attentive",
      "Données de santé couvertes par le secret médical",
      "Aucune suggestion diagnostique ou thérapeutique hors du cadre applicable aux dispositifs médicaux",
    ],
    valeur: 4,
    faisabilite: 4,
    horizon: "gain-rapide",
  },
  {
    id: "sante-lettres-liaison-sortie",
    titre: "Préparation des lettres de liaison à la sortie d'hospitalisation",
    secteur: "sante",
    fonction: "operations",
    probleme:
      "La lettre de liaison, due au patient le jour de sa sortie, est souvent remise en retard ou incomplète, ce qui fragilise la continuité des soins avec la ville.",
    description:
      "À l'approche de la sortie, la solution rassemble dans le dossier patient les éléments du séjour : motif, actes, résultats marquants, traitements modifiés, suites à donner. Elle rédige un projet de lettre structuré selon le modèle de l'établissement. Le médecin du service vérifie, complète et signe ; la lettre n'est remise et transmise qu'après sa validation.",
    solution: "workflow",
    autonomie: 2,
    leviers: ["delai", "qualite", "risque"],
    kpis: [
      "Part des lettres de liaison remises le jour de la sortie",
      "Temps médical consacré aux courriers de sortie",
      "Complétude des lettres au regard des rubriques obligatoires",
      "Taux de réhospitalisation précoce",
    ],
    prerequis: [
      "Dossier patient informatisé structuré et accessible par API",
      "Modèle de lettre de liaison validé par la communauté médicale",
      "Hébergement certifié pour les données de santé",
    ],
    risques: [
      "Erreur sur le traitement de sortie, aux conséquences directes pour le patient",
      "Validation médicale de pure forme en fin de journée",
      "Informations dispersées dans des documents non structurés du dossier",
    ],
    valeur: 3,
    faisabilite: 4,
    horizon: "gain-rapide",
  },
  {
    id: "sante-aide-codage-pmsi",
    titre: "Aide au codage PMSI des séjours hospitaliers",
    secteur: "sante",
    fonction: "finance",
    probleme:
      "Un codage incomplet ou tardif des séjours prive l'établissement de recettes et l'expose à des redressements lors des contrôles de l'assurance maladie.",
    description:
      "La solution lit les comptes rendus d'hospitalisation, opératoires et d'examens, puis propose les diagnostics et les actes à coder avec, pour chacun, l'extrait du dossier qui le justifie. Elle signale les séjours où une comorbidité documentée n'a pas été codée. Les techniciens et le médecin de l'information médicale valident chaque code ; aucun séjour n'est facturé sans leur contrôle.",
    solution: "workflow",
    autonomie: 2,
    leviers: ["revenu", "qualite", "delai"],
    kpis: [
      "Délai entre la sortie du patient et le codage du séjour",
      "Valorisation moyenne des séjours à activité comparable",
      "Taux d'anomalies relevées lors des contrôles externes",
      "Nombre de séjours codés par technicien",
    ],
    prerequis: [
      "Comptes rendus disponibles sous forme numérique dans le dossier patient",
      "Jeu de séjours codés et contrôlés par le département d'information médicale",
      "Intégration à l'outil de codage et de groupage",
      "Hébergement certifié pour les données de santé",
    ],
    risques: [
      "Surcodage systématique, sanctionné financièrement lors des contrôles",
      "Mises à jour annuelles des nomenclatures et des règles de codage à suivre",
      "Codes proposés sans justification traçable dans le dossier",
    ],
    valeur: 5,
    faisabilite: 3,
    horizon: "coeur",
  },
  {
    id: "sante-gestion-lits-sorties",
    titre: "Anticipation des sorties et affectation des lits",
    secteur: "sante",
    fonction: "operations",
    probleme:
      "Des patients attendent sur des brancards aux urgences pendant que des lits se libèrent trop tard dans la journée, faute de visibilité sur les sorties.",
    description:
      "Un agent consolide en continu l'occupation des lits, les sorties prévisibles d'après le dossier patient, les admissions programmées et le flux des urgences. Il suggère au gestionnaire de lits des affectations et signale les sorties bloquées par un examen, un transport ou une place d'aval. Le gestionnaire de lits et les cadres de santé décident ; les sorties restent des décisions médicales.",
    solution: "agent",
    autonomie: 1,
    leviers: ["delai", "qualite", "experience"],
    kpis: [
      "Temps d'attente d'un lit aux urgences",
      "Taux d'occupation et durée moyenne de séjour",
      "Part des sorties réalisées avant midi",
      "Nombre de déprogrammations faute de lit",
    ],
    prerequis: [
      "Données d'occupation et de mouvements fiables en temps réel",
      "Date prévisionnelle de sortie renseignée dans le dossier patient",
      "Cellule de gestion des lits dotée d'une autorité reconnue par les services",
    ],
    risques: [
      "Pression à la sortie prématurée de patients si l'outil est mal utilisé",
      "Mouvements saisis en retard, qui faussent la vue d'ensemble",
      "Résistance des services à une gestion centralisée des lits",
    ],
    valeur: 5,
    faisabilite: 2,
    horizon: "pari",
  },
  {
    id: "sante-rendez-vous-rappels-patients",
    titre: "Gestion des rendez-vous, des rappels et de la préparation des venues",
    secteur: "sante",
    fonction: "service-client",
    probleme:
      "Les secrétariats médicaux sont saturés d'appels pour prendre ou déplacer un rendez-vous, et les rendez-vous non honorés désorganisent les consultations et les plateaux techniques.",
    description:
      "Un agent répond aux patients par téléphone ou par messagerie pour fixer, déplacer ou annuler un rendez-vous dans les agendas, envoie les rappels et les consignes de préparation (documents à apporter, jeûne) et réattribue les créneaux libérés. Il agit seul sur ces actes administratifs. Toute question médicale ou tout signe d'urgence déclenche un transfert immédiat vers le secrétariat ou le service.",
    solution: "agent",
    autonomie: 3,
    leviers: ["cout", "experience", "revenu"],
    kpis: [
      "Taux de rendez-vous non honorés",
      "Taux d'appels décrochés",
      "Taux de remplissage des plages de consultation",
      "Temps de secrétariat libéré",
    ],
    prerequis: [
      "Agendas accessibles par API, avec des règles de prise de rendez-vous par type d'acte",
      "Consignes de préparation validées par les services",
      "Procédure de transfert en cas de question médicale ou d'urgence",
    ],
    risques: [
      "Urgence médicale non reconnue lors d'un échange administratif",
      "Réponse assimilable à un conseil médical, hors du périmètre autorisé",
      "Patients âgés ou en difficulté avec les canaux automatisés",
    ],
    valeur: 3,
    faisabilite: 4,
    horizon: "gain-rapide",
  },
  {
    id: "sante-preselection-patients-essais-cliniques",
    titre: "Présélection des patients éligibles aux essais cliniques",
    secteur: "sante",
    fonction: "produit-rd",
    probleme:
      "Les essais cliniques recrutent trop lentement parce que le repérage des patients éligibles dans les dossiers se fait à la main.",
    description:
      "La solution traduit les critères d'inclusion et d'exclusion du protocole, les confronte aux dossiers des patients du service et établit une liste de candidats potentiels, en justifiant chaque critère par un extrait du dossier. L'investigateur et l'attaché de recherche clinique vérifient l'éligibilité et proposent l'essai au patient ; l'inclusion reste une décision médicale, prise avec le consentement du patient.",
    solution: "workflow",
    autonomie: 1,
    leviers: ["delai", "revenu", "qualite"],
    kpis: [
      "Nombre de patients inclus par mois et par essai",
      "Délai de recrutement par rapport au plan",
      "Part des patients présélectionnés confirmés éligibles",
      "Temps de présélection par attaché de recherche clinique",
    ],
    prerequis: [
      "Entrepôt de données de santé ou accès structuré aux dossiers patients",
      "Cadre de réutilisation des données de santé pour la recherche établi avec le délégué à la protection des données",
      "Protocoles disponibles sous une forme exploitable",
    ],
    risques: [
      "Réutilisation de données de santé : information des patients et conformité au cadre applicable à la recherche",
      "Patients éligibles écartés à tort, ce qui biaise le recrutement",
      "Critères complexes mal interprétés dans des dossiers en texte libre",
    ],
    valeur: 4,
    faisabilite: 3,
    horizon: "coeur",
  },
  {
    id: "sante-traitement-cas-pharmacovigilance",
    titre: "Traitement des cas de pharmacovigilance",
    secteur: "sante",
    fonction: "juridique-conformite",
    probleme:
      "Le volume de signalements d'effets indésirables augmente, et chaque cas doit être saisi, codé et évalué dans des délais réglementaires stricts.",
    description:
      "La solution lit le signalement (courriel, appel retranscrit, littérature), extrait le patient, le produit, l'événement et le notificateur, propose le codage dans la terminologie médicale réglementaire et un niveau de gravité, repère les doublons et rédige le résumé du cas. Le pharmacovigilant vérifie chaque cas ; l'évaluation médicale de la causalité et la décision de déclaration lui reviennent.",
    solution: "workflow",
    autonomie: 2,
    leviers: ["cout", "delai", "risque"],
    kpis: [
      "Délai de traitement d'un cas",
      "Respect des délais réglementaires de déclaration",
      "Taux d'erreur relevé au contrôle qualité des cas",
      "Nombre de cas traités par pharmacovigilant",
    ],
    prerequis: [
      "Base de pharmacovigilance ouverte à l'intégration",
      "Historique de cas saisis, codés et contrôlés",
      "Validation du système selon les exigences applicables aux systèmes informatisés du secteur",
    ],
    risques: [
      "Cas grave mal qualifié ou déclaré hors délai : sanction réglementaire et risque pour les patients",
      "Système à valider et à documenter en vue des inspections",
      "Signalements ambigus ou incomplets surinterprétés",
    ],
    valeur: 4,
    faisabilite: 3,
    horizon: "coeur",
  },
  {
    id: "sante-remplacement-absences-soignants",
    titre: "Gestion des remplacements d'absences de soignants",
    secteur: "sante",
    fonction: "rh",
    probleme:
      "Chaque absence imprévue oblige le cadre de santé à passer des heures au téléphone pour trouver un remplaçant, au détriment de l'encadrement des soins.",
    description:
      "Dès qu'une absence est déclarée, un agent identifie les soignants disponibles et qualifiés (équipe de suppléance, volontaires pour des heures supplémentaires, vacataires) dans le respect des repos réglementaires et des compétences requises par le service. Il soumet au cadre une liste classée puis, avec son accord, sollicite les personnes par message et suit leurs réponses. Le cadre de santé choisit le remplaçant et valide la modification du planning.",
    solution: "agent",
    autonomie: 2,
    leviers: ["delai", "cout", "qualite"],
    kpis: [
      "Délai de pourvoi d'une absence",
      "Temps consacré par les cadres à la gestion des remplacements",
      "Recours à l'intérim",
      "Taux de postes non pourvus",
    ],
    prerequis: [
      "Outil de gestion des temps et des plannings accessible par API",
      "Référentiel de compétences par soignant et par service",
      "Règles de temps de travail et de repos traduites en contraintes",
      "Accord des instances représentatives du personnel sur le dispositif",
    ],
    risques: [
      "Sollicitations répétées vécues comme une pression par des soignants déjà éprouvés",
      "Non-respect des repos réglementaires si les données de planning sont erronées",
      "Équité de la répartition des remplacements entre soignants",
    ],
    valeur: 4,
    faisabilite: 3,
    horizon: "coeur",
  },
  {
    id: "sante-coordination-parcours-patients-chroniques",
    titre: "Coordination du parcours des patients chroniques entre ville et hôpital",
    secteur: "sante",
    fonction: "operations",
    probleme:
      "Le suivi des patients chroniques se perd entre hôpital, médecin traitant, infirmiers et pharmacien : examens non réalisés, alertes ignorées, réhospitalisations évitables.",
    description:
      "Un système d'agents suit le plan de soins de chaque patient : un agent vérifie la réalisation des examens et des rendez-vous prévus, un autre collecte les données de télésurveillance et les questionnaires, un troisième prépare les synthèses destinées à chaque professionnel. Les écarts sont signalés à l'infirmier de coordination, qui décide des suites. Le système ne formule ni diagnostic ni adaptation de traitement.",
    solution: "multi-agents",
    autonomie: 1,
    leviers: ["qualite", "risque", "experience"],
    kpis: [
      "Taux de réhospitalisation évitable",
      "Part des examens de suivi réalisés dans les délais",
      "Nombre de patients suivis par infirmier de coordination",
      "Satisfaction des patients et des professionnels de ville",
    ],
    prerequis: [
      "Interopérabilité entre le dossier patient hospitalier et les logiciels des professionnels de ville",
      "Plans de soins formalisés par pathologie",
      "Modèle de financement de la coordination identifié",
      "Consentement du patient au partage de ses données entre professionnels",
    ],
    risques: [
      "Alerte clinique manquée ou mal hiérarchisée : toute interprétation médicale reste humaine",
      "Qualification possible en dispositif médical selon les fonctions offertes",
      "Interopérabilité très partielle entre les systèmes de la ville et de l'hôpital",
    ],
    valeur: 5,
    faisabilite: 1,
    horizon: "pari",
  },

  /* ---------------------------------------------------------------- */
  /* Transverse : fonctions support                                    */
  /* ---------------------------------------------------------------- */
  {
    id: "transverse-traitement-factures-fournisseurs",
    titre: "Traitement des factures fournisseurs et résolution des écarts",
    secteur: "transverse",
    fonction: "finance",
    probleme:
      "Une part importante des factures fournisseurs échappe au rapprochement automatique et attend un traitement manuel, avec des retards de paiement à la clé.",
    description:
      "Un agent lit la facture, la rapproche de la commande et de la réception, propose l'imputation comptable et, en cas d'écart, en recherche l'origine auprès du demandeur ou du fournisseur. Il comptabilise seul les factures conformes sous un seuil de montant et prépare les autres pour validation. Le paiement suit le circuit d'approbation existant, sans dérogation.",
    solution: "agent",
    autonomie: 3,
    leviers: ["cout", "delai", "qualite"],
    kpis: [
      "Part des factures traitées sans intervention humaine",
      "Délai de traitement d'une facture",
      "Coût de traitement par facture",
      "Taux de paiements en retard",
    ],
    prerequis: [
      "Accès à l'ERP en lecture et en écriture : commandes, réceptions, comptabilité fournisseurs",
      "Référentiel fournisseurs fiable",
      "Seuils d'action autonome et séparation des tâches définis avec le contrôle interne",
    ],
    risques: [
      "Fraude à la fausse facture ou au changement de coordonnées bancaires",
      "Erreurs d'imputation répétées à grande échelle",
      "Affaiblissement de la séparation des tâches",
    ],
    valeur: 4,
    faisabilite: 4,
    horizon: "gain-rapide",
  },
  {
    id: "transverse-cloture-comptable-continue",
    titre: "Clôture comptable continue orchestrée par des agents",
    secteur: "transverse",
    fonction: "finance",
    probleme:
      "La clôture mensuelle mobilise toute la fonction finance pendant plusieurs jours de rapprochements, de relances et de corrections, pour des chiffres disponibles trop tard.",
    description:
      "Des agents spécialisés prennent en charge au fil de l'eau les rapprochements bancaires et intragroupe, le calcul des provisions et des écritures de régularisation, le contrôle des comptes et l'analyse des variations, sous la coordination d'un orchestrateur qui suit le calendrier de clôture. Les comptables valident les écritures proposées et traitent les anomalies ; le directeur comptable arrête les comptes.",
    solution: "multi-agents",
    autonomie: 2,
    leviers: ["delai", "cout", "qualite"],
    kpis: [
      "Durée de la clôture mensuelle en jours",
      "Nombre d'écritures manuelles de correction",
      "Nombre d'ajustements demandés par les auditeurs",
      "Part du temps des équipes consacrée à l'analyse plutôt qu'à la production",
    ],
    prerequis: [
      "ERP et outils de consolidation ouverts par API",
      "Procédures de clôture et règles comptables documentées",
      "Qualité des données de base (référentiels, flux intragroupe)",
      "Dispositif de contrôle interne adapté et accepté par les commissaires aux comptes",
    ],
    risques: [
      "Erreur comptable significative non détectée dans les états financiers",
      "Piste d'audit insuffisante pour les commissaires aux comptes",
      "Hétérogénéité des systèmes comptables entre filiales",
    ],
    valeur: 5,
    faisabilite: 2,
    horizon: "pari",
  },
  {
    id: "transverse-questions-rh-collaborateurs",
    titre: "Réponses aux questions RH des collaborateurs",
    secteur: "transverse",
    fonction: "rh",
    probleme:
      "Les équipes RH répondent sans cesse aux mêmes questions sur les congés, la paie, la mutuelle ou le télétravail, et les collaborateurs attendent la réponse plusieurs jours.",
    description:
      "Un agent répond aux questions des collaborateurs à partir des accords d'entreprise, des politiques RH et de la situation individuelle lue dans le système RH (soldes, contrat, convention applicable). Il réalise les actes simples : attestation, pose de congés, mise à jour de données personnelles. Les situations sensibles (santé, conflit, discipline, rupture) sont transmises sans délai à un interlocuteur RH.",
    solution: "agent",
    autonomie: 3,
    leviers: ["cout", "delai", "experience"],
    kpis: [
      "Part des demandes résolues sans intervention RH",
      "Délai de réponse aux collaborateurs",
      "Satisfaction des collaborateurs",
      "Temps RH réalloué à l'accompagnement",
    ],
    prerequis: [
      "Accords et politiques RH à jour, par entité et par population",
      "API du système d'information RH",
      "Règles de transfert vers un interlocuteur humain et information des représentants du personnel",
    ],
    risques: [
      "Réponse erronée sur un droit individuel (paie, congés, préavis)",
      "Confidentialité des données personnelles des collaborateurs",
      "Déshumanisation perçue de la relation RH sur des sujets sensibles",
    ],
    valeur: 3,
    faisabilite: 4,
    horizon: "gain-rapide",
  },
  {
    id: "transverse-preparation-recrutements",
    titre: "Rédaction des offres d'emploi et préparation des entretiens de recrutement",
    secteur: "transverse",
    fonction: "rh",
    probleme:
      "Les managers rédigent des offres peu attractives et mènent des entretiens non structurés, ce qui allonge les recrutements et fragilise l'équité entre candidats.",
    description:
      "À partir du besoin exprimé par le manager, l'assistant rédige l'offre d'emploi, propose une grille d'entretien structurée par compétence et prépare la trame de compte rendu. Il ne trie, ne note et ne classe aucun candidat : l'évaluation et la décision appartiennent au recruteur et au manager.",
    solution: "assistant",
    autonomie: 1,
    leviers: ["delai", "qualite"],
    kpis: [
      "Délai de publication d'une offre",
      "Délai de recrutement",
      "Part des entretiens menés avec une grille structurée",
      "Satisfaction des candidats",
    ],
    prerequis: [
      "Référentiel des emplois et des compétences",
      "Charte de recrutement et règles de non-discrimination intégrées aux consignes",
      "Formation des managers à l'entretien structuré",
    ],
    risques: [
      "Tout tri ou classement automatisé de candidats relèverait d'un usage à haut risque au sens de l'AI Act",
      "Formulations discriminatoires dans les offres ou les questions d'entretien",
      "Glissement progressif vers une présélection automatisée sans cadre",
    ],
    valeur: 3,
    faisabilite: 5,
    horizon: "gain-rapide",
  },
  {
    id: "transverse-support-informatique-niveau-1",
    titre: "Résolution autonome des demandes de support informatique de niveau 1",
    secteur: "transverse",
    fonction: "it",
    probleme:
      "Mots de passe, accès, installations de logiciels : les demandes simples engorgent le centre de services et font perdre du temps de travail aux collaborateurs.",
    description:
      "Un agent accueille la demande dans la messagerie de l'entreprise, la qualifie, consulte la base de connaissances et exécute les actions d'un catalogue autorisé : réinitialisation de mot de passe après vérification d'identité, attribution d'un accès standard, installation d'un logiciel référencé. Les demandes hors catalogue sont transmises au technicien avec le diagnostic déjà réalisé.",
    solution: "agent",
    autonomie: 3,
    leviers: ["cout", "delai", "experience"],
    kpis: [
      "Part des demandes résolues sans technicien",
      "Délai moyen de résolution",
      "Satisfaction des utilisateurs",
      "Coût par ticket",
    ],
    prerequis: [
      "API de l'outil de gestion des services informatiques et de l'annuaire",
      "Catalogue d'actions autorisées, avec ses règles d'approbation",
      "Base de connaissances de support à jour",
    ],
    risques: [
      "Ingénierie sociale visant à obtenir un accès ou une réinitialisation indus",
      "Droits d'accès accordés au-delà du besoin",
      "Agent doté de privilèges techniques trop larges",
    ],
    valeur: 4,
    faisabilite: 4,
    horizon: "gain-rapide",
  },
  {
    id: "transverse-maintenance-applicative-agents",
    titre: "Correction des anomalies et maintenance applicative par des agents de développement",
    secteur: "transverse",
    fonction: "it",
    probleme:
      "Le stock d'anomalies et de dette technique absorbe la capacité des équipes de développement et retarde les évolutions attendues par les métiers.",
    description:
      "Un agent de développement prend un ticket d'anomalie ou de maintenance, explore le code, reproduit le problème, écrit le correctif et les tests, puis ouvre une demande de fusion documentée. Un développeur relit et approuve chaque modification ; l'intégration continue et les contrôles de sécurité s'appliquent sans exception. L'agent n'a aucun accès à la production.",
    solution: "agent",
    autonomie: 2,
    leviers: ["cout", "delai", "qualite"],
    kpis: [
      "Délai de correction d'une anomalie",
      "Stock de tickets de maintenance",
      "Part des demandes de fusion acceptées sans reprise majeure",
      "Taux de régression en production",
    ],
    prerequis: [
      "Dépôts de code dotés d'une intégration continue et d'une couverture de tests suffisante",
      "Environnements de développement isolés pour les agents",
      "Tickets rédigés avec des critères d'acceptation vérifiables",
      "Règles de revue de code et de sécurité adaptées",
    ],
    risques: [
      "Code plausible mais incorrect, accepté par une revue trop rapide",
      "Introduction de vulnérabilités ou de dépendances non maîtrisées",
      "Fuite de code source ou de secrets vers l'extérieur",
    ],
    valeur: 5,
    faisabilite: 3,
    horizon: "coeur",
  },
  {
    id: "transverse-revue-contrats-courants",
    titre: "Revue des contrats courants au regard des standards de l'entreprise",
    secteur: "transverse",
    fonction: "juridique-conformite",
    probleme:
      "Les juristes passent l'essentiel de leur temps sur des contrats standards (confidentialité, prestations, conditions fournisseurs), et les opérationnels attendent leur retour pendant des semaines.",
    description:
      "La solution compare le contrat reçu aux clauses types et aux positions de repli de l'entreprise, signale les écarts classés par niveau de risque et propose les reformulations. Le juriste valide l'analyse avant son retour à l'opérationnel et reste responsable de toute position dérogatoire. Une fois la fiabilité démontrée, les contrats sans écart significatif pourront être renvoyés directement, sous contrôle par échantillonnage.",
    solution: "workflow",
    autonomie: 2,
    leviers: ["delai", "cout", "risque"],
    kpis: [
      "Délai de revue d'un contrat courant",
      "Temps de juriste consacré aux contrats courants",
      "Taux d'écarts non détectés lors des contrôles par échantillonnage",
    ],
    prerequis: [
      "Clausier et positions de repli formalisés par type de contrat",
      "Jeu de contrats déjà revus et annotés par les juristes",
      "Circuit de demande et de validation outillé",
    ],
    risques: [
      "Clause défavorable non détectée (responsabilité, propriété intellectuelle, résiliation)",
      "Opérationnels signant sur la foi de la synthèse sans lire le contrat",
      "Confidentialité des contrats et secret professionnel",
    ],
    valeur: 4,
    faisabilite: 4,
    horizon: "gain-rapide",
  },
  {
    id: "transverse-analyse-impact-reglementaire",
    titre: "Veille réglementaire et analyse d'impact sur les politiques internes",
    secteur: "transverse",
    fonction: "juridique-conformite",
    probleme:
      "Les nouveaux textes s'accumulent, et la conformité peine à déterminer à temps quelles politiques, quels processus et quels contrôles internes doivent évoluer.",
    description:
      "L'assistant lit les textes publiés par les autorités, en résume les obligations nouvelles et les rapproche du corpus interne de politiques, de procédures et de contrôles pour repérer ceux qui sont concernés. Il produit une note d'impact indiquant les écarts probables. Les juristes et la conformité qualifient l'impact, décident du plan d'action et en assurent le suivi.",
    solution: "assistant",
    autonomie: 1,
    leviers: ["risque", "delai"],
    kpis: [
      "Délai entre la publication d'un texte et la note d'impact",
      "Part des textes pertinents analysés",
      "Nombre d'écarts de conformité découverts tardivement",
    ],
    prerequis: [
      "Sources réglementaires identifiées et accessibles",
      "Corpus interne de politiques et de procédures centralisé et à jour",
      "Cartographie des obligations et des contrôles existante",
    ],
    risques: [
      "Obligation nouvelle manquée ou mal interprétée",
      "Fausse impression d'exhaustivité de la veille",
    ],
    valeur: 3,
    faisabilite: 4,
    horizon: "gain-rapide",
  },
  {
    id: "transverse-achats-faible-montant",
    titre: "Conduite des consultations pour les achats de faible montant",
    secteur: "transverse",
    fonction: "achats-supply",
    probleme:
      "Les achats de faible montant, trop nombreux pour être suivis par les acheteurs, sont passés sans mise en concurrence ni respect des contrats-cadres.",
    description:
      "Un agent aide le demandeur à formuler son besoin et vérifie s'il est couvert par un contrat-cadre ; à défaut, avec l'accord du demandeur, il consulte les fournisseurs référencés, compare les offres et recommande une attribution motivée. Il prépare la demande d'achat dans l'outil. Le demandeur et, au-delà d'un seuil, l'acheteur valident avant tout engagement ; l'agent ne signe aucune commande.",
    solution: "agent",
    autonomie: 2,
    leviers: ["cout", "delai", "qualite"],
    kpis: [
      "Économies réalisées sur les achats de faible montant",
      "Part des dépenses passant par les contrats-cadres",
      "Délai entre l'expression du besoin et la commande",
      "Nombre de fournisseurs actifs",
    ],
    prerequis: [
      "Référentiel fournisseurs et contrats-cadres à jour",
      "API de l'outil d'achats",
      "Politique d'achats fixant les seuils de mise en concurrence et de validation",
    ],
    risques: [
      "Engagement de dépense hors délégation de pouvoirs",
      "Échanges avec les fournisseurs engageant l'entreprise sans contrôle",
      "Contournement par des demandeurs qui jugent le parcours plus lent",
    ],
    valeur: 4,
    faisabilite: 3,
    horizon: "coeur",
  },
  {
    id: "transverse-suivi-engagements-contrats-fournisseurs",
    titre: "Suivi des échéances et des engagements des contrats fournisseurs",
    secteur: "transverse",
    fonction: "achats-supply",
    probleme:
      "Des contrats se renouvellent tacitement, des remises de fin d'année ne sont pas réclamées et des pénalités ne sont jamais appliquées, faute de suivi après la signature.",
    description:
      "La solution lit les contrats fournisseurs, en extrait les échéances, préavis, engagements de volume, niveaux de service, remises et pénalités, puis les rapproche des données de dépenses et de performance. Elle alerte l'acheteur avant chaque échéance et chiffre les sommes à réclamer. L'acheteur décide de renégocier, de résilier ou de réclamer.",
    solution: "workflow",
    autonomie: 1,
    leviers: ["cout", "risque"],
    kpis: [
      "Montant des remises et pénalités récupérées",
      "Nombre de renouvellements tacites subis",
      "Part des contrats dont les engagements sont suivis",
    ],
    prerequis: [
      "Contrats centralisés dans une contrathèque",
      "Données de dépenses et de performance par fournisseur",
      "Acheteur responsable désigné pour chaque contrat",
    ],
    risques: [
      "Clause mal extraite, conduisant à une réclamation infondée",
      "Alertes ignorées si elles sont trop nombreuses ou mal ciblées",
    ],
    valeur: 3,
    faisabilite: 4,
    horizon: "gain-rapide",
  },
];
