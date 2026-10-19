import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { site } from "@/lib/site";
import { QuoteForm } from "./QuoteForm";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo({
  title: "Demande de devis travaux à La Rochelle",
  description:
    "Présentez votre projet en quelques minutes : J Entreprise sélectionne pour vous des artisans de confiance à La Rochelle. Demande sans engagement.",
  path: "/demande-de-devis",
});

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Sans engagement"
        title={
          <>
            Demander un <span className="text-gold-gradient italic">devis</span>
          </>
        }
        intro={
          <p>
            Présentez-nous votre projet : nous revenons vers vous rapidement pour en parler, puis nous sélectionnons les
            artisans les plus adaptés.
          </p>
        }
        crumbs={[{ href: "/demande-de-devis", label: "Demande de devis" }]}
      />
      <section className="bg-ivory py-16 text-ink md:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_20rem]">
          <div className="relative">
            <h2 className="sr-only">Formulaire de demande de devis</h2>
            <QuoteForm />
          </div>
          <aside className="space-y-8 lg:sticky lg:top-32 lg:self-start">
            <div className="bg-ink p-8 text-ivory">
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-gold">Vous préférez appeler ?</p>
              <a href={site.phone.href} className="mt-4 block font-serif text-3xl text-ivory hover:text-gold-light">
                {site.phone.display}
              </a>
              <a href={`mailto:${site.email}`} className="mt-2 block text-sm text-ivory/60 hover:text-gold-light">
                {site.email}
              </a>
              <p className="mt-4 text-xs text-ivory/45">{site.hours}</p>
            </div>
            <div className="border border-sand p-8">
              <h3 className="font-serif text-2xl">Et ensuite ?</h3>
              <ol className="mt-5 space-y-4 text-sm leading-relaxed text-stone">
                <li><span className="mr-2 font-serif text-gold-dark">1.</span>Nous vous rappelons pour échanger sur votre projet.</li>
                <li><span className="mr-2 font-serif text-gold-dark">2.</span>Nous organisons une visite si nécessaire.</li>
                <li><span className="mr-2 font-serif text-gold-dark">3.</span>Nous consultons les artisans adaptés et vous présentons leurs devis.</li>
              </ol>
            </div>
            <p className="text-xs leading-relaxed text-mist">
              Intervention en Charente-Maritime (La Rochelle, Rochefort, Saintes, Royan…), en Charente et en Vendée.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
