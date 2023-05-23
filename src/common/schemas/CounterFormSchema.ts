import { z } from "zod";

export const CounterFormSchema = z.object({
  printer: z.string(),
  copied: z.coerce
    .number()
    .min(1, "O campo quantidade de cópias deve ser maior que 0"),
  printed: z.coerce
    .number()
    .min(1, "O campo quantidade de impressões deve ser maior que 0"),
  note: z.string(),
});
