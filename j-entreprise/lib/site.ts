// Configuration centrale du site J Entreprise.
// ⚠️ Les valeurs marquées TODO sont à confirmer avec le client avant la mise en ligne.

export const site = {
  name: "J Entreprise",
  legalForm: "Entrepreneur individuel (EI)",
  siret: "100 365 766 00011",
  tagline: "Construction · Rénovation · Aménagement",
  url: "https://www.j-entreprise.fr", // TODO : nom de domaine définitif
  locale: "fr_FR",
  founder: "Jordan Parachou",
  phone: {
    display: "06 82 45 02 70",
    href: "tel:+33682450270",
    intl: "+33682450270",
  },
  email: "jordan.courtier.travaux@gmail.com",
  // Siège social (identique à la fiche Google Business Profile pour la cohérence NAP).
  address: {
    street: "84 bis avenue des Boucholeurs",
    postalCode: "17340",
    city: "Châtelaillon-Plage",
  },
  region: "Nouvelle-Aquitaine",
  department: "Charente-Maritime",
  instagram: "https://www.instagram.com/j.entreprise_courtier/",
  hours: "Du lundi au samedi"
} as const;

// Le premier département est le secteur principal ; les suivants sont desservis selon le projet.
export type Zone = {
  department: string;
  code: string;
  cities: string[];
  note?: string;
};

export const zones: Zone[] = [
  {
    department: "Charente-Maritime",
    code: "17",
    cities: [
      "La Rochelle",
      "Rochefort",
      "Surgères",
      "Saintes",
      "Royan",
      "Marans",
      "Aytré",
      "Châtelaillon-Plage",
      "Aigrefeuille-d'Aunis",
      "Saint-Jean-d'Angély",
    ],
  },
  {
    department: "Charente",
    code: "16",
    cities: [
      "Angoulême",
      "Cognac",
      "Jarnac",
      "Barbezieux-Saint-Hilaire",
      "Ruffec",
      "Châteaubernard",
    ],
  },
  {
    department: "Vendée",
    code: "85",
    cities: [
      "Fontenay-le-Comte",
      "Luçon",
      "La Roche-sur-Yon",
      "Les Sables-d'Olonne",
      "Challans",
    ],
    note: "Selon la distance et la nature du projet.",
  },
];

// Communes de l'agglomération rochelaise, ciblées pour le référencement local.
export const laRochelleArea = [
  "La Rochelle",
  "Lagord",
  "Périgny",
  "Dompierre-sur-Mer",
  "Aytré",
  "Puilboreau",
  "Nieul-sur-Mer",
  "L'Houmeau",
  "Angoulins",
  "Châtelaillon-Plage",
  "Sainte-Soulle",
  "Saint-Xandre",
];

export const allCities = Array.from(
  new Set([...zones.flatMap((z) => z.cities), ...laRochelleArea]),
);

// Liste à plat de toutes les prestations, utilisée par le formulaire de devis.
export const interventionTypes = [
  "Électricité",
  "Plomberie",
  "Plaquiste / isolation",
  "Menuiserie intérieure",
  "Carrelage",
  "Peinture",
  "Revêtement de sol",
  "Cuisine & salle de bain",
  "Maçonnerie et gros œuvre",
  "Menuiserie extérieure",
  "Isolation & façade",
  "Toiture & couverture",
  "Aménagement paysager",
  "Piscine et spa",
  "Clôtures et portails",
  "Terrasse et dallage",
] as const;

export const timeframes = [
  "Le plus rapidement possible",
  "Dans moins de 6 mois",
  "Dans plus de 6 mois",
] as const;

export const mainNav = [
  { href: "/j-entreprise", label: "J Entreprise" },
  { href: "/domaines-intervention", label: "Domaines d'intervention" },
  { href: "/mon-accompagnement", label: "Mon accompagnement" },
  { href: "/conseils", label: "Conseils" },
  { href: "/faq", label: "FAQ" },
] as const;
