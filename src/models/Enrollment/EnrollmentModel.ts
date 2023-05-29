import { z } from "zod";
import { v4 as uuidV4 } from "uuid";
import { invalidInput } from "../../errors/invalidInputError";
import { isCPF, formatToCPF, isPhone, formatToPhone } from "brazilian-values";

const enrollmentSchema = z.object({
  name: z.string().nonempty("O nome é obrigatório").min(3),
  cpf: z.string().transform(validateCPF),
  birthday: z
    .date({
      invalid_type_error: "Data inválida",
      required_error: "A data de nascimento é obrigatório",
      description: "Data inválida",
    })
    .max(eighteenYearsAgo(), {
      message: "Idade mínima para o cadastro é de 18 anos",
    }),
  phone: z.string().transform(validatePhone),
  userId: z.string().uuid("Formato de id inválido"),
});

export class EnrollmentModel {
  id: string;
  name: string;
  cpf: string;
  birthday: Date;
  phone: string;
  userId: string;

  constructor({ id = uuidV4(), name, cpf, birthday, phone, userId }) {
    try {
      EnrollmentModel.validate({
        name,
        cpf,
        birthday: new Date(birthday),
        phone,
      });
      this.id = id;
      this.name = name;
      this.cpf = cpf;
      this.birthday = new Date(birthday);
      this.phone = phone;
      this.userId = userId;
    } catch (error) {
      throw invalidInput(error);
    }
  }

  private static validate({ name, cpf, birthday, phone }) {
    const result = enrollmentSchema.parse({ name, cpf, birthday, phone });
    return result;
  }
}

function eighteenYearsAgo() {
  const date = new Date(Date.now());
  date.setFullYear(date.getFullYear() - 18);
  return new Date(date);
}

function validateCPF(value: string, ctx: z.RefinementCtx) {
  const isValidCPF = isCPF(value);

  if (!isValidCPF) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "CPF inválido",
    });
  }

  return formatToCPF(value);
}

function validatePhone(value: string, ctx: z.RefinementCtx) {
  const isValidCPF = isPhone(value);

  if (!isValidCPF) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Número de telefone inválido",
    });
  }

  return formatToPhone(value);
}
