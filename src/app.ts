//@ts-nocheck
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
// import authRoutes from './modules/auth/auth.routes';
import carRoutes from './modules/cars/car.routes';


// Carregar variáveis de ambiente
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsing de JSON
app.use(express.json());

// Rotas 
// app.use('/auth', authRoutes);
app.use('/cars', carRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Server running in ${PORT}`);
});
