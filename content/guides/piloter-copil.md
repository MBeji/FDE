---
id: piloter-copil
titre: "Préparer et piloter un COPIL"
resume: "Faire du comité de pilotage une séance de décision : décisions pré-câblées, storyline en SCQA, page de décisions attendues, conduite de séance, traitement des objections et compte rendu sous 24 heures."
phases: [cadrer, diagnostiquer, cibler, reinventer, concevoir, construire, industrialiser, perenniser]
duree: "9 min"
niveau: fondamental
tags: [gouvernance, copil, decision, communication]
frameworks: [pyramide-scqa, registre-de-valeur]
templates: [support-copil, point-hebdo, registre-raid, tableau-de-bord-valeur]
---

## Le résultat visé

Un comité de pilotage (COPIL) n'est pas une séance d'information : c'est l'endroit où les décisions se prennent. Trois critères de réussite : les décisions demandées sont prises, elles sont écrites avec un porteur et une échéance, et personne n'a rien découvert en séance. Un comité qui se termine par « très intéressant, merci » a échoué.

Chez [Voxalis](/guides/cas-fil-rouge), le COPIL est mensuel, présidé par Claire Besson, et les jalons de la [méthode](/methode) y sont franchis.

## Le rétroplanning

| Échéance | Action |
| --- | --- |
| J-10 | Lister les décisions attendues avec le propriétaire du processus |
| J-7 | Écrire la storyline, titres seuls |
| J-6 à J-3 | Pré-câbler chaque membre concerné |
| J-2 | Envoyer le support, page de décisions en tête |
| J | Tenir la séance en 60 minutes |
| J+1 | Envoyer le compte rendu |

## 1. Écrire la page de décisions attendues

C'est la première page du [support de COPIL](/templates/support-copil), et la seule que tout le monde lira. Trois décisions au plus par séance, chacune écrite comme une question fermée assortie d'une recommandation.

| Rubrique | Exemple : COPIL Voxalis de S9 |
| --- | --- |
| Décision demandée | Retenir cinq cas d'usage sur les quatorze identifiés et différer la détection prédictive des pannes |
| Recommandation | Oui : les cinq cas se renforcent sur le même flux ; la détection prédictive n'a pas les données (faisabilité de 2,0) |
| Ce qu'elle engage | 3,1 M€ d'investissement initial pour 5,4 M€ de valeur annuelle en régime de croisière |
| Sans décision | La phase Réinventer ne démarre pas en S10 |

Formule : « Nous vous demandons de décider [X]. Nous recommandons [A], parce que [raison]. Sans décision aujourd'hui, [conséquence]. »

## 2. Pré-câbler

Rencontrer avant la séance, en tête-à-tête, chaque membre qui peut bloquer la décision ou qu'elle touche. Vingt minutes suffisent. Une objection découverte en séance est une faute de préparation.

À dire : « Je voulais vous montrer ce que nous recommanderons jeudi et entendre votre réaction avant. Qu'est-ce qui vous gênerait ? Que vous faudrait-il pour soutenir cette décision ? »

Commencer par les plus exposés, finir par le sponsor, à qui l'on apporte la carte des positions. Pour le COPIL de S9 : Julien Faure d'abord, sur les hypothèses du business case et les 60 % de captation ; Karim Haddad ensuite, sur la charge d'intégration ; Claire Besson enfin, avec ce qui reste à trancher.

