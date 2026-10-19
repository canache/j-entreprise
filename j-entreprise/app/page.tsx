import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Advantages, Reviews, Zones } from "@/components/sections";
import { ButtonLink, CtaBanner } from "@/components/ui";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo({
  title: "Courtier en travaux à La Rochelle | J Entreprise",
  description:
    "Courtier en travaux à La Rochelle : J Entreprise sélectionne des artisans de confiance et compare leurs devis pour vos travaux en Charente-Maritime.",
  path: "/",
  absolute: true,
});

const tiles = [
  {
    href: "/domaines-intervention/travaux-interieurs",
    title: "Travaux intérieurs",
    hint: "Rénovation",
    text: "Électricité, plomberie, isolation, sols, cuisine et salle de bain.",
  },
  {
    href: "/domaines-intervention/travaux-exterieurs",
    title: "Travaux extérieurs",
    hint: "Gros œuvre · Façade",
    text: "Maçonnerie, menuiseries extérieures, façade, toiture et couverture.",
  },
  {
    href: "/domaines-intervention/amenagement-exterieur",
    title: "Aménagement extérieur",
    hint: "Jardin · Piscine",
    text: "Paysagisme, piscine et spa, clôtures, portails et terrasses.",
  },
  {
    href: "/mon-accompagnement",
    title: "Mon accompagnement",
    hint: "Du projet au chantier",
    text: "Sélection des artisans, analyse des devis et suivi jusqu'au chantier.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO — calqué sur la référence client : photo plein cadre, logo centré, rubriques en ligne, flèche */}
      <section className="relative isolate flex min-h-svh flex-col items-center overflow-hidden px-4 text-center">
        <Image
          src="/images/maison-architecte-foret.jpg"
          alt="Maison contemporaine en bois au cœur d'une pinède"
          fill
          preload
          sizes="100vw"
          quality={80}
          className="-z-20 scale-105 object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/60" />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(10,10,10,0.7)_100%)]"
        />

        <div className="pt-24 md:pt-12">
          <Image
            src="/images/logo-j-entreprise.png"
            alt="J Entreprise – Construction, Rénovation, Aménagement"
            width={1253}
            height={173}
            preload
            className="h-auto w-64 sm:w-80 md:w-[22rem]"
          />
        </div>

        <div className="flex w-full flex-1 flex-col items-center justify-center py-16">
          <h1 className="mb-12 text-[0.68rem] font-normal uppercase tracking-[0.34em] text-ivory/60 md:mb-14">
            Courtier en travaux à La Rochelle &amp; en Charente-Maritime
          </h1>
          <nav aria-label="Nos domaines">
            <ul className="flex flex-col gap-8 md:flex-row md:flex-wrap md:justify-center md:gap-x-10 md:gap-y-8 xl:gap-x-14">
              {tiles.map((t) => (
                <li key={t.href}>
                  <Link href={t.href} className="group block">
                    <span className="block whitespace-nowrap font-serif text-lg uppercase tracking-[0.12em] text-ivory transition group-hover:text-gold-light md:text-base">
                      {t.title}
                    </span>
                    <span className="mt-1.5 block text-[0.58rem] uppercase tracking-[0.3em] text-ivory/45 transition group-hover:text-gold">
                      {t.hint}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <a
          href="#domaines"
          aria-label="Découvrir J Entreprise"
          className="mb-10 flex h-9 w-9 items-center justify-center rounded-full border border-ivory/50 text-sm text-ivory/80 transition hover:border-gold hover:text-gold"
        >
          <span aria-hidden="true">↓</span>
        </a>
      </section>

      {/* VIGNETTES — les 4 prestations */}
      <section id="domaines" className="bg-ink py-24 md:py-32" aria-labelledby="domaines-titre">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="text-[0.68rem] uppercase tracking-[var(--tracking-luxe)] text-gold">
              Construction · Rénovation · Aménagement
            </p>
            <h2 id="domaines-titre" className="mt-5 font-serif text-4xl text-ivory md:text-5xl">
              Nos domaines d&apos;intervention en Charente-Maritime
            </h2>
          </div>
          <ul className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {tiles.map((t, i) => (
              <li key={t.href} className="group relative flex flex-col bg-ink p-8 text-center transition duration-500 hover:bg-coal md:p-10">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px origin-center scale-x-0 bg-gold-gradient transition duration-500 group-hover:scale-x-100"
                />
                <span className="text-gold-gradient font-serif text-3xl">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 font-serif text-2xl text-ivory">{t.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ivory/55">{t.text}</p>
                <div className="mt-auto pt-10">
                  <Link
                    href={t.href}
                    className="inline-flex border border-gold/50 px-6 py-3 text-[0.68rem] uppercase tracking-[0.22em] text-gold-light transition hover:border-gold hover:bg-gold/10"
                  >
                    Découvrir
                    <span className="sr-only"> : {t.title}</span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CONCEPT */}
      <section className="bg-ivory py-24 text-ink md:py-32" aria-labelledby="concept-titre">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-[0.68rem] uppercase tracking-[var(--tracking-luxe)] text-gold-dark">Le concept</p>
          <h2 id="concept-titre" className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
            Le courtage en travaux, ou l&apos;art de bien s&apos;entourer
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-stone">
            J Entreprise sélectionne pour vous les artisans les plus adaptés parmi son réseau en Charente-Maritime, vous
            aide à comparer leurs devis et vous accompagne jusqu&apos;au lancement du chantier. Vous gardez la main sur
            chaque décision, nous vous faisons gagner du temps et de la sérénité.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <ButtonLink href="/demande-de-devis" variant="dark">
              Parlons de votre projet
            </ButtonLink>
            <Link
              href="/j-entreprise"
              className="text-sm text-gold-dark underline decoration-gold/40 underline-offset-4 hover:text-ink"
            >
              En savoir plus sur J Entreprise
            </Link>
          </div>
        </div>
      </section>

      <Advantages />

      <Zones />

      <Reviews />

      <CtaBanner
        title={
          <>
            Un projet en tête ? <span className="text-gold-gradient italic">Parlons-en.</span>
          </>
        }
        text="Décrivez-nous vos travaux en quelques minutes : nous revenons vers vous rapidement, sans engagement."
        cta="Recevoir mes devis"
      />
    </>
  );
}
