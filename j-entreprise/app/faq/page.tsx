import type { Metadata } from "next";
import { CtaBanner, Eyebrow, JsonLd, PageHero } from "@/components/ui";
import { faqGroups } from "@/lib/faq";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo({
  title: "FAQ – Le courtage en travaux",
  description:
    "Rôle d'un courtier en travaux, coût, sélection des artisans, zones d'intervention : toutes les réponses à vos questions sur J Entreprise, à La Rochelle.",
  path: "/faq",
});

export default function Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqGroups.flatMap((g) =>
      g.items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    ),
  };

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions fréquentes"
        intro={<p>Tout ce que vous souhaitez savoir sur le courtage en travaux et l&apos;accompagnement J Entreprise.</p>}
        crumbs={[{ href: "/faq", label: "FAQ" }]}
      />
      <section className="bg-ivory py-16 text-ink md:py-24">
        <div className="mx-auto max-w-4xl space-y-16 px-4 sm:px-6">
          {faqGroups.map((g) => (
            <div key={g.title}>
              <Eyebrow light>{g.title}</Eyebrow>
              <h2 className="sr-only">{g.title}</h2>
              <div className="divide-y divide-sand border-y border-sand">
                {g.items.map((f) => (
                  <details key={f.q} className="group py-6">
                    <summary className="flex items-center justify-between gap-6 font-serif text-[1.35rem] leading-snug">
                      <h3>{f.q}</h3>
                      <span aria-hidden="true" className="faq-plus text-2xl text-gold-dark transition">+</span>
                    </summary>
                    <p className="mt-4 max-w-3xl leading-relaxed text-stone">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <CtaBanner
        title="Vous n'avez pas trouvé votre réponse ?"
        text="Contactez-nous directement : nous répondons à toutes vos questions."
        cta="Nous écrire"
      />
      <JsonLd data={faqJsonLd} />
    </>
  );
}
