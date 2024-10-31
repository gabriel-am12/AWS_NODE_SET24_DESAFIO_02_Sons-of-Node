import { prisma } from "../../../config/prismaClient";
import {
  GetUserByIdInterface,
  UserResponseInterface,
} from "../interfaces/getIdUserInterface";

class GetUserByIdRepository {
  static async getById({
    id,
  }: GetUserByIdInterface): Promise<UserResponseInterface | null> {
    return prisma.user.findFirst({
      where: {
        id,
        Role: "ADMIN", // Filtra apenas usuários com a role "ADMIN"
      },
      select: {
        id: true,
        fullName: true,
        email: true,
        Role: true,
      },
    });
  }
}

export default GetUserByIdRepository;
