export type FaqGroup = { title: string; items: { q: string; a: string }[] };

// TODO : valider avec le client le modèle de rémunération (réponses « Combien ça coûte ? »).
export const faqGroups: FaqGroup[] = [
  {
    title: "Le courtage en travaux",
    items: [
      {
        q: "Qu'est-ce qu'un courtier en travaux ?",
        a: "Un courtier en travaux est un intermédiaire entre vous et les artisans. Il analyse votre besoin, sélectionne des professionnels qualifiés, vous aide à comparer leurs devis et vous accompagne jusqu'au lancement du chantier. Vous gardez la main sur toutes les décisions.",
      },
      {
        q: "Combien coûte l'accompagnement de J Entreprise ?",
        a: "L'accompagnement ne vous est pas facturé : J Entreprise est rémunéré par l'artisan que vous choisissez, sans surcoût sur les devis qui vous sont présentés.",
      },
      {
        q: "Quelle différence avec une plateforme de mise en relation ?",
        a: "Une plateforme transmet votre demande automatiquement à des entreprises inscrites. J Entreprise choisit chaque artisan en fonction de votre projet, connaît personnellement son réseau et reste votre interlocuteur du premier rendez-vous jusqu'au démarrage des travaux.",
      },
      {
        q: "Suis-je engagé en faisant une demande de devis ?",
        a: "Non. La demande de devis et le premier échange sont sans engagement. Vous restez libre de donner suite ou non aux propositions des artisans.",
      },
    ],
  },
  {
    title: "Les artisans",
    items: [
      {
        q: "Comment sont sélectionnés les artisans ?",
        a: "Nous vérifions l'existence légale de chaque entreprise, ses assurances (dont la garantie décennale lorsqu'elle est requise), ses références et la qualité de ses réalisations. Nous ne retenons que des professionnels dont nous connaissons le sérieux.",
      },
      {
        q: "Avec qui je signe le devis ?",
        a: "Vous signez directement avec l'artisan retenu. Le contrat, la facturation et les garanties vous lient à l'entreprise qui réalise les travaux.",
      },
      {
        q: "Combien de devis vais-je recevoir ?",
        a: "En général deux à trois devis par corps de métier, afin de vous offrir un vrai choix sans vous noyer sous les propositions.",
      },
    ],
  },
  {
    title: "Votre projet",
    items: [
      {
        q: "Quels types de travaux prenez-vous en charge ?",
        a: "Les travaux intérieurs (électricité, plomberie, isolation, menuiserie, carrelage, peinture, sols, cuisine et salle de bain), les travaux extérieurs (maçonnerie, menuiseries extérieures, façade, toiture) et l'aménagement extérieur (paysagisme, piscine, clôtures, terrasses).",
      },
      {
        q: "Dans quelles villes intervenez-vous ?",
        a: "Principalement en Charente-Maritime : La Rochelle et son agglomération (Lagord, Périgny, Aytré, Dompierre-sur-Mer…), Rochefort, Surgères, Saintes, Royan, Marans, Châtelaillon-Plage, Aigrefeuille-d'Aunis et Saint-Jean-d'Angély. Nous intervenons aussi en Charente et en Vendée selon la distance et la nature du projet.",
      },
      {
        q: "Quel est le délai pour démarrer mes travaux ?",
        a: "Il dépend de la nature du projet et de la disponibilité des artisans. Dès le premier échange, nous vous donnons une estimation réaliste du calendrier.",
      },
    ],
  },
];
