//@ts-nocheck
import { Router } from "express";
import UserController from "../controllers/UserController";
import { userCreationValidator } from "../validators/createUserValidator";

const router = Router();

router.post("/users", userCreationValidator, UserController.createUser);

router.get("/users/:id", UserController.getUserById);

export default router;
