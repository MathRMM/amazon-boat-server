import { z } from "zod";
import { v4 as uuidV4 } from "uuid";
import { invalidInput } from "../../errors/invalidInputError";
import { Encrypt } from "../../utils/Encrypt";

const UserSchema = z.object({
  email: z
    .string()
    .nonempty("O email é obrigatório")
    .email("Endereço de email inválido")
    .max(255, "Email deve ter no máximo 255 caracteres")
    .toLowerCase(),
  password: z
    .string()
    .min(8, "Senha deve ter no mínimo 8 caracteres")
    .max(45, "Senha deve ter no máximo 45 caracteres")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "Senha deve conter letras maiúsculas, minúsculas e números"
    ),
});

export class UserModel {
  id: string;
  email: string;
  hashPassword: string;

  constructor({ id = uuidV4(), email, password }) {
    try {
      UserModel.validate({ email, password });
      this.id = id;
      this.email = email;
      this.hashPassword = Encrypt.create(password);
    } catch (error) {
      throw invalidInput(error);
    }
  }

  private static validate({ email, password }) {
    const result = UserSchema.parse({
      email: email,
      password: password,
    });
    return result;
  }
}
