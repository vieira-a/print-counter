import { z } from "zod";

export const PrinterFormSchema = z.object({
  model: z.string().nonempty("O campo Modelo é obrigatório").toUpperCase(),
  brand: z
    .string()
    .nonempty("O campo Marca é obrigatório")
    .min(3, "O campo Marca precisa ter no mínimo 3 caracteres")
    .toUpperCase(),
  serial: z
    .string()
    .nonempty("O campo Número de série é obrigatório")
    .min(3, "O campo Número de série precisa ter no mínimo 3 caracteres")
    .toUpperCase(),
  local: z
    .string()
    .nonempty("O campo Localização é obrigatório")
    .min(3, "O campo Localização precisa ter no mínimo 3 caracteres")
    .toUpperCase(),
  ipv4: z.string().ip(),
  printed: z.coerce
    .number()
    .min(1, "Quantidade de impressões deve ser maior que 0"),
  copied: z.coerce.number().min(1, "Quantidade de cópias deve ser maior que 0"),
  counter: z.coerce.number().min(1, "O contador deve ser maior que 0"),
});
