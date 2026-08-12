import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Compass,
  HeartHandshake,
  Layers,
  Microscope,
  Repeat,
  Sparkles,
} from "lucide-react";
import heroImg from "@/assets/hero-ise.jpg";
import conversationImg from "@/assets/conversation.jpg";
import { CtaBand, Section, SectionHeading, StatusTag } from "@/components/site/primitives";
import {
  ORG_ID,
  SITE_URL,
  WEBSITE_ID,
  breadcrumbNode,
  organizationNode,
} from "@/lib/structured-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ISE® — Desarrollo Humano Integral basado en evidencia" },
      {
        name: "description",
        content:
          "Institución educativa especializada en Desarrollo Humano Integral basado en evidencia. Cada persona evoluciona desde el punto en el que está.",
      },
      { property: "og:title", content: "ISE® — Desarrollo Humano Integral basado en evidencia" },
      {
        property: "og:description",
        content:
          "Institución educativa especializada en Desarrollo Humano Integral basado en evidencia. Cada persona evoluciona desde el punto en el que está.",
      },
      { property: "og:url", content: "https://ise-integral-path.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://ise-integral-path.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          ...organizationNode,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": WEBSITE_ID,
          name: "ISE® — Instituto del Ser en Expansión",
          url: `${SITE_URL}/`,
          inLanguage: "es",
          publisher: { "@id": ORG_ID },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbNode([{ name: "Inicio", path: "/" }])),
      },
    ],
  }),
  component: Inicio,
});

const pilares = [
  {
    icon: Brain,
    name: "Consciencia",
    text: "Observar con precisión lo que ocurre en nuestro pensar, sentir y actuar antes de intentar cambiarlo.",
  },
  {
    icon: Compass,
    name: "Elección",
    text: "Distinguir entre reacción automática y decisión deliberada, ampliando el margen real de libertad.",
  },
  {
    icon: Repeat,
    name: "Incorporación",
    text: "Convertir lo comprendido en práctica sostenida hasta que se vuelve una capacidad disponible.",
  },
  {
    icon: HeartHandshake,
    name: "Coherencia",
    text: "Alinear lo que pensamos, decimos y hacemos con aquello que consideramos valioso.",
  },
];

const disciplinas = [
  "Neurociencias",
  "Ciencias del aprendizaje",
  "Programación Neurolingüística (PNL)",
  "Coaching ontológico",
  "Mindfulness",
  "Liderazgo",
  "Filosofía práctica",
];

const secuencia = [
  {
    t: "Comprender",
    d: "Acceder a conocimiento preciso y verificable sobre el funcionamiento humano.",
  },
  {
    t: "Experimentar",
    d: "Poner ese conocimiento a prueba en la propia experiencia, con acompañamiento docente.",
  },
  {
    t: "Practicar",
    d: "Repetir de forma deliberada en contextos reales, con registro y retroalimentación.",
  },
  {
    t: "Integrar",
    d: "Sostener la práctica hasta que se vuelve una capacidad disponible sin esfuerzo consciente.",
  },
  {
    t: "Vivir",
    d: "Expresar lo aprendido de manera estable en decisiones, vínculos y proyectos.",
  },
];

const recorrido = [
  {
    to: "/certificacion-i" as const,
    n: "I",
    title: "Construyendo una Vida con Sentido",
    status: "Disponible",
    text: "Fundamentos del Desarrollo Humano Integral: autoconocimiento, emociones, decisiones y propósito.",
  },
  {
    to: "/certificacion-ii" as const,
    n: "II",
    title: "Comunicación, Relaciones y Liderazgo Personal",
    status: "Próximamente",
    text: "El vínculo como espacio de aprendizaje: escucha, conversaciones difíciles y liderazgo de sí mismo.",
  },
  {
    to: "/certificacion-iii" as const,
    n: "III",
    title: "Liderazgo Humano, Cambio e Impacto",
    status: "Próximamente",
    text: "Acompañar procesos de cambio en personas, equipos y comunidades con responsabilidad y método.",
  },
];

const beneficios = [
  {
    title: "Mayor claridad en las decisiones",
    text: "Herramientas para distinguir hechos, interpretaciones y emociones antes de decidir.",
  },
  {
    title: "Regulación emocional sostenible",
    text: "Prácticas validadas para responder con serenidad en contextos de exigencia.",
  },
  {
    title: "Relaciones más honestas",
    text: "Conversaciones con mayor escucha, límites claros y menos desgaste innecesario.",
  },
  {
    title: "Aprendizaje que permanece",
    text: "Un diseño formativo basado en cómo el cerebro humano realmente incorpora nuevas conductas.",
  },
  {
    title: "Sentido y dirección",
    text: "Un marco para revisar prioridades, valores y proyectos de vida con criterio propio.",
  },
  {
    title: "Capacidad de acompañar a otros",
    text: "Bases éticas y metodológicas para sostener procesos de desarrollo ajenos.",
  },
];

