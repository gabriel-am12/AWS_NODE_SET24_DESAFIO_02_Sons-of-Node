//@ts-nocheck
import { Router } from "express";
import UserController from "../controllers/UserController";
import { userCreationValidator } from "../validators/userValidator";

const router = Router();

router.post("/users", userCreationValidator, UserController.createUser);

export default router;
