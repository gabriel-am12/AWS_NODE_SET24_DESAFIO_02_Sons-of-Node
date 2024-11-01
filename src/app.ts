// app.ts
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import authRoutes from './modules/auth/auth.routes'; // Importa as rotas de autenticação
import clientRoutes from './modules/auth/client.routes'; // Importa as rotas de client

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('API CompassCarV2 is running!');
});

// Monta as rotas
app.use('/auth', authRoutes);
app.use('/client', clientRoutes); //rota de teste

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
