import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, LifeBuoy, LockKeyhole, MonitorPlay } from "lucide-react";
import studyImg from "@/assets/study.jpg";
import { PageHero, Section, SectionHeading } from "@/components/site/primitives";

export const Route = createFileRoute("/campus-virtual")({
  head: () => ({
    meta: [
      { title: "Campus Virtual | ISE®" },
      {
        name: "description",
        content:
          "Acceso al Campus Virtual de ISE®: clases, materiales, bitácoras de práctica y acompañamiento docente.",
      },
      { property: "og:title", content: "Campus Virtual | ISE®" },
      {
        property: "og:description",
        content:
          "El espacio donde ocurre el recorrido formativo del Sistema ISE®, entre clases en vivo y práctica guiada.",
      },
    ],
  }),
  component: Campus,
});

const features = [
  {
    icon: MonitorPlay,
    t: "Clases y grabaciones",
    d: "Encuentros en vivo y sus grabaciones disponibles durante todo el programa.",
  },
  {
    icon: GraduationCap,
    t: "Materiales de estudio",
    d: "Lecturas, guías de práctica y bibliografía comentada por módulo.",
  },
  {
    icon: LifeBuoy,
    t: "Acompañamiento",
    d: "Espacio de consultas, retroalimentación docente y seguimiento de bitácoras.",
  },
];

function Campus() {
  return (
    <>
      <PageHero
        eyebrow="Plataforma educativa"
        title="Campus Virtual"
        lede="El Campus Virtual es el espacio donde se sostiene el recorrido formativo: clases, materiales, práctica registrada y acompañamiento docente en un solo lugar."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="rounded-sm border border-border p-10">
            <div className="flex items-center gap-3">
              <LockKeyhole className="h-5 w-5 text-primary" aria-hidden />
              <h2 className="text-2xl">Acceso para estudiantes</h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              El ingreso está reservado a participantes de programas activos. Si ya estás inscrito,
              utiliza las credenciales enviadas al confirmar tu matrícula.
            </p>

            <form
              className="mt-8 grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="grid gap-2">
                <label htmlFor="email" className="text-xs uppercase tracking-[0.14em] text-ink">
                  Correo institucional
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="nombre@correo.com"
                  className="rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="password" className="text-xs uppercase tracking-[0.14em] text-ink">
                  Contraseña
                </label>
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                />
              </div>
              <button
                type="submit"
                className="mt-2 rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Ingresar al Campus
              </button>
              <p className="text-xs text-muted-foreground">
                ¿Problemas para acceder?{" "}
                <Link to="/contacto" className="text-primary">
                  Escríbenos
                </Link>
                .
              </p>
            </form>
          </div>

          <img
            src={studyImg}
            alt="Estudiante trabajando con material del campus virtual junto a una ventana"
            width={1408}
            height={1008}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-sm object-cover"
          />
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading eyebrow="Qué encontrarás dentro" title="Todo el recorrido, en un lugar." />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.t} className="rounded-sm bg-background p-8">
              <f.icon className="h-6 w-6 text-primary" aria-hidden />
              <h3 className="mt-5 text-xl">{f.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
