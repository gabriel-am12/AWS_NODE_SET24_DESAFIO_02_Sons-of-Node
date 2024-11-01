//auth.routes.ts
import { Router } from 'express';
import { login } from '../controllers/auth.controller';

const router = Router();

// Definindo a rota de login
router.post('/login', login);

export default router;
