import { prisma } from "../../../config/prismaClient";
import { CreateUserInterface } from "../interfaces/createUserInterface";

class CreateUserRepository {
  async findUserByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    });
  }

  async createUser(data: CreateUserInterface) {
    return prisma.user.create({
      data,
    });
  }
}

export default new CreateUserRepository();
