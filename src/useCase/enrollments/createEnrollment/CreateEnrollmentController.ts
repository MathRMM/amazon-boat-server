import { Response } from "express";
import { AuthenticatedRequest } from "../../../middlewares/authentication-middleware";
import httpStatus from "http-status";
import { EnrollmentModel } from "../../../models/Enrollment/EnrollmentModel";
import { CreateEnrollmentService } from "./CreateEnrollmentService";

export class CreateEnrollmentController {
  constructor(private createEnrollmentService: CreateEnrollmentService) {
    this.handle = this.handle.bind(this);
  }

  async handle(req: AuthenticatedRequest, res: Response): Promise<Response> {
    try {
      const enrollment = new EnrollmentModel({ userId: req.userId, ...req.body });
      await this.createEnrollmentService.execute(enrollment);
      return res.sendStatus(httpStatus.CREATED);
    } catch (error) {
      if (error.status) {
        return res.status(error.status).send(error.message || {});
      } else {
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }
}
