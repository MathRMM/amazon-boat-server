import { AbstractSessionRepository } from "../../../repositories/session/AbstractSessionsRepository";
import { SessionModel } from "../../../models/Session/SessionModel";
import { UserLoginDTO } from "../../../DTO/UserDTO";
import { AbstractUserRepository } from "../../../repositories/user/AbstractUserRepository";
import { conflictError } from "../../../errors/conflict-error";
import { Encrypt } from "../../../utils/Encrypt";
import { unauthorizedError } from "../../../errors/unauthorized-error";
import { Session } from "@prisma/client";

export class CreateSessionService {
  constructor(
    private sessionRepository: AbstractSessionRepository,
    private clientRepository: AbstractUserRepository
  ) {}
  async execute(data: UserLoginDTO): Promise<Session> {
    const isClientExist = await this.clientRepository.getByEmail(data.email);
    const isValidPassword = Encrypt.verify(
      data.password,
      isClientExist?.hashPassword || ""
    );

    if (!isClientExist || !isValidPassword) {
      throw unauthorizedError("Verifique se o email ou a senha estão corretos");
    }
    const clientSession = new SessionModel({ userId: isClientExist.id });
    return this.sessionRepository.create(clientSession);
  }
}
