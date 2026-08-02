import { defineTool } from "@lovable.dev/mcp-js";

import { institucion, paginas } from "../content";

export default defineTool({
  name: "get_institution_info",
  title: "Información institucional",
  description:
    "Devuelve la información institucional pública del ISE® (identidad, mensaje central, contacto) y el mapa de páginas del sitio.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      { type: "text" as const, text: JSON.stringify({ institucion, paginas }, null, 2) },
    ],
    structuredContent: { institucion, paginas },
  }),
});
