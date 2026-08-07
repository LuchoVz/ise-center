import logoAsset from "@/assets/ise-logo.png.asset.json";

export const SITE_URL = "https://ise-integral-path.lovable.app";
export const LOGO_URL = `${SITE_URL}${logoAsset.url}`;

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const organizationNode = {
  "@type": "EducationalOrganization",
  "@id": ORG_ID,
  name: "ISE® — Instituto del Ser en Expansión",
  alternateName: "ISE®",
  url: `${SITE_URL}/`,
  description:
    "Institución educativa especializada en Desarrollo Humano Integral basado en evidencia científica.",
  email: "lucianomvazquez@gmail.com",
  telephone: "+54 9 3425 26 5273",
  logo: {
    "@type": "ImageObject",
    url: LOGO_URL,
    caption: "ISE® — Instituto del Ser en Expansión",
  },
  image: LOGO_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Santa Fe",
    addressRegion: "Santa Fe",
    addressCountry: "AR",
  },
  areaServed: "Latinoamérica",
  inLanguage: "es",
  sameAs: ["https://www.instagram.com/luciano.manuel.vazquez/"],
} as const;

export const providerRef = {
  "@type": "EducationalOrganization",
  "@id": ORG_ID,
  name: "ISE® — Instituto del Ser en Expansión",
  url: `${SITE_URL}/`,
  logo: LOGO_URL,
} as const;

export function breadcrumbNode(
  items: ReadonlyArray<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

type ProgramInput = {
  path: string;
  name: string;
  shortName: string;
  description: string;
  credential: string;
};

export function programNode({
  path,
  name,
  shortName,
  description,
  credential,
}: ProgramInput) {
  const url = `${SITE_URL}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    "@id": `${url}#program`,
    name,
    alternateName: shortName,
    description,
    url,
    provider: providerRef,
    educationalProgramMode: "online",
    educationalCredentialAwarded: credential,
    timeToComplete: "P3M",
    programPrerequisites:
      path === "/certificacion-i"
        ? "No se requiere formación previa."
        : "Haber completado la certificación anterior del recorrido ISE®.",
    occupationalCategory: "Desarrollo Humano Integral",
    inLanguage: "es",
    hasCourse: {
      "@type": "Course",
      "@id": `${url}#course`,
      name,
      description,
      url,
      inLanguage: "es",
      provider: providerRef,
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online",
        courseWorkload: "P3M",
      },
    },
  };
}
