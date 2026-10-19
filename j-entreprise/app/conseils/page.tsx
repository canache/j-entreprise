import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner, PageHero } from "@/components/ui";
import { articles, formatDate } from "@/lib/articles";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo({
  title: "Conseils travaux en Charente-Maritime",
  description:
    "Conseils pratiques pour réussir vos travaux à La Rochelle et en Charente-Maritime : choisir un artisan, comparer des devis, rénover en bord de mer.",
  path: "/conseils",
});

export default function Page() {
  const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <PageHero
        eyebrow="Le journal"
        title="Conseils pour réussir vos travaux"
        intro={
          <p>
            Préparer son projet, choisir ses artisans, comprendre un devis : nos conseils pour avancer sereinement, avec
            l&apos;éclairage du terrain charentais.
          </p>
        }
        crumbs={[{ href: "/conseils", label: "Conseils" }]}
      />
      <section className="bg-ivory py-20 text-ink md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="sr-only">Tous les articles</h2>
          <ul className="grid gap-px bg-sand md:grid-cols-3">
            {sorted.map((a) => (
              <li key={a.slug} className="bg-ivory">
                <article className="group flex h-full flex-col p-8">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-gold-dark">{a.category}</p>
                  <h3 className="mt-4 font-serif text-[1.7rem] leading-snug">
                    <Link href={`/conseils/${a.slug}`} className="hover:text-gold-dark">
                      {a.title}
                    </Link>
                  </h3>
                  <p className="mt-4 leading-relaxed text-stone">{a.excerpt}</p>
                  <p className="mt-auto pt-8 text-xs text-mist">
                    <time dateTime={a.date}>{formatDate(a.date)}</time> · {a.readingTime} de lecture
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBanner
        title="Une question sur votre projet ?"
        text="Plutôt que de chercher seul, parlons-en directement."
        cta="Poser ma question"
      />
    </>
  );
}
