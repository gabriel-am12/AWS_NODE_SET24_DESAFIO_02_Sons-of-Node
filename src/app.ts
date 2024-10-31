import express, { Request, Response, Router } from 'express';
import dotenv from 'dotenv';
import clientRouter from './modules/clients/routes/client.route';

// Carregar variáveis de ambiente
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsing de JSON
app.use(express.json());

// Rota de teste
app.get('/', (req: Request, res: Response) => {
  res.send('API CompassCarV2 is running!');
});

// Adicionar outras rotas e middlewares conforme necessário
app.use('/clients', clientRouter);
// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Server running in ${PORT}`);
});
