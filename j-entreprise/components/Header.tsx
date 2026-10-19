import Image from "next/image";
import Link from "next/link";
import { domains } from "@/lib/domains";
import { mainNav, site } from "@/lib/site";
import { MobileNav } from "./MobileNav";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`block shrink-0 ${className}`} aria-label="J Entreprise – Accueil">
      <Image
        src="/images/logo-j-entreprise.png"
        alt="J Entreprise – Construction, Rénovation, Aménagement"
        width={1253}
        height={173}
        preload
        className="h-auto w-52 md:w-64"
      />
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5">
      {/* Le flou est porté par un calque séparé : un backdrop-filter sur le header casserait le menu mobile en position fixe. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/85 backdrop-blur-md" />
      <div className="hidden border-b border-white/5 text-[0.7rem] tracking-[0.12em] text-mist md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <p>Courtier en travaux à La Rochelle · Charente-Maritime, Charente &amp; Vendée</p>
          <div className="flex items-center gap-6">
            <a href={`mailto:${site.email}`} className="hover:text-gold-light">
              {site.email}
            </a>
            <a href={site.phone.href} className="text-gold-light hover:text-gold">
              {site.phone.display}
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3.5 sm:px-6">
        <Logo />
        <nav aria-label="Navigation principale" className="hidden xl:block">
          <ul className="flex items-center gap-7 whitespace-nowrap text-[0.74rem] uppercase tracking-[0.18em] text-ivory/80">
            {mainNav.map((item) =>
              item.href === "/domaines-intervention" ? (
                <li key={item.href} className="group relative">
                  <Link href={item.href} className="flex items-center gap-1.5 py-3 transition hover:text-gold-light">
                    {item.label}
                    <span aria-hidden="true" className="text-[0.6rem] text-gold">▾</span>
                  </Link>
                  <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-2 opacity-0 transition duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <ul className="border border-white/10 bg-coal p-2 shadow-2xl">
                      {domains.map((d) => (
                        <li key={d.slug}>
                          <Link
                            href={`/domaines-intervention/${d.slug}`}
                            className="flex items-baseline gap-3 px-4 py-3 normal-case tracking-normal text-ivory/85 transition hover:bg-white/5 hover:text-gold-light"
                          >
                            <span className="font-serif text-sm text-gold">{d.number}</span>
                            <span className="text-sm">{d.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <Link href={item.href} className="py-3 transition hover:text-gold-light">
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/demande-de-devis"
            className="bg-gold-gradient hidden whitespace-nowrap px-5 py-2.5 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-ink transition hover:brightness-110 sm:inline-flex"
          >
            Demander un devis
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
