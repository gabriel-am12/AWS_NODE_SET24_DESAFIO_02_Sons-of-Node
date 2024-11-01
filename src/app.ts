//@ts-nocheck
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import authRoutes from './modules/auth/routes/auth.routes'; // Importa as rotas de autenticação
import carRoutes from './modules/cars/routes/car.routes';



dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('API CompassCarV2 is running!');
});

// Rotas
app.use('/auth', authRoutes);
app.use('/cars', carRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
