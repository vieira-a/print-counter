import { z } from "zod";

export const UserRegisterSchema = z.object({
  name: z.string().nonempty("O campo nome é obrigatório"),
  email: z
    .string()
    .email("Por favor, informe um endereço de e-mail válido")
    .nonempty("O campo email é obrigatório"),
  password: z
    .string()
    .nonempty("O campo senha é obrigatório")
    .min(8, "A senha informada precisa ter no mínimo 8 caracteres")
    .max(16, "A senha informada precisa ter no máximo 16 caracteres"),
  confirmpassword: z
    .string()
    .nonempty("O campo confirmação de senha é obrigatório")
    .min(8, "A senha informada precisa ter no mínimo 8 caracteres")
    .max(16, "A senha informada precisa ter no máximo 16 caracteres"),
  role: z.string().nonempty("O campo perfil de usuário é obrigatório"),
});
