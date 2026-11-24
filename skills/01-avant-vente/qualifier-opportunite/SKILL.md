---
name: qualifier-opportunite
description: "Qualifie une opportunité commerciale sur six critères notés et recommande un go, un go sous conditions ou un no-go argumenté. À utiliser dès qu'une sollicitation arrive (demande entrante, appel d'offres annoncé, piste remontée par un FDE en mission) et avant d'engager du temps d'avant-vente ou de réponse."
metadata:
  titre: "Qualifier une opportunité"
  version: "1.0.0"
  statut: publie
  etape: avant-vente
  sous-processus: qualification
  role: design
  domaine: commerce
  phases: []
  technologies: []
  cas-usage: [tout-projet]
  tags: [go-no-go, opportunite, qualification, avant-vente]
  proprietaire: avant-vente
  diffusion: interne
  entrees: ["Sollicitation du client (courriel, compte rendu d'échange ou avis de consultation)", "Historique de la relation avec le client", "Disponibilité du pool sur la période"]
  sorties: ["Fiche de qualification notée", "Recommandation go, go sous conditions ou no-go"]
  prerequis: []
---

## Mission

Décider, avant d'y passer du temps, si une opportunité mérite d'être poursuivie. Le skill produit une fiche de qualification notée et une recommandation argumentée, que le responsable de l'offre valide. Une réponse à appel d'offres mobilise plusieurs personnes pendant des semaines : un no-go posé tôt et expliqué vaut mieux qu'une offre perdue d'avance.

## Quand l'utiliser

- Une demande entrante, un appel d'offres ou une consultation restreinte vient d'être reçu ou annoncé.
- Un FDE en mission remonte un besoin sur un autre périmètre du même client.
- Une opportunité déjà qualifiée change de nature : périmètre, budget, calendrier ou concurrence.

Ne pas l'utiliser pour analyser le besoin en profondeur : c'est le rôle de [Analyser le besoin du client](/skills/analyser-besoin-client), qui vient après un go. Ne pas l'utiliser non plus pour une extension de mission déjà contractualisée.

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| La sollicitation telle qu'elle a été reçue | Oui | S'arrêter et la demander : on ne qualifie pas un ouï-dire. |
| Le nom et la fonction du demandeur | Oui | Le demander au porteur du compte. |
| L'historique de la relation avec ce client | Non | Noter « premier contact » et abaisser d'un point le critère « accès au décideur ». |
| Le budget ou l'ordre de grandeur attendu | Non | Marquer `[À CONFIRMER]` et inscrire la question dans la liste à poser. |
| La charge disponible du pool sur la période | Non | La demander à la direction du pool avant de conclure. |

## Procédure

1. **Reformuler la demande en problème.** Écrire en une phrase le résultat métier que le client veut voir changer. S'il ne s'en dégage aucun, c'est une demande de solution : le noter, c'est un signal à traiter dans l'analyse du besoin.
2. **Identifier les acteurs.** Qui demande, qui décide, qui paie, qui utilisera. Un demandeur sans décideur identifié est le premier motif de no-go.
3. **Noter les six critères de 0 à 3**, avec le fait qui justifie chaque note.

   | Critère | 0 | 3 |
   | --- | --- | --- |
   | Enjeu métier | Aucun indicateur ni coût de l'inaction | Indicateur, ampleur et échéance exprimés par le client |
   | Sponsor et décideur | Inconnus | Sponsor nommé, rencontré, qui arbitre |
   | Budget et calendrier | Ni l'un ni l'autre | Budget alloué et date de décision connue |
   | Adéquation à notre offre | Hors de notre savoir-faire | Cœur de la méthode, références comparables |
   | Chances de gagner | Consultation de forme, sortant favori | Relation établie, différenciation claire |
   | Capacité à livrer | Aucun binôme disponible | Binôme Design et Build identifié et libre |

4. **Lister les signaux d'arrêt.** Cahier des charges écrit pour un concurrent, délai de réponse intenable, exigence contractuelle inacceptable, données inaccessibles par principe, client attendant une solution sans vouloir toucher au processus. Un seul signal non levé suffit à recommander un no-go.
5. **Conclure.** Total sur 18 : 13 et plus sans signal d'arrêt, go ; de 8 à 12, go sous conditions, chacune avec un responsable et une date ; moins de 8 ou un signal d'arrêt non levé, no-go.
6. **Préparer la suite.** En cas de go : les cinq questions à poser au client en priorité et la charge d'avant-vente à engager. En cas de no-go : le message à adresser au client, respectueux et réutilisable.

## Livrable

Une fiche de qualification d'une page :

1. Opportunité : client, demandeur, origine, date limite.
2. Le problème en une phrase, et la solution demandée si elle diffère.
3. Tableau des six critères : note, fait justificatif, source.
4. Signaux d'arrêt relevés et état de chacun.
5. Recommandation : go, go sous conditions ou no-go, en trois lignes.
6. Suite : questions prioritaires, charge d'avant-vente estimée, binôme pressenti.

## Critères de qualité

- Chaque note s'appuie sur un fait daté et sourcé, pas sur une impression.
- Le décideur est nommé, ou son absence est écrite comme un risque.
- Aucune donnée n'est inventée : ce qui manque porte `[À CONFIRMER]`.
- La recommandation découle du total et des signaux d'arrêt ; un écart à la règle est justifié.
- Un go sous conditions liste des conditions vérifiables, avec responsable et date.

## Garde-fous

- La décision de go ou de no-go appartient au responsable de l'offre : le skill recommande, il ne décide pas et n'écrit pas au client.
- Ne jamais estimer les chances de gagner à partir d'informations sur un concurrent obtenues de façon irrégulière.
- Ne pas annoncer de prix ni de délai à ce stade : cela relève de [Estimer les charges et les coûts](/skills/estimer-charges-couts).
- Les informations commerciales du client restent internes : ne les verser dans aucun outil que le client n'a pas autorisé.

## Enchaînements

- **Amont** : aucun, c'est le point d'entrée du cycle.
- **Aval** : [Analyser le besoin du client](/skills/analyser-besoin-client) après un go ; [Analyser le cahier des charges](/skills/analyser-cahier-des-charges) s'il s'agit d'un appel d'offres.
- **Workflows** : [De l'opportunité à l'estimation](/skills/workflows/qualifier-et-chiffrer), [Répondre à un appel d'offres](/skills/workflows/repondre-appel-offres).
- **Ressources** : [Résolution de problèmes par hypothèses](/frameworks/probleme-hypotheses), [Cartographier et engager les parties prenantes](/frameworks/cartographie-parties-prenantes).
