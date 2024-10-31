//@ts-nocheck
import { Router } from "express";
import UserController from "../controllers/UserController";
import { userCreationValidator } from "../validators/createUserValidator";

const router = Router();

router.post("/users", userCreationValidator, UserController.createUser);

router.get("/users/:id", UserController.getUserById);

router.get("/users", UserController.listUsers);

export default router;
