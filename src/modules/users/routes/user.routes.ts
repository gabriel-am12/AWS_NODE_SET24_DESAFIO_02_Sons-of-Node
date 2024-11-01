//@ts-nocheck
import { Router } from "express";
import UserController from "../controllers/UserController";
import { createUserValidator } from "../middlewares/createUserValidator";
import updateUserValidator from "../middlewares/updateUserValidator";

const router = Router();

router.post("/create", createUserValidator, UserController.createUser);

router.get("/:id", UserController.getUserById);

router.get("/", UserController.listUsers);

router.patch("/update/:id", updateUserValidator, UserController.updateUser);

router.delete("/delete/:id", UserController.deleteUser);

export default router;