const diferenciales = [
  {
    icon: Microscope,
    title: "Evidencia diferenciada",
    text: "Distinguimos explícitamente qué proviene de la evidencia científica, qué es modelo teórico y qué es herramienta de aplicación. El currículo se actualiza de forma continua.",
  },
  {
    icon: Layers,
    title: "Una propuesta educativa propia",
    text: "Nuestra propuesta educativa articula siete campos de conocimiento en un recorrido coherente que integra saber, experiencia, reflexión, práctica y acción consciente.",
  },
  {
    icon: BookOpen,
    title: "Rigor académico y calidez",
    text: "Contenidos exigentes, lenguaje claro, facilitadores profesionales y una comunidad de aprendizaje que continúa después del programa.",
  },
  {
    icon: Sparkles,
    title: "Formación para la vida real",
    text: "Cada módulo se evalúa por lo que la persona logra incorporar y sostener, no por lo que memoriza.",
  },
];

const testimonios = [
  {
    quote:
      "Llegué buscando herramientas y encontré un marco para entender por qué actuaba como actuaba. Fue un cambio de mirada, no un curso más.",
    name: "María Fernanda R.",
    role: "Psicopedagoga · Certificación I",
  },
  {
    quote:
      "La honestidad intelectual del programa me sorprendió: siempre se aclara qué está respaldado por evidencia y qué es una interpretación.",
    name: "Andrés M.",
    role: "Ingeniero y líder de equipo",
  },
  {
    quote:
      "Lo que más valoro es que la práctica es parte del diseño. No terminé con apuntes, terminé con hábitos nuevos.",
    name: "Lucía T.",
    role: "Terapeuta ocupacional",
  },
];

const estadisticas = [
  { n: "7", label: "Campos de conocimiento integrados" },
  { n: "5", label: "Etapas de la secuencia de aprendizaje" },
  { n: "9", label: "Meses del recorrido completo" },
  { n: "3", label: "Certificaciones hacia el Diploma" },
];