Trois issues possibles : l'accord (le noter), la réserve levable (la traiter avant la séance ou l'inscrire comme condition), le désaccord de fond (prévenir le sponsor, qui arbitre ou retire le point de l'ordre du jour).

## 3. Construire la storyline

Écrire d'abord l'histoire en quatre phrases, selon le schéma SCQA du [principe de la pyramide](/frameworks/pyramide-scqa). Exemple, pour le COPIL de diagnostic de S6 :

- **Situation.** Le SAV Entreprises traite 420 000 tickets par an pour 17,2 M€.
- **Complication.** Le délai de résolution est de 31 h et le churn PME de 11,5 % ; sept POC en deux ans n'y ont rien changé.
- **Question.** Où agir pour diviser ce délai par deux ?
- **Réponse.** Sur les attentes et la collecte manuelle, qui font 64 % du délai, en commençant par les 12 motifs qui concentrent 58 % des incidents.

Écrire ensuite les titres. Chaque page porte un titre-message : une phrase complète qui énonce la conclusion. Lus à la suite, les titres racontent l'histoire sans les pages.

| Titre-étiquette | Titre-message |
| --- | --- |
| Analyse du MTTR | 64 % du délai de résolution vient des attentes et de la collecte manuelle, pas du traitement |
| Base de connaissances | 35 % de la base de connaissances est obsolète : il faut l'assainir avant de la confier à un agent |
| Résultats du pilote | Le pilote divise le délai de résolution par deux, de 31 h à 14,5 h, sans aucune action inappropriée |

Dix pages au plus : décisions attendues, synthèse, avancement, valeur (extrait du [registre de valeur](/frameworks/registre-de-valeur) ou du [tableau de bord de valeur](/templates/tableau-de-bord-valeur)), trois premiers risques du [registre RAID](/templates/registre-raid), un dossier par décision, prochaines étapes. Le reste part en annexe.

## 4. Conduire la séance

| Durée | Séquence |
| --- | --- |
| 5 min | Ouverture par le sponsor ; rappel des décisions attendues |
| 10 min | Synthèse : l'histoire en quatre phrases, les chiffres clés |
| 30 min | Les décisions, une par une |
| 10 min | Risques et besoins d'arbitrage |
| 5 min | Relecture à voix haute des décisions et des actions |

- Ne pas dérouler le support : il a été envoyé, il est réputé lu.
- Faire présenter les résultats par l'équipe du client dès que possible. Un product owner Voxalis qui présente le pilote prépare mieux le transfert qu'un plan.
- Clore chaque point par : « Je note : décision [X], porteur [nom], échéance [date]. C'est bien cela ? »
- Tenir l'horaire. Un débat qui dérive devient un point séparé, avec un porteur et une date.

## 5. Traiter une objection

1. **Reformuler** sans défendre : « Si je comprends bien, votre crainte est que… »
2. **Qualifier** : un fait, un risque, ou un intérêt à protéger ?
3. **Répondre par un fait**, ou reconnaître qu'on ne l'a pas : « Je n'ai pas ce chiffre. Je vous l'apporte vendredi. »
4. **Isoler la décision** : « Cette réserve empêche-t-elle de décider, ou peut-on décider sous cette condition ? »

Ne jamais improviser un chiffre, ni débattre à deux devant le comité.

## 6. Annoncer une mauvaise nouvelle

Le sponsor l'apprend de vous, en tête-à-tête, dans les 24 heures, jamais en séance. En COPIL, elle se dit en cinq temps : le fait, l'impact, la cause, ce qui est déjà fait, ce que vous demandez.

Exemple, pendant le pilote Voxalis : « Nous avons eu deux incidents mineurs : des messages client envoyés en double. Aucune action inappropriée n'a été exécutée. La cause est identifiée et corrigée depuis S24. Nous ne demandons aucune décision et le calendrier du pilote est maintenu. »

Un indicateur au rouge se montre en rouge. Un comité qui découvre qu'un vert était orange ne croit plus aucun vert. Si les mauvaises nouvelles s'accumulent, voir [Redresser une mission](/guides/redresser-mission).

## 7. Envoyer le compte rendu sous 24 heures

Une page : les décisions prises, dans les termes relus en séance ; les actions avec porteur et échéance ; les points ouverts. Le faire relire au sponsor avant diffusion, puis reporter les actions dans le [point hebdomadaire](/templates/point-hebdo) et le registre RAID.

Message type : « Vous trouverez ci-dessous les décisions prises ce matin et les actions qui en découlent. Sans remarque de votre part d'ici jeudi midi, ce relevé fait foi. »

## Erreurs fréquentes

- **Le COPIL d'information.** Aucune décision à l'ordre du jour : annuler la séance et envoyer une note.
- **La décision découverte en séance.** Elle sera reportée, par prudence. Parade : le pré-câblage.
- **Quarante pages.** Parade : dix pages, des titres-messages, des annexes.
- **Le vert de façade.** Parade : des seuils fixés à l'avance pour chaque indicateur.
- **Le compte rendu à J+7.** Chacun a déjà sa version des décisions.
- **Le sponsor absent ou représenté.** Reporter : un comité sans décideur ne décide rien. Voir [sponsor fantôme](/savoir/sponsor-fantome).

## Checklist

- [ ] Trois décisions au plus, écrites comme des questions fermées avec recommandation.
- [ ] Chaque membre concerné pré-câblé en tête-à-tête ; le sponsor connaît la carte des positions.
- [ ] Storyline écrite en SCQA avant toute page.
- [ ] Chaque page porte un titre-message ; les titres lus seuls racontent l'histoire.
- [ ] Support de dix pages au plus, envoyé à J-2, page de décisions en tête.
- [ ] Toute mauvaise nouvelle annoncée au sponsor avant la séance.
- [ ] Chaque décision relue à voix haute, avec porteur et échéance.
- [ ] Compte rendu d'une page envoyé sous 24 heures, relu par le sponsor.
- [ ] Actions reportées dans le point hebdomadaire et le registre RAID.
