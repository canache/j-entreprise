import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Advantages, Reviews, Zones, steps } from "@/components/sections";
import { ButtonLink, CtaBanner, Eyebrow } from "@/components/ui";
import { domains } from "@/lib/domains";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo({
  title: "Courtier en travaux à La Rochelle | J Entreprise",
  description:
    "Courtier en travaux à La Rochelle : J Entreprise sélectionne des artisans de confiance et compare leurs devis pour vos travaux en Charente-Maritime.",
  path: "/",
  absolute: true,
});

const tiles = [
  ...domains.map((d) => ({
    href: `/domaines-intervention/${d.slug}`,
    number: d.number,
    title: d.name,
    text: d.summary,
    items: d.prestations.map((p) => p.title),
    cta: "Découvrir",
  })),
  {
    href: "/mon-accompagnement",
    number: "04",
    title: "Mon accompagnement",
    text: "Du premier échange au lancement du chantier : sélection des artisans, comparaison des devis et suivi à vos côtés.",
    items: ["Cadrage du projet", "Sélection des artisans", "Analyse des devis", "Lancement des travaux"],
    cta: "Voir la méthode",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO — inspiré de la page d'accueil de référence : photo plein cadre, logo centré, rubriques en ligne */}
      <section className="relative isolate flex min-h-[calc(100svh-4.5rem)] flex-col overflow-hidden md:min-h-[calc(100svh-6.5rem)]">
        <Image
          src="/images/maison-architecte-foret.jpg"
          alt="Maison contemporaine en bois au cœur d'une pinède, au coucher du soleil"
          fill
          preload
          sizes="100vw"
          quality={80}
          className="-z-20 scale-105 object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(10,10,10,0.35)_0%,rgba(10,10,10,0.75)_70%,rgba(10,10,10,0.92)_100%)]"
        />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-ink" />

        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
          <Image
            src="/images/logo-j-entreprise.png"
            alt="J Entreprise – Construction, Rénovation, Aménagement"
            width={1253}
            height={173}
            preload
            className="h-auto w-80 drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)] sm:w-[28rem] md:w-[34rem]"
          />
          <h1 className="mt-10 max-w-3xl font-serif text-[2.1rem] font-medium leading-[1.12] text-ivory sm:text-5xl md:text-[3.4rem]">
            Courtier en travaux à La Rochelle
            <span className="mt-2 block text-[0.55em] font-normal italic text-ivory/75">
              et dans toute la Charente-Maritime
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/75 md:text-lg">
            Un seul interlocuteur pour trouver les bons artisans, comparer leurs devis et mener votre projet sereinement.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/demande-de-devis">Présenter mon projet</ButtonLink>
            <ButtonLink href="/j-entreprise" variant="outline">
              Découvrir le concept
            </ButtonLink>
          </div>
          <a
            href="#domaines"
            aria-label="Faire défiler vers nos domaines d'intervention"
            className="mt-12 hidden h-10 w-10 items-center justify-center rounded-full border border-ivory/40 text-ivory/80 transition hover:border-gold hover:text-gold md:flex"
          >
            <span aria-hidden="true">↓</span>
          </a>
        </div>

        <nav aria-label="Nos domaines" className="relative hidden border-t border-white/10 md:block">
          <ul className="mx-auto grid max-w-6xl grid-cols-4">
            {tiles.map((t) => (
              <li key={t.href} className="border-r border-white/10 last:border-r-0">
                <Link
                  href={t.href}
                  className="group block px-4 py-6 text-center transition hover:bg-white/[0.04]"
                >
                  <span className="block font-serif text-sm uppercase tracking-[0.2em] text-ivory transition group-hover:text-gold-light">
                    {t.title}
                  </span>
                  <span className="mt-1 block text-[0.6rem] uppercase tracking-[0.24em] text-gold/80">
                    {t.number}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      {/* VIGNETTES — les 4 prestations */}
      <section id="domaines" className="scroll-mt-24 bg-ink py-20 md:py-28" aria-labelledby="domaines-titre">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-5 text-[0.72rem] font-medium uppercase tracking-[var(--tracking-luxe)] text-gold">
              Construction · Rénovation · Aménagement
            </p>
            <h2 id="domaines-titre" className="font-serif text-4xl leading-tight text-ivory md:text-5xl">
              Nos domaines d&apos;intervention
            </h2>
            <p className="mt-6 leading-relaxed text-ivory/60">
              Seize corps de métier, un réseau d&apos;artisans sélectionnés et une seule personne pour coordonner
              l&apos;ensemble de votre projet.
            </p>
          </div>
          <ul className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {tiles.map((t) => (
              <li key={t.href} className="group relative flex flex-col bg-coal p-8 transition duration-500 hover:bg-graphite">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gold-gradient transition duration-500 group-hover:scale-x-100"
                />
                <span className="text-gold-gradient font-serif text-6xl leading-none">{t.number}</span>
                <h3 className="mt-8 font-serif text-[1.7rem] leading-tight text-ivory">{t.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ivory/60">{t.text}</p>
                <ul className="mt-6 space-y-1.5 text-[0.8rem] text-ivory/45">
                  {t.items.slice(0, 4).map((i) => (
                    <li key={i}>— {i}</li>
                  ))}
                </ul>
                <div className="mt-auto pt-10">
                  <Link
                    href={t.href}
                    className="inline-flex items-center gap-3 border-b border-gold/50 pb-1 text-[0.72rem] uppercase tracking-[0.22em] text-gold-light transition hover:border-gold hover:text-gold"
                  >
                    {t.cta}
                    <span className="sr-only"> : {t.title}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CONCEPT */}
      <section className="bg-ivory py-20 text-ink md:py-28" aria-labelledby="concept-titre">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow light>Le concept</Eyebrow>
            <h2 id="concept-titre" className="font-serif text-4xl leading-tight md:text-5xl">
              Le courtage en travaux, ou l&apos;art de bien s&apos;entourer
            </h2>
          </div>
          <div className="space-y-5 text-[1.05rem] leading-relaxed text-stone">
            <p>
              Trouver des artisans disponibles, vérifier leur sérieux, obtenir des devis comparables, les décrypter…
              Préparer des travaux prend du temps et réserve souvent des surprises.
            </p>
            <p>
              <strong className="font-medium text-ink">J Entreprise</strong> prend en charge cette étape pour vous. Nous
              écoutons votre projet, sélectionnons les professionnels les plus adaptés parmi notre réseau
              d&apos;artisans de Charente-Maritime, et vous aidons à comparer leurs propositions. Vous gardez la main sur
              chaque décision, nous vous faisons gagner du temps et de la sérénité.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <ButtonLink href="/demande-de-devis" variant="dark">
                Parlons de votre projet
              </ButtonLink>
              <Link
                href="/j-entreprise"
                className="self-center text-sm text-gold-dark underline decoration-gold/40 underline-offset-4 hover:text-ink"
              >
                En savoir plus sur J Entreprise
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Advantages />

      {/* ÉTAPES */}
      <section className="border-t border-white/5 bg-coal py-20 md:py-28" aria-labelledby="etapes-titre">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-14 max-w-2xl">
            <Eyebrow>Comment ça se passe</Eyebrow>
            <h2 id="etapes-titre" className="font-serif text-4xl text-ivory md:text-5xl">
              Votre projet en cinq étapes
            </h2>
          </div>
          <ol className="grid gap-10 md:grid-cols-5 md:gap-6">
            {steps.map((s, i) => (
              <li key={s.title} className="relative">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/60 font-serif text-lg text-gold-light">
                    {i + 1}
                  </span>
                  <span aria-hidden="true" className="hidden h-px flex-1 bg-white/10 md:block" />
                </div>
                <h3 className="mt-6 font-serif text-xl text-ivory">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/55">{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-14">
            <ButtonLink href="/mon-accompagnement" variant="outline">
              Découvrir mon accompagnement
            </ButtonLink>
          </div>
        </div>
      </section>

      <Zones />

      <Reviews />

      <CtaBanner
        title={
          <>
            Un projet en tête ? <span className="text-gold-gradient italic">Parlons-en.</span>
          </>
        }
        text="Décrivez-nous vos travaux en quelques minutes : nous revenons vers vous rapidement pour en discuter, sans engagement."
        cta="Recevoir mes devis"
      />
    </>
  );
}