function Inicio() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="container-ise grid gap-14 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">Instituto del Ser en Expansión</p>
            <p className="mt-5 font-display text-sm uppercase tracking-[0.28em] text-primary">
              Evolución
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl leading-[1.06] md:text-6xl">
              Cada persona evoluciona desde el punto en el que está.
            </h1>
            <p className="mt-7 max-w-xl lede">
              Desarrolla las capacidades que te permiten vivir con mayor consciencia, libertad,
              responsabilidad y coherencia.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Educación en Desarrollo Humano Integral basada en evidencia científica, con práctica
              guiada y acompañamiento docente.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/certificacion-i"
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Conocer la Certificación I <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                to="/desarrollo-humano-integral"
                className="inline-flex items-center rounded-sm border border-border px-6 py-3 text-sm text-ink transition-colors hover:border-primary hover:text-primary"
              >
                Explorar el Desarrollo Humano Integral
              </Link>
            </div>
            <p className="mt-8 max-w-md text-xs leading-relaxed text-muted-foreground">
              Educación basada en evidencia, actualización curricular permanente y facilitadores
              profesionales. Una institución educativa con criterio científico y trato humano.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://i.ibb.co/MDqr6btL/1.jpg"
              alt="Grupo de personas adultas participando de una sesión formativa con luz natural"
              width={1920}
              height={1200}
              className="aspect-[4/3] w-full rounded-sm object-cover"
            />
            <div className="absolute -bottom-6 left-6 hidden max-w-xs rounded-sm border border-border bg-background p-5 shadow-xl shadow-ink/5 lg:block">
              <p className="font-display text-sm leading-relaxed text-ink">
                “El conocimiento que no se practica no transforma. Nuestra formación está diseñada para
                que sí lo haga.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Propuesta de valor */}
      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <SectionHeading
            eyebrow="Propuesta de valor"
            title="Formación seria sobre lo más importante: cómo vivimos."
          />
          <div className="grid gap-8 sm:grid-cols-2">
            <p className="text-base leading-relaxed text-muted-foreground">
              Existe abundante información sobre desarrollo personal y muy poca formación rigurosa.
              ISE® nació para ocupar ese espacio: una propuesta educativa que trata el desarrollo
              humano con la seriedad de una disciplina y la cercanía de un acompañamiento.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Cada contenido se presenta con su origen y su alcance. Nada se afirma más allá de lo
              que la evidencia permite, y nada se enseña sin una vía concreta de aplicación en la
              vida cotidiana.
            </p>
          </div>
        </div>
      </Section>

      {/* Qué es ISE */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <img
            src={conversationImg}
            alt="Dos personas conversando en un espacio académico iluminado con luz natural"
            width={1408}
            height={1008}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-sm object-cover"
          />
          <div>
            <SectionHeading
              eyebrow="Qué es ISE®"
              title="Una institución educativa, no una moda formativa."
              lede="El Instituto del Ser en Expansión forma a personas que desean comprender el funcionamiento humano y aplicarlo con responsabilidad en su vida y en su ejercicio profesional."
            />
            <ul className="mt-8 space-y-4">
              {[
                "Programas estructurados en certificaciones progresivas y acumulativas.",
                "Docencia que combina fundamentación teórica, práctica guiada y seguimiento.",
                "Una ética explícita: claridad sobre lo que la formación puede y no puede ofrecer.",
              ].map((t) => (
                <li key={t} className="flex gap-3 border-t border-border pt-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                  <span className="text-sm leading-relaxed text-muted-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Propuesta educativa */}
      <Section tone="soft">
        <SectionHeading
          eyebrow="Propuesta educativa"
          title="Siete campos de conocimiento, una sola secuencia de aprendizaje."
          lede="Integramos siete campos de conocimiento que habitualmente se estudian por separado y los organizamos en una única secuencia de aprendizaje que va de la comprensión a la vida cotidiana."
        />
        <ul className="mt-10 flex flex-wrap gap-2.5">
          {disciplinas.map((d) => (
            <li
              key={d}
              className="rounded-full border border-primary/25 bg-background px-4 py-2 text-sm text-ink"
            >
              {d}
            </li>
          ))}
        </ul>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {secuencia.map((s, i) => (
            <div key={s.t} className="bg-background p-7">
              <span className="font-display text-2xl text-border">0{i + 1}</span>
              <h3 className="mt-4 text-lg">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          El conocimiento se vuelve transformación únicamente cuando pasa a formar parte de la vida
          cotidiana.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Evidencia científica",
              d: "Hallazgos consolidados en neurociencias y ciencias del aprendizaje sobre atención, emoción, memoria y conducta.",
            },
            {
              t: "Modelos teóricos",
              d: "Marcos interpretativos útiles que se presentan como tales, sin confundirlos con hechos.",
            },
            {
              t: "Herramientas de aplicación",
              d: "Prácticas concretas para llevar lo aprendido a decisiones y conversaciones reales.",
            },
          ].map((c) => (
            <div key={c.t} className="rounded-sm border border-border bg-background p-7">
              <h3 className="text-lg">{c.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Pilares */}
      <Section>
        <SectionHeading
          eyebrow="Los cuatro pilares"
          title="Consciencia, Elección, Incorporación y Coherencia."
          lede="Todo programa de ISE® se sostiene sobre estos cuatro pilares. No son etapas separadas: son dimensiones que se profundizan a lo largo de todo el recorrido."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {pilares.map((p, i) => (
            <div key={p.name} className="bg-background p-8">
              <div className="flex items-center justify-between">
                <p.icon className="h-6 w-6 text-primary" aria-hidden />
                <span className="font-display text-2xl text-border">0{i + 1}</span>
              </div>
              <h3 className="mt-6 text-xl">{p.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Recorrido formativo */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Recorrido formativo"
          title="Tres certificaciones que conducen a un Diploma."
          lede="Cada certificación tiene valor propio y, completadas las tres, se otorga el Diploma en Desarrollo Humano Integral, tras un recorrido educativo de nueve meses."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {recorrido.map((r) => (
            <Link
              key={r.to}
              to={r.to}
              className="group flex flex-col rounded-sm border border-border bg-background p-8 transition-colors hover:border-primary/50"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-display text-3xl text-primary">{r.n}</span>
                <StatusTag status={r.status} />
              </div>
              <h3 className="mt-6 text-xl leading-snug">{r.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm text-primary">
                Ver programa <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Link
            to="/diplomado"
            className="rounded-sm border border-primary/40 bg-primary-soft p-8 transition-colors hover:border-primary"
          >
            <h3 className="text-xl">Diploma en Desarrollo Humano Integral</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Se otorga al completar las tres certificaciones: un recorrido educativo de nueve meses.
            </p>
          </Link>
          <Link
            to="/cursos-grabados"
            className="rounded-sm border border-border bg-background p-8 transition-colors hover:border-primary/50"
          >
            <h3 className="text-xl">Cursos Asincrónicos</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Formación breve, independiente y complementaria al recorrido principal.
            </p>
          </Link>
        </div>
      </Section>

      {/* Beneficios */}
      <Section>
        <SectionHeading
          eyebrow="Beneficios"
          title="Lo que cambia cuando el aprendizaje se incorpora."
        />
        <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {beneficios.map((b) => (
            <div key={b.title} className="border-t border-border pt-6">
              <h3 className="text-lg leading-snug">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Diferenciales */}
      <Section tone="soft">
        <SectionHeading eyebrow="Diferenciales" title="Por qué ISE® es distinto." />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {diferenciales.map((d) => (
            <div key={d.title} className="flex gap-5 rounded-sm bg-background p-8">
              <d.icon className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden />
              <div className="min-w-0">
                <h3 className="text-lg">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonios */}
      <Section>
        <SectionHeading eyebrow="Testimonios" title="La voz de quienes ya hicieron el recorrido." />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {testimonios.map((t) => (
            <figure key={t.name} className="flex flex-col border-t-2 border-primary pt-6">
              <blockquote className="flex-1 font-display text-lg leading-relaxed text-ink">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <span className="block text-sm font-medium text-ink">{t.name}</span>
                <span className="block text-xs text-muted-foreground">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* Estadísticas */}
      <section className="border-y border-border bg-secondary py-16">
        <div className="container-ise grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {estadisticas.map((s) => (
            <div key={s.label}>
              <p className="font-display text-5xl text-primary">{s.n}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
