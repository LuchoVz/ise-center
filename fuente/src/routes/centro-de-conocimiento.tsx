import { createFileRoute, Link } from "@tanstack/react-router";
import { BookMarked, FileText, LibraryBig } from "lucide-react";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/site/primitives";

export const Route = createFileRoute("/centro-de-conocimiento")({
  head: () => ({
    meta: [
      { title: "Centro de Conocimiento | ISE®" },
      {
        name: "description",
        content:
          "Artículos, biblioteca y recursos libres del Instituto del Ser en Expansión sobre Desarrollo Humano Integral basado en evidencia.",
      },
      { property: "og:title", content: "Centro de Conocimiento | ISE®" },
      {
        property: "og:description",
        content:
          "Espacio académico abierto del ISE®: publicaciones, bibliografía comentada y materiales de práctica.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CentroConocimiento,
});

const categorias = [
  {
    icon: FileText,
    eyebrow: "Artículos",
    t: "Publicaciones y divulgación rigurosa",
    d: "Textos breves y fundamentados sobre neurociencias, aprendizaje, lenguaje y coherencia personal, escritos con criterio académico y sin promesas exageradas.",
    to: "/blog" as const,
    cta: "Ver artículos",
  },
  {
    icon: LibraryBig,
    eyebrow: "Biblioteca",
    t: "Bibliografía comentada del Sistema ISE®",
    d: "Selección de obras de referencia por disciplina, con una nota sobre su nivel de respaldo empírico y su utilidad práctica dentro del recorrido formativo.",
    to: "/recursos" as const,
    cta: "Consultar la biblioteca",
  },
  {
    icon: BookMarked,
    eyebrow: "Recursos libres",
    t: "Materiales de práctica de acceso abierto",
    d: "Bitácoras, guías y ejercicios de uso libre para sostener la práctica por cuenta propia, con el mismo criterio de claridad y honestidad de nuestros programas.",
    to: "/recursos" as const,
    cta: "Ver recursos libres",
  },
];

function CentroConocimiento() {
  return (
    <>
      <PageHero
        eyebrow="Conocimiento abierto"
        title="Centro de Conocimiento"
        lede="El espacio académico abierto del ISE®. Reúne nuestras publicaciones, la bibliografía de referencia del Sistema ISE® y los materiales de práctica disponibles de forma libre."
        meta={["Artículos", "Biblioteca", "Recursos libres"]}
      />

      <Section>
        <SectionHeading
          eyebrow="Cómo se organiza"
          title="Tres categorías, un mismo criterio."
          lede="Distinguimos siempre entre evidencia científica, modelos teóricos y herramientas de aplicación. Ese criterio ordena todo lo que publicamos."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border lg:grid-cols-3">
          {categorias.map((c) => (
            <article key={c.eyebrow} className="flex flex-col bg-background p-9">
              <c.icon className="h-6 w-6 text-primary" aria-hidden />
              <span className="mt-5 eyebrow">{c.eyebrow}</span>
              <h2 className="mt-2 text-xl leading-snug">{c.t}</h2>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              <Link to={c.to} className="mt-7 text-sm text-primary">
                {c.cta} →
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <SectionHeading
            eyebrow="Alcance"
            title="Un material no reemplaza un proceso formativo."
            lede="El Centro de Conocimiento acompaña y amplía el estudio, pero el aprendizaje que se sostiene en el tiempo requiere práctica guiada, retroalimentación docente y encuadre."
          />
          <div className="lg:justify-self-end">
            <Link
              to="/desarrollo-humano-integral"
              className="inline-flex rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Ver el recorrido académico
            </Link>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
