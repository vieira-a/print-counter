import { z } from "zod";

export const ModelFormSchema = z.object({
  model_brand: z.string().nonempty("O nome do marca é obrigatório"),
  model_name: z.string().nonempty("O nome do modelo é obrigatório"),
  model_oid_snmp_printed: z
    .string()
    .nonempty("O código identificador de páginas impressas é obrigatório"),
  model_oid_snmp_copied: z
    .string()
    .nonempty(
      "O código identificador de número de páginas impressas é obrigatório"
    ),
  model_oid_snmp_toner_level: z.string().nonempty("model_oid_snmp_toner_level"),
});
