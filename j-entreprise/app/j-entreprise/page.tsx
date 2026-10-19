import type { Metadata } from "next";
import Link from "next/link";
import { Advantages } from "@/components/sections";
import { ButtonLink, CtaBanner, Eyebrow, PageHero } from "@/components/ui";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo({
  title: "J Entreprise – Votre courtier en travaux à La Rochelle",
  description:
    "Découvrez J Entreprise : le concept du courtage en travaux, nos valeurs et notre réseau d'artisans sélectionnés avec soin à La Rochelle et en Charente-Maritime.",
  path: "/j-entreprise",
  absolute: true,
});

const values = [
  {
    title: "Exigence",
    text: "Nous ne recommandons que des artisans dont nous avons vérifié le sérieux, les assurances et la qualité d'exécution. Notre réputation repose sur la leur.",
  },
  {
    title: "Transparence",
    text: "Devis détaillés, explications claires, aucun frais caché : vous savez à chaque étape ce que vous payez et pourquoi.",
  },
  {
    title: "Proximité",
    text: "Un interlocuteur joignable, qui se déplace, connaît votre secteur et suit votre dossier personnellement.",
  },
  {
    title: "Indépendance",
    text: "Vous restez libre de vos choix. Notre rôle est de vous éclairer, jamais de vous imposer un professionnel.",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Qui sommes-nous"
        title={
          <>
            J Entreprise, votre <span className="text-gold-gradient italic">courtier en travaux</span> à La Rochelle
          </>
        }
        intro={
          <p>
            Construction, rénovation, aménagement : nous faisons le lien entre votre projet et les artisans capables de
            le réaliser, avec un seul objectif — que vos travaux se passent bien.
          </p>
        }
        crumbs={[{ href: "/j-entreprise", label: "J Entreprise" }]}
      >
        <ButtonLink href="/demande-de-devis">Demander un devis</ButtonLink>
      </PageHero>

      <section className="bg-ivory py-20 text-ink md:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Eyebrow light>Notre histoire</Eyebrow>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">Une entreprise rochelaise, une ambition simple</h2>
          </div>
          <div className="space-y-5 text-[1.05rem] leading-relaxed text-stone">
            {/* TODO : enrichir avec le parcours réel du fondateur (expérience, métier d'origine, date de création). */}
            <p>
              Derrière J Entreprise, il y a <strong className="font-medium text-ink">Jordan</strong>, installé à La
              Rochelle. Un constat est à l&apos;origine du projet : les particuliers perdent un temps considérable à
              chercher des artisans fiables, et peinent à comparer des devis qui ne parlent pas le même langage.
            </p>
            <p>
              J Entreprise est née pour simplifier cette étape. Notre métier : comprendre votre projet, identifier les
              bons professionnels, vous aider à choisir et vous accompagner jusqu&apos;au démarrage des travaux.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-coal py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Eyebrow>Le concept</Eyebrow>
          <h2 className="max-w-3xl font-serif text-4xl leading-tight text-ivory md:text-5xl">
            Qu&apos;est-ce que le courtage en travaux ?
          </h2>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <div className="space-y-5 leading-relaxed text-ivory/70">
              <p>
                Le courtier en travaux est un intermédiaire de confiance entre vous et les entreprises du bâtiment. Il
                n&apos;exécute pas les travaux lui-même : il vous aide à trouver les professionnels qui les réaliseront
                le mieux.
              </p>
              <p>
                Concrètement, nous analysons votre besoin, consultons les artisans adaptés, vous présentons leurs devis
                et vous aidons à les comparer. Vous signez ensuite directement avec l&apos;entreprise retenue.
              </p>
            </div>
            <div className="space-y-5 leading-relaxed text-ivory/70">
              <h3 className="font-serif text-2xl text-ivory">Ce que vous y gagnez</h3>
              <ul className="space-y-3">
                <li className="border-l border-gold/50 pl-4">Du temps : nous gérons les recherches, les rendez-vous et les relances.</li>
                <li className="border-l border-gold/50 pl-4">De la sécurité : des artisans vérifiés et assurés.</li>
                <li className="border-l border-gold/50 pl-4">De la clarté : des devis comparables et expliqués.</li>
              </ul>
              <Link
                href="/mon-accompagnement"
                className="inline-block pt-2 text-sm text-gold-light underline decoration-gold/40 underline-offset-4 hover:text-gold"
              >
                Voir le détail de l&apos;accompagnement
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 text-ink md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Eyebrow light>Nos valeurs</Eyebrow>
          <h2 className="font-serif text-4xl md:text-5xl">Ce qui nous guide</h2>
          <div className="mt-12 grid gap-px bg-sand sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="bg-ivory p-8 md:p-10">
                <h3 className="font-serif text-3xl">{v.title}</h3>
                <p className="mt-4 leading-relaxed text-stone">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <Eyebrow>Notre réseau</Eyebrow>
            <h2 className="font-serif text-4xl leading-tight text-ivory md:text-5xl">
              Des artisans sélectionnés avec soin
            </h2>
          </div>
          <div className="space-y-5 leading-relaxed text-ivory/70">
            <p>
              Électriciens, plombiers, plaquistes, menuisiers, carreleurs, peintres, maçons, couvreurs, paysagistes,
              piscinistes… Notre réseau couvre l&apos;ensemble des corps de métier du bâtiment et de
              l&apos;aménagement extérieur.
            </p>
            <p>
              Chaque entreprise est choisie pour la qualité de son travail, sa fiabilité et son sens du service. Nous
              vérifions ses assurances, ses références et restons attentifs aux retours de nos clients : seuls les
              professionnels qui partagent notre exigence restent dans le réseau.
            </p>
            <div className="pt-4">
              <ButtonLink href="/domaines-intervention" variant="outline">
                Nos domaines d&apos;intervention
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <Advantages heading="Pourquoi choisir J Entreprise" />

      <CtaBanner
        title="Confiez-nous votre projet"
        text="Un premier échange suffit pour savoir comment nous pouvons vous aider."
        cta="Présenter mon projet"
      />
    </>
  );
}
