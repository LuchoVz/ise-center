import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbNode, programNode } from "@/lib/structured-data";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/site/primitives";

export const Route = createFileRoute("/certificacion-i")({
  head: () => ({
    meta: [
      { title: "Certificación I — Construyendo una Vida con Sentido | ISE®" },
      {
        name: "description",
        content:
          "Primera certificación de ISE®: autoconocimiento, emociones, decisiones y propósito, con base en evidencia científica.",
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
      { property: "og:url", content: "https://ise-integral-path.lovable.app/certificacion-i" },
    ],
    links: [
      { rel: "canonical", href: "https://ise-integral-path.lovable.app/certificacion-i" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          programNode({
            path: "/certificacion-i",
            name: "Certificación I — Construyendo una Vida con Sentido",
            shortName: "Certificación I",
            description:
              "Primera certificación de ISE®: autoconocimiento, emociones, decisiones y propósito, con base en evidencia científica.",
            credential: "Certificación I en Desarrollo Humano Integral (ISE®)",
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbNode([
            { name: "Inicio", path: "/" },
            { name: "Desarrollo Humano Integral", path: "/desarrollo-humano-integral" },
            { name: "Certificación I", path: "/certificacion-i" },
          ]),
        ),
      },
    ],
  }),
  component: CertI,
});

const modulos = [
  {
    n: "Módulo 1",
    t: "Construyendo una Vida con Sentido",
    items: [
      "Introducción al Desarrollo Humano Integral",
      "¿Qué significa evolucionar?",
      "El punto de partida de cada persona",
      "Las capacidades humanas como base del desarrollo",
      "Coaching Ontológico Profesional, PNL, Mindfulness y Neurociencias como base académica del programa",
    ],
  },
  {
    n: "Módulo 2",
    t: "El Observador que Somos",
    items: [
      "Cómo construimos la realidad",
      "Creencias",
      "Modelos mentales",
      "Paradigmas",
      "Sesgos cognitivos",
      "Ampliación de la consciencia",
    ],
  },
  {
    n: "Módulo 3",
    t: "Emociones y Presencia",
    items: [
      "Consciencia emocional",
      "Regulación emocional",
      "Atención",
      "Mindfulness aplicado",
      "Bienestar",
    ],
  },
  {
    n: "Módulo 4",
    t: "Lenguaje y Relaciones",
    items: [
      "El lenguaje como creador de realidad",
      "Conversaciones poderosas",
      "Responsabilidad",
      "Límites",
      "Escucha",
      "Compromisos",
    ],
  },
  {
    n: "Módulo 5",
    t: "Aprendizaje y Cambio Sostenible",
    items: [
      "Neurociencias del aprendizaje",
      "Hábitos",
      "Práctica",
      "Desarrollo de habilidades",
      "Cambio sostenible",
    ],
  },
  {
    n: "Módulo 6",
    t: "Proyecto de Vida",
    items: [
      "Valores",
      "Propósito",
      "Coherencia",
      "Diseño de futuro",
      "Plan de evolución personal",
    ],
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
        eyebrow="Certificación I"
        title="Construyendo una Vida con Sentido"
        lede="Primer nivel del Diploma en Desarrollo Humano Integral."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <SectionHeading
            eyebrow="Fundamento académico"
            title="¿En qué se basa esta formación?"
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

      <Section tone="soft">
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

      <Section>

        <SectionHeading eyebrow="Programa" title="Seis módulos, un recorrido acumulativo." />
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
          {modulos.map((m) => (
            <article key={m.n} className="bg-background p-8">
              <p className="eyebrow">{m.n}</p>
              <h3 className="mt-3 text-xl leading-snug">{m.t}</h3>
              <ul className="mt-4 space-y-2">
                {m.items.map((i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden />
                    <span className="text-sm leading-relaxed text-muted-foreground">{i}</span>
                  </li>
                ))}
              </ul>
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
                ["Acreditación", "Certificación I de ISE®, primer nivel del Diploma en Desarrollo Humano Integral."],
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
