export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

export type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  category: string;
  date: string; // ISO
  readingTime: string;
  excerpt: string;
  related: { href: string; label: string };
  content: Block[];
};

// Date de publication = date de mise en ligne (utilisée dans le sitemap et le JSON-LD BlogPosting).
export const articles: Article[] = [
  {
    slug: "comment-choisir-artisan-la-rochelle",
    title: "Comment bien choisir son artisan à La Rochelle ?",
    metaTitle: "Bien choisir son artisan à La Rochelle",
    description:
      "Assurances, références, devis détaillés, disponibilité : les points à vérifier pour choisir un artisan fiable à La Rochelle et en Charente-Maritime.",
    category: "Bien préparer son projet",
    date: "2026-10-20",
    readingTime: "5 min",
    excerpt:
      "Assurance décennale, références, lisibilité du devis : les bons réflexes pour confier vos travaux à un professionnel de confiance.",
    related: { href: "/mon-accompagnement", label: "Découvrir notre méthode de sélection" },
    content: [
      {
        type: "p",
        text: "Trouver un artisan disponible, sérieux et au juste prix est souvent l'étape la plus stressante d'un projet de travaux. Sur l'agglomération rochelaise, la demande est forte et les bons professionnels sont très sollicités. Voici les points à vérifier avant de signer.",
      },
      { type: "h2", text: "Vérifier l'existence légale et les assurances" },
      {
        type: "p",
        text: "Avant toute chose, assurez-vous que l'entreprise est bien immatriculée : un numéro SIRET valide se vérifie en quelques secondes sur l'annuaire officiel des entreprises. Demandez ensuite ses attestations d'assurance à jour.",
      },
      {
        type: "ul",
        items: [
          "La responsabilité civile professionnelle, qui couvre les dommages causés pendant le chantier.",
          "La garantie décennale, obligatoire pour les travaux touchant à la solidité de l'ouvrage ou le rendant impropre à son usage (gros œuvre, toiture, étanchéité, etc.).",
          "Le cas échéant, les qualifications ou labels (RGE pour les travaux de rénovation énergétique ouvrant droit à certaines aides).",
        ],
      },
      { type: "h2", text: "Demander des références et des réalisations" },
      {
        type: "p",
        text: "Un bon artisan n'hésite pas à montrer des chantiers comparables au vôtre. Photos, coordonnées d'anciens clients, avis vérifiés : ce sont de bons indicateurs de la qualité de son travail et de son sérieux dans le suivi.",
      },
      { type: "h2", text: "Exiger un devis détaillé et comparable" },
      {
        type: "p",
        text: "Un devis professionnel détaille chaque poste : fournitures (marque, référence, quantité), main-d'œuvre, préparation des supports, évacuation des gravats, délais et conditions de paiement. Méfiez-vous des devis « forfaitaires » trop vagues : ils sont impossibles à comparer et source de litiges.",
      },
      {
        type: "p",
        text: "Pour comparer plusieurs devis entre eux, il faut que chaque entreprise ait répondu au même besoin. C'est pourquoi un cahier des charges clair, même succinct, est indispensable avant de consulter.",
      },
      { type: "h2", text: "Évaluer la disponibilité réelle" },
      {
        type: "p",
        text: "Un artisan qui promet de commencer la semaine prochaine en haute saison doit vous interroger. À l'inverse, un délai de plusieurs mois n'est pas forcément un mauvais signe : c'est souvent celui des entreprises les plus demandées. L'important est d'obtenir une date de démarrage et une durée de chantier écrites.",
      },
      { type: "h2", text: "Pourquoi passer par un courtier en travaux ?" },
      {
        type: "p",
        text: "Le rôle d'un courtier en travaux est précisément de faire ce travail de vérification pour vous. J Entreprise s'appuie sur un réseau d'artisans de Charente-Maritime sélectionnés avec soin, sollicite des devis adaptés à votre projet et vous aide à les lire ligne par ligne. Vous gagnez du temps et vous choisissez en connaissance de cause.",
      },
    ],
  },
  {
    slug: "renover-maison-bord-de-mer-charente-maritime",
    title: "Rénover une maison en bord de mer en Charente-Maritime",
    metaTitle: "Rénover en bord de mer en Charente-Maritime",
    description:
      "Air salin, vent, humidité : les précautions et les matériaux à privilégier pour rénover une maison sur le littoral de Charente-Maritime, de La Rochelle à Royan.",
    category: "Travaux extérieurs",
    date: "2026-10-20",
    readingTime: "6 min",
    excerpt:
      "Sel, vent et humidité usent plus vite façades, menuiseries et toitures. Les bons choix pour une rénovation durable sur le littoral.",
    related: { href: "/domaines-intervention/travaux-exterieurs", label: "Voir nos travaux extérieurs" },
    content: [
      {
        type: "p",
        text: "De La Rochelle à Royan en passant par Châtelaillon-Plage, vivre près de l'océan est un privilège. Mais l'environnement marin impose aussi ses règles au bâti : les embruns, le vent et l'humidité accélèrent l'usure des matériaux. Une rénovation réussie sur le littoral commence par des choix adaptés.",
      },
      { type: "h2", text: "Les contraintes spécifiques du littoral" },
      {
        type: "ul",
        items: [
          "L'air chargé de sel corrode les métaux non protégés et ternit certaines finitions.",
          "Le vent fort sollicite davantage les toitures, les menuiseries et les clôtures.",
          "L'humidité ambiante favorise les remontées capillaires, les moisissures et le développement de mousses en façade.",
        ],
      },
      { type: "h2", text: "Façades : enduits et protections adaptés" },
      {
        type: "p",
        text: "Sur une maison ancienne en pierre, comme on en trouve beaucoup en Aunis et en Saintonge, un enduit respirant à la chaux est généralement préférable à un enduit ciment étanche qui emprisonne l'humidité. Un traitement hydrofuge peut compléter la protection. Pour une isolation par l'extérieur, le choix du système et de la finition doit tenir compte de l'exposition au vent et aux embruns.",
      },
      { type: "h2", text: "Menuiseries : le choix du matériau" },
      {
        type: "p",
        text: "PVC, aluminium et bois peuvent tous convenir en bord de mer, à condition d'être adaptés. Pour l'aluminium, on privilégie les finitions conçues pour les environnements marins. Le bois demande un entretien régulier mais apporte beaucoup de charme. Dans tous les cas, la quincaillerie (paumelles, crémones, visserie) doit être résistante à la corrosion.",
      },
      { type: "h2", text: "Toiture : fixation et entretien" },
      {
        type: "p",
        text: "En zone exposée, les tuiles doivent être correctement fixées pour résister aux coups de vent. La zinguerie et les gouttières méritent une attention particulière. Un entretien régulier (démoussage, contrôle des faîtages et des solins) prolonge sensiblement la durée de vie de la couverture.",
      },
      { type: "h2", text: "Aménagements extérieurs : penser durable" },
      {
        type: "p",
        text: "Pour une terrasse, une clôture ou un portail, privilégiez des matériaux qui supportent l'air salin : bois classés pour l'extérieur, composites de qualité, aluminium thermolaqué, inox adapté. Côté jardin, les végétaux résistants aux embruns et au vent font de beaux jardins côtiers avec peu d'entretien.",
      },
      { type: "h2", text: "S'entourer d'artisans qui connaissent le terrain" },
      {
        type: "p",
        text: "Rien ne remplace l'expérience locale. Les artisans habitués au littoral charentais savent quels matériaux tiennent dans le temps et quelles erreurs éviter. C'est un critère central dans la sélection des professionnels du réseau J Entreprise.",
      },
    ],
  },
  {
    slug: "comparer-devis-travaux",
    title: "Comparer des devis de travaux : la méthode",
    metaTitle: "Comparer des devis de travaux : la méthode",
    description:
      "Mentions obligatoires, postes à vérifier, pièges courants : notre méthode pour comparer des devis de travaux et choisir la meilleure offre.",
    category: "Bien préparer son projet",
    date: "2026-10-20",
    readingTime: "5 min",
    excerpt:
      "Le moins cher n'est pas toujours le plus économique. Comment lire et comparer des devis pour choisir la meilleure offre.",
    related: { href: "/demande-de-devis", label: "Recevoir des devis comparés" },
    content: [
      {
        type: "p",
        text: "Vous avez reçu deux ou trois devis pour vos travaux et les montants varient du simple au double ? C'est fréquent, et ce n'est pas forcément le signe qu'une entreprise abuse. Le plus souvent, les devis ne décrivent tout simplement pas les mêmes prestations.",
      },
      { type: "h2", text: "1. Partir d'un besoin identique" },
      {
        type: "p",
        text: "La comparaison n'a de sens que si chaque artisan a chiffré le même projet. Avant de consulter, décrivez précisément ce que vous voulez : surfaces, niveau de gamme, équipements souhaités, contraintes d'accès. Plus la demande est claire, plus les réponses sont comparables.",
      },
      { type: "h2", text: "2. Vérifier les mentions essentielles" },
      {
        type: "ul",
        items: [
          "Identité complète de l'entreprise, numéro SIRET et assurance (avec la zone géographique couverte).",
          "Date du devis et durée de validité de l'offre.",
          "Détail des prestations, quantités et prix unitaires.",
          "Montants HT, taux de TVA appliqué et montant TTC.",
          "Délais d'exécution et conditions de paiement (acompte, échéancier).",
        ],
      },
      { type: "h2", text: "3. Comparer poste par poste" },
      {
        type: "p",
        text: "Alignez les devis côte à côte et comparez chaque ligne. Les écarts se cachent souvent dans les postes discrets : dépose de l'existant, protection du chantier, préparation des supports, évacuation des gravats, finitions. Un devis qui ne les mentionne pas devra souvent les facturer plus tard.",
      },
      { type: "h3", text: "Les fournitures" },
      {
        type: "p",
        text: "Marque, gamme, référence : deux carrelages ou deux fenêtres peuvent avoir des prix et des qualités très différents. Exigez la précision pour comparer à niveau égal.",
      },
      { type: "h3", text: "La main-d'œuvre" },
      {
        type: "p",
        text: "Un temps de pose très inférieur aux autres doit vous interroger : est-ce un gain d'efficacité, ou des étapes oubliées ?",
      },
      { type: "h2", text: "4. Ne pas se fier au seul prix" },
      {
        type: "p",
        text: "Le devis le moins cher n'est pas toujours le plus économique à l'arrivée. Prenez en compte la qualité des matériaux, les garanties, la disponibilité, les références de l'entreprise et la qualité de l'échange. Un artisan qui prend le temps de vous expliquer son devis est souvent un artisan qui soigne son chantier.",
      },
      { type: "h2", text: "5. Se faire accompagner" },
      {
        type: "p",
        text: "Analyser des devis demande du temps et une certaine connaissance technique. C'est l'un des rôles clés de J Entreprise : nous vous aidons à lire chaque proposition, à repérer les oublis et à poser les bonnes questions avant de vous engager.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric" }).format(new Date(iso));
}
