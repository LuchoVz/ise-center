import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown } from "lucide-react";
import studyImg from "@/assets/study.jpg";
import { CtaBand, PageHero, Section, SectionHeading, StatusTag } from "@/components/site/primitives";

export const Route = createFileRoute("/desarrollo-humano-integral")({
  head: () => ({
    meta: [
      { title: "Desarrollo Humano Integral — Sistema ISE®" },
      {
        name: "description",
        content:
          "La secuencia de aprendizaje del Sistema ISE®: comprender, experimentar, practicar, integrar y vivir.",
      },
      { property: "og:title", content: "Desarrollo Humano Integral — Sistema ISE®" },
      {
        property: "og:description",
        content:
          "Un modelo de aprendizaje en seis etapas y un recorrido formativo de tres certificaciones hacia el Diploma.",
      },
    ],
  }),
  component: DHI,
});

const etapas = [
  {
    n: "01",
    t: "Comprender",
    d: "Acceder a conocimiento preciso y verificable sobre el funcionamiento humano: atención, emoción, memoria, lenguaje y decisión, y relacionarlo con la experiencia propia.",
  },
  {
    n: "02",
    t: "Experimentar",
    d: "Poner lo comprendido a prueba en la vivencia guiada, en un espacio seguro y con acompañamiento docente.",
  },
  {
    n: "03",
    t: "Practicar",
    d: "Repetir de forma deliberada en contextos reales, con seguimiento, registro y retroalimentación.",
  },
  {
    n: "04",
    t: "Integrar",
    d: "Sostener la práctica hasta que la nueva capacidad queda disponible sin esfuerzo consciente.",
  },
  {
    n: "05",
    t: "Vivir",
    d: "Expresar lo aprendido de manera estable en decisiones, vínculos y proyectos: el conocimiento se vuelve transformación cuando forma parte de la vida cotidiana.",
  },
];

const certificaciones = [
  {
    to: "/certificacion-i" as const,
    n: "Certificación I",
    t: "Construyendo una Vida con Sentido",
    s: "Disponible",
    d: "Fundamentos del modelo, autoconocimiento, gestión emocional, decisiones y propósito.",
  },
  {
    to: "/certificacion-ii" as const,
    n: "Certificación II",
    t: "Comunicación, Relaciones y Liderazgo Personal",
    s: "Próximamente",
    d: "Lenguaje, escucha, conversaciones difíciles, límites y liderazgo de sí mismo.",
  },
  {
    to: "/certificacion-iii" as const,
    n: "Certificación III",
    t: "Liderazgo Humano, Cambio e Impacto",
    s: "Próximamente",
    d: "Procesos de cambio, acompañamiento de otros, ética profesional e impacto colectivo.",
  },
];

function DHI() {
  return (
    <>
      <PageHero
        eyebrow="Modelo educativo"
        title="Desarrollo Humano Integral"
        lede="Un enfoque educativo que entiende a la persona como una totalidad: pensamiento, emoción, cuerpo, lenguaje, vínculos y sentido. No se trata de acumular contenidos, sino de transformar la manera de vivir."
        meta={["Secuencia de aprendizaje en 5 etapas", "7 disciplinas integradas", "3 certificaciones", "Diploma en 9 meses"]}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Punto de partida"
              title="Aprender es cambiar la forma en que interpretamos y actuamos."
              lede="Gran parte de lo que llamamos formación se agota en la comprensión intelectual. El Sistema ISE® asume que el aprendizaje solo es real cuando modifica de manera estable la conducta, el vínculo y la decisión."
            />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Por eso el modelo distingue con claridad la evidencia científica de los modelos
              teóricos y de las herramientas de aplicación: cada uno cumple una función distinta y
              confundirlos empobrece el aprendizaje.
            </p>
          </div>
          <img
            src={studyImg}
            alt="Persona tomando notas de estudio junto a un ordenador con luz natural"
            width={1408}
            height={1008}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-sm object-cover"
          />
        </div>
      </Section>

      {/* Modelo de aprendizaje */}
      <Section tone="soft">
        <SectionHeading
          eyebrow="Modelo de aprendizaje del Sistema ISE®"
          title="Cinco etapas encadenadas, sin atajos."
          lede="Comprender, experimentar, practicar, integrar y vivir. Ninguna etapa puede saltarse: cada una prepara las condiciones de la siguiente."
        />
        <ol className="mx-auto mt-14 max-w-3xl">
          {etapas.map((e, i) => (
            <li key={e.t}>
              <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-6 rounded-sm border border-border bg-background p-7">
                <span className="font-display text-2xl text-primary">{e.n}</span>
                <div className="min-w-0">
                  <h3 className="text-xl">{e.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.d}</p>
                </div>
              </div>
              {i < etapas.length - 1 && (
                <div className="flex justify-center py-3" aria-hidden>
                  <ArrowDown className="h-5 w-5 text-primary/50" />
                </div>
              )}
            </li>
          ))}
        </ol>
      </Section>

      {/* Recorrido */}
      <Section>
        <SectionHeading
          eyebrow="Recorrido formativo"
          title="De los fundamentos personales al impacto en otros."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {certificaciones.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="flex flex-col rounded-sm border border-border p-8 transition-colors hover:border-primary/50"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="eyebrow">{c.n}</span>
                <StatusTag status={c.s} />
              </div>
              <h3 className="mt-5 text-xl leading-snug">{c.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </Link>
          ))}
        </div>

        <div className="mt-8 grid gap-8 rounded-sm bg-secondary p-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <span className="eyebrow">Titulación final</span>
            <h3 className="mt-4 text-2xl">Diploma en Desarrollo Humano Integral</h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Se otorga únicamente al completar las tres certificaciones, un recorrido educativo de nueve meses. Acredita el trayecto completo del
              Sistema ISE®, desde los fundamentos personales hasta el acompañamiento de procesos de
              cambio en otros.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <Link
              to="/diplomado"
              className="inline-flex rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Ver el Diploma
            </Link>
          </div>
        </div>

      </Section>

      {/* Ruta académica */}
      <Section tone="soft">
        <SectionHeading
          eyebrow="Ruta académica"
          title="Un recorrido progresivo hacia la titulación."
          lede="El Diploma en Desarrollo Humano Integral se otorga tras completar satisfactoriamente las tres certificaciones que componen el recorrido académico del ISE®."
        />
        <ol className="mx-auto mt-12 max-w-2xl">
          {[
            { t: "Certificación I", s: "Construyendo una Vida con Sentido" },
            { t: "Certificación II", s: "Comunicación, Relaciones y Liderazgo Personal" },
            { t: "Certificación III", s: "Liderazgo Humano, Cambio e Impacto" },
            { t: "Diploma en Desarrollo Humano Integral", s: "Titulación final del recorrido" },
          ].map((p, i, arr) => (
            <li key={p.t}>
              <div
                className={
                  "rounded-sm border bg-background p-7 text-center " +
                  (i === arr.length - 1 ? "border-primary/40" : "border-border")
                }
              >
                <h3 className="text-xl leading-snug">{p.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.s}</p>
              </div>
              {i < arr.length - 1 && (
                <div className="flex justify-center py-3" aria-hidden>
                  <ArrowDown className="h-5 w-5 text-primary/50" />
                </div>
              )}
            </li>
          ))}
        </ol>
      </Section>


      <CtaBand
        title="¿Quieres saber por dónde empezar?"
        text="Podemos orientarte según tu experiencia previa, tu momento vital y tus objetivos de aprendizaje."
      />
    </>
  );
}
