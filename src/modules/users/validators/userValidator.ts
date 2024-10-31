import { body } from "express-validator";

export const userCreationValidator = [
  body("fullName").notEmpty().withMessage("Nome completo é obrigatório"),
  body("email").isEmail().withMessage("E-mail inválido"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("A senha deve ter no mínimo 6 caracteres"),
];
