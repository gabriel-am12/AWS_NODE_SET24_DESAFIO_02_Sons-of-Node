//@ts-nocheck
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import authRoutes from './modules/auth/auth.routes'; // Importa as rotas de autenticação
import clientRoutes from './modules/auth/client.routes'; // Importa as rotas de client
import carRoutes from './modules/cars/car.routes';



dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('API CompassCarV2 is running!');
});

// Rotas
app.use('/auth', authRoutes);
app.use('/client', clientRoutes); //rota de teste
app.use('/cars', carRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
