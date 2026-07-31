export const programas = [
  {
    to: "/certificacion-i",
    label: "Certificación I",
    desc: "Construyendo una Vida con Sentido",
    status: "Disponible",
  },
  {
    to: "/certificacion-ii",
    label: "Certificación II",
    desc: "Comunicación, Relaciones y Liderazgo Personal",
    status: "Próximamente",
  },
  {
    to: "/certificacion-iii",
    label: "Certificación III",
    desc: "Liderazgo Humano, Cambio e Impacto",
    status: "Próximamente",
  },
  {
    to: "/diplomado",
    label: "Diploma en Desarrollo Humano Integral",
    desc: "Titulación al completar las tres certificaciones",
    status: "Recorrido completo",
  },
] as const;

export const navPrincipal = [
  { to: "/desarrollo-humano-integral", label: "Desarrollo Humano Integral" },
  { to: "/cursos-grabados", label: "Cursos Asincrónicos" },
  { to: "/centro-de-conocimiento", label: "Centro de Conocimiento" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/contacto", label: "Contacto" },
] as const;
