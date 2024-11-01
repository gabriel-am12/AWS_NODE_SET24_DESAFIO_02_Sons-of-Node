import express from "express";
import userRoutes from "./modules/users/routes/user.routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/users", userRoutes); // Definimos /api/users para acessar as rotas de usuários

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
