import { Router } from 'express';
import { login } from '../controllers/auth.controller';

const router = Router();

/**
 * @openapi
 * tags:
 *   - name: Authentication
 *     description: Operações relacionadas à autenticação
 */

/**
 * @openapi
 * /auth/login:
 *   post:
 *     summary: User login
 *     description: Log in with email and password to receive an authentication token.
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: admin@example.com
 *               password:
 *                 type: string
 *                 example: admin123
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       401:
 *         description: Invalid credentials
 */
router.post('/login', login);

export default router;
