---
name: construire-business-case
description: "Chiffre les bénéfices d'un pari contre la référence mesurée, ses coûts de construction et ses coûts récurrents, sur trois ans, avec hypothèses, scénarios et sensibilité. À utiliser quand le portefeuille est priorisé et avant de demander une décision d'investissement, puis à chaque jalon pour le recaler."
metadata:
  titre: "Construire le business case"
  version: "1.0.0"
  statut: publie
  etape: cadrage
  sous-processus: ciblage
  role: design
  domaine: pilotage
  phases: [cibler]
  technologies: []
  cas-usage: [tout-projet]
  tags: [business-case, valeur, roi, tco, scenarios, finance]
  proprietaire: design
  diffusion: interne
  entrees: ["Portefeuille priorisé et fiches des cas d'usage", "Référence chiffrée signée", "Coûts de construction et d'inférence fournis par le Build"]
  sorties: ["Business case sur trois ans", "Lignes mises à jour du registre de valeur"]
  prerequis: [prioriser-cas-usage]
---

## Mission

Donner au comité de quoi décider d'investir, et à la finance de quoi signer. Le skill aide le FDE Design à chiffrer un pari : bénéfices contre la référence, coûts complets, scénarios. Un business case n'est pas un argumentaire : il dit aussi à quelles conditions le pari ne vaut pas la peine.

## Quand l'utiliser

- Les paris sont priorisés et le jalon G2 approche.
- Un pilote a mesuré des résultats : le business case se recale sur le réel.
- Un coût ou un volume change sensiblement.

Ne pas l'utiliser sans référence signée : repasser par [Diagnostiquer le processus existant](/skills/diagnostiquer-processus). La mesure du réalisé relève de [Mesurer la valeur réalisée](/skills/mesurer-valeur).

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| La référence : volumes, coûts unitaires, délais, qualité | Oui | S'arrêter. |
| Le périmètre du pari et son niveau de solution | Oui | Le reprendre de la fiche cas d'usage. |
| Les coûts de construction et d'inférence | Oui | Les demander au FDE Build ; ne pas les estimer à sa place. |
| Un interlocuteur à la finance du client | Oui | Le faire désigner par le sponsor. |
| Les résultats d'un pilote ou d'un cas comparable | Non | Élargir l'écart entre scénarios. |

## Procédure

1. **Fixer le périmètre et la référence.** Quelle activité, quels volumes, quelle période. Reprendre les chiffres signés, sans les arrondir à son avantage.
2. **Identifier les leviers** avec l'arbre de valeur : coût, revenu, qualité, délai, risque. N'en retenir que deux ou trois, ceux que l'on saura mesurer.
3. **Poser chaque hypothèse par écrit** : part des cas traités, gain par cas, taux d'escalade vers un humain. Donner sa source : mesure, pilote, comparable, ou estimation à vérifier.
4. **Appliquer un taux de captation.** Un temps libéré n'est un gain que s'il est réaffecté ou évité. Distinguer le gain théorique du gain capté, et dire par quelle décision de gestion il se capte.
5. **Appliquer la montée en charge** : adoption progressive, autonomie relevée sur preuves, vagues de déploiement. La première année n'est jamais pleine.
6. **Compter tous les coûts.** Construction, conduite du changement, temps des experts métier, puis coûts récurrents : inférence, exploitation, supervision humaine, maintenance, évaluations.
7. **Construire trois scénarios** : prudent, central, ambitieux, en faisant varier les deux ou trois hypothèses qui pèsent le plus.
8. **Tester la sensibilité** : quelle hypothèse, si elle se dégrade, annule le retour ? C'est le premier risque à lever.
9. **Fixer la mesure** : indicateur, méthode, fréquence, responsable. Puis faire relire par la finance avant la séance.

## Livrable

Le [Business case](/templates/business-case) : synthèse, périmètre et référence, hypothèses, bénéfices par levier, coûts, flux sur trois ans, retour et délai de retour, scénarios, sensibilité, risques sur la valeur, modalités de mesure.

## Critères de qualité

- Chaque bénéfice part d'un chiffre de la référence et d'une hypothèse sourcée.
- Le gain capté est distinct du gain théorique.
- Les coûts récurrents figurent sur les trois ans.
- Les trois scénarios diffèrent par des hypothèses nommées.
- L'hypothèse qui fait basculer le retour est identifiée.
- La finance du client a relu les chiffres.

## Garde-fous

- Le business case est validé par la finance du client et arbitré par le comité : le skill n'annonce aucun retour comme acquis.
- Ne jamais reprendre un pourcentage de gain générique : seuls comptent la référence du client et ses propres mesures.
- Les coûts de construction et d'inférence viennent du FDE Build.
- Ne pas compter deux fois un même gain entre deux cas d'usage du portefeuille.
- Les données financières du client restent dans son environnement.

## Enchaînements

- **Amont** : [Prioriser les cas d'usage](/skills/prioriser-cas-usage).
- **Aval** : [Mesurer la valeur réalisée](/skills/mesurer-valeur), [Concevoir le processus cible](/skills/concevoir-processus-cible).
- **Workflow** : [Du mandat au portefeuille arbitré](/skills/workflows/cadrer-et-cibler).
- **Ressources** : [Business case et coût complet d'un système agentique](/frameworks/business-case-tco), [Arbre de valeur](/frameworks/arbre-de-valeur), [Registre de valeur](/frameworks/registre-de-valeur), [FinOps de l'IA](/frameworks/finops-ia), [Chiffrer la valeur d'un cas d'usage en deux jours](/guides/chiffrer-la-valeur), atelier [Business case](/outils/business-case), [La valeur déclarative](/savoir/valeur-declarative).
