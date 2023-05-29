import { Router } from "express";
import { createUserController } from "../useCase/users/createUsers";
import { createSessionController } from "../useCase/users/login";

const userRouter = Router();

userRouter.post("/sign-up",  createUserController.handle);
userRouter.post("/sign-in", createSessionController.handle)

export { userRouter };
