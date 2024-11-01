//@ts-nocheck
import { Router } from "express";
import UserController from "../controllers/UserController";
import { createUserValidator } from "../validators/createUserValidator";
import updateUserValidator from "../validators/updateUserValidator";

const router = Router();

router.post("/users", createUserValidator, UserController.createUser);

router.get("/users/:id", UserController.getUserById);

router.get("/users", UserController.listUsers);

router.patch("/users/:id", updateUserValidator, UserController.updateUser);

router.delete("/users/:id", UserController.deleteUser);

export default router;
