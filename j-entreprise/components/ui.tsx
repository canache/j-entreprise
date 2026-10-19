import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "gold" | "outline" | "dark";
  className?: string;
};

export function ButtonLink({ href, children, variant = "gold", className = "" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-3 px-7 py-3.5 text-[0.78rem] font-medium uppercase tracking-[0.22em] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold";
  const styles = {
    gold: "bg-gold-gradient text-ink hover:brightness-110 hover:shadow-[0_8px_30px_-8px_rgba(198,166,104,0.6)]",
    outline: "border border-gold/60 text-gold-light hover:border-gold hover:bg-gold/10",
    dark: "bg-ink text-gold-light hover:bg-graphite",
  }[variant];
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
      <span aria-hidden="true" className="text-base leading-none">→</span>
    </Link>
  );
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={`mb-5 flex items-center gap-4 text-[0.72rem] font-medium uppercase tracking-[var(--tracking-luxe)] ${
        light ? "text-gold-dark" : "text-gold"
      }`}
    >
      <span aria-hidden="true" className={`h-px w-10 ${light ? "bg-gold-dark" : "bg-gold"}`} />
      {children}
    </p>
  );
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export type Crumb = { href: string; label: string };

export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ href: "/", label: "Accueil" }, ...crumbs].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${site.url}${c.href === "/" ? "" : c.href}`,
    })),
  };
}

export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  crumbs: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-coal">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-10 select-none font-serif text-[22rem] leading-none text-white/[0.025] md:text-[30rem]"
      >
        J
      </div>
      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 md:pb-24 md:pt-14">
        <nav aria-label="Fil d'Ariane" className="mb-12 text-xs tracking-wide text-mist">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-gold-light">
                Accueil
              </Link>
            </li>
            {crumbs.map((c, i) => (
              <li key={c.href} className="flex items-center gap-2">
                <span aria-hidden="true" className="text-gold/50">/</span>
                {i === crumbs.length - 1 ? (
                  <span aria-current="page" className="text-ivory/80">
                    {c.label}
                  </span>
                ) : (
                  <Link href={c.href} className="hover:text-gold-light">
                    {c.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="max-w-4xl font-serif text-4xl font-medium leading-[1.08] text-ivory sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {intro ? (
          <div className="mt-8 max-w-2xl text-base leading-relaxed text-ivory/70 md:text-lg">{intro}</div>
        ) : null}
        {children ? <div className="mt-10 flex flex-wrap gap-4">{children}</div> : null}
      </div>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </section>
  );
}

export function CtaBanner({
  title,
  text,
  cta,
  secondary = true,
}: {
  title: ReactNode;
  text: string;
  cta: string;
  secondary?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="gold-rule" />
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-10 px-4 py-20 sm:px-6 md:flex-row md:items-center md:justify-between md:py-24">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl leading-tight text-ivory md:text-[2.75rem]">{title}</h2>
          <p className="mt-5 text-ivory/65 md:text-lg">{text}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-4 sm:flex-row md:flex-col lg:flex-row">
          <ButtonLink href="/demande-de-devis">{cta}</ButtonLink>
          {secondary ? (
            <a
              href={site.phone.href}
              className="inline-flex items-center justify-center border border-white/15 px-7 py-3.5 text-[0.78rem] uppercase tracking-[0.22em] text-ivory/80 transition hover:border-gold/60 hover:text-gold-light"
            >
              {site.phone.display}
            </a>
          ) : null}
        </div>
      </div>
      <div className="gold-rule" />
    </section>
  );
}
