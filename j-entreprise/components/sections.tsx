import Link from "next/link";
import { reviews } from "@/lib/reviews";
import { site, zones } from "@/lib/site";
import { ButtonLink, Eyebrow } from "./ui";

export const advantages = [
  {
    title: "Un interlocuteur unique",
    text: "Une seule personne suit votre projet, du premier échange au démarrage du chantier. Plus besoin de relancer une dizaine d'entreprises.",
  },
  {
    title: "Des artisans sélectionnés",
    text: "Assurances, références, qualité d'exécution : chaque professionnel de notre réseau est choisi avec exigence.",
  },
  {
    title: "Des devis clairs et comparés",
    text: "Nous analysons chaque proposition ligne par ligne avec vous, pour choisir en toute connaissance de cause.",
  },
  {
    title: "Un ancrage local",
    text: "Basés à La Rochelle, nous connaissons le territoire, ses contraintes et les meilleurs artisans de Charente-Maritime.",
  },
];

export function Advantages({ heading = "Les atouts J Entreprise" }: { heading?: string }) {
  return (
    <section className="bg-ink py-20 md:py-28" aria-labelledby="atouts-titre">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>Pourquoi nous confier votre projet</Eyebrow>
            <h2 id="atouts-titre" className="font-serif text-4xl text-ivory md:text-5xl">
              {heading}
            </h2>
          </div>
          <ButtonLink href="/demande-de-devis" variant="outline">
            Lancer mon projet
          </ButtonLink>
        </div>
        <ol className="grid border-t border-white/10 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((a, i) => (
            <li
              key={a.title}
              className="border-b border-white/10 py-10 md:px-8 md:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0 lg:first:pl-0"
            >
              <span className="text-gold-gradient font-serif text-5xl">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 font-serif text-2xl text-ivory">{a.title}</h3>
              <p className="mt-4 leading-relaxed text-ivory/60">{a.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Zones({ headingLevel = "h2" }: { headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  const [main, ...others] = zones;
  return (
    <section className="bg-ivory py-20 text-ink md:py-28" aria-labelledby="zones-titre">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <div>
            <Eyebrow light>Zones d&apos;intervention</Eyebrow>
            <H id="zones-titre" className="font-serif text-4xl leading-tight md:text-5xl">
              De La Rochelle à toute la Charente-Maritime
            </H>
            <p className="mt-6 leading-relaxed text-stone">
              Depuis La Rochelle, J Entreprise accompagne vos projets dans toute l&apos;agglomération (Lagord, Périgny,
              Aytré, Dompierre-sur-Mer, Puilboreau…) et partout en Charente-Maritime.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/demande-de-devis" variant="dark">
                Vérifier mon secteur
              </ButtonLink>
            </div>
            <Link
              href="/courtier-travaux-la-rochelle"
              className="mt-6 inline-block text-sm text-gold-dark underline decoration-gold/40 underline-offset-4 hover:text-ink"
            >
              Votre courtier en travaux à La Rochelle
            </Link>
          </div>

          <div>
            <div className="border border-sand bg-white/50 p-8 md:p-10">
              <h3 className="font-serif text-3xl">
                {main.department} <span className="text-mist">({main.code})</span>
              </h3>
              <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
                {main.cities.map((c, i) => (
                  <li
                    key={c}
                    className={`border-b border-sand pb-3 ${i === 0 ? "font-serif text-lg text-ink" : "text-[0.95rem] text-stone"}`}
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-gold-dark">Nous intervenons aussi</p>
              <dl className="mt-4 space-y-4">
                {others.map((z) => (
                  <div key={z.department} className="grid gap-1 sm:grid-cols-[11rem_1fr] sm:gap-6">
                    <dt className="font-serif text-xl">
                      {z.department} <span className="text-mist">({z.code})</span>
                    </dt>
                    <dd className="text-[0.95rem] leading-relaxed text-stone">
                      {z.cities.join(", ")}
                      {z.note ? <span className="text-mist"> — {z.note.charAt(0).toLowerCase() + z.note.slice(1)}</span> : null}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// TODO : valider avec le client (visite systématique ? nombre de devis par corps de métier ?).
export const steps = [
  {
    title: "Premier échange",
    text: "Vous nous présentez votre projet, vos envies, votre budget et vos délais. Sans engagement.",
  },
  {
    title: "Visite et cadrage",
    text: "Nous nous déplaçons pour comprendre le bien, les contraintes techniques et définir précisément le besoin.",
  },
  {
    title: "Sélection des artisans",
    text: "Nous consultons les professionnels de notre réseau les plus adaptés à votre projet et à votre secteur.",
  },
  {
    title: "Analyse des devis",
    text: "Nous comparons avec vous chaque proposition, poste par poste, et répondons à toutes vos questions.",
  },
  {
    title: "Choix et lancement",
    text: "Vous choisissez librement l'artisan, signez directement avec lui et nous restons à vos côtés jusqu'au démarrage.",
  },
];

export function Reviews() {
  if (reviews.length > 0) {
    return (
      <section className="bg-coal py-20 md:py-28" aria-labelledby="avis-titre">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Eyebrow>Avis Google</Eyebrow>
          <h2 id="avis-titre" className="font-serif text-4xl text-ivory md:text-5xl">
            Ils nous ont confié leur projet
          </h2>
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <li key={r.author} className="border border-white/10 bg-ink p-8">
                <p className="text-gold" aria-label={`${r.rating} sur 5`}>
                  {"★".repeat(r.rating)}
                </p>
                <blockquote className="mt-4 font-serif text-xl leading-relaxed text-ivory/90">« {r.text} »</blockquote>
                <p className="mt-6 text-xs uppercase tracking-[0.2em] text-mist">
                  {r.author}
                  {r.city ? ` · ${r.city}` : ""}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  // En attendant la fiche Google Business Profile : mise en avant d'Instagram.
  return (
    <section className="bg-coal py-20 md:py-24" aria-labelledby="avis-titre">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 text-center sm:px-6">
        <Eyebrow>Nos réalisations</Eyebrow>
        <h2 id="avis-titre" className="font-serif text-4xl text-ivory md:text-5xl">
          Suivez nos chantiers au quotidien
        </h2>
        <p className="mt-6 max-w-2xl leading-relaxed text-ivory/60">
          Avant / après, coulisses des chantiers et réalisations de notre réseau d&apos;artisans : retrouvez
          l&apos;actualité de J Entreprise sur Instagram.
        </p>
        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 border border-gold/60 px-7 py-3.5 text-[0.78rem] uppercase tracking-[0.22em] text-gold-light transition hover:bg-gold/10"
        >
          @j.entreprise_courtier <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
