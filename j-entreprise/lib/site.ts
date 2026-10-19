// Configuration centrale du site J Entreprise.
// ⚠️ Les valeurs marquées TODO sont à confirmer avec le client avant la mise en ligne.

export const site = {
  name: "J Entreprise",
  legalName: "J Entreprise", // TODO : raison sociale exacte
  tagline: "Construction · Rénovation · Aménagement",
  url: "https://www.j-entreprise.fr", // TODO : nom de domaine définitif
  locale: "fr_FR",
  founder: "Jordan",
  phone: {
    display: "06 XX XX XX XX", // TODO : numéro du client
    href: "tel:+33600000000", // TODO
  },
  email: "contact@j-entreprise.fr", // TODO
  city: "La Rochelle",
  postalCode: "17000", // TODO : code postal du siège
  region: "Nouvelle-Aquitaine",
  department: "Charente-Maritime",
  instagram: "https://www.instagram.com/j.entreprise_courtier/",
  hours: "Du lundi au vendredi, 8h30 – 18h30", // TODO
} as const;

export type Zone = {
  level: "Principale" | "Secondaire";
  department: string;
  code: string;
  cities: string[];
  note?: string;
};

export const zones: Zone[] = [
  {
    level: "Principale",
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
    level: "Secondaire",
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
    level: "Secondaire",
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
