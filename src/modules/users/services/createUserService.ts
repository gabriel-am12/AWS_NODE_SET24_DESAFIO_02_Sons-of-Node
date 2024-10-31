import CreateUserRepository from "../repositories/CreateUserRepository";
import bcrypt from "bcryptjs";
import { CreateUserInterface } from "../interfaces/createUserInterface";

class CreateUserService {
  async createUser(data: CreateUserInterface) {
    const { email, password } = data;

    // Verifica se o e-mail já está em uso (excluindo os que têm data de exclusão)
    const existingUser = await CreateUserRepository.findUserByEmail(email);
    if (existingUser && !existingUser.deletedAt) {
      throw new Error("E-mail já está em uso.");
    }

    // Criptografa a senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Cria o usuário com a senha criptografada
    const user = await CreateUserRepository.createUser({
      ...data,
      password: hashedPassword,
      Role: "ADMIN",
    });

    return user;
  }
}

export default new CreateUserService();
