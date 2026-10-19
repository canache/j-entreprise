import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/ui";
import { domains } from "@/lib/domains";
import { ogImage } from "@/lib/seo";
import { allCities, site } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Courtier en travaux à La Rochelle | J Entreprise",
    template: "%s | J Entreprise",
  },
  description:
    "Courtier en travaux à La Rochelle : J Entreprise sélectionne des artisans de confiance et compare leurs devis pour vos travaux en Charente-Maritime.",
  applicationName: site.name,
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    images: [ogImage],
  },
  twitter: { card: "summary_large_image", images: [ogImage.url] },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${site.url}/#organisation`,
  name: site.name,
  description:
    "Courtier en travaux à La Rochelle : sélection d'artisans, comparaison de devis et accompagnement pour vos travaux de construction, rénovation et aménagement.",
  slogan: site.tagline,
  url: site.url,
  logo: `${site.url}/images/logo-j-entreprise.png`,
  image: `${site.url}${ogImage.url}`,
  email: site.email,
  telephone: site.phone.intl,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    postalCode: site.address.postalCode,
    addressRegion: site.region,
    addressCountry: "FR",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Charente-Maritime" },
    { "@type": "AdministrativeArea", name: "Charente" },
    { "@type": "AdministrativeArea", name: "Vendée" },
    ...allCities.map((name) => ({ "@type": "City", name })),
  ],
  sameAs: [site.instagram],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Domaines d'intervention",
    itemListElement: domains.map((d) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: d.name, url: `${site.url}/domaines-intervention/${d.slug}` },
    })),
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#contenu"
          className="sr-only z-[100] bg-gold px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Aller au contenu
        </a>
        <Header />
        <main id="contenu" className="flex-1">
          {children}
        </main>
        <Footer />
        <JsonLd data={organizationJsonLd} />
      </body>
    </html>
  );
}
