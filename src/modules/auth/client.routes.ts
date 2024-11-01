// src/modules/auth/client.routes.ts
//test de rotas

import { Router, Request, Response } from 'express';
import { authenticateToken } from './auth.middleware'; 
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = Router();

// Rota para listar todos os clientes
router.get('/clients', authenticateToken, async (req: Request, res: Response): Promise<void> => {
  try {
    // Consultando todos os clientes no banco de dados
    const clients = await prisma.client.findMany();

    // Retornando a lista de clientes encontrados
    res.status(200).json(clients);
  } catch (error) {
    console.error('Error fetching clients:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
