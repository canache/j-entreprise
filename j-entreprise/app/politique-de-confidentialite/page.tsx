import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { site } from "@/lib/site";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo({
  title: "Politique de confidentialité",
  description:
    "Comment J Entreprise collecte et protège vos données personnelles.",
  path: "/politique-de-confidentialite",
  noindex: true,
});

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="RGPD"
        title="Politique de confidentialité"
        crumbs={[{ href: "/politique-de-confidentialite", label: "Politique de confidentialité" }]}
      />
      <section className="bg-ivory py-16 text-ink md:py-20">
        <div className="prose-luxe mx-auto max-w-3xl px-4 sm:px-6">
          <h2>Données collectées</h2>
          <p>
            Lorsque vous remplissez le formulaire de demande de devis, nous collectons : nom, prénom, téléphone, adresse
            e-mail, adresse de l&apos;intervention, types de travaux, délai souhaité et description de votre projet.
          </p>
          <h2>Finalités</h2>
          <ul>
            <li>Vous recontacter pour échanger sur votre projet.</li>
            <li>Transmettre les informations utiles aux artisans consultés pour établir leurs devis.</li>
          </ul>
          <p>Base légale : votre consentement et les mesures précontractuelles prises à votre demande.</p>
          <h2>Durée de conservation</h2>
          <p>Vos données sont conservées 3 ans à compter du dernier contact, puis supprimées.</p>
          <h2>Vos droits</h2>
          <p>
            Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, d&apos;opposition et de
            portabilité de vos données. Pour l&apos;exercer, écrivez à {site.email}. Vous pouvez également introduire
            une réclamation auprès de la CNIL (cnil.fr).
          </p>
          <h2>Cookies</h2>
          <p>Ce site n&apos;utilise pas de cookies publicitaires ni de traceurs tiers.</p>
        </div>
      </section>
    </>
  );
}
