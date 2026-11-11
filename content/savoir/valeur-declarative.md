---
id: valeur-declarative
titre: "La valeur déclarative"
resume: "Des gains annoncés en comité sans référence mesurée, sans méthode de calcul ni validation de la finance. La valeur existe dans les slides, pas dans le compte de résultat."
type: anti-pattern
phases: [cibler, construire, perenniser]
tags: [valeur, mesure, finance]
secteur: ""
date: ""
---

## Symptômes

- Les gains sont exprimés en « heures économisées » ou en « ETP libérés », jamais en euros captés ni en indicateur métier.
- Il n'existe pas de valeur de référence (baseline) mesurée avant le démarrage, ou elle a été reconstituée après coup.
- Le directeur financier n'a ni vu ni signé la méthode de calcul.
- Les chiffres viennent d'un questionnaire aux utilisateurs (« combien de temps pensez-vous gagner ? ») ou d'une extrapolation d'une démo.
- Le même gain apparaît dans plusieurs projets, ou le chiffre change d'un comité à l'autre sans explication.
- Personne ne peut dire où le temps libéré est allé.

## Pourquoi ça arrive

- **Mesurer la référence semble retarder le projet.** On la repousse « au pilote », puis il est trop tard : le processus a déjà changé.
- **Le temps gagné n'est pas de l'argent gagné.** Sans décision sur l'usage de la capacité libérée (non-remplacement des départs, baisse de la sous-traitance, réaffectation), aucun euro ne sort.
- **Personne ne possède le registre de valeur.** L'équipe projet a intérêt à afficher des gains ; la finance n'est pas associée.
- **Les indicateurs de long terme sont lents.** Le churn se mesure en douze mois ; on le remplace par une promesse.

## Conséquences

La crédibilité tombe au premier contrôle de gestion. Les budgets suivants sont refusés, y compris pour des projets solides. Les équipes métier, qui ne voient aucun effet sur leur charge, concluent que les gains annoncés sont faux. Et l'on ne sait plus quels cas d'usage arrêter, faute de savoir lesquels rapportent.

## Comment en sortir

1. **Geler les chiffres annoncés** et le dire au sponsor : ils seront remplacés par des mesures.
2. **Reconstituer une référence défendable** depuis les données historiques (tickets, temps, coûts), sur une période antérieure au changement. La faire valider par la finance.
3. **Monter un [registre de valeur](/frameworks/registre-de-valeur)** : pour chaque gain, l'indicateur, la référence, la méthode, le levier de captation et le responsable.
4. **Séparer gain potentiel et gain capté.** Chez Voxalis : 6,3 M€ potentiels, 3,8 M€ retenus en hypothèse de captation à 60 %.
5. **Assumer l'incertitude** : un indicateur non mesurable s'affiche comme tel. Voxalis écrit « trop tôt pour conclure, mesure à 12 mois » pour le churn plutôt qu'un chiffre.

## Comment l'éviter

- Chiffrer une hypothèse de valeur dès le cadrage, avec l'[arbre de valeur](/frameworks/arbre-de-valeur).
- Faire signer la référence et la méthode par la finance avant le pilote. Le [business case](/templates/business-case) de Voxalis a été validé par le directeur financier.
- Écrire dans le [plan de pilote](/templates/plan-pilote) ce qui sera mesuré, comment, et contre quoi.
- Décider dès le ciblage comment la capacité libérée sera captée, avec la DRH.
- Tenir une [revue de valeur hebdomadaire](/savoir/revue-de-valeur-hebdo) et un [tableau de bord de valeur](/templates/tableau-de-bord-valeur) qui affichent l'écart à la cible, y compris quand il est défavorable (coût par ticket mesuré à 29 € à +3 mois pour une cible de 26 €).

Voir aussi : [mesure d'impact](/frameworks/mesure-impact), [chiffrer la valeur](/guides/chiffrer-la-valeur).
