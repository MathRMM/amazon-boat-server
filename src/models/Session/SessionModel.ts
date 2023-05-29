import { z } from "zod";
import { v4 as uuidV4 } from "uuid";
import { invalidInput } from "../../errors/invalidInputError";
import { Tokens } from "../../utils/Tokens";

const SessionSchema = z.object({
  userId: z.string().uuid("Formato de id inválido"),
});

export class SessionModel {
  id: string;
  userId: string;
  token: string;

  constructor({ id = uuidV4(), userId }) {
    try {
      SessionModel.validate(userId)
      this.id = id;
      this.userId = userId;
      this.token = SessionModel.createToken(this.userId);
    } catch (error) {
      throw invalidInput(error)
    }
  }

  private static createToken(userId: string): string {
    return Tokens.create(userId);
  }

  private static validate(userId: string) {
    const result = SessionSchema.parse({
      userId,
    });
    return result;
  }
}
