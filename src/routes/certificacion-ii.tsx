import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbNode, programNode } from "@/lib/structured-data";
import { PageHero, Section, SectionHeading } from "@/components/site/primitives";

export const Route = createFileRoute("/certificacion-ii")({
  head: () => ({
    meta: [
      { title: "Certificación II — Comunicación, Relaciones y Liderazgo Personal | ISE®" },
      {
        name: "description",
        content:
          "Segunda certificación de ISE®, próximamente: lenguaje, escucha, vínculos, límites y liderazgo de sí mismo.",
      },
      {
        property: "og:title",
        content: "Certificación II — Comunicación, Relaciones y Liderazgo Personal | ISE®",
      },
      {
        property: "og:description",
        content:
          "El vínculo como espacio de aprendizaje. Programa en desarrollo dentro del recorrido formativo de ISE®.",
      },
      { property: "og:url", content: "https://ise-integral-path.lovable.app/certificacion-ii" },
    ],
    links: [
      { rel: "canonical", href: "https://ise-integral-path.lovable.app/certificacion-ii" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          programNode({
            path: "/certificacion-ii",
            name: "Certificación II — Comunicación, Relaciones y Liderazgo Personal",
            shortName: "Certificación II",
            description:
              "Segunda certificación de ISE®: lenguaje, escucha, vínculos, límites y liderazgo de sí mismo.",
            credential: "Certificación II en Desarrollo Humano Integral (ISE®)",
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbNode([
            { name: "Inicio", path: "/" },
            { name: "Desarrollo Humano Integral", path: "/desarrollo-humano-integral" },
            { name: "Certificación II", path: "/certificacion-ii" },
          ]),
        ),
      },
    ],
  }),
  component: CertII,
});

const ejes = [
  {
    t: "Lenguaje y realidad compartida",
    d: "Cómo el lenguaje construye acuerdos, expectativas y conflictos. Actos lingüísticos y sus consecuencias relacionales.",
  },
  {
    t: "Escucha y presencia",
    d: "Escuchar más allá de las palabras: interpretación, emocionalidad y contexto del otro.",
  },
  {
    t: "Conversaciones difíciles",
    d: "Pedidos, ofertas, reclamos y disculpas. Sostener el desacuerdo sin dañar el vínculo.",
  },
  {
    t: "Límites y cuidado",
    d: "Distinguir responsabilidad propia y ajena. Cuidar sin absorber, acompañar sin invadir.",
  },
  {
    t: "Vínculos y sistemas",
    d: "Patrones relacionales recurrentes en familia, pareja y equipos de trabajo.",
  },
  {
    t: "Liderazgo personal",
    d: "Liderarse a sí mismo como condición previa a cualquier forma de liderazgo sobre otros.",
  },
];

function CertII() {
  return (
    <>
      <PageHero
        eyebrow="Certificación II · Próximamente"
        title="Comunicación, Relaciones y Liderazgo Personal"
        lede="La segunda certificación del recorrido lleva el trabajo personal al terreno del vínculo: cómo escuchamos, cómo pedimos, cómo sostenemos desacuerdos y cómo nos conducimos frente a otros."
        meta={["Programa en desarrollo", "Requiere Certificación I", "Apertura por anunciar"]}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <SectionHeading
            eyebrow="Enfoque"
            title="El vínculo como espacio privilegiado de aprendizaje."
          />
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              La mayor parte de aquello que aprendemos sobre nosotros mismos aparece en la relación
              con otros. La Certificación II toma esa evidencia como punto de partida.
            </p>
            <p>
              El programa continúa la misma lógica formativa: distinguir con precisión la
              evidencia disponible, los modelos que ayudan a interpretarla y las herramientas que
              permiten aplicarla en conversaciones reales.
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
          Los ejes aquí presentados corresponden al diseño curricular en curso y podrán ajustarse
          antes de la apertura oficial del programa.
        </p>
      </Section>

      <section className="bg-ink py-20 text-ink-foreground">
        <div className="container-ise grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-end">
          <div className="max-w-2xl">
            <h2 className="text-3xl text-ink-foreground md:text-[2.4rem]">
              Recibe aviso cuando se abra la inscripción
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-foreground/70">
              Mientras tanto, puedes comenzar el recorrido con la Certificación I, requisito previo
              para esta etapa.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              to="/contacto"
              className="rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Avísenme
            </Link>
            <Link
              to="/certificacion-i"
              className="rounded-sm border border-ink-foreground/25 px-6 py-3 text-sm text-ink-foreground transition-colors hover:border-ink-foreground/60"
            >
              Ver Certificación I
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
