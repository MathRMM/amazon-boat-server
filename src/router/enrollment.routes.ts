import { Router } from "express";
import { createEnrollmentController } from '../useCase/enrollments/createEnrollment/index';

const enrollmentRouter = Router();

enrollmentRouter.post("/", createEnrollmentController.handle)

export { enrollmentRouter };