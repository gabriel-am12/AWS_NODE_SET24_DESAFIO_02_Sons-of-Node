//@ts-nocheck
import { Router } from "express";
import UserController from "../controllers/UserController";
import { createUserValidator } from "../middlewares/createUserValidator";
import updateUserValidator from "../middlewares/updateUserValidator";
import { authenticateToken } from "../../auth/auth.middleware";

const router = Router();

router.post("/create", authenticateToken ,createUserValidator, UserController.createUser);

router.get("/:id", authenticateToken ,UserController.getUserById);

router.get("/", authenticateToken ,UserController.listUsers);

router.patch("/update/:id", authenticateToken ,updateUserValidator, UserController.updateUser);

router.delete("/delete/:id", authenticateToken ,UserController.deleteUser);

export default router;
