import {Router} from "express";
import { newUser } from "../controllers/userController";
const userRouter = Router();

userRouter.post('/createuser', newUser);

export default userRouter;