import { createFileRoute, Link } from "@tanstack/react-router";
import { BookMarked, FileText, Headphones, ListChecks } from "lucide-react";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/site/primitives";

export const Route = createFileRoute("/recursos")({
  head: () => ({
    meta: [
      { title: "Recursos abiertos | ISE®" },
      {
        name: "description",
        content:
          "Guías, bitácoras de práctica, lecturas recomendadas y materiales abiertos del Instituto del Ser en Expansión.",
      },
      { property: "og:title", content: "Recursos abiertos | ISE®" },
      {
        property: "og:description",
        content:
          "Material de acceso libre para practicar y profundizar en Desarrollo Humano Integral.",
      },
    ],
  }),
  component: Recursos,
});

const recursos = [
  {
    icon: FileText,
    tipo: "Guía",
    t: "Bitácora de práctica semanal",
    d: "Plantilla para registrar observaciones, decisiones y aprendizajes durante siete días.",
  },
  {
    icon: ListChecks,
    tipo: "Herramienta",
    t: "Mapa de valores y coherencia",
    d: "Ejercicio guiado para contrastar lo que declaras valioso con aquello a lo que dedicas tiempo.",
  },
  {
    icon: BookMarked,
    tipo: "Lecturas",
    t: "Bibliografía comentada de ISE®",
    d: "Selección de obras con una nota sobre su nivel de respaldo empírico y su utilidad práctica.",
  },
  {
    icon: Headphones,
    tipo: "Audio",
    t: "Prácticas breves de atención",
    d: "Tres audios de entre cinco y doce minutos para entrenar la observación sin juicio.",
  },
  {
    icon: FileText,
    tipo: "Guía",
    t: "Preparación de una conversación difícil",
    d: "Cuestionario previo para clarificar hechos, interpretaciones, pedido y límite.",
  },
  {
    icon: ListChecks,
    tipo: "Herramienta",
    t: "Diseño de un hábito sostenible",
    d: "Marco de trabajo basado en ciencias del aprendizaje para instalar una práctica nueva.",
  },
];

function Recursos() {
  return (
    <>
      <PageHero
        eyebrow="Acceso abierto"
        title="Recursos"
        lede="Materiales de uso libre para practicar por cuenta propia. Están diseñados con el mismo criterio que nuestros programas: claros, aplicables y honestos respecto de su alcance."
        meta={["Descarga gratuita", "Uso personal y educativo", "Actualización periódica"]}
      />

      <Section>
        <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {recursos.map((r) => (
            <article key={r.t} className="flex flex-col bg-background p-8">
              <r.icon className="h-6 w-6 text-primary" aria-hidden />
              <span className="mt-5 eyebrow">{r.tipo}</span>
              <h2 className="mt-2 text-lg leading-snug">{r.t}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
              <Link to="/contacto" className="mt-6 text-sm text-primary">
                Solicitar acceso →
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <SectionHeading
            eyebrow="Uso responsable"
            title="Un recurso no reemplaza un proceso."
            lede="Estos materiales son un buen punto de partida y una ayuda para sostener la práctica, pero el aprendizaje profundo requiere acompañamiento, retroalimentación y tiempo."
          />
          <div className="lg:justify-self-end">
            <Link
              to="/certificacion-i"
              className="inline-flex rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Ver la Certificación I
            </Link>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
