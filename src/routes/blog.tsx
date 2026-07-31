import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/site/primitives";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Ideas y evidencia | ISE®" },
      {
        name: "description",
        content:
          "Artículos sobre desarrollo humano, neurociencias, aprendizaje y coherencia personal, escritos con rigor y claridad.",
      },
      { property: "og:title", content: "Blog — Ideas y evidencia | ISE®" },
      {
        property: "og:description",
        content:
          "Reflexiones y divulgación rigurosa del Instituto del Ser en Expansión sobre el funcionamiento humano.",
      },
    ],
  }),
  component: Blog,
});

const destacado = {
  cat: "Ciencias del aprendizaje",
  t: "Por qué comprender algo no alcanza para cambiarlo",
  d: "La distancia entre entender una idea y sostener una conducta nueva es el problema central de toda formación en desarrollo humano. Revisamos qué muestra la investigación sobre esa brecha y qué condiciones permiten cerrarla.",
  fecha: "12 min de lectura",
};

const articulos = [
  {
    cat: "Neurociencias",
    t: "Atención: el recurso que ninguna técnica reemplaza",
    d: "Qué sabemos sobre los límites atencionales y cómo eso condiciona cualquier proceso de aprendizaje.",
    fecha: "8 min",
  },
  {
    cat: "Programación Neurolingüística",
    t: "Emociones difíciles no son emociones equivocadas",
    d: "Sobre la función adaptativa del miedo, la culpa y el enojo, y el error de intentar suprimirlas.",
    fecha: "7 min",
  },
  {
    cat: "Filosofía práctica",
    t: "Coherencia no es rigidez",
    d: "Distinguir entre sostener valores y sostener posiciones. Una diferencia que cambia relaciones.",
    fecha: "6 min",
  },
  {
    cat: "Sistema ISE®",
    t: "Evidencia, modelo y herramienta: tres cosas distintas",
    d: "Por qué la confusión entre estas categorías es la principal fuente de promesas exageradas.",
    fecha: "9 min",
  },
  {
    cat: "Liderazgo",
    t: "Liderarse antes de liderar",
    d: "La regulación personal como condición previa a cualquier forma de influencia sobre otros.",
    fecha: "7 min",
  },
  {
    cat: "Mindfulness",
    t: "Qué puede y qué no puede la práctica contemplativa",
    d: "Una lectura honesta de la evidencia disponible, sin entusiasmo ni descalificación.",
    fecha: "10 min",
  },
];

function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Publicaciones"
        title="Ideas, evidencia y práctica"
        lede="Escribimos para pensar mejor, no para persuadir. Textos breves y fundamentados sobre el funcionamiento humano y el aprendizaje que transforma."
      />

      <Section>
        <article className="grid gap-10 rounded-sm border border-border p-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <span className="eyebrow">{destacado.cat}</span>
            <h2 className="mt-4 max-w-2xl text-3xl leading-tight md:text-[2.4rem]">
              {destacado.t}
            </h2>
            <p className="mt-5 max-w-2xl lede">{destacado.d}</p>
          </div>
          <div className="lg:justify-self-end lg:text-right">
            <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
              {destacado.fecha}
            </p>
            <Link to="/contacto" className="mt-4 inline-flex text-sm text-primary">
              Leer artículo →
            </Link>
          </div>
        </article>
      </Section>

      <Section tone="muted" className="pt-0">
        <SectionHeading eyebrow="Últimos artículos" title="Publicaciones recientes." />
        <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {articulos.map((a) => (
            <article key={a.t} className="flex flex-col border-t border-border pt-6">
              <div className="flex items-center justify-between gap-3">
                <span className="eyebrow">{a.cat}</span>
                <span className="shrink-0 text-xs text-muted-foreground">{a.fecha}</span>
              </div>
              <h3 className="mt-4 text-xl leading-snug">{a.t}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{a.d}</p>
              <Link to="/contacto" className="mt-5 text-sm text-primary">
                Leer →
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Recibe nuestras publicaciones"
        text="Enviamos textos ocasionales, sin promociones ni recordatorios de venta."
      />
    </>
  );
}
