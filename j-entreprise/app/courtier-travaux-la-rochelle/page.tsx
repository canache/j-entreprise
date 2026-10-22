import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink, CtaBanner, Eyebrow, JsonLd, PageHero } from "@/components/ui";
import { domains } from "@/lib/domains";
import { projects } from "@/lib/projects";
import { laRochelleArea } from "@/lib/site";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo({
  title: "Rénovation de maison à La Rochelle et alentours",
  description:
    "Rénovation de maison à La Rochelle, Lagord, Périgny, Aytré et Châtelaillon-Plage : votre courtier en travaux sélectionne les artisans et compare leurs devis.",
  path: "/courtier-travaux-la-rochelle",
});

const localPoints = [
  {
    title: "Le centre historique et ses abords",
    text: "Aux abords des monuments historiques et dans les secteurs protégés du centre-ville, les travaux visibles depuis l'extérieur (façades, menuiseries, toitures) sont soumis à l'avis de l'Architecte des Bâtiments de France. Mieux vaut l'anticiper avant de consulter les artisans.",
  },
  {
    title: "Le bâti ancien d'Aunis",
    text: "Pierre calcaire, murs épais, tuiles canal : les maisons anciennes de La Rochelle et des villages alentour demandent des matériaux respirants et des artisans habitués à ce type de construction.",
  },
  {
    title: "Le climat océanique",
    text: "Air salin, vent et humidité usent plus vite façades, menuiseries et toitures. Sur les communes littorales, un plan de prévention des risques peut aussi encadrer les extensions : un point à vérifier en mairie.",
  },
];

const localFaq = [
  {
    q: "Quelle différence entre une entreprise de rénovation et un courtier en travaux ?",
    a: "Une entreprise de rénovation réalise les travaux avec ses équipes ou ses sous-traitants. Un courtier en travaux ne réalise pas les travaux : il sélectionne les artisans adaptés à chaque corps de métier, vous aide à comparer leurs devis, et vous signez directement avec eux.",
  },
  {
    q: "Intervenez-vous dans toute l'agglomération de La Rochelle ?",
    a: "Oui : La Rochelle, Lagord, Périgny, Aytré, Dompierre-sur-Mer, Puilboreau, Nieul-sur-Mer, L'Houmeau, Angoulins, Châtelaillon-Plage, Sainte-Soulle, Saint-Xandre, ainsi que le reste de la Charente-Maritime.",
  },
  {
    q: "Faut-il une autorisation pour des travaux dans le centre de La Rochelle ?",
    a: "Les travaux qui modifient l'aspect extérieur d'un bâtiment nécessitent en général une déclaration préalable, et l'avis de l'Architecte des Bâtiments de France dans les secteurs protégés. Le service urbanisme de la mairie vous indique les règles applicables à votre adresse.",
  },
  {
    q: "Combien de temps faut-il pour trouver un artisan disponible ?",
    a: "Cela dépend du corps de métier et de la saison, les bons artisans de l'agglomération étant très demandés. Dès le premier échange, nous vous donnons une estimation réaliste du calendrier.",
  },
];

export default function Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: localFaq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <PageHero
        eyebrow="Courtier en travaux · La Rochelle"
        title={
          <>
            Rénovation de maison <span className="text-gold-gradient italic">à La Rochelle</span>
          </>
        }
        intro={
          <p>
            Maison ancienne du centre, pavillon à Lagord, salle de bain à Périgny ou extension à Dompierre-sur-Mer :
            plutôt que de chercher seul une entreprise de rénovation, confiez votre projet à J Entreprise, votre
            courtier en travaux rochelais. Nous trouvons les bons artisans de l&apos;agglomération et comparons leurs
            devis avec vous.
          </p>
        }
        crumbs={[{ href: "/courtier-travaux-la-rochelle", label: "Rénovation à La Rochelle" }]}
      >
        <ButtonLink href="/demande-de-devis">Demander un devis à La Rochelle</ButtonLink>
      </PageHero>

      <section className="bg-ivory py-20 text-ink md:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <Eyebrow light>Un acteur local</Eyebrow>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              Entreprise de rénovation ou courtier en travaux ?
            </h2>
          </div>
          <div className="space-y-5 text-[1.05rem] leading-relaxed text-stone">
            <p>
              Une entreprise de rénovation générale réalise vos travaux avec ses équipes ou ses sous-traitants. Un
              courtier en travaux sélectionne pour chaque corps de métier l&apos;artisan le plus adapté, vous aide à
              comparer les devis, puis vous signez directement avec les entreprises retenues.
            </p>
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
          <h2 className="font-serif text-4xl text-ivory md:text-5xl">Vos travaux de rénovation à La Rochelle</h2>
          <ul className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2">
            {projects.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/${p.slug}`}
                  className="group flex h-full items-center justify-between gap-6 bg-graphite p-6 transition hover:bg-ink"
                >
                  <span className="font-serif text-2xl text-ivory group-hover:text-gold-light">
                    {p.h1} {p.h1Accent}
                  </span>
                  <span aria-hidden="true" className="text-gold">→</span>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-px grid gap-px bg-white/10 md:grid-cols-3">
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

      <section className="bg-ivory py-20 text-ink md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Eyebrow light>Bon à savoir</Eyebrow>
          <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
            Rénover à La Rochelle : les points à anticiper
          </h2>
          <ul className="mt-12 grid gap-px bg-sand md:grid-cols-3">
            {localPoints.map((pt) => (
              <li key={pt.title} className="bg-ivory p-8">
                <h3 className="font-serif text-2xl">{pt.title}</h3>
                <p className="mt-4 leading-relaxed text-stone">{pt.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-stone">
            Pour aller plus loin :{" "}
            <Link
              href="/conseils/renover-maison-bord-de-mer-charente-maritime"
              className="text-gold-dark underline decoration-gold/40 underline-offset-4 hover:text-ink"
            >
              rénover une maison en bord de mer en Charente-Maritime
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-coal py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Eyebrow>Questions fréquentes</Eyebrow>
          <h2 className="font-serif text-4xl text-ivory">Faire des travaux à La Rochelle : vos questions</h2>
          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {localFaq.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex items-center justify-between gap-6 font-serif text-xl text-ivory">
                  <h3>{f.q}</h3>
                  <span aria-hidden="true" className="faq-plus text-2xl text-gold transition">+</span>
                </summary>
                <p className="mt-4 leading-relaxed text-ivory/65">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Votre projet à La Rochelle commence ici"
        text="Premier échange et visite sans engagement dans toute l'agglomération rochelaise."
        cta="Être rappelé"
      />
      <JsonLd data={faqJsonLd} />
    </>
  );
}
