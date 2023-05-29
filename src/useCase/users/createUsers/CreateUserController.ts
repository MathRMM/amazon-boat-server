import { Response, Request } from "express";
import { UserModel } from "../../../models/User/UserModel";
import httpStatus from "http-status";
import { CreateUserService } from './CreateUserService';

export class CreateUserController {
  constructor(private createUserService: CreateUserService) {
    this.handle = this.handle.bind(this);
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const user = new UserModel(req.body);
      await this.createUserService.execute(user)
      return res.sendStatus(httpStatus.CREATED);
    } catch (error) {
      if(error.status){
        return res.status(error.status).send(error.message || {})
      }else {
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
      }
    }
  }
}
