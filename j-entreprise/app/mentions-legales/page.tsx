import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { site } from "@/lib/site";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo({
  title: "Mentions légales",
  description:
    "Mentions légales du site J Entreprise, courtier en travaux à La Rochelle.",
  path: "/mentions-legales",
  noindex: true,
});

// TODO : indiquer le registre d'immatriculation s'il y a lieu (RNE / RCS).
export default function Page() {
  return (
    <>
      <PageHero eyebrow="Informations" title="Mentions légales" crumbs={[{ href: "/mentions-legales", label: "Mentions légales" }]} />
      <section className="bg-ivory py-16 text-ink md:py-20">
        <div className="prose-luxe mx-auto max-w-3xl px-4 sm:px-6">
          <h2>Éditeur du site</h2>
          <p>
            {site.name} — {site.founder}, {site.legalForm}
            <br />
            Siège social : {site.address.street}, {site.address.postalCode} {site.address.city}
            <br />
            SIRET : {site.siret}
            <br />
            Téléphone : {site.phone.display} — E-mail : {site.email}
            <br />
            Directeur de la publication : {site.founder}
          </p>
          <h2>Hébergement</h2>
          <p>
            Vercel Inc.
            <br />
            440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis
            <br />
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-gold-dark underline underline-offset-4">
              vercel.com
            </a>
          </p>
          <h2>Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus de ce site (textes, logo, images) est la propriété de {site.name} ou fait
            l&apos;objet d&apos;une autorisation d&apos;utilisation. Toute reproduction sans autorisation préalable est
            interdite.
          </p>
          <h2>Activité</h2>
          <p>
            {site.name} exerce une activité de courtage en travaux : mise en relation entre particuliers et entreprises
            du bâtiment. {site.name} n&apos;exécute pas les travaux ; les contrats sont conclus directement entre le client
            et l&apos;entreprise retenue.
          </p>
        </div>
      </section>
    </>
  );
}
