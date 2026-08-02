import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/site/primitives";

export const Route = createFileRoute("/certificacion-i")({
  head: () => ({
    meta: [
      { title: "Certificación I — Construyendo una Vida con Sentido | ISE®" },
      {
        name: "description",
        content:
          "Primera certificación del Sistema ISE®: autoconocimiento, emociones, decisiones y propósito, con base en evidencia científica.",
      },
      {
        property: "og:title",
        content: "Certificación I — Construyendo una Vida con Sentido | ISE®",
      },
      {
        property: "og:description",
        content:
          "Fundamentos del Desarrollo Humano Integral. Formación en vivo, práctica guiada y acompañamiento docente.",
      },
    ],
  }),
  component: CertI,
});

const modulos = [
  {
    n: "Módulo 1",
    t: "Fundamentos del Desarrollo Humano Integral",
    d: "Qué dice hoy la investigación sobre el cambio humano. Diferencia entre evidencia, modelo y herramienta.",
  },
  {
    n: "Módulo 2",
    t: "Observador y consciencia",
    d: "Cómo interpretamos la realidad. Atención, sesgos, narrativas personales y ampliación del punto de vista.",
  },
  {
    n: "Módulo 3",
    t: "Emociones y regulación",
    d: "Función adaptativa de las emociones, regulación en contextos de exigencia y prácticas de mindfulness aplicado.",
  },
  {
    n: "Módulo 4",
    t: "Lenguaje, decisiones y responsabilidad",
    d: "Actos lingüísticos, compromisos, límites y la distinción entre reacción automática y elección deliberada.",
  },
  {
    n: "Módulo 5",
    t: "Hábitos e incorporación",
    d: "Ciencias del aprendizaje aplicadas: diseño de práctica, repetición deliberada y sostenimiento del cambio.",
  },
  {
    n: "Módulo 6",
    t: "Sentido, valores y coherencia",
    d: "Construcción de un proyecto de vida con criterio propio y revisión de la coherencia entre valores y acciones.",
  },
];

const aprendizajes = [
  "Observar tus interpretaciones antes de reaccionar a ellas.",
  "Regular estados emocionales intensos con prácticas validadas.",
  "Sostener conversaciones difíciles con claridad y respeto.",
  "Diseñar prácticas que efectivamente se sostienen en el tiempo.",
  "Revisar tus prioridades con criterios propios y explícitos.",
  "Distinguir evidencia científica de creencia e interpretación.",
];

function CertI() {
  return (
    <>
      <PageHero
        eyebrow="Certificación I · Disponible"
        title="Construyendo una Vida con Sentido"
        lede="La puerta de entrada al Sistema ISE®. Una formación que trabaja los fundamentos del Desarrollo Humano Integral: cómo observamos, cómo sentimos, cómo decidimos y cómo sostenemos aquello que consideramos valioso."
        meta={["6 módulos", "Clases en vivo + práctica guiada", "Acompañamiento docente", "Certificación acreditable"]}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <SectionHeading
            eyebrow="A quién está dirigida"
            title="A personas que quieren comprender antes de intervenir."
          />
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              A profesionales de la salud, la educación, la gestión de personas y el liderazgo que
              buscan una base sólida y honesta sobre el funcionamiento humano.
            </p>
            <p>
              También a personas sin formación previa en el área que atraviesan un momento de
              revisión vital y desean hacerlo con método, no con improvisación.
            </p>
            <p>
              No se requieren conocimientos previos. Sí disposición a practicar entre encuentros: el
              programa está diseñado para que el aprendizaje ocurra fuera del aula tanto como dentro.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <SectionHeading
            eyebrow="Fundamento académico"
            title="¿En qué se basa este programa?"
          />
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-muted-foreground">
              Esta certificación integra conocimientos, herramientas y prácticas provenientes de
              cuatro disciplinas que constituyen la base académica del ISE®:
            </p>
            <ul className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
              {[
                "Coaching Ontológico Profesional",
                "Programación Neurolingüística (PNL)",
                "Mindfulness",
                "Neurociencias",
              ].map((d) => (
                <li key={d} className="bg-background p-6 text-sm leading-snug text-ink">
                  {d}
                </li>
              ))}
            </ul>
            <p className="text-base leading-relaxed text-muted-foreground">
              Su integración permite desarrollar capacidades humanas aplicables a la vida personal,
              profesional y relacional, a través de un enfoque práctico, riguroso y profundamente
              humano.
            </p>
          </div>
        </div>
      </Section>

      <Section>

        <SectionHeading eyebrow="Programa" title="Seis módulos, un recorrido acumulativo." />
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
          {modulos.map((m) => (
            <article key={m.n} className="bg-background p-8">
              <p className="eyebrow">{m.n}</p>
              <h3 className="mt-3 text-xl leading-snug">{m.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.d}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Aprendizajes" title="Qué podrás hacer al finalizar." />
            <ul className="mt-8 space-y-4">
              {aprendizajes.map((a) => (
                <li key={a} className="flex gap-3 border-t border-border pt-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                  <span className="text-sm leading-relaxed text-muted-foreground">{a}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-sm bg-secondary p-10">
            <h3 className="text-2xl">Metodología y evaluación</h3>
            <dl className="mt-8 space-y-6">
              {[
                ["Formato", "Encuentros en vivo en línea con material de estudio asincrónico."],
                ["Práctica", "Bitácora de práctica semanal con retroalimentación docente."],
                ["Evaluación", "Se evalúa la incorporación sostenida, no la memorización."],
                ["Acreditación", "Certificación I del Sistema ISE®, computable para el Diploma."],
              ].map(([k, v]) => (
                <div key={k} className="border-t border-border pt-4">
                  <dt className="text-xs uppercase tracking-[0.14em] text-primary">{k}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
            <Link
              to="/contacto"
              className="mt-8 inline-flex rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Solicitar información
            </Link>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Comienza por los fundamentos"
        text="La Certificación I es el punto de partida del recorrido y también una formación completa en sí misma."
      />
    </>
  );
}
