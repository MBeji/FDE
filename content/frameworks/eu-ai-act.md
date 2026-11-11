---
id: eu-ai-act
titre: "EU AI Act : qualifier un cas d'usage"
resume: "Une démarche en cinq questions pour situer un cas d'usage dans l'approche par niveaux de risque du règlement européen sur l'IA, identifier le rôle du client et préparer le dossier pour son juridique."
categorie: confiance
phases: [cibler, concevoir]
origine: "Union européenne"
niveau: fondamental
tags: [reglementation, conformite, risque]
templates: [canevas-cas-usage, analyse-risques-agent]
lies: [ia-responsable, nist-ai-rmf, gouvernance-ia]
---

> [!WARNING]
> Cette fiche n'est pas un avis juridique. Elle aide le FDE à préparer une qualification et à poser les bonnes questions. La qualification définitive, le calendrier d'application et les obligations précises relèvent du service juridique et de la conformité du client.

## En bref

Le règlement européen sur l'IA (AI Act), entré en vigueur en août 2024 avec une application échelonnée, classe les systèmes d'IA selon le risque qu'ils font peser : **pratiques interdites**, **systèmes à haut risque**, **obligations de transparence**, **risque minimal**. Il ajoute des obligations propres aux fournisseurs de modèles d'IA à usage général. Les obligations varient selon le niveau et selon le rôle de l'organisation : fournisseur ou déployeur.

Pour un FDE, l'enjeu est double : ne pas découvrir en Industrialiser qu'un cas d'usage relève du haut risque, et livrer au juridique un dossier factuel plutôt qu'une question vague.

## Quand l'utiliser

- En [Cibler](/methode/cibler), pour chaque cas d'usage du portefeuille : un haut risque change la faisabilité et le coût.
- En [Concevoir](/methode/concevoir), pour intégrer les exigences qui en découlent à la conception.
- À chaque extension de périmètre : un nouvel usage peut changer la qualification.

## Comment l'appliquer

### 1. Poser les cinq questions

| N° | Question | Si oui |
| --- | --- | --- |
| 1 | Le système relève-t-il d'une pratique que le règlement interdit (manipulation, exploitation de vulnérabilités, notation sociale, etc.) ? | Arrêt, escalade immédiate au juridique |
| 2 | Est-il utilisé dans un domaine que le règlement classe à haut risque (par exemple certaines décisions touchant à l'emploi ou à l'accès à des services essentiels) ou comme composant de sécurité d'un produit réglementé ? | Présomption de haut risque, qualification juridique obligatoire |
| 3 | Interagit-il directement avec des personnes, ou génère-t-il des contenus qu'elles pourraient prendre pour humains ? | Obligations de transparence probables |
| 4 | Le client développe-t-il le système et le met-il sur le marché ou en service sous son nom, ou utilise-t-il un système fourni par un tiers ? | Détermine le rôle : fournisseur ou déployeur |
| 5 | Le système repose-t-il sur un modèle d'IA à usage général ? | Vérifier la documentation et les engagements du fournisseur du modèle |

### 2. Établir le rôle

Le **fournisseur** développe un système et le met sur le marché ou en service sous son nom : il porte l'essentiel des obligations de conformité. Le **déployeur** utilise un système sous son autorité : il a ses propres obligations, notamment d'usage conforme et de supervision humaine pour le haut risque. Un client qui construit ses agents avec ses équipes et des FDE peut être fournisseur de son propre système ; faire trancher ce point par le juridique.

### 3. Constituer le dossier de qualification

Ce que le FDE livre au juridique, sous deux à trois pages : description du cas d'usage et des personnes concernées ; décisions prises par le système et leur réversibilité ; niveau d'autonomie par outil ; données traitées ; modèles utilisés et leur fournisseur ; réponses argumentées aux cinq questions ; qualification proposée et points d'incertitude.

### 4. Traduire en exigences de conception

Transparence : informer les personnes. Haut risque : gestion des risques, qualité des données, documentation technique, journalisation, supervision humaine, robustesse, à cadrer précisément avec le juridique. Inscrire ces exigences dans l'[analyse de risques](/templates/analyse-risques-agent).

### 5. Réviser à chaque changement d'usage

La qualification porte sur un usage, pas sur une technologie. La reprendre à chaque extension.

## Exemple

Pour SAV Augmenté, l'analyse préparée en S8 conclut : pas de pratique interdite ; pas de domaine à haut risque, les agents traitent des incidents techniques et ne décident pas de l'accès à un service essentiel ; interaction directe avec les clients PME via l'Agent Communication, donc **obligation de transparence**. Voxalis développe et met en service le système pour son propre usage : le juridique retient un rôle de fournisseur et de déployeur de son système, et vérifie les engagements des fournisseurs de modèles.

Un point de vigilance a été signalé : utiliser les données du poste de supervision pour évaluer la performance individuelle des conseillers pourrait relever d'un usage dans le domaine de l'emploi. Le comité de gouvernance l'a exclu explicitement du périmètre.

## Pièges à éviter

- **Qualifier la technologie au lieu de l'usage.** Un même agent peut être à risque minimal ou à haut risque selon ce qu'on en fait. Parade : raisonner cas d'usage par cas d'usage.
- **Attendre la fin du projet.** Parade : qualification en Cibler, révision en Concevoir.
- **Jouer au juriste.** Parade : le FDE documente les faits, le juridique qualifie.
- **Oublier les usages dérivés.** Les données d'un agent servent vite à autre chose. Parade : exclusions écrites au registre des agents.

## Pour aller plus loin

- Frameworks : [IA responsable](/frameworks/ia-responsable), [NIST AI RMF et ISO/IEC 42001](/frameworks/nist-ai-rmf), [gouvernance de l'IA](/frameworks/gouvernance-ia)
- Templates : [canevas de cas d'usage](/templates/canevas-cas-usage), [analyse de risques agent](/templates/analyse-risques-agent)
- Référence : Règlement (UE) sur l'intelligence artificielle, texte officiel publié au Journal officiel de l'Union européenne.
