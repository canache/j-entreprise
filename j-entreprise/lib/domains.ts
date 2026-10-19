export type Prestation = {
  id: string;
  title: string;
  text: string;
  points: string[];
};

export type Domain = {
  slug: string;
  name: string;
  number: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  prestationsTitle: string;
  prestations: Prestation[];
  faq: { q: string; a: string }[];
  cta: string;
};

export const domains: Domain[] = [
  {
    slug: "travaux-interieurs",
    name: "Travaux intérieurs",
    number: "01",
    prestationsTitle: "Nos prestations de rénovation intérieure",
    summary:
      "Électricité, plomberie, isolation, menuiserie, carrelage, peinture, sols, cuisine et salle de bain : chaque corps de métier pour transformer votre intérieur.",
    metaTitle: "Travaux intérieurs à La Rochelle",
    metaDescription:
      "Rénovation intérieure à La Rochelle : électricité, plomberie, isolation, carrelage, peinture, cuisine et salle de bain avec des artisans sélectionnés.",
    h1: "Travaux intérieurs à La Rochelle et en Charente-Maritime",
    intro: [
      "Rafraîchir une pièce, refaire une salle de bain ou rénover une maison entière : les travaux intérieurs mobilisent souvent plusieurs corps de métier qui doivent intervenir dans le bon ordre. Un électricien avant le plaquiste, un plombier avant le carreleur, un peintre en dernier.",
      "J Entreprise vous met en relation avec des artisans qualifiés de La Rochelle et des environs pour chacune de ces spécialités, compare leurs devis avec vous et veille à ce que l'ensemble s'enchaîne sans mauvaise surprise.",
    ],
    prestations: [
      {
        id: "electricite",
        title: "Électricité",
        text: "Mise aux normes, rénovation complète du tableau, ajout de prises et de points lumineux, éclairage LED ou domotique : l'électricité est la première étape de toute rénovation sérieuse.",
        points: [
          "Mise en conformité NF C 15-100",
          "Remplacement de tableau électrique",
          "Éclairage intérieur et domotique",
        ],
      },
      {
        id: "plomberie",
        title: "Plomberie",
        text: "Création ou déplacement de points d'eau, remplacement d'un chauffe-eau, réseau d'évacuation à reprendre : nous sélectionnons des plombiers habitués aux maisons anciennes comme aux constructions récentes.",
        points: [
          "Réseaux d'alimentation et d'évacuation",
          "Chauffe-eau et ballon thermodynamique",
          "Raccordement cuisine et salle de bain",
        ],
      },
      {
        id: "plaquiste-isolation",
        title: "Plaquiste / isolation",
        text: "Cloisons, faux plafonds, doublage isolant des murs et des combles : une bonne isolation intérieure améliore le confort été comme hiver et réduit durablement vos factures.",
        points: [
          "Cloisons et redistribution des pièces",
          "Faux plafonds et doublages",
          "Isolation des murs et des combles",
        ],
      },
      {
        id: "menuiserie-interieure",
        title: "Menuiserie intérieure",
        text: "Portes, escaliers, placards et dressings sur mesure, habillages bois : la menuiserie intérieure donne du caractère à une maison et optimise chaque mètre carré.",
        points: [
          "Portes intérieures et blocs-portes",
          "Dressings et placards sur mesure",
          "Escaliers et garde-corps",
        ],
      },
      {
        id: "carrelage",
        title: "Carrelage",
        text: "Sols et murs, grands formats, faïence de salle de bain ou crédence de cuisine : un carreleur soigneux fait toute la différence sur le rendu final.",
        points: [
          "Pose au sol et au mur",
          "Grands formats et effet béton ciré",
          "Faïence, crédences et douches à l'italienne",
        ],
      },
      {
        id: "peinture",
        title: "Peinture",
        text: "Préparation des supports, enduits, peintures murales et plafonds, papiers peints : la finition qui révèle la qualité de tous les travaux réalisés avant elle.",
        points: [
          "Préparation et ratissage des murs",
          "Peinture intérieure murs et plafonds",
          "Papiers peints et revêtements décoratifs",
        ],
      },
      {
        id: "revetement-de-sol",
        title: "Revêtement de sol",
        text: "Parquet massif ou contrecollé, stratifié, sol vinyle, moquette, béton ciré : nous vous orientons vers l'artisan adapté au revêtement et à l'usage de chaque pièce.",
        points: [
          "Parquet, stratifié et vinyle",
          "Ragréage et préparation des sols",
          "Béton ciré et résine",
        ],
      },
      {
        id: "cuisine-salle-de-bain",
        title: "Cuisine & salle de bain",
        text: "Ce sont les pièces qui concentrent le plus de corps de métier : plomberie, électricité, carrelage, menuiserie. Notre rôle est de coordonner les bons artisans pour un projet cohérent, de la dépose à la pose des finitions.",
        points: [
          "Rénovation complète de salle de bain",
          "Cuisine sur mesure et pose",
          "Accessibilité et salle d'eau PMR",
        ],
      },
    ],
    faq: [
      {
        q: "Dans quel ordre se déroulent des travaux de rénovation intérieure ?",
        a: "En règle générale : démolition, gros œuvre éventuel, électricité et plomberie, isolation et cloisons, menuiseries, carrelage et sols, puis peinture et finitions. Nous vous aidons à planifier ces étapes avec les artisans retenus.",
      },
      {
        q: "Puis-je faire appel à J Entreprise pour une seule pièce ?",
        a: "Oui. Que vous rénoviez une salle de bain ou une maison entière, nous trouvons les artisans adaptés à l'ampleur de votre projet.",
      },
    ],
    cta: "Présenter mon projet intérieur",
  },
  {
    slug: "travaux-exterieurs",
    name: "Travaux extérieurs",
    number: "02",
    prestationsTitle: "Nos prestations de travaux extérieurs",
    summary:
      "Maçonnerie et gros œuvre, menuiseries extérieures, isolation et façade, toiture et couverture : protéger, agrandir et valoriser votre maison.",
    metaTitle: "Travaux extérieurs en Charente-Maritime",
    metaDescription:
      "Maçonnerie, menuiseries extérieures, isolation, façade et toiture en Charente-Maritime : des artisans sélectionnés pour vos travaux extérieurs.",
    h1: "Travaux extérieurs en Charente-Maritime",
    intro: [
      "Entre l'air salin, le vent et l'humidité du littoral, le bâti de Charente-Maritime est mis à rude épreuve. Les travaux extérieurs exigent des artisans qui connaissent ces contraintes et les matériaux qui y résistent.",
      "Extension, ravalement, changement de fenêtres ou réfection de toiture : J Entreprise identifie les entreprises fiables de votre secteur, vous aide à comparer leurs propositions et vous accompagne jusqu'au démarrage du chantier.",
    ],
    prestations: [
      {
        id: "maconnerie-gros-oeuvre",
        title: "Maçonnerie et gros œuvre",
        text: "Extension, agrandissement, ouverture de mur porteur, fondations, dalle ou muret : le gros œuvre engage la structure de votre maison et mérite des entreprises solidement assurées.",
        points: [
          "Extension et agrandissement",
          "Ouverture de murs porteurs",
          "Fondations, dalles et murets",
        ],
      },
      {
        id: "menuiserie-exterieure",
        title: "Menuiserie extérieure",
        text: "Fenêtres, baies vitrées, portes d'entrée, volets et portes de garage : de nouvelles menuiseries améliorent l'isolation, la sécurité et l'esthétique de votre façade.",
        points: [
          "Fenêtres et baies vitrées (PVC, alu, bois)",
          "Portes d'entrée et de garage",
          "Volets roulants et battants",
        ],
      },
      {
        id: "isolation-facade",
        title: "Isolation & façade",
        text: "Isolation thermique par l'extérieur, enduits, ravalement, nettoyage et traitement des façades : un chantier qui transforme l'apparence de la maison autant que son confort.",
        points: [
          "Isolation thermique par l'extérieur (ITE)",
          "Ravalement et enduits de façade",
          "Bardage bois ou composite",
        ],
      },
      {
        id: "toiture-couverture",
        title: "Toiture & couverture",
        text: "Réfection de toiture en tuiles ou ardoises, charpente, zinguerie, gouttières, fenêtres de toit : nous faisons appel à des couvreurs habitués aux exigences du climat atlantique.",
        points: [
          "Réfection et rénovation de couverture",
          "Charpente et zinguerie",
          "Fenêtres de toit et étanchéité",
        ],
      },
    ],
    faq: [
      {
        q: "Faut-il une autorisation pour des travaux extérieurs ?",
        a: "Une extension, un changement d'aspect de façade ou de menuiseries peut nécessiter une déclaration préalable ou un permis de construire, selon la surface et le PLU de votre commune. Nous vous indiquons les démarches à anticiper avant de lancer les devis.",
      },
      {
        q: "Les artisans proposés sont-ils assurés ?",
        a: "Nous ne travaillons qu'avec des entreprises disposant des assurances obligatoires, dont la garantie décennale pour les travaux qui y sont soumis.",
      },
    ],
    cta: "Parler de mes travaux extérieurs",
  },
  {
    slug: "amenagement-exterieur",
    name: "Aménagement extérieur",
    number: "03",
    prestationsTitle: "Nos prestations d'aménagement extérieur",
    summary:
      "Aménagement paysager, piscine et spa, clôtures et portails, terrasse et dallage : prolonger la maison vers le jardin et profiter pleinement du cadre de vie.",
    metaTitle: "Aménagement extérieur à La Rochelle",
    metaDescription:
      "Paysagisme, piscine et spa, clôtures, portails et terrasses à La Rochelle et en Charente-Maritime, avec des artisans sélectionnés par J Entreprise.",
    h1: "Aménagement extérieur à La Rochelle et alentours",
    intro: [
      "Le jardin est devenu une pièce à vivre à part entière. Terrasse, piscine, espaces paysagers ou clôture : un aménagement extérieur réussi demande une vision d'ensemble et des artisans qui savent travailler ensemble.",
      "J Entreprise vous aide à définir votre projet, sélectionne les professionnels adaptés et vous accompagne dans la comparaison des devis, pour un extérieur à la hauteur de votre maison.",
    ],
    prestations: [
      {
        id: "amenagement-paysager",
        title: "Aménagement paysager",
        text: "Création de jardin, plantations adaptées au climat littoral, engazonnement, allées et éclairage extérieur : un paysagiste donne une structure et une identité à votre extérieur.",
        points: [
          "Conception et création de jardin",
          "Plantations et engazonnement",
          "Allées, bordures et éclairage",
        ],
      },
      {
        id: "piscine-spa",
        title: "Piscine et spa",
        text: "Piscine maçonnée, coque ou bassin naturel, spa et abris : un projet important pour lequel le choix du pisciniste et la qualité du terrassement sont déterminants.",
        points: [
          "Piscines maçonnées et coques",
          "Spas et jacuzzis",
          "Plages de piscine et local technique",
        ],
      },
      {
        id: "clotures-portails",
        title: "Clôtures et portails",
        text: "Clôtures rigides, bois ou aluminium, murets, portails battants ou coulissants et motorisation : délimiter et sécuriser votre propriété avec élégance.",
        points: [
          "Clôtures et brise-vues",
          "Portails et portillons",
          "Motorisation et contrôle d'accès",
        ],
      },
      {
        id: "terrasse-dallage",
        title: "Terrasse et dallage",
        text: "Terrasse bois ou composite, dallage en pierre naturelle, carrelage extérieur ou béton désactivé : nous vous orientons vers le matériau et l'artisan adaptés à votre usage.",
        points: [
          "Terrasses bois et composite",
          "Dallage pierre et carrelage extérieur",
          "Pergolas et abris",
        ],
      },
    ],
    faq: [
      {
        q: "Une piscine nécessite-t-elle une autorisation ?",
        a: "Selon sa surface et sa couverture, une piscine peut nécessiter une déclaration préalable ou un permis de construire. Renseignez-vous en mairie ; nous vous aidons à anticiper ces démarches dans le calendrier du projet.",
      },
      {
        q: "Peut-on combiner terrasse, piscine et paysagisme dans un même projet ?",
        a: "C'est même recommandé : coordonner ces travaux évite de reprendre un terrain déjà aménagé. Nous organisons l'intervention des différents artisans dans le bon ordre.",
      },
    ],
    cta: "Imaginer mon extérieur",
  },
];

export function getDomain(slug: string) {
  return domains.find((d) => d.slug === slug);
}
