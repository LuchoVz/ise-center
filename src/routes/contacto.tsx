import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, Clock, Instagram } from "lucide-react";
import { PageHero, Section, SectionHeading } from "@/components/site/primitives";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto | ISE® — Instituto del Ser en Expansión" },
      {
        name: "description",
        content:
          "Escríbenos para orientarte sobre el recorrido formativo de ISE®. Respondemos con claridad y sin presión comercial.",
      },
      { property: "og:title", content: "Contacto | ISE® — Instituto del Ser en Expansión" },
      {
        property: "og:description",
        content: "Consultas sobre certificaciones, diploma, cursos asincrónicos y campus virtual.",
      },
    ],
  }),
  component: Contacto,
});

function Contacto() {
  const [enviado, setEnviado] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Conversemos"
        lede="Cuéntanos en qué momento estás y qué te gustaría desarrollar. Te responderemos con una orientación honesta, incluso si nuestra propuesta no es la adecuada para ti."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionHeading eyebrow="Formulario" title="Escríbenos" />
            {enviado ? (
              <div className="mt-8 rounded-sm border border-primary/40 bg-primary-soft p-8">
                <h3 className="text-xl">Gracias por escribirnos</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Hemos recibido tu mensaje. Te responderemos al correo indicado dentro de los
                  próximos días hábiles.
                </p>
              </div>
            ) : (
              <form
                className="mt-8 grid gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setEnviado(true);
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="nombre" label="Nombre y apellido" />
                  <Field id="correo" label="Correo electrónico" type="email" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="pais" label="País" required={false} />
                  <div className="grid gap-2">
                    <label
                      htmlFor="interes"
                      className="text-xs uppercase tracking-[0.14em] text-ink"
                    >
                      Tema de interés
                    </label>
                    <select
                      id="interes"
                      className="rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                    >
                      <option>Certificación I</option>
                      <option>Certificación II</option>
                      <option>Certificación III</option>
                      <option>Diploma</option>
                      <option>Cursos Asincrónicos</option>
                      <option>Campus Virtual</option>
                      <option>Otro</option>
                    </select>
                  </div>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="mensaje" className="text-xs uppercase tracking-[0.14em] text-ink">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    rows={6}
                    required
                    placeholder="Cuéntanos brevemente tu situación y tu consulta."
                    className="rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="justify-self-start rounded-sm bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Enviar consulta
                </button>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Usaremos tus datos únicamente para responder esta consulta. No enviamos
                  comunicaciones comerciales sin tu consentimiento.
                </p>
              </form>
            )}
          </div>

          <aside className="h-fit rounded-sm bg-secondary p-10">
            <h2 className="text-2xl">Otras vías</h2>
            <ul className="mt-8 space-y-7">
              {[
                {
                  icon: Mail,
                  t: "Correo",
                  d: "lucianomvazquez@gmail.com",
                  href: "mailto:lucianomvazquez@gmail.com",
                },
                {
                  icon: MessageCircle,
                  t: "WhatsApp",
                  d: "+54 9 3425 26 5273",
                  href: "https://wa.me/5493425265273",
                },
                {
                  icon: Instagram,
                  t: "Instagram",
                  d: "@luciano.manuel.vazquez",
                  href: "https://www.instagram.com/luciano.manuel.vazquez/",
                },
                {
                  icon: Clock,
                  t: "Horario de atención",
                  d: "Lunes a viernes, de 9:00 a 17:00.",
                },
              ].map((c) => (
                <li key={c.t} className="flex gap-4 border-t border-border pt-5">
                  <c.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-ink">{c.t}</p>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="mt-1 block break-words text-sm leading-relaxed text-muted-foreground transition-colors hover:text-primary"
                      >
                        {c.d}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>
    </>
  );
}

function Field({
  id,
  label,
  type = "text",
  required = true,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-xs uppercase tracking-[0.14em] text-ink">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        className="rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
      />
    </div>
  );
}
