import Link from "next/link";
import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-coal">
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
        <p className="text-gold-gradient font-serif text-8xl">404</p>
        <h1 className="mt-6 font-serif text-4xl text-ivory">Cette page est introuvable</h1>
        <p className="mt-4 text-ivory/60">La page que vous cherchez a peut-être été déplacée ou n&apos;existe plus.</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <ButtonLink href="/">Retour à l&apos;accueil</ButtonLink>
          <Link href="/demande-de-devis" className="text-sm text-gold-light underline underline-offset-4">
            Demander un devis
          </Link>
        </div>
      </div>
    </section>
  );
}
