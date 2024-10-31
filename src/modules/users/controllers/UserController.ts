import { Request, Response } from "express";
import createUserService from "../services/createUserService";
import { validationResult } from "express-validator";

class UserController {
  async createUser(req: Request, res: Response) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array().map((error) => error.msg),
      });
    }

    const { fullName, email, password, Role } = req.body;

    try {
      // Chama o serviço para criar o usuário
      const user = await createUserService.createUser({
        fullName,
        email,
        password,
        Role,
      });
      return res.status(201).json(user);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
      } else {
        return res.status(500).json({ error: "Erro interno." });
      }
    }
  }
}

export default new UserController();
