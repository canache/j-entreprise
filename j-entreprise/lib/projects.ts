// Pages « projet + ville » : une page par type de projet, ciblée sur La Rochelle et son agglomération.
// ⚠️ Les fourchettes de prix sont des ordres de grandeur nationaux, à valider avec Jordan avant la mise en ligne.

export type Project = {
  slug: string;
  serviceType: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  h1Accent: string;
  intro: string[];
  cta: string;
  why: { title: string; paragraphs: string[] };
  // Variantes du projet présentées côte à côte (ex. extension, véranda, surélévation).
  options?: { title: string; intro: string; items: { title: string; text: string }[] };
  stepsTitle: string;
  steps: { title: string; text: string }[];
  budget: { title: string; intro: string; rows: { label: string; range: string }[]; note: string };
  localTitle: string;
  localPoints: { title: string; text: string }[];
  faqTitle: string;
  faq: { q: string; a: string }[];
  related: { href: string; label: string }[];
  ctaBanner: { title: string; text: string };
};

export const projects: Project[] = [
  {
    slug: "renovation-salle-de-bain-la-rochelle",
    serviceType: "Rénovation de salle de bain",
    metaTitle: "Rénovation de salle de bain à La Rochelle",
    metaDescription:
      "Rénovation de salle de bain à La Rochelle et alentours : plombier, carreleur et électricien sélectionnés, devis comparés et interventions planifiées.",
    eyebrow: "Salle de bain · La Rochelle",
    h1: "Rénovation de salle de bain",
    h1Accent: "à La Rochelle",
    intro: [
      "Remplacer une baignoire par une douche à l'italienne, refaire une salle d'eau vieillissante ou créer une salle de bain sous les combles : sur quelques mètres carrés, une rénovation de salle de bain mobilise quatre à cinq corps de métier.",
      "J Entreprise sélectionne pour vous un plombier, un carreleur et un électricien de l'agglomération rochelaise, compare leurs devis avec vous et organise leurs interventions dans le bon ordre.",
    ],
    cta: "Présenter mon projet de salle de bain",
    why: {
      title: "Un seul interlocuteur pour tous les corps de métier",
      paragraphs: [
        "Dans une salle de bain, chaque artisan dépend du précédent : le carreleur ne peut pas poser tant que le plombier n'a pas déplacé les évacuations, et l'étanchéité sous carrelage conditionne la tenue de la douche pendant des années. Une semaine de retard chez l'un décale tous les autres.",
        "Plutôt que de consulter séparément un plombier, un carreleur et un électricien à La Rochelle, vous nous décrivez votre projet une seule fois. Nous recherchons les artisans disponibles, vérifions leurs assurances et vous aidons à comparer des devis établis sur la même base.",
        "Nous intervenons dans les appartements du centre-ville comme dans les maisons de Lagord, Périgny, Aytré, Puilboreau ou Châtelaillon-Plage.",
      ],
    },
    stepsTitle: "Les étapes d'une rénovation de salle de bain",
    steps: [
      {
        title: "Dépose et préparation",
        text: "Retrait des anciens sanitaires, du carrelage et des faïences, puis contrôle de l'état des murs et du sol.",
      },
      {
        title: "Plomberie et évacuations",
        text: "Création ou déplacement des arrivées d'eau et des évacuations, avec les pentes nécessaires à une douche de plain-pied.",
      },
      {
        title: "Électricité et ventilation",
        text: "Mise aux normes NF C 15-100 selon les volumes de sécurité autour de la douche, éclairage, sèche-serviettes et ventilation mécanique.",
      },
      {
        title: "Cloisons et étanchéité",
        text: "Plaques hydrofuges, puis système d'étanchéité sous carrelage dans les zones exposées à l'eau, indispensable pour une douche à l'italienne.",
      },
      {
        title: "Carrelage et faïence",
        text: "Pose au sol et au mur, receveur extra-plat ou douche carrelée, joints adaptés aux pièces humides.",
      },
      {
        title: "Sanitaires et finitions",
        text: "Meuble vasque, robinetterie, WC et paroi de douche, puis peinture des parties non carrelées.",
      },
    ],
    budget: {
      title: "Quel budget pour une salle de bain à La Rochelle ?",
      intro:
        "Le prix d'une rénovation de salle de bain dépend surtout de la surface, des déplacements de plomberie et des matériaux choisis. Ordres de grandeur, fournitures et pose comprises :",
      rows: [
        { label: "Rafraîchissement sans toucher aux réseaux (sanitaires, peinture)", range: "3 000 à 6 000 €" },
        { label: "Rénovation complète d'une salle de bain de 4 à 6 m²", range: "8 000 à 15 000 €" },
        { label: "Remplacement d'une baignoire par une douche à l'italienne", range: "4 000 à 8 000 €" },
        { label: "Salle d'eau adaptée aux personnes à mobilité réduite", range: "6 000 à 12 000 €" },
      ],
      note: "Seuls les devis établis après visite font foi. La TVA est de 10 % pour la rénovation d'un logement de plus de deux ans. Pour adapter une salle de bain à la perte d'autonomie, l'aide MaPrimeAdapt' peut financer une partie des travaux, sous conditions d'âge et de ressources.",
    },
    localTitle: "Rénover sa salle de bain à La Rochelle : bon à savoir",
    localPoints: [
      {
        title: "Appartements en copropriété",
        text: "Dans les immeubles du centre-ville, toucher aux colonnes d'eau ou d'évacuation communes nécessite l'accord de la copropriété. Consultez le syndic avant de valider l'emplacement de la douche.",
      },
      {
        title: "L'humidité du climat océanique",
        text: "Une ventilation efficace évite condensation et moisissures, surtout dans une petite salle d'eau sans fenêtre. Nous l'intégrons dès les premiers devis.",
      },
      {
        title: "Les maisons anciennes d'Aunis",
        text: "Planchers bois, murs en pierre, réseaux anciens : avant de poser un carrelage lourd ou de créer une douche de plain-pied, il faut vérifier ce que le support peut supporter.",
      },
    ],
    faqTitle: "Rénovation de salle de bain : vos questions",
    faq: [
      {
        q: "Combien de temps durent les travaux d'une salle de bain ?",
        a: "Comptez en général deux à quatre semaines pour une rénovation complète, selon la surface et les déplacements de plomberie. S'y ajoute le délai pour réunir des artisans disponibles : nous vous en donnons une estimation dès le premier échange.",
      },
      {
        q: "Peut-on remplacer une baignoire par une douche à l'italienne partout ?",
        a: "Une douche de plain-pied demande une pente d'évacuation suffisante. Sur une dalle béton, on peut souvent l'obtenir en reprenant le sol ; sur un plancher bois ou en étage, un receveur extra-plat est parfois la meilleure solution. L'artisan le vérifie lors de la visite.",
      },
      {
        q: "Faut-il passer par un courtier pour une seule salle de bain ?",
        a: "Ce n'est pas obligatoire, mais c'est le type de chantier où la coordination compte le plus : plombier, électricien, plaquiste et carreleur se succèdent sur une petite surface. Nous vous évitons de chercher et de relancer chacun d'eux.",
      },
      {
        q: "Intervenez-vous en dehors de La Rochelle ?",
        a: "Oui, dans toute l'agglomération (Lagord, Périgny, Aytré, Puilboreau, Angoulins, Châtelaillon-Plage…) et plus largement en Charente-Maritime.",
      },
    ],
    related: [
      { href: "/domaines-intervention/travaux-interieurs", label: "Tous nos travaux intérieurs" },
      { href: "/extension-maison-la-rochelle", label: "Extension de maison à La Rochelle" },
      { href: "/conseils/comparer-devis-travaux", label: "Comparer des devis de travaux" },
      { href: "/courtier-travaux-la-rochelle", label: "Rénovation de maison à La Rochelle" },
    ],
    ctaBanner: {
      title: "Votre nouvelle salle de bain à La Rochelle",
      text: "Décrivez-nous votre projet : nous revenons vers vous avec les artisans adaptés et un calendrier réaliste.",
    },
  },
  {
    slug: "extension-maison-la-rochelle",
    serviceType: "Extension de maison",
    metaTitle: "Extension de maison à La Rochelle",
    metaDescription:
      "Extension de maison à La Rochelle : maçonnée, ossature bois, véranda ou surélévation. Artisans sélectionnés, démarches anticipées et devis comparés.",
    eyebrow: "Extension · Agrandissement",
    h1: "Extension de maison",
    h1Accent: "à La Rochelle",
    intro: [
      "Gagner une chambre, agrandir la pièce de vie ou créer une suite parentale sans déménager : à La Rochelle, où les terrains sont rares et chers, agrandir sa maison est souvent la solution la plus intéressante.",
      "Extension maçonnée, ossature bois, véranda ou surélévation : J Entreprise vous aide à cadrer le projet, à anticiper les démarches d'urbanisme et à choisir les entreprises adaptées, du terrassement aux finitions.",
    ],
    cta: "Présenter mon projet d'extension",
    why: {
      title: "Un projet qui engage la structure de votre maison",
      paragraphs: [
        "Une extension mobilise plus d'intervenants qu'on ne l'imagine : maçon ou constructeur bois, charpentier, couvreur, menuisier, puis électricien, plombier, plaquiste et carreleur pour l'aménagement intérieur. Le raccordement à l'existant, en toiture comme en façade, est le point le plus délicat.",
        "Nous sélectionnons des entreprises couvertes par la garantie décennale pour le gros œuvre, vous aidons à comparer des devis portant sur le même périmètre et planifions avec elles l'enchaînement des lots.",
        "Lagord, Périgny, Dompierre-sur-Mer, Aytré, Nieul-sur-Mer ou Châtelaillon-Plage : nous accompagnons les projets d'agrandissement dans toute l'agglomération rochelaise.",
      ],
    },
    options: {
      title: "Extension, véranda ou surélévation ?",
      intro: "Selon votre terrain, votre budget et les règles d'urbanisme, trois façons d'agrandir votre maison :",
      items: [
        {
          title: "Extension de plain-pied",
          text: "Maçonnée ou à ossature bois, accolée à la maison : la solution la plus courante quand le terrain le permet. Elle crée une vraie pièce isolée, qu'il s'agisse d'une chambre, d'un bureau ou d'une pièce de vie.",
        },
        {
          title: "Véranda",
          text: "Une structure vitrée, souvent en aluminium, ouverte sur le jardin. Pour en profiter toute l'année, le vitrage, la toiture et la protection solaire doivent être soignés, surtout en façade sud. Elle suit les mêmes règles d'urbanisme qu'une extension.",
        },
        {
          title: "Surélévation",
          text: "Ajouter un étage quand le terrain est trop petit ou que le PLU limite l'emprise au sol. Les murs et les fondations existants doivent pouvoir supporter la charge : une étude de structure est indispensable avant tout devis.",
        },
      ],
    },
    stepsTitle: "Les étapes d'un projet d'extension",
    steps: [
      {
        title: "Faisabilité et urbanisme",
        text: "Lecture du PLU intercommunal, emprise au sol disponible, distances aux limites de propriété et éventuels secteurs protégés.",
      },
      {
        title: "Conception et autorisation",
        text: "Plans, choix du système constructif, puis déclaration préalable ou permis de construire selon la surface créée.",
      },
      {
        title: "Terrassement et fondations",
        text: "Implantation, fouilles et fondations dimensionnées selon la nature du sol.",
      },
      {
        title: "Structure et clos-couvert",
        text: "Murs maçonnés ou ossature bois, charpente, couverture et menuiseries extérieures : l'extension est hors d'eau et hors d'air.",
      },
      {
        title: "Ouverture sur l'existant",
        text: "Création de l'ouverture dans le mur de la maison, avec la reprise de structure nécessaire si le mur est porteur.",
      },
      {
        title: "Second œuvre et finitions",
        text: "Isolation, électricité, plomberie, cloisons, sols et peinture pour un espace raccordé au reste de la maison.",
      },
    ],
    budget: {
      title: "Quel prix pour une extension de maison ?",
      intro:
        "Le coût d'une extension dépend du système constructif, de la complexité du raccordement et du niveau de finition. Ordres de grandeur, hors honoraires d'architecte et taxes :",
      rows: [
        { label: "Extension maçonnée", range: "1 500 à 2 500 € / m²" },
        { label: "Extension à ossature bois", range: "1 500 à 2 300 € / m²" },
        { label: "Véranda aluminium", range: "1 000 à 2 500 € / m²" },
        { label: "Surélévation", range: "2 000 à 3 000 € / m²" },
        { label: "Extension de 20 m² clé en main", range: "30 000 à 50 000 €" },
      ],
      note: "Seuls les devis établis après visite font foi. Une extension de plus de 5 m² est soumise à la taxe d'aménagement : pensez à l'intégrer à votre budget.",
    },
    localTitle: "Agrandir sa maison à La Rochelle : bon à savoir",
    localPoints: [
      {
        title: "Déclaration préalable ou permis",
        text: "Une extension de 5 à 20 m² relève en général d'une déclaration préalable, seuil porté à 40 m² en zone urbaine d'un PLU. Au-delà, il faut un permis de construire, et le recours à un architecte devient obligatoire si la maison dépasse alors 150 m².",
      },
      {
        title: "Secteurs protégés et littoral",
        text: "Dans le site patrimonial remarquable de La Rochelle ou aux abords d'un monument historique, l'avis de l'Architecte des Bâtiments de France s'ajoute à l'instruction. Sur certaines communes littorales, un plan de prévention des risques peut aussi limiter les extensions.",
      },
      {
        title: "La nature du sol",
        text: "Une partie de l'Aunis repose sur des sols argileux sensibles à la sécheresse. Une étude de sol avant de dimensionner les fondations limite le risque de fissures entre la maison et son extension.",
      },
    ],
    faqTitle: "Extension de maison : vos questions",
    faq: [
      {
        q: "Quelle surface puis-je ajouter sans permis de construire ?",
        a: "Jusqu'à 20 m² avec une déclaration préalable, et jusqu'à 40 m² en zone urbaine d'une commune couverte par un PLU, tant que la surface totale ne dépasse pas 150 m². Le service urbanisme de votre mairie confirme les règles applicables à votre parcelle.",
      },
      {
        q: "Combien de temps dure un projet d'extension ?",
        a: "Comptez un à deux mois d'instruction pour l'autorisation (davantage en secteur protégé), puis généralement deux à quatre mois de chantier selon la taille et le système constructif. La disponibilité des entreprises est souvent le facteur décisif.",
      },
      {
        q: "Extension bois ou maçonnée : que choisir ?",
        a: "L'ossature bois se monte plus vite, pèse moins lourd et offre de bonnes performances thermiques. La maçonnerie reste la solution la plus courante et la plus simple à raccorder à une maison en parpaing ou en pierre. Nous vous présentons des entreprises spécialisées dans chacune des deux techniques.",
      },
      {
        q: "Une véranda nécessite-t-elle une autorisation ?",
        a: "Oui, comme une extension : une déclaration préalable jusqu'à 20 m² (40 m² en zone urbaine d'un PLU), un permis de construire au-delà. Dans les secteurs protégés de La Rochelle, son aspect est aussi soumis à l'avis de l'Architecte des Bâtiments de France.",
      },
      {
        q: "Une surélévation est-elle possible sur ma maison ?",
        a: "Cela dépend de la hauteur autorisée par le PLU et de la capacité des murs et des fondations à porter un étage supplémentaire. Une étude de structure le confirme ; elle conditionne ensuite le choix entre une surélévation en ossature bois, plus légère, et une surélévation maçonnée.",
      },
      {
        q: "Faut-il un architecte pour une extension ?",
        a: "Il est obligatoire si la surface totale de la maison dépasse 150 m² après travaux. En dessous, il reste conseillé pour un projet complexe : nous pouvons vous orienter vers un architecte ou un maître d'œuvre.",
      },
    ],
    related: [
      { href: "/domaines-intervention/travaux-exterieurs", label: "Tous nos travaux extérieurs" },
      { href: "/renovation-salle-de-bain-la-rochelle", label: "Rénovation de salle de bain à La Rochelle" },
      { href: "/conseils/renover-maison-bord-de-mer-charente-maritime", label: "Rénover une maison en bord de mer" },
      { href: "/courtier-travaux-la-rochelle", label: "Rénovation de maison à La Rochelle" },
    ],
    ctaBanner: {
      title: "Votre extension à La Rochelle commence ici",
      text: "Premier échange sans engagement : nous étudions la faisabilité avec vous avant de consulter les entreprises.",
    },
  },
];

export function getProject(slug: string) {
  const project = projects.find((p) => p.slug === slug);
  if (!project) throw new Error(`Projet inconnu : ${slug}`);
  return project;
}
