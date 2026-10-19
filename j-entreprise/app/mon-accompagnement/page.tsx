import type { Metadata } from "next";
import { steps } from "@/components/sections";
import { ButtonLink, CtaBanner, Eyebrow, PageHero } from "@/components/ui";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo({
  title: "Mon accompagnement en courtage de travaux",
  description:
    "Étapes du projet, sélection des artisans, mise en relation, analyse des devis : comment J Entreprise vous accompagne dans vos travaux en Charente-Maritime.",
  path: "/mon-accompagnement",
});

const selection = [
  "Entreprise immatriculée et à jour de ses obligations",
  "Assurance responsabilité civile et garantie décennale en cours de validité",
  "Références vérifiées et réalisations comparables à votre projet",
  "Qualité d'exécution constatée sur chantier",
  "Disponibilité réelle sur votre secteur",
  "Sens de la relation client et respect des engagements",
];

type Cell = boolean | string;
const columns = ["Gérer seul", "Plateforme en ligne", "J Entreprise", "Maître d'œuvre"] as const;
const highlight = 2;
const rows: { label: string; values: Cell[] }[] = [
  { label: "Recherche des artisans", values: [false, "Automatique", true, true] },
  { label: "Vérification des assurances et références", values: [false, "Partielle", true, true] },
  { label: "Visite technique et cadrage du besoin", values: [false, false, true, true] },
  { label: "Analyse et comparaison des devis", values: [false, false, true, true] },
  { label: "Interlocuteur unique et disponible", values: [false, false, true, true] },
  { label: "Coordination des corps de métier", values: [false, false, true, true] },
  { label: "Conception et plans du projet", values: [false, false, false, true] },
  { label: "Direction complète du chantier", values: [false, false, false, true] },
  { label: "Coût pour vous", values: ["Votre temps", "Variable", "Sans frais *", "8 à 12 % des travaux"] },
];

const profiles = [
  { title: "Gérer seul", text: "Vous trouvez, vérifiez et coordonnez vous-même les artisans.", ideal: "Petits travaux simples, un seul corps de métier" },
  { title: "Plateforme en ligne", text: "Votre demande est transmise automatiquement à des entreprises inscrites.", ideal: "Dépannage ou intervention ponctuelle" },
  { title: "J Entreprise", text: "Un courtier local sélectionne les artisans, analyse les devis et vous accompagne.", ideal: "Rénovation, extension, aménagement, projets multi-corps d'état", recommended: true },
  { title: "Maître d'œuvre", text: "Un professionnel conçoit et dirige l'intégralité du chantier.", ideal: "Construction neuve, chantier très complexe" },
];

