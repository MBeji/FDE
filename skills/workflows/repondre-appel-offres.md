---
id: repondre-appel-offres
titre: "Répondre à un appel d'offres"
resume: "De la réception du dossier de consultation au dépôt de l'offre et à la soutenance : chaque exigence est tracée, la solution est construite pour le besoin, et le prix découle d'un chiffrage défendable."
declencheur: "La réception d'un dossier de consultation, ou son annonce."
resultat: "Une offre technique et une offre commerciale déposées dans les délais, une matrice de conformité complète et une soutenance préparée."
version: "1.0.0"
statut: publie
proprietaire: avant-vente
etapes:
  - skill: qualifier-opportunite
    intention: "Décider de répondre ou non avant de mobiliser l'équipe de réponse."
    controle: "Go ou no-go validé par le responsable de l'offre."
  - skill: analyser-cahier-des-charges
    intention: "Extraire du dossier ce qui structure la réponse : besoin, périmètre, critères de notation, calendrier, pièces attendues."
  - skill: identifier-exigences
    intention: "Lister et tracer chaque exigence dans une matrice de conformité qui suivra l'offre jusqu'au dépôt."
  - skill: etudier-faisabilite
    intention: "Confirmer que les exigences structurantes sont tenables avant de construire la solution."
    controle: "Second go : la réponse se poursuit seulement si aucune exigence éliminatoire n'est hors d'atteinte."
  - skill: elaborer-solution
    intention: "Construire la solution qui répond au besoin et aux critères de notation : approche, architecture de principe, organisation."
    controle: "Solution validée par le binôme FDE Design et FDE Build."
  - skill: estimer-charges-couts
    intention: "Chiffrer la solution retenue, par lot, avec hypothèses et marges."
  - skill: rediger-offre-technique
    intention: "Écrire le mémoire technique dans le plan imposé, en répondant exigence par exigence."
  - skill: rediger-offre-commerciale
    intention: "Construire le prix, les conditions et les hypothèses à partir du chiffrage."
    controle: "Prix et engagements validés par la direction avant dépôt."
  - skill: preparer-soutenance
    intention: "Préparer la présentation, les intervenants et les réponses aux objections."
---

## Quand le lancer

Dès qu'un dossier de consultation est reçu, ou annoncé avec une date. Lancer le rétroplanning à partir de la date limite de dépôt : la qualification doit être rendue dans les deux premiers jours ouvrés.

## Règles d'orchestration

- **Deux points d'arrêt.** Le go initial après la qualification, puis un second après la faisabilité : abandonner à mi-parcours coûte moins qu'une offre intenable.
- **La matrice de conformité est le fil conducteur.** Chaque étape la met à jour : exigence, réponse apportée, section de l'offre, statut. Une exigence sans réponse à la veille du dépôt est un défaut bloquant.
- **En parallèle après la solution.** L'offre technique et le chiffrage avancent en même temps dès que la solution est validée ; l'offre commerciale attend le chiffrage.
- **Les questions au client passent par le canal officiel** de la consultation, dans le délai prévu. Toute réponse reçue rejoue les étapes dont elle change une entrée.
- **Aucun engagement sans validation humaine.** Prix, délais, pénalités et références citées sont validés par les personnes nommées aux points de contrôle.

## Variantes

- **Consultation restreinte ou gré à gré avec cahier des charges léger** : fusionner l'analyse du cahier des charges et l'identification des exigences.
- **Renouvellement d'un marché que nous tenons** : la qualification pèse le risque de sortant, et la solution s'appuie sur le réalisé mesuré plutôt que sur des promesses.
