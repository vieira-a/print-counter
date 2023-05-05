import { z } from "zod";

export const PrinterFormSchema = z.object({
  model: z
    .string()
    .nonempty("O campo Modelo é obrigatório")
    .min(3, "O campo Modelo precisa ter no mínimo 3 caracteres"),
  brand: z
    .string()
    .nonempty("O campo Marca é obrigatório")
    .min(3, "O campo Marca precisa ter no mínimo 3 caracteres"),
  serial: z
    .string()
    .nonempty("O campo Número de série é obrigatório")
    .min(3, "O campo Número de série precisa ter no mínimo 3 caracteres"),
  local: z
    .string()
    .nonempty("O campo Localização é obrigatório")
    .min(3, "O campo Localização precisa ter no mínimo 3 caracteres"),
  counter: z.number().min(1, "O contador deve ser maior que 0"),
});
