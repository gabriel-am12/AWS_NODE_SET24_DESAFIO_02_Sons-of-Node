import express from "express";
import userRoutes from "./modules/users/routes/user.routes";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para permitir JSON nas requisições
app.use(express.json());

// Rota de usuários
app.use("/api", userRoutes); // Definimos /api/users para acessar as rotas de usuários

// Rota de teste
app.get("/", (req, res) => {
  res.send("API está funcionando!");
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
