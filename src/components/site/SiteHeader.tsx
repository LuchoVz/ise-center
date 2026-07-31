import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { navPrincipal } from "./nav";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur">
      <div className="container-ise grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3.5">
        <Logo />

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-6 xl:flex" aria-label="Principal">
            {navPrincipal.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="py-2 text-sm text-foreground/80 transition-colors hover:text-primary"
                activeProps={{ className: "text-primary" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/campus-virtual"
            className="hidden shrink-0 rounded-sm border border-border px-4 py-2 text-sm text-ink transition-colors hover:border-primary hover:text-primary sm:inline-flex"
          >
            Campus
          </Link>

          <button
            className="inline-flex shrink-0 items-center justify-center rounded-sm border border-border p-2 xl:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background xl:hidden" aria-label="Menú móvil">
          <div className="container-ise grid gap-1 py-4">
            {[...navPrincipal, { to: "/campus-virtual", label: "Campus" }].map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-sm px-2 py-2.5 text-sm text-foreground/85 hover:bg-secondary"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
