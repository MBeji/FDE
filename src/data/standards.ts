/**
 * Standards d'ingénierie attendus d'un FDE en mission.
 * Référentiel utilisable comme grille de revue : chaque standard est une règle vérifiable,
 * avec sa raison d'être, la manière dont un pair la constate et les référentiels externes qu'elle sert.
 * Cadre proposé, à adapter par la direction du pool et aux politiques du client.
 */

export type NiveauStandard = "obligatoire" | "recommande" | "contextuel";

export type ReferenceExterne =
  | "twelve-factor"
  | "well-architected"
  | "nist-ai-rmf"
  | "iso-27001"
  | "soc2"
  | "zero-trust"
  | "owasp-top10"
  | "owasp-llm"
  | "opentelemetry"
  | "iso-42001"
  | "rgpd";

interface StandardCommun {
  /** Identifiant stable, utilisé dans les revues et les exports. Ne jamais le réattribuer. */
  id: string;
  /** Règle vérifiable, à l'impératif. */
  enonce: string;
  /** Ce qui casse si on ne le fait pas. */
  pourquoi: string;
  /** Ce qu'un pair regarde en revue pour constater la conformité. */
  verification: string;
  references: ReferenceExterne[];
  /** Illustration tirée du cas fil rouge Voxalis. */
  exemple?: string;
}

export type Standard =
  | (StandardCommun & { niveau: "obligatoire" | "recommande"; condition?: undefined })
  | (StandardCommun & { niveau: "contextuel"; /** Ce qui rend le standard applicable. */ condition: string });

export interface DomaineStandards {
  id: string;
  nom: string;
  intention: string;
  standards: Standard[];
}

export const NIVEAUX: Record<NiveauStandard, { nom: string; court: string; definition: string }> = {
  obligatoire: {
    nom: "Obligatoire",
    court: "Non négociable",
    definition:
      "Non négociable chez un client grand compte. Tout écart est tracé dans le registre RAID et arbitré explicitement par le responsable de mission et le client, avec une date de résorption.",
  },
  recommande: {
    nom: "Recommandé",
    court: "Attendu par défaut",
    definition:
      "Attendu par défaut. Un écart est acceptable s'il est justifié par écrit (contrainte du client, coût disproportionné, alternative équivalente) et relu par un pair.",
  },
  contextuel: {
    nom: "Contextuel",
    court: "Selon la condition",
    definition:
      "Dépend du risque ou de l'échelle. La condition d'application est écrite : si elle est remplie, le standard devient attendu ; sinon, il est marqué non applicable.",
  },
};

export const REFERENTIELS_EXTERNES: Record<ReferenceExterne, { nom: string; nature: string; usage: string }> = {
  "twelve-factor": {
    nom: "Twelve-Factor App",
    nature:
      "Douze principes de conception d'applications déployées en service : configuration par l'environnement, dépendances déclarées, artefact unique, processus sans état.",
    usage: "Socle de nos standards de configuration, de construction et de déploiement.",
  },
  "well-architected": {
    nom: "Cadres Well-Architected des fournisseurs cloud",
    nature:
      "Grilles de revue d'architecture publiées par les principaux fournisseurs cloud, organisées en piliers : excellence opérationnelle, sécurité, fiabilité, performance, coûts, durabilité.",
    usage: "Mener la revue d'architecture dans le vocabulaire de l'équipe infrastructure du client, quel que soit son fournisseur.",
  },
  "nist-ai-rmf": {
    nom: "NIST AI RMF",
    nature: "Cadre de gestion des risques de l'IA du NIST, structuré en quatre fonctions : Govern, Map, Measure, Manage.",
    usage: "Relier évaluations, surveillance et registre des agents à une démarche de gestion des risques reconnue.",
  },
  "iso-27001": {
    nom: "ISO/IEC 27001",
    nature: "Norme internationale de système de management de la sécurité de l'information.",
    usage: "Parler le langage du RSSI : contrôle d'accès, gestion des changements, journalisation, continuité.",
  },
  soc2: {
    nom: "SOC 2",
    nature:
      "Cadre d'audit des contrôles d'un prestataire de services : sécurité, disponibilité, intégrité du traitement, confidentialité, vie privée.",
    usage: "Anticiper les preuves qu'un auditeur demandera : revue des changements, séparation des rôles, traçabilité des déploiements.",
  },
  "zero-trust": {
    nom: "Zero Trust",
    nature:
      "Modèle de sécurité où aucun accès n'est considéré comme fiable du seul fait de sa position sur le réseau : chaque requête est authentifiée, autorisée et limitée.",
    usage: "Concevoir les identités et les droits des agents, qui sont des acteurs non humains à part entière.",
  },
  "owasp-top10": {
    nom: "OWASP Top 10",
    nature: "Classement de référence des risques de sécurité des applications web.",
    usage: "Socle de la revue de sécurité applicative des API, des interfaces et des services.",
  },
  "owasp-llm": {
    nom: "OWASP Top 10 pour les applications LLM",
    nature:
      "Classement des risques propres aux applications fondées sur des modèles de langage : injection de prompt, divulgation d'informations sensibles, agentivité excessive, consommation non maîtrisée, entre autres.",
    usage: "Grille de menaces pour toute conception d'agent, et source des cas adverses du jeu d'évaluation.",
  },
  opentelemetry: {
    nom: "OpenTelemetry",
    nature: "Standard ouvert d'instrumentation (traces, métriques, journaux), indépendant des outils d'observabilité.",
    usage: "Instrumenter une seule fois quel que soit l'outillage du client, et suivre un cas de bout en bout à travers agents et outils.",
  },
  "iso-42001": {
    nom: "ISO/IEC 42001",
    nature: "Norme de système de management de l'intelligence artificielle.",
    usage: "Inscrire le registre, les rôles et les revues des agents dans un système de management auditable.",
  },
  rgpd: {
    nom: "RGPD",
    nature: "Règlement européen sur la protection des données personnelles.",
    usage: "Minimisation, durées de conservation, analyses d'impact et droits des personnes : à arbitrer avec le DPO du client dès la conception.",
  },
};

