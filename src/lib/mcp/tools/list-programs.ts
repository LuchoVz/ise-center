import { defineTool } from "@lovable.dev/mcp-js";

import { programas } from "../content";

export default defineTool({
  name: "list_programs",
  title: "Listar programas",
  description:
    "Lista los programas formativos públicos del ISE® (certificaciones, diploma y cursos asincrónicos) con su estado.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text" as const, text: JSON.stringify(programas, null, 2) }],
    structuredContent: { programas },
  }),
});
