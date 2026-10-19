import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink, CtaBanner, Eyebrow, PageHero } from "@/components/ui";
import { laRochelleArea, zones } from "@/lib/site";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo({
  title: "Zones d'intervention en Charente-Maritime",
  description:
    "J Entreprise intervient à La Rochelle, Rochefort, Saintes, Royan, Surgères et dans toute la Charente-Maritime, ainsi qu'en Charente et en Vendée.",
  path: "/zones-intervention",
});

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Où intervenons-nous"
        title="Nos zones d'intervention"
        intro={
          <p>
            Basé à La Rochelle, J Entreprise accompagne vos projets de travaux dans toute la Charente-Maritime, et
            jusqu&apos;en Charente et en Vendée selon la nature du projet.
          </p>
        }
        crumbs={[{ href: "/zones-intervention", label: "Zones d'intervention" }]}
      >
        <ButtonLink href="/demande-de-devis">Vérifier mon secteur</ButtonLink>
      </PageHero>

      <section className="bg-ivory py-20 text-ink md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <Eyebrow light>Notre secteur principal</Eyebrow>
              <h2 className="font-serif text-4xl leading-tight md:text-5xl">La Rochelle et son agglomération</h2>
              <p className="mt-6 leading-relaxed text-stone">
                C&apos;est ici que nous sommes implantés et que notre réseau d&apos;artisans est le plus dense. Nous
                intervenons dans chaque commune de l&apos;agglomération rochelaise, du centre historique aux communes
                littorales.
              </p>
              <Link
                href="/courtier-travaux-la-rochelle"
                className="mt-6 inline-block text-sm text-gold-dark underline decoration-gold/40 underline-offset-4 hover:text-ink"
              >
                Courtier en travaux à La Rochelle : en savoir plus
              </Link>
            </div>
            <ul className="grid grid-cols-2 gap-px self-start bg-sand sm:grid-cols-3">
              {laRochelleArea.map((c) => (
                <li key={c} className="bg-ivory px-5 py-4 font-serif text-lg">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-coal py-20 md:py-24">
        <div className="mx-auto max-w-6xl space-y-6 px-4 sm:px-6">
          {zones.map((z) => (
            <div key={z.department} className="grid gap-8 border border-white/10 bg-ink p-8 md:grid-cols-[1fr_2fr] md:p-10">
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.24em] text-gold">Zone {z.level.toLowerCase()}</p>
                <h2 className="mt-3 font-serif text-4xl text-ivory">
                  {z.department} <span className="text-mist">({z.code})</span>
                </h2>
                {z.note ? <p className="mt-4 text-sm italic text-ivory/50">{z.note}</p> : null}
              </div>
              <ul className="grid content-start gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {z.cities.map((c) => (
                  <li key={c} className="flex items-center gap-3 border-b border-white/10 pb-3 text-ivory/80">
                    <span aria-hidden="true" className="h-px w-4 bg-gold" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="pt-4 text-sm text-ivory/50">
            Votre commune n&apos;apparaît pas dans la liste ?{" "}
            <Link href="/demande-de-devis" className="text-gold-light underline underline-offset-4">
              Contactez-nous
            </Link>{" "}
            : nous étudions chaque projet.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Un projet près de chez vous ?"
        text="Décrivez-nous vos travaux et l'adresse du chantier : nous vous répondons rapidement."
        cta="Présenter mon projet"
      />
    </>
  );
}
