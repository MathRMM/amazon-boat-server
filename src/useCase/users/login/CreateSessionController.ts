import { Request, Response } from "express";
import httpStatus from "http-status";
import { CreateSessionService } from "./CreateSessionService";
import { UserLoginDTO } from "../../../DTO/UserDTO";

export class CreateSessionController {
  constructor(private createSessionService: CreateSessionService) {
    this.handle = this.handle.bind(this);
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const user = new UserLoginDTO(req.body);
      const session = await this.createSessionService.execute(user);
      return res.status(httpStatus.CREATED).send({ token: session.token });
    } catch (error) {
      if (error.status) {
        return res.status(error.status).send(error.message || {});
      } else {
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }
}
