"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

// Sur l'accueil, l'en-tête se superpose à la photo (transparent, épuré) puis redevient
// un en-tête classique une fois la photo dépassée. Les styles utilisent la variante `overlay:`.
export function HeaderShell({ children }: { children: ReactNode }) {
  const isHome = usePathname() === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.7);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const overlay = isHome && !scrolled;

  return (
    <header
      data-overlay={overlay}
      className={`top-0 z-50 border-b transition-colors duration-500 ${
        isHome ? "fixed inset-x-0" : "sticky"
      } ${overlay ? "border-transparent" : "border-white/5"}`}
    >
      {children}
    </header>
  );
}
