"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { domains } from "@/lib/domains";
import { mainNav, site } from "@/lib/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="menu-mobile"
        onClick={() => setOpen((v) => !v)}
        className="relative z-[60] flex h-11 w-11 flex-col items-center justify-center gap-1.5 border border-white/10"
      >
        <span className="sr-only">{open ? "Fermer le menu" : "Ouvrir le menu"}</span>
        <span className={`h-px w-5 bg-gold-light transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
        <span className={`h-px w-5 bg-gold-light transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
      </button>
      <div
        id="menu-mobile"
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("a")) setOpen(false);
        }}
        className={`fixed inset-0 z-50 flex flex-col overflow-y-auto bg-ink px-6 pb-10 pt-24 transition duration-300 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Navigation mobile">
          <ul className="space-y-1">
            <li>
              <Link href="/" className="block py-3 font-serif text-3xl text-ivory">
                Accueil
              </Link>
            </li>
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block py-3 font-serif text-3xl text-ivory">
                  {item.label}
                </Link>
                {item.href === "/domaines-intervention" ? (
                  <ul className="mb-2 ml-1 border-l border-gold/30 pl-5">
                    {domains.map((d) => (
                      <li key={d.slug}>
                        <Link
                          href={`/domaines-intervention/${d.slug}`}
                          className="block py-2 text-sm uppercase tracking-[0.18em] text-ivory/70"
                        >
                          {d.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-10 space-y-4 border-t border-white/10 pt-8">
          <Link
            href="/demande-de-devis"
            className="bg-gold-gradient flex justify-center px-6 py-4 text-xs font-medium uppercase tracking-[0.22em] text-ink"
          >
            Présenter mon projet
          </Link>
          <a href={site.phone.href} className="block text-center text-gold-light">
            {site.phone.display}
          </a>
        </div>
      </div>
    </div>
  );
}
