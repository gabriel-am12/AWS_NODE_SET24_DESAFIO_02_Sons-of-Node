import CreateUserRepository from "../repositories/CreateUserRepository";
import bcrypt from "bcryptjs";
import { CreateUserInterface } from "../interfaces/createUserInterface";

class CreateUserService {
  async createUser(data: CreateUserInterface) {
    const { email, password } = data;

    const existingUser = await CreateUserRepository.findUserByEmail(email);
    if (existingUser && !existingUser.deletedAt) {
      throw new Error("E-mail já está em uso.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await CreateUserRepository.createUser({
      ...data,
      password: hashedPassword,
      Role: "ADMIN",
    });

    return user;
  }
}

export default new CreateUserService();
