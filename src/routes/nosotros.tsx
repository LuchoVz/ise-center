import { createFileRoute } from "@tanstack/react-router";
import conversationImg from "@/assets/conversation.jpg";
import directorImg from "@/assets/luciano-vazquez.png.asset.json";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/site/primitives";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — Instituto del Ser en Expansión | ISE®" },
      {
        name: "description",
        content:
          "Quiénes somos, en qué creemos y cómo enseñamos en ISE®, institución educativa de Desarrollo Humano Integral.",
      },
      { property: "og:title", content: "Nosotros — Instituto del Ser en Expansión | ISE®" },
      {
        property: "og:description",
        content:
          "Rigor académico, evidencia científica y calidez humana en la formación en Desarrollo Humano Integral.",
      },
    ],
  }),
  component: Nosotros,
});

const principios = [
  {
    t: "Honestidad intelectual",
    d: "Decimos qué sabemos, qué suponemos y qué desconocemos. La ambigüedad no es un recurso pedagógico.",
  },
  {
    t: "Respeto por el tiempo humano",
    d: "El cambio profundo tiene ritmos propios. No prometemos transformaciones inmediatas.",
  },
  {
    t: "Práctica antes que promesa",
    d: "Cada concepto viene acompañado de una forma concreta de ponerlo a prueba.",
  },
  {
    t: "Cuidado del vínculo educativo",
    d: "Un aula es un espacio de confianza. Sostenerlo es parte del método, no un accesorio.",
  },
];

function Nosotros() {
  return (
    <>
      <PageHero
        eyebrow="La institución"
        title="Instituto del Ser en Expansión"
        lede="ISE® es una institución educativa dedicada al Desarrollo Humano Integral. Trabajamos en la intersección entre la evidencia científica sobre el funcionamiento humano y la experiencia concreta de vivir con mayor consciencia."
        meta={["Educación en línea", "Sistema ISE® propio", "Enfoque basado en evidencia"]}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Origen"
              title="Nacimos de una insatisfacción legítima."
              lede="Entre la divulgación superficial y la investigación inaccesible había un vacío: formación seria, aplicable y humana sobre cómo vivimos."
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                ISE® no es una academia de coaching ni una escuela de PNL. Es una institución
                educativa con un método propio, que integra siete campos de conocimiento y los
                organiza en un recorrido de aprendizaje verificable.
              </p>
              <p>
                Nuestro compromiso es doble: sostener el rigor de lo que enseñamos y sostener la
                calidez de cómo lo enseñamos. Ninguno de los dos se sacrifica por el otro.
              </p>
            </div>
          </div>
          <img
            src={conversationImg}
            alt="Encuentro académico entre dos personas en un espacio con luz natural"
            width={1408}
            height={1008}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-sm object-cover"
          />
        </div>
      </Section>

      <Section tone="soft">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="rounded-sm bg-background p-10">
            <span className="eyebrow">Misión</span>
            <p className="mt-5 font-display text-2xl leading-snug text-ink">
              Desarrollar capacidades humanas para vivir con mayor consciencia, libertad,
              responsabilidad y coherencia.
            </p>
          </div>
          <div className="rounded-sm bg-background p-10">
            <span className="eyebrow">Visión</span>
            <p className="mt-5 font-display text-2xl leading-snug text-ink">
              Ser una referencia internacional en educación rigurosa y humana sobre el desarrollo de
              las personas.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Principios" title="Cómo trabajamos." />
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {principios.map((p) => (
            <div key={p.t} className="border-t border-border pt-6">
              <h3 className="text-xl">{p.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Dirección académica" title="Luciano Manuel Vázquez" />
            <img
              src="https://i.ibb.co/4nD6YcwX/luciano.png"
              alt="Retrato institucional de Luciano Manuel Vázquez, director académico del ISE®"
              width={2048}
              height={2048}
              loading="lazy"
              className="mt-8 aspect-[4/5] w-full max-w-sm rounded-sm object-cover"
            />
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <ul className="space-y-2 text-ink">
              {[
                "Senior Coach Ontológico Profesional",
                "Master Practitioner en Programación Neurolingüística (PNL)",
                "Coach Ejecutivo y Organizacional",
                "Coach Ontológico Deportivo",
              ].map((c) => (
                <li key={c} className="border-t border-border pt-2 text-sm">
                  {c}
                </li>
              ))}
            </ul>
            <p>
              Fundador y director académico del Instituto del Ser en Expansión (ISE®). Dirige y
              forma en programas de certificación profesional en Desarrollo Humano, Coaching
              Ontológico, Mindfulness y Programación Neurolingüística.
            </p>
            <p>
              Más de 6 años dedicados a la formación, la facilitación y el desarrollo personal.
              Su especialidad es el diseño de experiencias de aprendizaje transformadoras que
              integran ciencia, desarrollo humano y aplicación práctica.
            </p>
            <p>
              Su tarea en el ISE® es sostener la coherencia del Sistema ISE®: el diseño curricular
              del recorrido, los estándares de evidencia con los que se selecciona cada contenido y
              la formación del cuerpo docente.
            </p>
          </div>
        </div>
      </Section>


      <Section tone="muted">
        <SectionHeading
          eyebrow="Equipo docente"
          title="Formación interdisciplinaria."
          lede="El cuerpo docente de ISE® reúne profesionales de las neurociencias, las ciencias del aprendizaje, la programación neurolingüística (PNL), el coaching ontológico, el mindfulness, el liderazgo y la filosofía práctica, con experiencia en formación de adultos."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
          {[
            ["Dirección académica", "Diseño curricular, coherencia metodológica y estándares de evidencia."],
            ["Docencia", "Conducción de encuentros en vivo, práctica guiada y retroalimentación."],
            ["Acompañamiento", "Seguimiento de bitácoras, tutorías y soporte durante el recorrido."],
          ].map(([t, d]) => (
            <div key={t} className="bg-background p-8">
              <h3 className="text-lg">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        title="¿Quieres conocernos mejor?"
        text="Escríbenos y conversemos sobre la institución, el método y el recorrido formativo."
      />
    </>
  );
}
