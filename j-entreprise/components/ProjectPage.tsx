import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink, CtaBanner, Eyebrow, JsonLd, PageHero } from "@/components/ui";
import type { Project } from "@/lib/projects";
import { seo } from "@/lib/seo";
import { laRochelleArea, site } from "@/lib/site";

export function projectMetadata(project: Project): Metadata {
  return seo({ title: project.metaTitle, description: project.metaDescription, path: `/${project.slug}` });
}

// Gabarit commun des pages « projet + La Rochelle ».
export function ProjectPage({ project }: { project: Project }) {
  const path = `/${project.slug}`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${project.h1} ${project.h1Accent}`,
    serviceType: project.serviceType,
    description: project.metaDescription,
    url: `${site.url}${path}`,
    provider: { "@id": `${site.url}/#organisation` },
    areaServed: laRochelleArea.map((name) => ({ "@type": "City", name })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: project.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <PageHero
        eyebrow={project.eyebrow}
        title={
          <>
            {project.h1} <span className="text-gold-gradient italic">{project.h1Accent}</span>
          </>
        }
        intro={project.intro.map((p) => (
          <p key={p.slice(0, 20)} className="mb-4 last:mb-0">
            {p}
          </p>
        ))}
        crumbs={[
          { href: "/courtier-travaux-la-rochelle", label: "Rénovation à La Rochelle" },
          { href: path, label: `${project.h1} ${project.h1Accent}` },
        ]}
      >
        <ButtonLink href="/demande-de-devis">{project.cta}</ButtonLink>
      </PageHero>

      <section className="bg-ivory py-20 text-ink md:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <Eyebrow light>Courtier en travaux</Eyebrow>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">{project.why.title}</h2>
          </div>
          <div className="space-y-5 text-[1.05rem] leading-relaxed text-stone">
            {project.why.paragraphs.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {project.options ? (
        <section className="border-t border-sand bg-ivory pb-20 text-ink md:pb-28">
          <div className="mx-auto max-w-6xl px-4 pt-20 sm:px-6 md:pt-28">
            <Eyebrow light>Les solutions</Eyebrow>
            <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-5xl">{project.options.title}</h2>
            <p className="mt-6 max-w-3xl leading-relaxed text-stone">{project.options.intro}</p>
            <ul className="mt-12 grid gap-px bg-sand md:grid-cols-3">
              {project.options.items.map((o) => (
                <li key={o.title} className="bg-ivory p-8">
                  <h3 className="font-serif text-2xl">{o.title}</h3>
                  <p className="mt-4 leading-relaxed text-stone">{o.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="bg-coal py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Eyebrow>Déroulement</Eyebrow>
          <h2 className="font-serif text-4xl text-ivory md:text-5xl">{project.stepsTitle}</h2>
          <ol className="mt-12 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {project.steps.map((s, i) => (
              <li key={s.title} className="bg-ink p-8">
                <span className="text-gold-gradient font-serif text-5xl">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 font-serif text-2xl text-ivory">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/60">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ivory py-20 text-ink md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Eyebrow light>Budget</Eyebrow>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">{project.budget.title}</h2>
          <p className="mt-6 leading-relaxed text-stone">{project.budget.intro}</p>
          <dl className="mt-10 divide-y divide-sand border-y border-sand">
            {project.budget.rows.map((r) => (
              <div key={r.label} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                <dt className="text-ink/80">{r.label}</dt>
                <dd className="shrink-0 font-serif text-xl text-gold-dark">{r.range}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm leading-relaxed text-stone">{project.budget.note}</p>
          <div className="mt-10">
            <ButtonLink href="/demande-de-devis" variant="dark">
              Obtenir mes devis
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-t border-sand bg-ivory pb-20 text-ink md:pb-28">
        <div className="mx-auto max-w-6xl px-4 pt-20 sm:px-6 md:pt-28">
          <Eyebrow light>Bon à savoir</Eyebrow>
          <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-5xl">{project.localTitle}</h2>
          <ul className="mt-12 grid gap-px bg-sand md:grid-cols-3">
            {project.localPoints.map((pt) => (
              <li key={pt.title} className="bg-ivory p-8">
                <h3 className="font-serif text-2xl">{pt.title}</h3>
                <p className="mt-4 leading-relaxed text-stone">{pt.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-coal py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Eyebrow>Questions fréquentes</Eyebrow>
          <h2 className="font-serif text-4xl text-ivory">{project.faqTitle}</h2>
          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {project.faq.map((f) => (
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

      <section className="bg-ink py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-serif text-3xl text-ivory">Pour aller plus loin</h2>
          <ul className="mt-8 grid gap-px bg-white/10 sm:grid-cols-2">
            {project.related.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="group flex h-full items-center justify-between gap-6 bg-coal p-6 transition hover:bg-graphite">
                  <span className="font-serif text-xl text-ivory group-hover:text-gold-light">{r.label}</span>
                  <span aria-hidden="true" className="text-gold">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner title={project.ctaBanner.title} text={project.ctaBanner.text} cta="Demander un devis" />

      <JsonLd data={[serviceJsonLd, faqJsonLd]} />
    </>
  );
}
