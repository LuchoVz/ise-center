import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

export function Section({
  children,
  className = "",
  tone = "default",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "muted" | "soft" | "ink";
  id?: string;
}) {
  const tones = {
    default: "bg-background",
    muted: "bg-secondary",
    soft: "bg-primary-soft",
    ink: "bg-ink text-ink-foreground",
  } as const;
  return (
    <section id={id} className={`${tones[tone]} py-20 md:py-28 ${className}`}>
      <div className="container-ise">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className={invert ? "eyebrow text-ink-foreground/60" : "eyebrow"}>{eyebrow}</p>
      )}
      <h2
        className={`mt-3 text-3xl leading-tight md:text-[2.6rem] ${invert ? "text-ink-foreground" : ""}`}
      >
        {title}
      </h2>
      {lede && (
        <p className={`mt-5 lede ${invert ? "text-ink-foreground/70" : ""}`}>{lede}</p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
  meta,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  meta?: string[];
}) {
  return (
    <section className="border-b border-border bg-secondary/60">
      <div className="container-ise py-20 md:py-28">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl leading-[1.08] md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl lede">{lede}</p>
        {meta && (
          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {meta.map((m) => (
              <li
                key={m}
                className="text-xs uppercase tracking-[0.14em] text-muted-foreground"
              >
                {m}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export function CtaBand({
  title = "Conversemos sobre tu recorrido formativo",
  text = "Si quieres saber si esta formación es adecuada para tu momento actual, escríbenos. Te responderemos con claridad y sin presión comercial.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-ink py-20 text-ink-foreground md:py-24">
      <div className="container-ise grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
        <div className="max-w-2xl">
          <h2 className="text-3xl text-ink-foreground md:text-[2.5rem]">{title}</h2>
          <p className="mt-5 text-base leading-relaxed text-ink-foreground/70">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <Link
            to="/contacto"
            className="rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Solicitar información
          </Link>
        </div>
      </div>
    </section>
  );
}

export function StatusTag({ status }: { status: string }) {
  const disponible = status.toLowerCase().includes("disponible");
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[0.65rem] uppercase tracking-[0.14em] ${
        disponible
          ? "bg-primary-soft text-primary"
          : "bg-accent text-accent-foreground"
      }`}
    >
      {status}
    </span>
  );
}
