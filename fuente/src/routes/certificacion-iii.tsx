import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/primitives";

export const Route = createFileRoute("/certificacion-iii")({
  head: () => ({
    meta: [
      { title: "Certificación III — Liderazgo Humano, Cambio e Impacto | ISE®" },
      {
        name: "description",
        content:
          "Tercera certificación del Sistema ISE®, próximamente: acompañar procesos de cambio en personas, equipos y comunidades.",
      },
      {
        property: "og:title",
        content: "Certificación III — Liderazgo Humano, Cambio e Impacto | ISE®",
      },
      {
        property: "og:description",
        content:
          "Etapa final del recorrido formativo de ISE®. Ética, método y responsabilidad al acompañar a otros.",
      },
    ],
  }),
  component: CertIII,
});

const ejes = [
  {
    t: "Procesos de cambio",
    d: "Qué sabemos hoy sobre cómo cambian las personas y las organizaciones, y qué condiciones lo hacen posible.",
  },
  {
    t: "Acompañamiento",
    d: "Cómo sostener el proceso de otro sin dirigirlo, con encuadre claro y límites profesionales.",
  },
  {
    t: "Liderazgo humano",
    d: "Ejercer influencia desde la coherencia, el cuidado y la responsabilidad por las consecuencias.",
  },
  {
    t: "Equipos y cultura",
    d: "Conversaciones, acuerdos y prácticas que configuran la cultura de un grupo humano.",
  },
  {
    t: "Ética profesional",
    d: "Alcances y límites de la intervención. Cuándo derivar y cómo evitar el daño por exceso de confianza.",
  },
  {
    t: "Proyecto de impacto",
    d: "Diseño y defensa de una intervención real en un contexto propio, con seguimiento docente.",
  },
];

function CertIII() {
  return (
    <>
      <PageHero
        eyebrow="Certificación III · Próximamente"
        title="Liderazgo Humano, Cambio e Impacto"
        lede="La etapa final del recorrido está dedicada a acompañar a otros: personas, equipos y comunidades. Requiere madurez metodológica y una ética explícita sobre los límites de toda intervención."
        meta={["Programa en desarrollo", "Requiere Certificación I y II", "Conduce al Diploma"]}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <SectionHeading
            eyebrow="Enfoque"
            title="Influir sobre otros exige método y responsabilidad."
          />
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Acompañar procesos humanos no es una habilidad intuitiva: requiere formación, encuadre
              y consciencia de los propios sesgos.
            </p>
            <p>
              Esta certificación integra lo trabajado en las etapas anteriores y lo orienta hacia el
              impacto: qué cambia en el entorno de una persona cuando su forma de liderar se vuelve
              coherente.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading eyebrow="Ejes previstos" title="Contenidos en construcción." />
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {ejes.map((e) => (
            <article key={e.t} className="bg-background p-8">
              <h3 className="text-lg leading-snug">{e.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.d}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Al completar esta certificación se obtiene el Diploma en Desarrollo Humano Integral.
        </p>
      </Section>

      <section className="bg-ink py-20 text-ink-foreground">
        <div className="container-ise grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-end">
          <div className="max-w-2xl">
            <h2 className="text-3xl text-ink-foreground md:text-[2.4rem]">
              El recorrido comienza antes
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-foreground/70">
              Para llegar a esta etapa es necesario haber completado las Certificaciones I y II.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              to="/diplomado"
              className="rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Ver el Diploma
            </Link>
            <Link
              to="/contacto"
              className="rounded-sm border border-ink-foreground/25 px-6 py-3 text-sm text-ink-foreground transition-colors hover:border-ink-foreground/60"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
