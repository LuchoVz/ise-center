import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

import { programas } from "../content";

export default defineTool({
  name: "get_program",
  title: "Detalle de programa",
  description:
    "Devuelve el detalle público de un programa del ISE® a partir de su slug (por ejemplo 'certificacion-i' o 'diplomado').",
  inputSchema: {
    slug: z.string().describe("Slug del programa, por ejemplo 'certificacion-i'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const programa = programas.find((p) => p.slug === slug.trim().toLowerCase());
    if (!programa) {
      return {
        content: [
          {
            type: "text" as const,
            text: `No existe un programa con slug "${slug}". Slugs disponibles: ${programas
              .map((p) => p.slug)
              .join(", ")}.`,
          },
        ],
        isError: true,
      };
    }
    return {
      content: [{ type: "text" as const, text: JSON.stringify(programa, null, 2) }],
      structuredContent: { programa },
    };
  },
});
