//@ts-nocheck
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import { createCar, getCars, getCarById, updateCar, deleteCar } from './modules/cars/carController';


// Carregar variáveis de ambiente
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsing de JSON
app.use(express.json());

// Rotas para Carros
app.post('/cars', createCar);
app.get('/cars', getCars);
app.get('/cars/:id', getCarById);
app.put('/cars/:id', updateCar);
app.delete('/cars/:id', deleteCar);



// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Server running in ${PORT}`);
});