function Mark({ value, strong }: { value: Cell; strong: boolean }) {
  if (value === true)
    return (
      <span className={strong ? "text-gold-light" : "text-ivory/70"}>
        <span aria-hidden="true">✓</span>
        <span className="sr-only">Oui</span>
      </span>
    );
  if (value === false)
    return (
      <span className="text-ivory/25">
        <span aria-hidden="true">—</span>
        <span className="sr-only">Non</span>
      </span>
    );
  return <span className={strong ? "font-medium text-gold-light" : "text-ivory/70"}>{value}</span>;
}

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Courtage en travaux"
        title={
          <>
            Mon accompagnement, <span className="text-gold-gradient italic">de l&apos;idée au chantier</span>
          </>
        }
        intro={
          <p>
            Un projet de travaux réussi se joue avant le premier coup de pioche. Voici comment J Entreprise vous
            accompagne, étape par étape, pour choisir les bons artisans et vous engager sereinement.
          </p>
        }
        crumbs={[{ href: "/mon-accompagnement", label: "Mon accompagnement" }]}
      >
        <ButtonLink href="/demande-de-devis">Être accompagné</ButtonLink>
      </PageHero>

      {/* ÉTAPES */}
      <section className="bg-ivory py-20 text-ink md:py-28" aria-labelledby="etapes">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Eyebrow light>Le fonctionnement</Eyebrow>
          <h2 id="etapes" className="font-serif text-4xl md:text-5xl">Les étapes de votre projet</h2>
          <ol className="mt-14 space-y-0">
            {steps.map((s, i) => (
              <li key={s.title} className="grid gap-4 border-t border-sand py-8 md:grid-cols-[6rem_1fr_2fr] md:gap-8">
                <span className="font-serif text-5xl leading-none text-gold-dark">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-serif text-2xl">{s.title}</h3>
                <p className="leading-relaxed text-stone">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SÉLECTION + MISE EN RELATION */}
      <section className="bg-coal py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-16 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <Eyebrow>La sélection des artisans</Eyebrow>
            <h2 className="font-serif text-4xl leading-tight text-ivory">Des professionnels choisis, pas tirés au sort</h2>
            <p className="mt-6 leading-relaxed text-ivory/65">
              Chaque artisan de notre réseau est sélectionné selon des critères précis, puis réévalué au fil des
              chantiers et des retours de nos clients.
            </p>
            <ul className="mt-8 space-y-4">
              {selection.map((c) => (
                <li key={c} className="flex gap-4 border-b border-white/10 pb-4 text-ivory/80">
                  <span aria-hidden="true" className="mt-3 h-px w-5 shrink-0 bg-gold" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-12">
            <div>
              <Eyebrow>La mise en relation</Eyebrow>
              <h2 className="font-serif text-4xl leading-tight text-ivory">Les bons artisans, au bon moment</h2>
              <p className="mt-6 leading-relaxed text-ivory/65">
                Une fois votre besoin cadré, nous consultons en général deux à trois entreprises par corps de métier.
                Nous organisons les visites, transmettons un cahier des charges commun pour obtenir des devis
                comparables et assurons les relances à votre place.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-ivory">Les modalités d&apos;accompagnement</h3>
              <ul className="mt-5 space-y-3 leading-relaxed text-ivory/65">
                <li className="border-l border-gold/50 pl-4">Premier échange et visite sans engagement.</li>
                <li className="border-l border-gold/50 pl-4">
                  Vous signez directement avec l&apos;artisan choisi : contrat, facturation et garanties vous lient à lui.
                </li>
                <li className="border-l border-gold/50 pl-4">
                  Nous restons votre interlocuteur jusqu&apos;au lancement des travaux et en cas de question.
                </li>
                <li className="border-l border-gold/50 pl-4">Aucun honoraire ne vous est facturé.*</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARATIF */}
      <section className="bg-ink py-20 md:py-28" aria-labelledby="comparatif">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Comparatif</Eyebrow>
            <h2 id="comparatif" className="font-serif text-4xl text-ivory md:text-5xl">
              Quel accompagnement pour votre projet ?
            </h2>
            <p className="mt-6 text-ivory/60">
              Gérer seul, passer par une plateforme, faire appel à un courtier ou à un maître d&apos;œuvre : chaque
              solution a sa place. Voici comment elles se comparent.
            </p>
          </div>

          <ul className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {profiles.map((p) => (
              <li
                key={p.title}
                className={`relative flex flex-col p-7 ${p.recommended ? "bg-graphite ring-1 ring-gold/70 ring-inset" : "bg-coal"}`}
              >
                {p.recommended ? (
                  <span className="bg-gold-gradient absolute -top-3 left-7 px-3 py-1 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-ink">
                    Recommandé
                  </span>
                ) : null}
                <h3 className={`font-serif text-2xl ${p.recommended ? "text-gold-light" : "text-ivory"}`}>{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/60">{p.text}</p>
                <p className="mt-auto pt-6 text-xs uppercase tracking-[0.16em] text-mist">
                  Idéal : <span className="normal-case tracking-normal text-ivory/80">{p.ideal}</span>
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-10 overflow-x-auto border border-white/10">
            <table className="w-full min-w-[44rem] border-collapse text-sm">
              <caption className="sr-only">Comparatif des solutions pour mener un projet de travaux</caption>
              <thead>
                <tr className="border-b border-white/10">
                  <th scope="col" className="p-5 text-left font-normal text-mist">
                    <span className="sr-only">Critère</span>
                  </th>
                  {columns.map((c, i) => (
                    <th
                      key={c}
                      scope="col"
                      className={`p-5 text-center font-serif text-lg font-normal ${
                        i === highlight ? "bg-gold/10 text-gold-light" : "text-ivory/80"
                      }`}
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label} className="border-b border-white/5 last:border-b-0">
                    <th scope="row" className="p-5 text-left font-normal text-ivory/75">
                      {r.label}
                    </th>
                    {r.values.map((v, i) => (
                      <td key={columns[i]} className={`p-5 text-center ${i === highlight ? "bg-gold/10" : ""}`}>
                        <Mark value={v} strong={i === highlight} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* TODO : valider ce modèle de rémunération avec le client. */}
          <p className="mt-5 text-xs leading-relaxed text-mist">
            * J Entreprise est rémunéré par l&apos;artisan retenu, sans surcoût sur les devis qui vous sont présentés.
            Les honoraires de maîtrise d&apos;œuvre sont donnés à titre indicatif.
          </p>
          <div className="mt-12 flex justify-center">
            <ButtonLink href="/demande-de-devis">Présenter mon projet</ButtonLink>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Prêt à lancer vos travaux ?"
        text="Premier échange et visite sans engagement, partout en Charente-Maritime."
        cta="Prendre rendez-vous"
      />
    </>
  );
}
