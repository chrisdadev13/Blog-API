import { Router } from "express";
import UserController from "../controllers/user.controller";

const userRouter = Router();

userRouter.post("/register", UserController.register);

export default userRouter;