export const DOMAINES_STANDARDS: DomaineStandards[] = [
  {
    id: "logiciel",
    nom: "Ingénierie logicielle",
    intention: "Un code que l'équipe du client peut lire, tester, modifier et reprendre seule le jour où le FDE part.",
    standards: [
      {
        id: "LOG-01",
        niveau: "obligatoire",
        enonce:
          "Faites relire et approuver chaque changement par un pair autre que l'auteur, dans une demande de fusion, avant qu'il n'atteigne la branche principale.",
        pourquoi:
          "Sans second regard, les erreurs de logique et les failles partent en production sans témoin, et la connaissance du code reste dans une seule tête.",
        verification:
          "Règles de protection de la branche principale ; historique des fusions : aucune fusion sans approbation d'un tiers.",
        references: ["soc2", "iso-27001"],
      },
      {
        id: "LOG-02",
        niveau: "obligatoire",
        enonce:
          "Hébergez le code dans le dépôt du client dès le premier jour, sous ses règles d'accès ; rien ne vit sur un poste ou un dépôt personnel.",
        pourquoi:
          "Un code hors du patrimoine du client crée une dépendance au FDE, un litige de propriété et un risque de confidentialité au moment du transfert.",
        verification:
          "Emplacement du dépôt, liste des contributeurs, absence de dépôt parallèle cité dans les échanges ou les scripts.",
        references: ["iso-27001"],
      },
      {
        id: "LOG-03",
        niveau: "obligatoire",
        enonce:
          "Couvrez la logique métier et les chemins d'erreur par des tests automatisés exécutés à chaque demande de fusion ; une suite en échec bloque la fusion.",
        pourquoi:
          "Sans filet de tests, chaque modification d'un prompt ou d'une intégration peut casser silencieusement une règle métier déjà validée.",
        verification:
          "Statut de tests obligatoire sur la branche principale ; présence de tests sur les règles critiques et les cas d'erreur, pas seulement sur le chemin nominal.",
        references: ["well-architected"],
      },
      {
        id: "LOG-04",
        niveau: "obligatoire",
        enonce:
          "Séparez la configuration du code : elle est injectée par l'environnement, et le même artefact se déploie sans modification dans chaque environnement.",
        pourquoi:
          "Une configuration codée en dur impose une reconstruction par environnement et fait diverger ce qui a été testé de ce qui tourne en production.",
        verification:
          "Recherche de valeurs d'environnement en dur (URL, identifiants, seuils) ; un seul artefact référencé dans les déploiements de recette et de production.",
        references: ["twelve-factor"],
      },
      {
        id: "LOG-05",
        niveau: "obligatoire",
        enonce:
          "Déclarez explicitement toutes les dépendances, épinglez-les par un fichier de verrouillage versionné et analysez-les pour les vulnérabilités connues.",
        pourquoi:
          "Une dépendance non épinglée change sans prévenir entre deux constructions ; une dépendance vulnérable est la porte d'entrée la plus courante.",
        verification:
          "Fichier de verrouillage présent et à jour ; rapport d'analyse des dépendances dans le pipeline, sans vulnérabilité critique ouverte.",
        references: ["twelve-factor", "owasp-top10", "owasp-llm"],
      },
      {
        id: "LOG-06",
        niveau: "recommande",
        enonce:
          "Traitez les erreurs explicitement : délai d'expiration sur tout appel externe, nouvelles tentatives bornées avec attente croissante, aucune exception avalée sans trace.",
        pourquoi:
          "Un appel sans délai d'expiration bloque un cas indéfiniment ; une exception avalée transforme une panne en résultat faux mais apparemment normal.",
        verification:
          "Revue des clients HTTP et SDK : délais configurés, nombre maximal de tentatives ; recherche de blocs de capture vides ou se contentant d'un journal.",
        references: ["well-architected"],
      },
      {
        id: "LOG-07",
        niveau: "recommande",
        enonce:
          "Appliquez automatiquement formateur et analyse statique, avec une configuration versionnée dans le dépôt et exécutée dans le pipeline.",
        pourquoi:
          "Sans automatisation, les revues s'épuisent en débats de forme et laissent passer les défauts de fond.",
        verification: "Configuration présente dans le dépôt ; étape d'analyse dans le pipeline ; absence de désactivations massives de règles.",
        references: [],
      },
      {
        id: "LOG-08",
        niveau: "recommande",
        enonce:
          "Maintenez un guide de démarrage qui permet à un nouvel arrivant de lancer le projet et ses tests en local en moins d'une demi-journée.",
        pourquoi:
          "Si l'installation repose sur la mémoire du FDE, l'équipe du client ne peut ni contribuer pendant la mission ni reprendre après.",
        verification:
          "Un membre de l'équipe client suit le guide sans aide ; le temps et les points de blocage sont notés dans la revue.",
        references: [],
      },
      {
        id: "LOG-09",
        niveau: "contextuel",
        condition:
          "Le système est déjà en production et le changement modifie un comportement visible par un utilisateur ou un client final.",
        enonce:
          "Livrez le changement derrière un interrupteur de fonctionnalité qui permet de le désactiver sans redéploiement, et retirez l'interrupteur une fois la fonctionnalité stabilisée.",
        pourquoi:
          "Sans interrupteur, la seule réponse à un comportement indésirable est un retour arrière complet, plus lent et plus risqué.",
        verification:
          "Interrupteur documenté avec son propriétaire et sa date de retrait prévue ; test de désactivation réalisé en recette.",
        references: ["well-architected"],
      },
    ],
  },
  {
    id: "cloud",
    nom: "Architecture cloud",
    intention: "Une plateforme reproductible, cloisonnée, sobre et dimensionnée pour le niveau de service promis au métier.",
    standards: [
      {
        id: "CLD-01",
        niveau: "obligatoire",
        enonce:
          "Décrivez toute l'infrastructure en code, versionnée et appliquée par le pipeline ; aucune modification manuelle en console sur les environnements partagés.",
        pourquoi:
          "Une infrastructure modifiée à la main ne peut être ni reconstruite après incident, ni auditée, ni transférée.",
        verification:
          "Dépôt d'infrastructure, plan d'exécution récent sans dérive ; journaux d'audit de la console sans modification manuelle en recette ou en production.",
        references: ["well-architected", "iso-27001"],
      },
      {
        id: "CLD-02",
        niveau: "obligatoire",
        enonce:
          "Séparez développement, recette et production dans des comptes ou projets distincts ; ne copiez jamais de données de production hors production sans anonymisation.",
        pourquoi:
          "Un environnement partagé expose la production aux erreurs de développement et fait sortir des données personnelles de leur périmètre autorisé.",
        verification:
          "Organisation des comptes et des projets ; origine des données présentes en développement et en recette.",
        references: ["well-architected", "iso-27001", "rgpd"],
      },
      {
        id: "CLD-03",
        niveau: "obligatoire",
        enonce:
          "Donnez à chaque service une identité de charge dédiée à moindre privilège ; n'utilisez aucune clé d'accès longue durée.",
        pourquoi:
          "Une clé longue durée ou un rôle partagé transforme la compromission d'un composant en compromission de tout l'environnement.",
        verification:
          "Inventaire des identités et de leurs permissions ; recherche de clés statiques ; absence de rôle administrateur attribué à un service.",
        references: ["zero-trust", "iso-27001"],
      },
      {
        id: "CLD-04",
        niveau: "obligatoire",
        enonce:
          "Faites résider les données dans les régions autorisées par le client, y compris journaux, sauvegardes, index et appels au fournisseur de modèle.",
        pourquoi:
          "Un traitement hors de la zone autorisée peut constituer un transfert de données non conforme et invalider l'homologation.",
        verification:
          "Régions déclarées dans le code d'infrastructure ; point de terminaison du fournisseur de modèle ; validation écrite du DPO ou du RSSI.",
        references: ["rgpd", "iso-27001"],
      },
      {
        id: "CLD-05",
        niveau: "obligatoire",
        enonce:
          "Étiquetez chaque ressource de façon normalisée : projet, environnement, propriétaire, cas d'usage, centre de coût.",
        pourquoi:
          "Sans étiquettes, impossible d'imputer le coût par agent ou par cas d'usage, ni de retrouver un propriétaire pendant un incident.",
        verification: "Politique d'étiquetage appliquée par le code ; rapport des ressources sans étiquette obligatoire.",
        references: ["well-architected"],
      },
      {
        id: "CLD-06",
        niveau: "obligatoire",
        enonce:
          "Automatisez et chiffrez les sauvegardes des données persistantes, et réalisez un test de restauration avant la mise en production.",
        pourquoi: "Une sauvegarde jamais restaurée est une hypothèse : on découvre qu'elle est inutilisable le jour où on en a besoin.",
        verification: "Politique de sauvegarde dans le code ; compte rendu daté du dernier test de restauration, avec la durée constatée.",
        references: ["well-architected", "iso-27001", "soc2"],
      },
      {
        id: "CLD-07",
        niveau: "recommande",
        enonce:
          "Écrivez pour chaque composant les objectifs de disponibilité, de perte de données maximale (RPO) et de durée de reprise (RTO), et dimensionnez l'architecture en conséquence.",
        pourquoi:
          "Sans objectif écrit, l'architecture est soit surdimensionnée et coûteuse, soit fragile sur le chemin critique du métier.",
        verification: "Objectifs dans le dossier d'architecture, validés par le propriétaire du processus ; cohérence avec zones, sauvegardes et astreinte.",
        references: ["well-architected", "iso-27001"],
      },
      {
        id: "CLD-08",
        niveau: "recommande",
        enonce:
          "Posez des budgets et des alertes de coût par environnement et par cas d'usage, avec un seuil d'alerte déclenché avant le dépassement.",
        pourquoi:
          "La consommation de modèles et de calcul dérive vite ; découverte en fin de mois, elle ruine le business case et la confiance du directeur financier.",
        verification: "Budgets configurés, destinataires des alertes nommés, historique d'alertes traitées.",
        references: ["well-architected"],
      },
      {
        id: "CLD-09",
        niveau: "contextuel",
        condition:
          "L'objectif de disponibilité dépasse ce qu'une zone unique garantit, ou le système est sur le chemin critique d'un service au client final.",
        enonce: "Déployez sur plusieurs zones avec bascule automatique, et testez la bascule avant la mise en production.",
        pourquoi: "La perte d'une zone interrompt le service pendant toute la durée de l'incident du fournisseur.",
        verification: "Topologie dans le code d'infrastructure ; compte rendu d'un exercice de bascule avec la durée d'interruption mesurée.",
        references: ["well-architected"],
      },
      {
        id: "CLD-10",
        niveau: "contextuel",
        condition:
          "Des données personnelles ou confidentielles transitent vers le fournisseur de modèle, ou la politique réseau du client l'exige.",
        enonce: "Accédez au fournisseur de modèle par un point de terminaison privé, sans transit par l'internet public.",
        pourquoi: "Un flux sortant vers internet élargit la surface d'attaque et complique l'homologation par le RSSI.",
        verification: "Configuration réseau (points de terminaison privés, règles de sortie) ; schéma des flux validé par la sécurité.",
        references: ["zero-trust", "iso-27001"],
      },
    ],
  },
  {
    id: "donnees",
    nom: "Ingénierie des données",
    intention: "Des données dont on connaît l'origine, la qualité, les droits d'usage et la durée de vie, avant qu'un agent ne s'en serve.",
    standards: [
      {
        id: "DAT-01",
        niveau: "obligatoire",
        enonce:
          "Donnez à chaque source de données utilisée un propriétaire métier nommé et documentez l'usage autorisé et sa base légale lorsqu'il s'agit de données personnelles.",
        pourquoi:
          "Sans propriétaire, personne ne tranche sur la qualité ni sur le droit d'usage, et le projet s'arrête à la première question du DPO.",
        verification: "Inventaire des sources avec propriétaire, usage et base légale ; validation du DPO pour les données personnelles.",
        references: ["rgpd", "iso-42001"],
      },
      {
        id: "DAT-02",
        niveau: "obligatoire",
        enonce:
          "Excluez ou pseudonymisez les données personnelles non nécessaires avant qu'elles n'entrent dans un pipeline, un index ou un prompt.",
        pourquoi:
          "Toute donnée envoyée au modèle ou indexée peut ressortir dans une réponse, une trace ou un journal ; la seule donnée sûre est celle qu'on n'a pas collectée.",
        verification:
          "Liste des champs transmis au modèle, justifiée champ par champ ; étape de masquage ou de pseudonymisation dans le pipeline.",
        references: ["rgpd", "owasp-llm"],
      },
      {
        id: "DAT-03",
        niveau: "obligatoire",
        enonce:
          "Respectez les droits d'accès d'origine à la recherche : via un index, un utilisateur ou un agent ne récupère que les documents qu'il pourrait lire dans le système source.",
        pourquoi:
          "Un index qui ignore les droits du système source devient un contournement de toute la politique d'habilitation.",
        verification:
          "Filtrage par droits appliqué à la requête de recherche ; test avec deux profils aux habilitations différentes.",
        references: ["zero-trust", "owasp-llm"],
      },
      {
        id: "DAT-04",
        niveau: "obligatoire",
        enonce:
          "Définissez et appliquez automatiquement des durées de conservation pour les données brutes, les index, les traces d'exécution et les conversations.",
        pourquoi:
          "Les traces d'agents accumulent des données personnelles ; sans purge, le système devient un stock non maîtrisé et non conforme.",
        verification: "Durées écrites et validées par le DPO ; règles de cycle de vie configurées ; contrôle de l'âge des plus anciennes traces.",
        references: ["rgpd", "iso-27001"],
      },
      {
        id: "DAT-05",
        niveau: "obligatoire",
        enonce:
          "Rendez les pipelines versionnés, rejouables et idempotents : relancer un traitement sur la même période donne le même résultat, sans doublon.",
        pourquoi:
          "Un pipeline non rejouable rend toute correction risquée et fausse les indicateurs qui mesurent la valeur.",
        verification: "Relance d'un traitement en recette et comparaison des résultats ; clés d'unicité sur les tables cibles.",
        references: ["twelve-factor"],
      },
      {
        id: "DAT-06",
        niveau: "recommande",
        enonce:
          "Contrôlez automatiquement chaque lot (schéma, complétude, fraîcheur, unicité) et bloquez ou signalez les lots non conformes avant usage.",
        pourquoi: "Une donnée dégradée en amont produit des décisions d'agent fausses en aval, sans erreur technique visible.",
        verification: "Règles de qualité versionnées ; historique des contrôles en échec et de leur traitement.",
        references: ["nist-ai-rmf"],
      },
      {
        id: "DAT-07",
        niveau: "recommande",
        enonce:
          "Attribuez à chaque corpus documentaire indexé un propriétaire, une date de dernière revue et un processus de retrait des contenus obsolètes.",
        pourquoi:
          "Un agent qui s'appuie sur un document obsolète produit une réponse fausse avec l'apparence d'une source fiable.",
        verification: "Métadonnées de propriétaire et de date sur les documents indexés ; part des documents non revus depuis plus d'un an.",
        references: ["nist-ai-rmf"],
        exemple:
          "Chez Voxalis, 35 % des 2 300 articles de la base de connaissances étaient obsolètes : leur revue a été planifiée avant de les rendre accessibles aux agents par l'outil kb.rechercher.",
      },
      {
        id: "DAT-08",
        niveau: "recommande",
        enonce:
          "Documentez le lignage de tout jeu de données qui sert à l'évaluation ou à la recherche : source, transformations, date d'extraction, version.",
        pourquoi: "Sans lignage, on ne sait ni reproduire un score d'évaluation, ni expliquer d'où vient une réponse contestée.",
        verification: "Fiche de jeu de données ou métadonnées du pipeline ; capacité à retrouver la source d'un exemple tiré au hasard.",
        references: ["nist-ai-rmf", "iso-42001"],
      },
      {
        id: "DAT-09",
        niveau: "contextuel",
        condition:
          "Plusieurs équipes produisent ou consomment le même flux, ou un agent dépend d'un flux alimenté par une autre équipe.",
        enonce:
          "Établissez un contrat de données entre producteur et consommateur : schéma versionné, garanties de fraîcheur et de qualité, procédure de changement.",
        pourquoi: "Un changement de schéma décidé en amont casse l'agent en aval sans que personne ne soit prévenu.",
        verification: "Contrat écrit et versionné ; test automatique de conformité au contrat côté consommateur.",
        references: [],
      },
    ],
  },
  {
    id: "api",
    nom: "API et intégration",
    intention: "Des intégrations contractuelles, sûres et robustes, qui protègent le SI du client contre les erreurs et les excès des agents.",
    standards: [
      {
        id: "API-01",
        niveau: "obligatoire",
        enonce:
          "Faites accéder les agents au SI uniquement par une couche d'outils dédiée qui applique authentification, autorisation et journalisation ; jamais d'accès direct aux bases.",
        pourquoi:
          "Un accès direct contourne les règles métier et les contrôles du SI, et rend impossible l'audit de ce que l'agent a réellement fait.",
        verification:
          "Schéma des flux ; absence de chaîne de connexion à une base dans le code des agents ; journaux de la couche d'outils.",
        references: ["zero-trust", "owasp-llm"],
        exemple:
          "Les agents du SAV Augmenté passent par une passerelle MCP qui expose neuf outils ; seuls trois d'entre eux écrivent dans le SI.",
      },
      {
        id: "API-02",
        niveau: "obligatoire",
        enonce:
          "Décrivez chaque API exposée ou consommée par un contrat versionné, lisible par machine, dans le dépôt ; toute rupture de compatibilité passe par une nouvelle version.",
        pourquoi:
          "Sans contrat, les intégrations reposent sur des suppositions, et une modification d'un côté casse l'autre en production.",
        verification: "Spécifications présentes et à jour ; politique de version ; journal des changements de contrat.",
        references: [],
      },
      {
        id: "API-03",
        niveau: "obligatoire",
        enonce:
          "Authentifiez et autorisez chaque appel d'API, y compris en réseau interne ; aucune API n'est ouverte au motif qu'elle est interne.",
        pourquoi: "Une API interne non protégée est le premier relais d'un attaquant, ou d'un agent manipulé, une fois à l'intérieur du réseau.",
        verification: "Configuration d'authentification de chaque point d'accès ; appel de test sans jeton rejeté.",
        references: ["zero-trust", "owasp-top10"],
      },
      {
        id: "API-04",
        niveau: "obligatoire",
        enonce:
          "Rendez idempotentes toutes les opérations d'écriture : clé d'idempotence ou contrôle d'état préalable, de sorte qu'un rejeu ne produise pas d'effet en double.",
        pourquoi:
          "Les nouvelles tentatives automatiques et les rejeux d'agent sont normaux ; sans idempotence, ils créent des doublons visibles par le client.",
        verification: "Test de rejeu du même appel en recette : un seul effet constaté dans le système cible.",
        references: ["well-architected"],
        exemple:
          "Les deux incidents mineurs du pilote Voxalis étaient des messages client envoyés en double ; ils ont été corrigés en S24 par une clé d'idempotence sur l'outil d'envoi.",
      },
      {
        id: "API-05",
        niveau: "obligatoire",
        enonce:
          "Validez côté serveur toutes les entrées par schéma (types, bornes, formats, valeurs autorisées), y compris lorsque l'appelant est un agent.",
        pourquoi:
          "Un paramètre produit par un modèle peut être malformé ou manipulé ; sans validation, il atteint directement le système cible.",
        verification: "Schémas de validation dans le code ; tests avec des entrées hors bornes et des valeurs non prévues.",
        references: ["owasp-top10", "owasp-llm"],
      },
      {
        id: "API-06",
        niveau: "recommande",
        enonce:
          "Protégez chaque intégration vers le SI du client par des délais d'expiration, des limites de débit et un disjoncteur.",
        pourquoi:
          "Un agent en boucle ou un pic de trafic peut saturer une application patrimoniale qui n'a jamais été dimensionnée pour ce volume.",
        verification: "Limites configurées et documentées avec le propriétaire du système appelé ; test de charge ou de défaillance en recette.",
        references: ["well-architected", "owasp-llm"],
      },
      {
        id: "API-07",
        niveau: "recommande",
        enonce:
          "Normalisez les erreurs : format unique, codes explicites, message exploitable par un agent (cause et action possible), sans fuite d'information interne.",
        pourquoi:
          "Une erreur opaque fait réessayer l'agent à l'aveugle ; une erreur trop bavarde révèle la structure interne du SI.",
        verification: "Échantillon de réponses d'erreur : présence d'une cause actionnable, absence de trace technique ou de requête interne.",
        references: ["owasp-top10"],
      },
      {
        id: "API-08",
        niveau: "recommande",
        enonce:
          "Testez les intégrations dans le pipeline contre des doublures conformes au contrat, et faites tourner un test de bout en bout en recette sur les vrais systèmes.",
        pourquoi:
          "Les doublures seules masquent les écarts avec le système réel ; les tests de bout en bout seuls sont trop lents pour chaque changement.",
        verification: "Tests de contrat dans le pipeline ; dernier passage réussi du test de bout en bout en recette.",
        references: [],
      },
      {
        id: "API-09",
        niveau: "contextuel",
        condition:
          "Les traitements sont longs, le système appelé est instable, ou plusieurs consommateurs doivent réagir au même événement.",
        enonce:
          "Intégrez de façon asynchrone par file ou bus d'événements, avec une file de rejet pour les messages en échec et une procédure pour les retraiter.",
        pourquoi: "Un enchaînement synchrone propage chaque panne d'un système à toute la chaîne et perd les cas en cours.",
        verification: "Schéma des flux ; file de rejet surveillée avec alerte ; procédure de retraitement testée.",
        references: ["well-architected"],
        exemple: "Le SI de Voxalis ne disposait d'aucun bus d'événements : la question s'est posée dès la conception, pour que l'Orchestrateur de cas ne perde aucun cas quand l'une des six applications est indisponible.",
      },
    ],
  },
  {
    id: "devsecops",
    nom: "DevSecOps et CI/CD",
    intention: "Un chemin unique, automatisé et contrôlé du commit à la production, avec la sécurité intégrée à chaque étape.",
    standards: [
      {
        id: "OPS-01",
        niveau: "obligatoire",
        enonce:
          "Ne placez aucun secret dans le dépôt, les journaux ou les prompts ; les secrets viennent d'un coffre et font l'objet d'une rotation.",
        pourquoi:
          "Un secret dans le dépôt ou dans un prompt se retrouve dans l'historique, les traces et parfois les réponses du modèle : il est compromis pour toujours.",
        verification:
          "Analyse de secrets sur le dépôt et son historique ; code de chargement des secrets depuis le coffre ; recherche dans un échantillon de traces.",
        references: ["owasp-top10", "owasp-llm", "iso-27001", "soc2"],
      },
      {
        id: "OPS-02",
        niveau: "obligatoire",
        enonce:
          "Exécutez une détection de secrets à chaque commit ; toute fuite détectée entraîne la révocation immédiate du secret, pas seulement la réécriture de l'historique.",
        pourquoi: "Un secret poussé, même une minute, doit être considéré comme connu ; le supprimer du dépôt ne le rend pas sûr.",
        verification: "Étape de détection dans le pipeline ou en pré-commit ; registre des fuites détectées et preuve de révocation.",
        references: ["iso-27001", "soc2"],
      },
      {
        id: "OPS-03",
        niveau: "obligatoire",
        enonce:
          "Construisez un artefact unique et immuable, promu d'environnement en environnement ; ne reconstruisez jamais pour la production.",
        pourquoi: "Reconstruire pour la production revient à déployer quelque chose qui n'a pas été testé.",
        verification: "Même empreinte d'artefact en recette et en production dans l'historique des déploiements.",
        references: ["twelve-factor"],
      },
      {
        id: "OPS-04",
        niveau: "obligatoire",
        enonce:
          "Automatisez et tracez chaque déploiement en production (qui, quoi, quand, sur quelle approbation) et disposez d'un retour arrière testé.",
        pourquoi: "Un déploiement manuel n'est ni reproductible ni auditable, et un retour arrière improvisé allonge chaque incident.",
        verification: "Historique des déploiements du pipeline ; compte rendu du dernier test de retour arrière avec sa durée.",
        references: ["soc2", "iso-27001"],
      },
      {
        id: "OPS-05",
        niveau: "obligatoire",
        enonce:
          "Intégrez au pipeline l'analyse statique de sécurité et l'analyse des dépendances et des images, avec un seuil bloquant sur les vulnérabilités critiques.",
        pourquoi: "Une vulnérabilité découverte après la mise en production coûte une interruption ; dans le pipeline, elle coûte une correction.",
        verification: "Étapes présentes et bloquantes ; liste des exceptions acceptées, chacune justifiée et datée.",
        references: ["owasp-top10", "owasp-llm"],
      },
      {
        id: "OPS-06",
        niveau: "recommande",
        enonce: "Séparez les rôles : l'auteur d'un changement ne peut pas, seul, le déployer en production.",
        pourquoi: "Sans séparation, une erreur ou un abus individuel atteint la production sans aucun contrôle.",
        verification: "Règles d'approbation de l'étape de production ; historique montrant des approbateurs distincts des auteurs.",
        references: ["soc2", "iso-27001"],
      },
      {
        id: "OPS-07",
        niveau: "recommande",
        enonce: "Produisez à chaque construction un inventaire des composants logiciels, conservé avec l'artefact.",
        pourquoi: "Quand une vulnérabilité est publiée, l'inventaire répond en minutes à la question « sommes-nous concernés ? ».",
        verification: "Inventaire attaché aux derniers artefacts ; capacité à retrouver une bibliothèque donnée dans les versions déployées.",
        references: ["owasp-llm", "iso-27001"],
      },
      {
        id: "OPS-08",
        niveau: "contextuel",
        condition:
          "Le système sert de nombreux utilisateurs, ou l'effet d'une régression n'est détectable qu'au-delà d'un certain volume de cas.",
        enonce:
          "Déployez progressivement (canari ou vagues) avec des critères de retour arrière écrits à l'avance et, si possible, automatiques.",
        pourquoi: "Un déploiement intégral expose tous les utilisateurs à une régression que les tests n'ont pas vue.",
        verification: "Stratégie de déploiement dans le pipeline ; critères de retour arrière écrits ; trace de leur application.",
        references: ["well-architected"],
        exemple: "Le SAV Augmenté a été généralisé en trois vagues régionales, Ouest puis Nord et Est puis Île-de-France et Sud, chaque vague conditionnée aux indicateurs de la précédente.",
      },
      {
        id: "OPS-09",
        niveau: "contextuel",
        condition:
          "La politique de chaîne d'approvisionnement du client l'exige, ou le système est exposé à des tiers.",
        enonce: "Signez les artefacts à la construction et vérifiez la signature au déploiement.",
        pourquoi: "Sans signature, rien ne garantit que ce qui tourne en production est bien ce que le pipeline a construit.",
        verification: "Étape de signature ; politique d'admission qui rejette un artefact non signé, testée.",
        references: ["owasp-llm", "zero-trust"],
      },
    ],
  },
  {
    id: "llmops",
    nom: "MLOps et LLMOps",
    intention: "Traiter modèles, prompts et évaluations comme des composants logiciels : versionnés, testés, mesurés et déployés sous contrôle.",
    standards: [
      {
        id: "MLO-01",
        niveau: "obligatoire",
        enonce:
          "Versionnez les prompts, les définitions d'outils et la version du modèle, et déployez-les comme du code, par le pipeline.",
        pourquoi:
          "Un prompt modifié directement en production change le comportement du système sans revue, sans test et sans possibilité de retour arrière.",
        verification:
          "Prompts et définitions d'outils dans le dépôt ; absence d'édition en production ; correspondance entre version déployée et commit.",
        references: ["nist-ai-rmf", "iso-42001"],
      },
      {
        id: "MLO-02",
        niveau: "obligatoire",
        enonce:
          "Épinglez explicitement la version du modèle ; aucun alias de type « dernière version » en production, et tout changement de modèle repasse l'évaluation complète.",
        pourquoi: "Un changement silencieux de modèle modifie le comportement sans changement de code et sans trace.",
        verification: "Identifiant de modèle complet dans la configuration ; rapport d'évaluation associé au dernier changement de modèle.",
        references: ["nist-ai-rmf", "iso-42001"],
      },
      {
        id: "MLO-03",
        niveau: "obligatoire",
        enonce:
          "Déclenchez l'évaluation automatique à chaque changement de prompt, d'outil, de modèle ou de paramètre ; une régression sous le seuil bloque le déploiement.",
        pourquoi: "Corriger un cas dégrade souvent dix autres ; sans évaluation systématique, la régression se découvre en production.",
        verification: "Étape d'évaluation bloquante dans le pipeline ; seuils écrits ; historique des déploiements refusés.",
        references: ["nist-ai-rmf"],
      },
      {
        id: "MLO-04",
        niveau: "obligatoire",
        enonce:
          "Versionnez les jeux d'évaluation, documentez leur provenance et tenez-les strictement séparés des exemples utilisés dans les prompts.",
        pourquoi: "Un cas d'évaluation recopié dans le prompt gonfle le score et masque le comportement réel.",
        verification: "Jeux d'évaluation versionnés ; contrôle de recouvrement avec les exemples des prompts ; fiche de provenance.",
        references: ["nist-ai-rmf", "iso-42001"],
      },
      {
        id: "MLO-05",
        niveau: "recommande",
        enonce:
          "Mesurez le coût et la latence par cas traité, en évaluation comme en production, et fixez un budget par cas.",
        pourquoi:
          "Un agent juste mais trop cher ou trop lent détruit la valeur ; sans mesure par cas, la dérive n'apparaît qu'à la facture.",
        verification: "Indicateurs de coût et de latence par cas dans le rapport d'évaluation et sur le tableau de bord ; budget écrit.",
        references: ["well-architected"],
        exemple: "Le pilote Voxalis a mesuré un coût d'inférence de 0,38 € par ticket, rapproché du coût complet de 41 € par ticket.",
      },
      {
        id: "MLO-06",
        niveau: "recommande",
        enonce:
          "Calibrez tout évaluateur fondé sur un modèle contre des annotations humaines avant de l'utiliser comme critère de passage, puis recalibrez-le périodiquement.",
        pourquoi: "Un juge automatique non calibré produit des scores précis en apparence mais sans lien avec la qualité réelle.",
        verification: "Taux d'accord entre juge et annotateurs humains, mesuré sur un échantillon daté ; seuil d'accord minimal écrit.",
        references: ["nist-ai-rmf"],
      },
      {
        id: "MLO-07",
        niveau: "recommande",
        enonce:
          "Faites entrer les retours de production (corrections humaines, réouvertures, escalades) dans le jeu d'évaluation selon un processus planifié.",
        pourquoi: "Un jeu d'évaluation figé décrit le monde du lancement ; les nouvelles erreurs de production y restent invisibles.",
        verification: "Procédure d'enrichissement ; date et volume du dernier ajout ; cas récents de production présents dans le jeu.",
        references: ["nist-ai-rmf"],
        exemple: "Chez Voxalis, l'Agent Qualité contrôle chaque cas clos et alimente les évaluations et la base de connaissances.",
      },
      {
        id: "MLO-08",
        niveau: "contextuel",
        condition:
          "Le système tourne en production sur un flux continu dont la distribution peut évoluer : nouvelles offres, saisonnalité, nouveaux types de panne.",
        enonce:
          "Surveillez la dérive des entrées et de la qualité en production, par échantillonnage annoté à fréquence fixe et alerte sur seuil.",
        pourquoi: "La qualité mesurée au lancement se dégrade sans bruit à mesure que les cas réels s'éloignent du jeu d'évaluation.",
        verification: "Indicateurs de dérive sur le tableau de bord ; dernier échantillon annoté ; alertes configurées.",
        references: ["nist-ai-rmf", "iso-42001"],
      },
      {
        id: "MLO-09",
        niveau: "contextuel",
        condition: "La mission entraîne ou affine un modèle au lieu d'utiliser un modèle tel quel.",
        enonce:
          "Versionnez les jeux d'entraînement, documentez le modèle obtenu (données, limites, résultats d'évaluation) et rendez l'entraînement reproductible.",
        pourquoi: "Un modèle qu'on ne sait pas reproduire ne peut être ni corrigé, ni audité, ni protégé contre l'empoisonnement des données.",
        verification: "Fiche du modèle ; jeux d'entraînement versionnés ; ré-entraînement de contrôle donnant des résultats comparables.",
        references: ["nist-ai-rmf", "iso-42001", "owasp-llm"],
      },
      {
        id: "MLO-10",
        niveau: "contextuel",
        condition: "Le processus métier ne tolère pas une interruption du service pendant une indisponibilité du fournisseur de modèle.",
        enonce:
          "Prévoyez un repli évalué : modèle secondaire ayant passé le même jeu d'évaluation, ou mode dégradé qui renvoie les cas vers les équipes humaines.",
        pourquoi: "Sans repli, une panne du fournisseur devient une panne du métier.",
        verification: "Procédure de repli dans le runbook ; rapport d'évaluation du modèle secondaire ; exercice de bascule réalisé.",
        references: ["well-architected"],
      },
    ],
  },
  {
    id: "agents",
    nom: "Ingénierie des agents",
    intention: "Des agents au périmètre explicite, aux droits minimaux, évalués avant d'agir et dont l'autonomie se gagne sur preuves.",
    standards: [
      {
        id: "AGT-01",
        niveau: "obligatoire",
        enonce:
          "Approuvez, avant toute construction, une fiche par agent : mission, périmètre, outils, niveau d'autonomie par outil, propriétaire métier, critères de succès.",
        pourquoi: "Un agent sans périmètre écrit s'étend au fil des demandes, et personne ne sait plus ce qu'il a le droit de faire.",
        verification: "Fiche agent approuvée et datée ; cohérence entre la fiche et les outils réellement exposés à l'agent.",
        references: ["iso-42001", "nist-ai-rmf"],
      },
      {
        id: "AGT-02",
        niveau: "obligatoire",
        enonce: "Constituez pour chaque agent un golden set rejoué automatiquement avant tout déploiement.",
        pourquoi: "Sans golden set, la qualité d'un agent est une opinion, et chaque modification est un pari.",
        verification: "Golden set versionné, annoté par le métier ; rapport d'évaluation du dernier déploiement ; seuils de passage écrits.",
        references: ["nist-ai-rmf", "iso-42001"],
        exemple: "Le plan d'évaluation de Voxalis repose sur 600 cas historiques annotés par les experts N2, plus 120 cas adverses, prêts avant la première ligne de prompt.",
      },
      {
        id: "AGT-03",
        niveau: "obligatoire",
        enonce: "Donnez à tout outil d'agent qui écrit dans un système une règle d'approbation explicite et un propriétaire nommé.",
        pourquoi: "Une action d'écriture sans règle d'approbation ni propriétaire est une agentivité excessive : personne n'en répond quand elle se trompe.",
        verification: "Liste des outils en écriture avec règle d'approbation (niveau d'autonomie, seuils) et propriétaire ; contrôle dans le code de la règle d'approbation.",
        references: ["owasp-llm", "iso-42001"],
        exemple:
          "Sur les neuf outils de la passerelle Voxalis, trois écrivent ; reseau.executer_action est en L3 sur le catalogue à risque faible et en L2 au-delà, avec approbation humaine.",
      },
      {
        id: "AGT-04",
        niveau: "obligatoire",
        enonce:
          "Donnez à chaque agent sa propre identité et les droits de sa mission, pas ceux de son concepteur : permissions minimales par outil, aucun outil inutile exposé.",
        pourquoi: "Un agent qui hérite de droits larges transforme une injection de prompt réussie en incident majeur.",
        verification: "Identité technique propre à l'agent ; permissions par outil ; comparaison entre outils exposés et outils utilisés dans les traces.",
        references: ["zero-trust", "owasp-llm"],
      },
      {
        id: "AGT-05",
        niveau: "obligatoire",
        enonce:
          "Traitez tout contenu externe (courriels, tickets, documents, pages web, résultats d'outils) comme une donnée non fiable : il ne peut ni modifier les instructions ni déclencher seul une action à effet.",
        pourquoi: "L'injection indirecte de prompt arrive par les données que l'agent lit, pas par l'utilisateur.",
        verification: "Séparation instructions et données dans le contexte ; cas d'injection indirecte dans le jeu adverse, tous neutralisés.",
        references: ["owasp-llm"],
      },
      {
        id: "AGT-06",
        niveau: "obligatoire",
        enonce:
          "Validez les sorties de l'agent (schéma, bornes, listes de valeurs autorisées) avant de les exécuter, de les afficher ou de les transmettre à un système.",
        pourquoi: "Une sortie de modèle transmise telle quelle à un système ou à une page devient un vecteur d'injection.",
        verification: "Validation structurée des sorties dans le code ; tests avec des sorties malformées ; encodage avant tout affichage.",
        references: ["owasp-llm", "owasp-top10"],
      },
      {
        id: "AGT-07",
        niveau: "obligatoire",
        enonce:
          "Bornez chaque exécution : nombre maximal d'étapes, d'appels d'outils, de jetons et de durée par cas, avec escalade vers un humain au dépassement.",
        pourquoi: "Un agent sans limite peut boucler, épuiser le budget ou saturer un système en quelques minutes.",
        verification: "Limites configurées et documentées ; test d'un cas en boucle ; escalade constatée dans les traces.",
        references: ["owasp-llm"],
      },
      {
        id: "AGT-08",
        niveau: "obligatoire",
        enonce:
          "Prévoyez un coupe-circuit qui désactive un agent ou un outil précis en quelques minutes, sans redéploiement, et testez-le avant le pilote.",
        pourquoi: "Quand un agent se trompe en série, chaque minute de délai multiplie les cas à reprendre.",
        verification: "Procédure dans le runbook ; compte rendu de test avec le délai constaté ; personnes habilitées nommées.",
        references: ["nist-ai-rmf", "iso-42001"],
      },
      {
        id: "AGT-09",
        niveau: "recommande",
        enonce:
          "Écrivez les descriptions d'outils pour l'agent : nom explicite, quand l'utiliser et quand ne pas l'utiliser, paramètres typés avec exemples, erreurs actionnables.",
        pourquoi: "La plupart des erreurs d'agent viennent d'outils ambigus, pas du modèle : il choisit le mauvais outil ou le mauvais paramètre.",
        verification: "Relecture des définitions d'outils ; taux d'erreurs d'appel d'outil dans le rapport d'évaluation.",
        references: [],
      },
      {
        id: "AGT-10",
        niveau: "recommande",
        enonce:
          "Décidez tout relèvement du niveau d'autonomie sur preuves (mode fantôme, taux d'erreur mesuré sur un volume défini) et consignez la décision.",
        pourquoi: "Une autonomie accordée par confiance plutôt que par mesure expose le client à des erreurs qu'il n'a jamais acceptées.",
        verification: "Décision écrite avec les mesures qui la fondent et l'approbateur ; niveau en production conforme au registre.",
        references: ["nist-ai-rmf", "iso-42001"],
        exemple: "Voxalis a fait tourner ses agents deux semaines en mode fantôme avant toute action réelle, puis a élargi le catalogue d'actions sur preuves.",
      },
      {
        id: "AGT-11",
        niveau: "contextuel",
        condition: "La conception prévoit plus d'un agent.",
        enonce:
          "Justifiez le passage à plusieurs agents par une limite mesurée d'un agent unique, et tracez les échanges entre agents avec un identifiant de cas commun.",
        pourquoi: "Un système multi-agents prématuré multiplie les coûts, la latence et les points de défaillance sans gain démontré.",
        verification: "Justification écrite dans le dossier d'architecture ; trace d'un cas complet reconstituable d'un agent à l'autre.",
        references: ["opentelemetry"],
        exemple: "Le SAV Augmenté suit une topologie à superviseur : l'Orchestrateur de cas tient l'état du cas et répartit le travail entre cinq agents spécialisés.",
      },
    ],
  },
  {
    id: "observabilite",
    nom: "Observabilité",
    intention: "Pouvoir expliquer, pour n'importe quel cas, ce que le système a fait, pourquoi, à quel coût et avec quel résultat.",
    standards: [
      {
        id: "OBS-01",
        niveau: "obligatoire",
        enonce:
          "Instrumentez traces, métriques et journaux selon les conventions OpenTelemetry, corrélés par un identifiant de trace commun de bout en bout.",
        pourquoi: "Sans corrélation, diagnostiquer un incident revient à recouper à la main des journaux de six systèmes.",
        verification: "Un cas tiré au hasard est suivi de l'entrée jusqu'au dernier appel d'outil avec un seul identifiant.",
        references: ["opentelemetry"],
      },
      {
        id: "OBS-02",
        niveau: "obligatoire",
        enonce:
          "Tracez chaque exécution d'agent étape par étape : entrées, appels de modèle (version, jetons, latence), appels d'outils avec paramètres et résultats, décision finale.",
        pourquoi: "Sans trace complète, une erreur d'agent ne peut être ni expliquée au métier, ni reproduite, ni transformée en cas d'évaluation.",
        verification: "Ouverture de la trace d'un cas récent : toutes les étapes sont présentes, données sensibles masquées.",
        references: ["opentelemetry", "nist-ai-rmf", "iso-42001"],
      },
      {
        id: "OBS-03",
        niveau: "obligatoire",
        enonce:
          "Journalisez chaque action à effet dans un journal d'audit protégé contre la modification : quel agent et quelle version, quelle action, sur quel objet, sur quelle approbation.",
        pourquoi: "Face à une réclamation ou un audit, il faut prouver ce que l'agent a fait et qui l'avait autorisé.",
        verification: "Journal d'audit en écriture seule ; échantillon d'actions recoupé avec les approbations correspondantes.",
        references: ["soc2", "iso-27001", "iso-42001"],
      },
      {
        id: "OBS-04",
        niveau: "obligatoire",
        enonce:
          "Structurez les journaux et masquez à la source secrets et données personnelles ; rien de sensible n'apparaît en clair dans les journaux ou les traces.",
        pourquoi: "Les journaux sont lus par beaucoup plus de personnes que la production : ils deviennent la fuite la plus probable.",
        verification: "Règles de masquage dans le code ; recherche de motifs sensibles dans un échantillon de journaux et de traces.",
        references: ["rgpd", "owasp-llm", "iso-27001"],
      },
      {
        id: "OBS-05",
        niveau: "obligatoire",
        enonce:
          "Définissez des objectifs de niveau de service pour les parcours critiques, y compris de qualité (taux d'escalade, taux de correction humaine), et suivez-les sur un tableau de bord partagé.",
        pourquoi: "Un agent peut être disponible et rapide tout en se trompant ; sans objectif de qualité, la dégradation passe inaperçue.",
        verification: "Objectifs écrits et validés par le propriétaire du processus ; tableau de bord à jour ; historique de respect.",
        references: ["well-architected", "opentelemetry"],
      },
      {
        id: "OBS-06",
        niveau: "obligatoire",
        enonce: "Reliez chaque alerte à un runbook et à une personne d'astreinte ; supprimez ou retravaillez toute alerte qui n'appelle aucune action.",
        pourquoi: "Des alertes sans action entraînent l'habitude de les ignorer, y compris la seule qui comptait.",
        verification: "Liste des alertes avec lien vers le runbook et destinataire ; taux d'alertes acquittées sans action sur le dernier mois.",
        references: ["well-architected"],
      },
      {
        id: "OBS-07",
        niveau: "recommande",
        enonce:
          "Faites produire les indicateurs métier (cas traités, résolus sans intervention humaine, réouvertures) par le système lui-même, sans reconstitution manuelle.",
        pourquoi: "Des indicateurs reconstitués à la main sont contestables, et la valeur devient déclarative.",
        verification: "Indicateurs du tableau de bord de valeur alimentés automatiquement ; définition écrite de chaque indicateur.",
        references: [],
        exemple: "Le MTTR, le FCR et la part de tickets résolus sans intervention humaine du SAV Augmenté sont calculés à partir des traces et du ticketing, pas déclarés par les équipes.",
      },
      {
        id: "OBS-08",
        niveau: "recommande",
        enonce: "Suivez chaque jour le coût par cas et par agent, avec une alerte sur dérive par rapport au budget.",
        pourquoi: "Un changement de prompt ou un agent qui boucle peut multiplier le coût par cas en une journée.",
        verification: "Indicateur de coût par cas et par agent ; seuil d'alerte configuré ; dernière dérive détectée et traitée.",
        references: ["well-architected"],
      },
      {
        id: "OBS-09",
        niveau: "contextuel",
        condition: "Un agent opère au niveau L4 ou au-delà, ou au niveau L3 sur des actions à effet.",
        enonce:
          "Faites revoir par un humain un échantillon des cas traités en autonomie, avec une taille et une fréquence définies, et suivez le taux d'erreur constaté.",
        pourquoi: "Sans contrôle a posteriori, l'autonomie n'est plus encadrée : les erreurs ne remontent que par les réclamations.",
        verification: "Plan d'échantillonnage écrit ; registre des revues réalisées ; taux d'erreur suivi dans le temps.",
        references: ["nist-ai-rmf", "iso-42001"],
        exemple: "L'Agent Qualification de Voxalis opère en L4 avec un contrôle par échantillonnage des tickets qu'il a classés.",
      },
      {
        id: "OBS-10",
        niveau: "contextuel",
        condition:
          "Le système est sur un chemin critique et le trafic réel ne suffit pas à détecter rapidement une panne (heures creuses, faible volume).",
        enonce: "Faites rejouer en continu un parcours type en production par une sonde synthétique, avec alerte en cas d'échec.",
        pourquoi: "Sans sonde, une panne survenue la nuit n'est découverte qu'au premier client mécontent du matin.",
        verification: "Sonde configurée sur un parcours représentatif ; historique d'exécution ; alerte reliée à l'astreinte.",
        references: ["opentelemetry", "well-architected"],
      },
    ],
  },
  {
    id: "cybersecurite",
    nom: "Cybersécurité",
    intention: "Rendre le système homologable par le RSSI du client, en traitant les menaces propres aux agents autant que les menaces classiques.",
    standards: [
      {
        id: "SEC-01",
        niveau: "obligatoire",
        enonce:
          "Conduisez une analyse de menaces dès la conception, couvrant les menaces propres aux LLM, et mettez-la à jour à chaque nouvel outil ou nouvelle source de données.",
        pourquoi: "Chaque outil ajouté à un agent ouvre un nouveau chemin d'attaque ; une analyse figée au début du projet ne le voit pas.",
        verification: "Analyse de risques datée, mise à jour après le dernier ajout d'outil ; mesures reliées à chaque menace.",
        references: ["owasp-llm", "nist-ai-rmf", "iso-27001"],
      },
      {
        id: "SEC-02",
        niveau: "obligatoire",
        enonce:
          "Faites valider l'architecture et les flux de données par le RSSI du client avant le pilote, et obtenez son homologation avant la production.",
        pourquoi: "Un refus de sécurité découvert au moment du passage en production coûte des semaines et la confiance du sponsor.",
        verification: "Compte rendu de validation avant pilote ; décision d'homologation signée avant la production.",
        references: ["iso-27001"],
        exemple: "Chez Voxalis, l'architecture du SAV Augmenté a été présentée à Marc Dubois, RSSI, avec l'aide du référent sécurité détaché, avant le pilote de Nantes.",
      },
      {
        id: "SEC-03",
        niveau: "obligatoire",
        enonce:
          "Soumettez chaque agent à des tests adverses (injection directe et indirecte, exfiltration, abus d'outils) avant le pilote, intégrés au jeu d'évaluation.",
        pourquoi: "Les attaques sur un agent passent par le langage : seuls des cas adverses rejoués montrent qu'elles échouent.",
        verification: "Cas adverses versionnés ; résultat du dernier passage ; seuil de tolérance écrit, souvent nul pour les actions à effet.",
        references: ["owasp-llm", "nist-ai-rmf"],
        exemple: "Le seuil retenu pour les 120 cas adverses de Voxalis : zéro action inappropriée.",
      },
      {
        id: "SEC-04",
        niveau: "obligatoire",
        enonce:
          "Imposez l'authentification multifacteur et des comptes nominatifs à toute personne ayant accès aux environnements ; aucun compte partagé.",
        pourquoi: "Un compte partagé rend toute action non imputable et survit au départ de chacun de ses utilisateurs.",
        verification: "Politique d'authentification ; liste des comptes à privilèges ; absence de compte générique utilisé par des humains.",
        references: ["zero-trust", "iso-27001", "soc2"],
      },
      {
        id: "SEC-05",
        niveau: "obligatoire",
        enonce:
          "Chiffrez les données en transit et au repos, y compris les index vectoriels, les caches, les traces et les jeux d'évaluation.",
        pourquoi: "Index et traces contiennent les mêmes données que les systèmes sources, souvent avec moins de protection.",
        verification: "Configuration de chiffrement de chaque stockage ; protocoles chiffrés sur tous les flux.",
        references: ["iso-27001", "soc2", "rgpd"],
      },
      {
        id: "SEC-06",
        niveau: "obligatoire",
        enonce:
          "Revoyez les accès à intervalle fixe et révoquez-les à la fin de mission, ceux des FDE compris ; tracez la révocation.",
        pourquoi: "Les accès oubliés d'une mission terminée sont une porte ouverte que personne ne surveille.",
        verification: "Dernière revue des accès datée ; liste de révocation de fin de mission signée par le client.",
        references: ["iso-27001", "soc2", "zero-trust"],
      },
      {
        id: "SEC-07",
        niveau: "recommande",
        enonce:
          "N'écrivez dans un prompt système aucune information dont la divulgation poserait problème : secret, règle de sécurité, donnée interne. Partez du principe qu'il fuira.",
        pourquoi: "Le prompt système finit tôt ou tard par être extrait ; la sécurité ne doit pas reposer sur son secret.",
        verification: "Relecture des prompts système ; contrôles de sécurité appliqués dans le code et non dans les instructions.",
        references: ["owasp-llm"],
      },
      {
        id: "SEC-08",
        niveau: "recommande",
        enonce:
          "Étendez le plan de réponse à incident aux scénarios propres aux agents (actions erronées en série, injection réussie, fuite dans une réponse), avec rôles et procédure de notification.",
        pourquoi: "Le premier incident d'agent ne doit pas être le moment où l'on découvre qui décide de couper l'agent et qui prévient le DPO.",
        verification: "Scénarios dans le plan d'incident ; rôles nommés ; exercice sur table réalisé avant la production.",
        references: ["iso-27001", "rgpd", "nist-ai-rmf"],
      },
      {
        id: "SEC-09",
        niveau: "contextuel",
        condition:
          "Le système est exposé à l'extérieur du client (clients finaux, partenaires) ou traite des données sensibles à grande échelle.",
        enonce: "Faites réaliser un test d'intrusion par une équipe indépendante de l'équipe projet, agents compris, avant la mise en production.",
        pourquoi: "L'équipe qui a construit le système partage ses angles morts ; un regard indépendant trouve ce qu'elle n'imagine pas.",
        verification: "Rapport de test d'intrusion ; plan de traitement des constats ; vulnérabilités critiques corrigées avant ouverture.",
        references: ["owasp-top10", "owasp-llm", "iso-27001"],
      },
      {
        id: "SEC-10",
        niveau: "contextuel",
        condition:
          "Le traitement est susceptible d'engendrer un risque élevé pour les personnes : profilage, données sensibles, décision automatisée ayant un effet significatif.",
        enonce: "Faites conduire par le client une analyse d'impact relative à la protection des données, avec son DPO, avant le pilote.",
        pourquoi: "Sans analyse d'impact préalable, le traitement peut être suspendu et la mission bloquée au moment du lancement.",
        verification: "Analyse d'impact validée par le DPO ; mesures qui en découlent reportées dans la conception.",
        references: ["rgpd", "iso-42001"],
      },
    ],
  },
  {
    id: "architecture",
    nom: "Architecture et documentation",
    intention: "Des décisions écrites, une architecture lisible et un système que le client sait opérer et faire évoluer seul.",
    standards: [
      {
        id: "ARC-01",
        niveau: "obligatoire",
        enonce:
          "Consignez chaque décision d'architecture structurante dans un ADR versionné dans le dépôt : contexte, options étudiées, décision, conséquences.",
        pourquoi: "Sans trace des raisons, chaque décision est rediscutée à chaque nouvel arrivant, ou défaite par quelqu'un qui ignorait la contrainte.",
        verification: "ADR présents pour les choix structurants (topologie, modèle, stockage, intégration) ; statut et date de chacun.",
        references: [],
      },
      {
        id: "ARC-02",
        niveau: "obligatoire",
        enonce:
          "Tenez à jour un dossier d'architecture décrivant composants, flux de données, frontières de confiance et dépendances externes.",
        pourquoi: "La sécurité, l'exploitation et l'audit ont besoin de la même carte ; sans elle, chacun en dessine une différente.",
        verification: "Dossier daté, cohérent avec le code d'infrastructure ; frontières de confiance et flux de données personnelles visibles.",
        references: ["well-architected", "iso-27001"],
      },
      {
        id: "ARC-03",
        niveau: "obligatoire",
        enonce:
          "Inscrivez chaque agent en production au registre des agents : propriétaire, niveau d'autonomie par outil, version, date et résultat de la dernière évaluation.",
        pourquoi: "Sans registre, le client ne sait plus combien d'agents agissent en son nom, ni qui en répond.",
        verification: "Registre à jour ; correspondance entre registre, configuration déployée et dernier rapport d'évaluation.",
        references: ["iso-42001", "nist-ai-rmf"],
        exemple: "Voxalis a mis en place un registre des agents et un comité de gouvernance IA mensuel, coprésidé par Sophie Lambert et Karim Haddad.",
      },
      {
        id: "ARC-04",
        niveau: "obligatoire",
        enonce:
          "Rédigez un runbook par service et par agent (diagnostic des pannes courantes, coupe-circuit, retour arrière, contacts) et faites-le exercer par l'équipe du client.",
        pourquoi: "Un runbook jamais pratiqué échoue au premier incident, souvent la nuit, en l'absence de son auteur.",
        verification: "Runbook dans le dépôt ; compte rendu d'exercice mené par l'équipe du client sans le FDE.",
        references: ["well-architected", "soc2"],
      },
      {
        id: "ARC-05",
        niveau: "obligatoire",
        enonce:
          "Rendez le transfert vérifiable : avant la fin de mission, l'équipe du client a déployé, diagnostiqué et fait évoluer le système sans le FDE.",
        pourquoi: "Un système que seul le FDE sait opérer est une dépendance, pas une réussite.",
        verification: "Preuves datées : déploiement, résolution d'incident et évolution réalisés par l'équipe du client ; plan de transfert signé.",
        references: ["iso-42001"],
        exemple: "Chez Voxalis, le critère de fin de mission était le transfert, achevé en S39 : l'équipe interne opère, évalue et fait évoluer les agents seule.",
      },
      {
        id: "ARC-06",
        niveau: "recommande",
        enonce:
          "Justifiez par écrit le niveau de solution retenu sur l'échelle des solutions : pourquoi un niveau plus simple (règle, appel unique, workflow) ne suffit pas.",
        pourquoi: "Un agent là où une règle suffisait coûte plus cher, se teste moins bien et se trompe plus souvent.",
        verification: "Justification dans la fiche agent ou dans un ADR, appuyée sur des cas concrets.",
        references: [],
      },
      {
        id: "ARC-07",
        niveau: "recommande",
        enonce:
          "Reliez l'analyse de risques de chaque agent aux mesures techniques qui les traitent, et chaque mesure au standard qui la vérifie.",
        pourquoi: "Un registre de risques déconnecté des mesures rassure sur le papier et ne protège de rien.",
        verification: "Pour chaque risque élevé : mesure identifiée, implémentation localisable dans le code ou la configuration.",
        references: ["nist-ai-rmf", "iso-42001"],
      },
      {
        id: "ARC-08",
        niveau: "recommande",
        enonce:
          "Faites vivre la documentation dans le dépôt, à côté du code, et mettez-la à jour dans la même demande de fusion que le changement qu'elle décrit.",
        pourquoi: "Une documentation tenue ailleurs diverge en quelques semaines et cesse d'être consultée.",
        verification: "Documentation dans le dépôt ; demandes de fusion récentes modifiant code et documentation ensemble.",
        references: [],
      },
      {
        id: "ARC-09",
        niveau: "contextuel",
        condition: "L'agent interagit directement avec des clients finaux ou des personnes extérieures au client.",
        enonce:
          "Informez les personnes qu'elles interagissent avec un système d'IA, et publiez une documentation d'usage qui en décrit les limites et le recours vers un humain.",
        pourquoi: "Une interaction non signalée expose le client à un manquement de transparence et à une perte de confiance de ses propres clients.",
        verification: "Mention visible dans les messages ou l'interface ; documentation d'usage ; voie d'escalade vers un humain testée.",
        references: ["iso-42001", "nist-ai-rmf", "rgpd"],
        exemple: "Les messages de statut de l'Agent Communication de Voxalis signalent leur origine automatique et indiquent comment joindre un conseiller.",
      },
    ],
  },
];

export const TOUS_LES_STANDARDS: (Standard & { domaine: string })[] = DOMAINES_STANDARDS.flatMap((d) =>
  d.standards.map((s) => ({ ...s, domaine: d.id })),
);
