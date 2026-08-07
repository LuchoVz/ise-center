export type Programa = {
  slug: string;
  path: string;
  nombre: string;
  descripcion: string;
  estado: string;
};

export const programas: Programa[] = [
  {
    slug: "certificacion-i",
    path: "/certificacion-i",
    nombre: "Certificación I",
    descripcion: "Construyendo una Vida con Sentido",
    estado: "Disponible",
  },
  {
    slug: "certificacion-ii",
    path: "/certificacion-ii",
    nombre: "Certificación II",
    descripcion: "Comunicación, Relaciones y Liderazgo Personal",
    estado: "Próximamente",
  },
  {
    slug: "certificacion-iii",
    path: "/certificacion-iii",
    nombre: "Certificación III",
    descripcion: "Liderazgo Humano, Cambio e Impacto",
    estado: "Próximamente",
  },
  {
    slug: "diplomado",
    path: "/diplomado",
    nombre: "Diploma en Desarrollo Humano Integral",
    descripcion:
      "Recorrido formativo completo que integra las tres certificaciones a lo largo de nueve meses.",
    estado: "Recorrido completo",
  },
  {
    slug: "cursos-grabados",
    path: "/cursos-grabados",
    nombre: "Cursos Asincrónicos",
    descripcion: "Formación breve, independiente y complementaria con acceso inmediato.",
    estado: "Acceso inmediato",
  },
];

export type Pagina = { path: string; titulo: string; resumen: string };

export const paginas: Pagina[] = [
  { path: "/", titulo: "Inicio", resumen: "Presentación institucional del ISE® y su propuesta formativa." },
  {
    path: "/desarrollo-humano-integral",
    titulo: "Desarrollo Humano Integral",
    resumen:
      "Modelo educativo del ISE®: comprender, experimentar, practicar, integrar y vivir con coherencia.",
  },
  { path: "/certificacion-i", titulo: "Certificación I", resumen: "Construyendo una Vida con Sentido." },
  {
    path: "/certificacion-ii",
    titulo: "Certificación II",
    resumen: "Comunicación, Relaciones y Liderazgo Personal.",
  },
  {
    path: "/certificacion-iii",
    titulo: "Certificación III",
    resumen: "Liderazgo Humano, Cambio e Impacto.",
  },
  { path: "/diplomado", titulo: "Diploma", resumen: "Recorrido formativo completo en Desarrollo Humano Integral." },
  { path: "/cursos-grabados", titulo: "Cursos Asincrónicos", resumen: "Formación breve y complementaria." },
  { path: "/nosotros", titulo: "Nosotros", resumen: "Identidad, propósito y enfoque institucional del ISE®." },
  { path: "/centro-de-conocimiento", titulo: "Centro de Conocimiento", resumen: "Artículos, biblioteca y recursos libres del ISE®." },
  { path: "/blog", titulo: "Artículos", resumen: "Artículos y reflexiones sobre desarrollo humano basado en evidencia." },
  { path: "/recursos", titulo: "Recursos", resumen: "Materiales y recursos de apoyo para estudiantes y público general." },
  { path: "/campus-virtual", titulo: "Campus Virtual", resumen: "Acceso al entorno de aprendizaje del ISE®." },
  { path: "/contacto", titulo: "Contacto", resumen: "Formulario y datos de contacto institucional." },
];

export const institucion = {
  nombre: "ISE® – Instituto del Ser en Expansión",
  descripcion:
    "Institución educativa dedicada al Desarrollo Humano Integral basado en evidencia científica y sabiduría práctica.",
  mensajeCentral:
    "Cada persona evoluciona desde el punto en el que está. Desarrollamos capacidades humanas para vivir con mayor consciencia, libertad, responsabilidad y coherencia.",
  correo: "lucianomvazquez@gmail.com",
  whatsapp: "+54 9 3425 26 5273",
  instagram: "https://www.instagram.com/luciano.manuel.vazquez/",
  horario: "Lunes a viernes, 9:00 a 17:00",
  paginaContacto: "/contacto",
};
