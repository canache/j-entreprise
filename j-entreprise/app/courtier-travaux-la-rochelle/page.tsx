import type { Metadata } from "next";
import Link from "next/link";
import { Advantages } from "@/components/sections";
import { ButtonLink, CtaBanner, Eyebrow, PageHero } from "@/components/ui";
import { domains } from "@/lib/domains";
import { laRochelleArea } from "@/lib/site";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo({
  title: "Courtier en travaux La Rochelle et alentours",
  description:
    "Courtier en travaux à La Rochelle, Lagord, Périgny, Aytré, Dompierre-sur-Mer et Châtelaillon-Plage : artisans sélectionnés et devis comparés.",
  path: "/courtier-travaux-la-rochelle",
});

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="La Rochelle · Aunis"
        title={
          <>
            Votre courtier en travaux <span className="text-gold-gradient italic">à La Rochelle</span>
          </>
        }
        intro={
          <p>
            Rénovation d&apos;une maison à Lagord, salle de bain à Périgny, extension à Dompierre-sur-Mer ou terrasse à
            Châtelaillon-Plage : J Entreprise trouve pour vous les bons artisans de l&apos;agglomération rochelaise.
          </p>
        }
        crumbs={[{ href: "/courtier-travaux-la-rochelle", label: "Courtier en travaux à La Rochelle" }]}
      >
        <ButtonLink href="/demande-de-devis">Demander un devis à La Rochelle</ButtonLink>
      </PageHero>

      <section className="bg-ivory py-20 text-ink md:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <Eyebrow light>Un acteur local</Eyebrow>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              Pourquoi un courtier en travaux rochelais ?
            </h2>
          </div>
          <div className="space-y-5 text-[1.05rem] leading-relaxed text-stone">
            <p>
              Sur l&apos;agglomération de La Rochelle, les bons artisans sont très sollicités et les délais
              s&apos;allongent vite. Connaître personnellement les entreprises du secteur, leurs spécialités et leurs
              disponibilités fait toute la différence.
            </p>
            <p>
              Le bâti local a aussi ses particularités : maisons anciennes en pierre du centre et des villages
              d&apos;Aunis, pavillons des années 70 à 90 à rénover, constructions récentes en périphérie, et partout
              l&apos;influence du climat océanique. Nous orientons chaque projet vers les professionnels qui maîtrisent
              ces contraintes.
            </p>
            <h3 className="pt-4 font-serif text-2xl text-ink">Les communes où nous intervenons</h3>
            <p>{laRochelleArea.join(" · ")}, ainsi que dans toute la Charente-Maritime.</p>
            <p className="text-sm">
              Votre commune n&apos;apparaît pas ?{" "}
              <Link href="/demande-de-devis" className="text-gold-dark underline decoration-gold/40 underline-offset-4 hover:text-ink">
                Présentez-nous votre projet
              </Link>
              , nous étudions chaque demande.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-coal py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Eyebrow>Nos domaines</Eyebrow>
          <h2 className="font-serif text-4xl text-ivory md:text-5xl">Vos travaux à La Rochelle</h2>
          <ul className="mt-12 grid gap-px bg-white/10 md:grid-cols-3">
            {domains.map((d) => (
              <li key={d.slug} className="flex flex-col bg-ink p-8">
                <span className="text-gold-gradient font-serif text-5xl">{d.number}</span>
                <h3 className="mt-6 font-serif text-2xl text-ivory">{d.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/55">
                  {d.prestations.map((p) => p.title).join(", ")}.
                </p>
                <Link
                  href={`/domaines-intervention/${d.slug}`}
                  className="mt-auto pt-8 text-[0.72rem] uppercase tracking-[0.22em] text-gold-light hover:text-gold"
                >
                  {d.name} à La Rochelle →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Advantages heading="Un accompagnement local et exigeant" />

      <CtaBanner
        title="Votre projet à La Rochelle commence ici"
        text="Premier échange et visite sans engagement dans toute l'agglomération rochelaise."
        cta="Être rappelé"
      />
    </>
  );
}
