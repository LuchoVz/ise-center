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
    t: "Comprenderme",
    desc: "Esta primera etapa invita a comprender cómo se aprende, cómo se forman las creencias, cómo influyen las emociones en la experiencia y cómo la atención moldea la manera de percibir e interpretar la realidad. El propósito de este módulo es desarrollar una mayor conciencia de los procesos internos que influyen en la forma en que cada persona vive y aprende.",
    items: [
      "¿Qué creemos acerca de aprender?",
      "El origen de nuestras creencias",
      "Neurociencia de las Emociones",
      "La Atención",
    ],
  },
  {
    n: "Módulo 2",
    t: "Transformarme",
    desc: "Esta segunda etapa se centra en la posibilidad del cambio. Se observan los hábitos, se explora la aceptación como punto de partida para la transformación, se desarrolla la capacidad de contemplación y se aprende a tomar decisiones más conscientes. El propósito de este módulo es pasar de la observación a la acción intencional.",
    items: [
      "Hábitos",
      "Aceptar para Avanzar",
      "Contemplación",
      "Tomar decisiones conscientes",
    ],
  },
  {
    n: "Módulo 3",
    t: "Proyectarme",
    desc: "Esta etapa final integra los aprendizajes desarrollados a lo largo del recorrido. Se exploran la resiliencia, el propósito y el sentido, las relaciones humanas saludables y la coherencia entre lo que se piensa, siente, dice y hace. El propósito de este módulo es integrar el aprendizaje en una forma de vivir con mayor coherencia y dirección.",
    items: [
      "Resiliencia",
      "Propósito y sentido",
      "Relaciones Humanas Saludables",
      "Vivir con Coherencia",
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

const temario = [
  "Qué creemos acerca de aprender",
  "El origen de nuestras creencias",
  "Neurociencia de las Emociones",
  "La Atención",
  "Hábitos",
  "Aceptar para Avanzar",
  "Contemplación",
  "Tomar decisiones conscientes",
  "Resiliencia",
  "Propósito y sentido",
  "Relaciones Humanas Saludables",
  "Vivir con Coherencia",
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
        <SectionHeading
          eyebrow="Programa"
          title="Tres módulos, un recorrido de evolución."
          lede="Cada persona evoluciona desde el punto de partida en el que se encuentra. El recorrido avanza de Comprenderme → Transformarme → Proyectarme, como una sola trayectoria continua."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
          {modulos.map((m) => (
            <article key={m.n} className="bg-background p-8">
              <p className="eyebrow">{m.n}</p>
              <h3 className="mt-3 text-xl leading-snug">{m.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
              <ul className="mt-6 space-y-2 border-t border-border pt-6">
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

      <Section tone="muted">
        <SectionHeading
          eyebrow="Temario oficial"
          title="Programa de estudios: 12 clases."
          lede="El recorrido completo se desarrolla en doce clases consecutivas, distribuidas en los tres módulos del programa."
        />
        <ol className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {temario.map((t, i) => (
            <li key={t} className="flex gap-4 bg-background p-6">
              <span className="font-display text-sm text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  Clase {i + 1}
                </p>
                <p className="mt-1 text-sm leading-snug text-ink">{t}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <CtaBand
        title="Comienza por los fundamentos"
        text="La Certificación I es el punto de partida del recorrido y también una formación completa en sí misma."
      />
    </>
  );
}
