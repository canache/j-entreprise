import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/articles";
import { domains } from "@/lib/domains";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-sm text-ivory/65">
      <div className="gold-rule" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Image
            src="/images/logo-j-entreprise.png"
            alt="Logo J Entreprise – Construction, Rénovation, Aménagement"
            width={1253}
            height={173}
            className="h-auto w-60"
          />
          <p className="mt-6 max-w-xs leading-relaxed">
            Courtier en travaux à La Rochelle. Nous sélectionnons pour vous des artisans de confiance en
            Charente-Maritime, Charente et Vendée.
          </p>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold-light hover:text-gold"
          >
            Instagram <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div>
          <h2 className="mb-5 text-[0.7rem] uppercase tracking-[0.24em] text-gold">Domaines</h2>
          <ul className="space-y-3">
            {domains.map((d) => (
              <li key={d.slug}>
                <Link href={`/domaines-intervention/${d.slug}`} className="hover:text-gold-light">
                  {d.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/mon-accompagnement" className="hover:text-gold-light">
                Mon accompagnement
              </Link>
            </li>
            <li>
              <Link href="/courtier-travaux-la-rochelle" className="hover:text-gold-light">
                Courtier en travaux à La Rochelle
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-5 text-[0.7rem] uppercase tracking-[0.24em] text-gold">J Entreprise</h2>
          <ul className="space-y-3">
            <li><Link href="/j-entreprise" className="hover:text-gold-light">Qui sommes-nous</Link></li>
            <li><Link href="/conseils" className="hover:text-gold-light">Conseils travaux</Link></li>
            {articles.slice(0, 2).map((a) => (
              <li key={a.slug} className="text-ivory/45">
                <Link href={`/conseils/${a.slug}`} className="hover:text-gold-light">
                  {a.title}
                </Link>
              </li>
            ))}
            <li><Link href="/faq" className="hover:text-gold-light">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="mb-5 text-[0.7rem] uppercase tracking-[0.24em] text-gold">Contact</h2>
          <address className="space-y-3 not-italic">
            <p>
              <a href={site.phone.href} className="font-serif text-2xl text-ivory hover:text-gold-light">
                {site.phone.display}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-gold-light">
                {site.email}
              </a>
            </p>
            <p>{site.city}, {site.department}</p>
            <p className="text-ivory/45">{site.hours}</p>
          </address>
          <Link
            href="/demande-de-devis"
            className="mt-6 inline-flex border border-gold/50 px-5 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-gold-light transition hover:bg-gold/10"
          >
            Obtenir mon devis
          </Link>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-6 text-xs leading-relaxed text-ivory/40 sm:px-6">
          <p>
            Intervention dans toute la Charente-Maritime (La Rochelle, Rochefort, Saintes, Royan…), ainsi qu&apos;en
            Charente et en Vendée.
          </p>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-ivory/40 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© 2026 J Entreprise — Courtier en travaux à La Rochelle</p>
          <ul className="flex gap-6">
            <li><Link href="/mentions-legales" className="hover:text-gold-light">Mentions légales</Link></li>
            <li><Link href="/politique-de-confidentialite" className="hover:text-gold-light">Confidentialité</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
