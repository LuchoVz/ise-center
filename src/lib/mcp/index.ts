import { defineMcp } from "@lovable.dev/mcp-js";

import getInstitutionInfoTool from "./tools/get-institution-info";
import getProgramTool from "./tools/get-program";
import listProgramsTool from "./tools/list-programs";

export default defineMcp({
  name: "ise-elevate",
  title: "ISE Elevate",
  version: "0.1.0",
  instructions:
    "Herramientas de consulta del sitio público del ISE® (Instituto del Ser en Expansión). Usa `get_institution_info` para la identidad institucional y el mapa de páginas, `list_programs` para el catálogo formativo y `get_program` para el detalle de un programa.",
  tools: [getInstitutionInfoTool, listProgramsTool, getProgramTool],
});
