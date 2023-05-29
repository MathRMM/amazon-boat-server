import { Session } from "@prisma/client";
import { SessionModel } from "../../models/Session/SessionModel";
import { AbstractSessionRepository } from "./AbstractSessionsRepository";
import prisma from "../../config/prismaDB";

export class SessionRepositoryPG implements AbstractSessionRepository {
  create(data: SessionModel): Promise<Session> {
    return prisma.session.create({ data });
  }
  get(id: string): Promise<Session | null> {
    return prisma.session.findUnique({ where: { id } });
  }
}
