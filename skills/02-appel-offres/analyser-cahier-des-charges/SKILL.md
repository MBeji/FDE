---
name: analyser-cahier-des-charges
description: "Lit un dossier de consultation et en tire ce qui structure la réponse : besoin réel, périmètre, critères de notation, calendrier, pièces attendues, clauses sensibles et questions à poser. À utiliser dès la réception d'un cahier des charges ou d'un dossier d'appel d'offres, avant toute rédaction."
metadata:
  titre: "Analyser le cahier des charges"
  version: "1.0.0"
  statut: publie
  etape: appel-offres
  sous-processus: analyse-consultation
  role: design
  domaine: commerce
  phases: []
  technologies: []
  cas-usage: [tout-projet]
  tags: [appel-offres, cahier-des-charges, consultation, criteres-notation, retroplanning]
  proprietaire: avant-vente
  diffusion: interne
  entrees: ["Dossier de consultation complet", "Fiche de qualification de l'opportunité", "Date limite de dépôt"]
  sorties: ["Synthèse de consultation", "Rétroplanning de réponse", "Liste des questions à poser à l'acheteur"]
  prerequis: [qualifier-opportunite]
---

## Mission

Donner à l'équipe de réponse, en une lecture, ce qu'il faut savoir du dossier : ce que le client veut vraiment, sur quoi l'offre sera notée, ce qu'il faut remettre et pour quand. Le skill prépare pour le FDE Design une synthèse de consultation. Une offre perd rarement sur la technique : elle perd pour avoir répondu à côté des critères, ou oublié une pièce.

## Quand l'utiliser

- Un dossier de consultation vient d'être reçu et le go initial est donné.
- Un additif ou des réponses aux questions modifient le dossier : la synthèse se met à jour.

Ne pas l'utiliser pour décider de répondre : c'est [Qualifier une opportunité](/skills/qualifier-opportunite). L'extraction exigence par exigence relève de [Identifier et tracer les exigences](/skills/identifier-exigences).

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| Toutes les pièces du dossier, annexes comprises | Oui | Lister les pièces manquantes et les demander avant de conclure. |
| Le règlement de la consultation | Oui | Sans lui, noter « critères et modalités inconnus » comme risque majeur. |
| La date et l'heure limites de dépôt | Oui | S'arrêter : aucun rétroplanning n'est possible. |
| La fiche de qualification | Non | Relever soi-même le demandeur et le contexte. |
| L'historique avec ce client | Non | Le demander au porteur du compte. |

## Procédure

1. **Inventorier les pièces.** Lister chaque document, sa nature (règlement, cahier des charges, cadre de réponse, pièces contractuelles, bordereau de prix), sa version. Signaler toute contradiction entre pièces.
2. **Reformuler le besoin.** En cinq lignes : le résultat métier attendu, le périmètre, les utilisateurs, l'existant à reprendre, l'échéance. Distinguer ce que le client demande de ce qu'il cherche à obtenir.
3. **Extraire les règles du jeu.** Critères de notation et pondération, critères éliminatoires, forme imposée de la réponse (plan, nombre de pages, format), variantes autorisées ou non, modalités de questions, soutenance prévue.
4. **Traduire la pondération en effort de réponse.** Un critère qui pèse 40 % de la note mérite 40 % de l'attention : indiquer pour chaque critère les sections de l'offre qui le servent.
5. **Relever les clauses sensibles.** Pénalités, engagements de résultat, propriété intellectuelle, réversibilité, localisation des données, clauses de sécurité, plafonds de responsabilité, modalités de paiement. Chaque clause est classée : acceptable, à négocier, bloquante.
6. **Repérer les zones d'ombre.** Volumes absents, périmètre ambigu, accès aux données non décrit, dépendances envers des tiers. Chacune devient une question à l'acheteur ou une hypothèse à écrire dans l'offre.
7. **Lire entre les lignes.** Un cahier des charges qui décrit une solution, reprend le vocabulaire d'un fournisseur ou fixe un délai intenable est un signal : le remonter au responsable de l'offre.
8. **Construire le rétroplanning** à rebours de la date de dépôt : date limite des questions, solution arrêtée, chiffrage, rédaction, relecture, validation de la direction, assemblage et dépôt avec une marge d'un jour ouvré.

## Livrable

Une synthèse de consultation de trois pages au plus :

1. Fiche d'identité : acheteur, objet, type de procédure, dates clés.
2. Le besoin en cinq lignes, et ce qu'il révèle.
3. Critères de notation, pondération, critères éliminatoires.
4. Pièces à remettre et forme imposée.
5. Clauses sensibles et leur classement.
6. Questions à poser, par ordre de priorité, avec la date limite.
7. Signaux et risques pour la décision de poursuivre.
8. Rétroplanning et responsables.

## Critères de qualité

- Toutes les pièces du dossier sont inventoriées et datées.
- Chaque critère de notation est relié à une partie de la réponse.
- Chaque affirmation renvoie à la pièce et à la page d'où elle vient.
- Les questions sont formulées de façon à pouvoir être envoyées telles quelles.
- Le rétroplanning laisse une marge avant la date de dépôt et nomme un responsable par étape.

## Garde-fous

- Les questions à l'acheteur passent par le canal officiel de la consultation, envoyées par le responsable de l'offre : le skill les rédige, il ne les envoie pas.
- Ne jamais combler une zone d'ombre par une supposition silencieuse : question, ou hypothèse écrite.
- La qualification juridique des clauses appartient au juridique : le skill les signale et les classe à titre indicatif.
- Le dossier de consultation est confidentiel : ne pas le verser dans un outil non autorisé.

## Enchaînements

- **Amont** : [Qualifier une opportunité](/skills/qualifier-opportunite).
- **Aval** : [Identifier et tracer les exigences](/skills/identifier-exigences).
- **Workflow** : [Répondre à un appel d'offres](/skills/workflows/repondre-appel-offres).
- **Ressources** : [Résolution de problèmes par hypothèses](/frameworks/probleme-hypotheses), [Principe de la pyramide et SCQA](/frameworks/pyramide-scqa).
