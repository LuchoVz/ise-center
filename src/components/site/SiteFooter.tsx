import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { navPrincipal, programas } from "./nav";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-ise grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo tone="invert" />
          <p className="mt-5 text-sm leading-relaxed text-ink-foreground/70">
            Desarrollamos capacidades humanas para vivir con mayor consciencia, libertad,
            responsabilidad y coherencia.
          </p>
          <p className="mt-5 text-xs leading-relaxed text-ink-foreground/50">
            Institución educativa especializada en Desarrollo Humano Integral basado en evidencia
            científica.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.16em] text-ink-foreground/50">Formación</h4>
          <ul className="mt-4 space-y-2.5">
            {programas.map((p) => (
              <li key={p.to}>
                <Link
                  to={p.to}
                  className="text-sm text-ink-foreground/80 transition-colors hover:text-ink-foreground"
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.16em] text-ink-foreground/50">
            Institución
          </h4>
          <ul className="mt-4 space-y-2.5">
            {navPrincipal.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className="text-sm text-ink-foreground/80 transition-colors hover:text-ink-foreground"
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/campus-virtual"
                className="text-sm text-ink-foreground/80 transition-colors hover:text-ink-foreground"
              >
                Campus Virtual
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.16em] text-ink-foreground/50">Contacto</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-foreground/80">
            <li>
              <a href="mailto:lucianomvazquez@gmail.com" className="transition-colors hover:text-ink-foreground">
                lucianomvazquez@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5493425265273"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-ink-foreground"
              >
                WhatsApp +54 9 3425 26 5273
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/luciano.manuel.vazquez/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-ink-foreground"
              >
                Instagram
              </a>
            </li>
            <li>Lunes a viernes, de 9:00 a 17:00</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10">
        <div className="container-ise flex flex-col gap-3 py-6 text-xs text-ink-foreground/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} ISE® — Instituto del Ser en Expansión.</p>
          <p>
            ISE® es marca registrada de la institución. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
