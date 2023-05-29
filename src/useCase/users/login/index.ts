import { SessionRepositoryPG } from "../../../repositories/session/SessionRepository";
import { UserRepositoryPG } from "../../../repositories/user/UserRepository";
import { CreateSessionController } from "./CreateSessionController";
import { CreateSessionService } from "./CreateSessionService";

const clientRepository = new UserRepositoryPG();
const sessionRepository = new SessionRepositoryPG();
const createSessionService = new CreateSessionService(
  sessionRepository,
  clientRepository
);
export const createSessionController = new CreateSessionController(
  createSessionService
);
