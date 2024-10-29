import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

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

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Server running in ${PORT}`);
});
