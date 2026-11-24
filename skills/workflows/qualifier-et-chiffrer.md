---
id: qualifier-et-chiffrer
titre: "De l'opportunité à l'estimation"
resume: "Le parcours d'avant-vente hors appel d'offres : décider d'y aller, comprendre le besoin, vérifier la faisabilité et annoncer une charge et un coût qui se défendent."
declencheur: "Une demande entrante ou une piste remontée par un FDE en mission."
resultat: "Une recommandation de go, une note de faisabilité et une estimation de charges et de coûts prête à être proposée."
version: "1.0.0"
statut: publie
proprietaire: avant-vente
etapes:
  - skill: qualifier-opportunite
    intention: "Décider si l'opportunité mérite du temps d'avant-vente, avant d'en engager."
    controle: "Go ou no-go validé par le responsable de l'offre."
  - skill: analyser-besoin-client
    intention: "Passer de la solution demandée au problème métier, avec ses enjeux, ses acteurs et ses contraintes."
  - skill: etudier-faisabilite
    intention: "Vérifier que le besoin est tenable : données, SI, niveau de solution, contraintes réglementaires et organisationnelles."
    controle: "Verdict de faisabilité signé par le FDE Build."
  - skill: estimer-charges-couts
    intention: "Chiffrer la charge et le coût à partir du périmètre retenu, avec les hypothèses et les marges d'incertitude."
    controle: "Estimation validée par le responsable de l'offre avant toute communication au client."
---

## Quand le lancer

À chaque sollicitation qui n'est pas un appel d'offres formel : gré à gré, extension vers un nouveau périmètre chez un client existant, demande d'étude. Pour une consultation avec dossier, lancer [Répondre à un appel d'offres](/skills/workflows/repondre-appel-offres).

## Règles d'orchestration

- **Séquentiel jusqu'au go.** Rien ne démarre avant la décision de go : un no-go arrête le workflow, avec le message au client préparé par la qualification.
- **Le besoin avant la faisabilité.** L'étude de faisabilité porte sur le problème reformulé, pas sur la solution demandée. Si l'analyse du besoin change le périmètre, la qualification se rejoue sur les critères touchés.
- **Une faisabilité négative n'est pas un échec.** Elle ramène à l'analyse du besoin pour chercher un périmètre tenable, ou conduit à un no-go documenté.
- **L'estimation porte ses hypothèses.** Toute hypothèse marquée `[À CONFIRMER]` dans les étapes précédentes devient une hypothèse de chiffrage, visible du client.

## Sortie de workflow

Si le client signe, la mission s'ouvre par [Du mandat au portefeuille arbitré](/skills/workflows/cadrer-et-cibler) : la note de besoin et la note de faisabilité en sont les entrées.
