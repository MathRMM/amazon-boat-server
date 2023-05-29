import { SessionModel } from "../../models/Session/SessionModel";
import { Session } from "@prisma/client";

export abstract class AbstractSessionRepository {
  abstract create(data: SessionModel): Promise<Session>;
  abstract get(id: string): Promise<Session | null>;
}
