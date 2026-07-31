import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, PlayCircle } from "lucide-react";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/site/primitives";

export const Route = createFileRoute("/cursos-grabados")({
  head: () => ({
    meta: [
      { title: "Cursos Asincrónicos | ISE®" },
      {
        name: "description",
        content:
          "Formación breve, independiente y complementaria al recorrido principal del Sistema ISE®. Acceso a ritmo propio.",
      },
      { property: "og:title", content: "Cursos Asincrónicos | ISE®" },
      {
        property: "og:description",
        content:
          "Profundiza en temas específicos del Desarrollo Humano Integral con cursos asincrónicos de acceso inmediato.",
      },
    ],
  }),
  component: Cursos,
});

const cursos = [
  {
    t: "Estrategias para el Líder Interior",
    d: "Un recorrido práctico para reconocer y fortalecer el liderazgo personal: claridad de criterio, gestión de la propia energía y decisiones alineadas con los valores.",
    h: "4 clases",
    area: "Curso Asincrónico",
  },
  {
    t: "Habilidades para Crear Bienestar",
    d: "Prácticas fundamentadas para sostener el bienestar cotidiano: atención, regulación emocional y hábitos que se sostienen en el tiempo.",
    h: "4 clases",
    area: "Curso Asincrónico",
  },
  {
    t: "El Poder de Tus Relaciones",
    d: "Cómo se construyen vínculos de calidad: escucha, lenguaje, acuerdos, límites y conversaciones que sostienen la confianza.",
    h: "8 clases",
    area: "Curso Asincrónico",
  },
];


function Cursos() {
  return (
    <>
      <PageHero
        eyebrow="Formación complementaria"
        title="Cursos Asincrónicos"
        lede="Programas grabados e independientes del recorrido de certificaciones, para profundizar en un tema específico a ritmo propio. Complementan el trayecto de aprendizaje de cada estudiante."
        meta={["Acceso inmediato", "Material descargable", "A tu propio ritmo"]}
      />

      <Section>
        <SectionHeading
          eyebrow="Catálogo"
          title="Temas específicos, tratados con el mismo rigor."
          lede="Cada curso mantiene la distinción entre evidencia científica, modelos teóricos y herramientas de aplicación."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {cursos.map((c) => (
            <article key={c.t} className="flex flex-col bg-background p-8">
              <div className="flex items-center justify-between gap-3">
                <span className="eyebrow">{c.area}</span>
                <span className="inline-flex shrink-0 items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" aria-hidden /> {c.h}
                </span>
              </div>
              <h3 className="mt-4 text-lg leading-snug">{c.t}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              <Link
                to="/contacto"
                className="mt-6 inline-flex items-center gap-2 text-sm text-primary"
              >
                <PlayCircle className="h-4 w-4" aria-hidden /> Consultar acceso
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <SectionHeading
            eyebrow="Importante"
            title="Complementarios, no equivalentes."
            lede="Los cursos asincrónicos son formación autónoma y complementaria: amplían temas puntuales del Desarrollo Humano Integral. El recorrido académico de certificaciones es independiente y se sostiene en la práctica guiada y el acompañamiento docente."
          />
          <div className="lg:justify-self-end">
            <Link
              to="/desarrollo-humano-integral"
              className="inline-flex rounded-sm border border-border bg-background px-6 py-3 text-sm text-ink transition-colors hover:border-primary hover:text-primary"
            >
              Ver el recorrido formativo
            </Link>
          </div>
        </div>
      </Section>

      <CtaBand
        title="¿No sabes qué curso elegir?"
        text="Cuéntanos qué necesitas trabajar y te sugerimos el punto de entrada más adecuado."
      />
    </>
  );
}
