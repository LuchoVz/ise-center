import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand, PageHero, Section, SectionHeading, StatusTag } from "@/components/site/primitives";

export const Route = createFileRoute("/diplomado")({
  head: () => ({
    meta: [
      { title: "Diploma en Desarrollo Humano Integral | ISE®" },
      {
        name: "description",
        content:
          "El Diploma en Desarrollo Humano Integral de ISE® se obtiene al completar las tres certificaciones. No es un programa independiente.",
      },
      { property: "og:title", content: "Diploma en Desarrollo Humano Integral | ISE®" },
      {
        property: "og:description",
        content:
          "Titulación que acredita el recorrido completo de ISE®: fundamentos, vínculos y acompañamiento del cambio.",
      },
    ],
  }),
  component: Diploma,
});

const etapas = [
  {
    to: "/certificacion-i" as const,
    n: "I",
    t: "Construyendo una Vida con Sentido",
    s: "Disponible",
  },
  {
    to: "/certificacion-ii" as const,
    n: "II",
    t: "Comunicación, Relaciones y Liderazgo Personal",
    s: "Próximamente",
  },
  {
    to: "/certificacion-iii" as const,
    n: "III",
    t: "Liderazgo Humano, Cambio e Impacto",
    s: "Próximamente",
  },
];

function Diploma() {
  return (
    <>
      <PageHero
        eyebrow="Titulación"
        title="Diploma en Desarrollo Humano Integral"
        lede="El Diploma no es un programa independiente: se otorga únicamente tras completar satisfactoriamente las tres certificaciones, un recorrido educativo de nueve meses."
        meta={["3 certificaciones", "Recorrido de 9 meses", "Trabajo final integrador"]}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <SectionHeading
            eyebrow="Qué acredita"
            title="Un recorrido completo, no una suma de cursos."
          />
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              El Diploma certifica que la persona ha recorrido la secuencia de aprendizaje del
              completa —comprender, experimentar, practicar, integrar y vivir— en sus tres
              niveles de aplicación: sobre sí misma, sobre sus vínculos y sobre los procesos de
              cambio de otros.
            </p>
            <p>
              No se otorga por acumulación de horas, sino por evidencia de incorporación sostenida
              en el tiempo, verificada a lo largo de las tres certificaciones y en un trabajo final
              integrador.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading eyebrow="Estructura" title="Tres etapas hacia la titulación." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {etapas.map((e) => (
            <Link
              key={e.to}
              to={e.to}
              className="rounded-sm border border-border bg-background p-8 transition-colors hover:border-primary/50"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-display text-3xl text-primary">{e.n}</span>
                <StatusTag status={e.s} />
              </div>
              <h3 className="mt-6 text-xl leading-snug">{e.t}</h3>
            </Link>
          ))}
        </div>
        <div className="mt-8 rounded-sm border border-primary/30 bg-background p-10">
          <h3 className="text-2xl">Trabajo final integrador</h3>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Al cierre del recorrido, cada participante presenta un trabajo que articula fundamentos,
            práctica personal y una intervención real en su contexto. Es el momento en que el
            aprendizaje se vuelve verificable ante otros.
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Aspectos prácticos del Diploma."
        />
        <dl className="mt-12 grid gap-10 md:grid-cols-2">
          {[
            [
              "¿Puedo cursar solo una certificación?",
              "Sí. Cada certificación tiene valor propio y puede cursarse de forma independiente. El Diploma en Desarrollo Humano Integral se otorga únicamente al completar las tres, un recorrido de nueve meses.",
            ],
            [
              "¿Hay un plazo máximo para completarlas?",
              "El recorrido está pensado para realizarse de manera progresiva, respetando el tiempo de incorporación de cada participante.",
            ],
            [
              "¿Los cursos asincrónicos computan para el Diploma?",
              "No. Son formación complementaria e independiente del recorrido principal.",
            ],
            [
              "¿Se requiere formación previa?",
              "No para la Certificación I. Las siguientes etapas requieren haber completado la anterior.",
            ],
          ].map(([q, a]) => (
            <div key={q} className="border-t border-border pt-6">
              <dt className="text-lg leading-snug text-ink">{q}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">{a}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <CtaBand
        title="Da el primer paso del recorrido"
        text="La Certificación I está disponible y es el punto de entrada al Diploma."
      />
    </>
  );
}
