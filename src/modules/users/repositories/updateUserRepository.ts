// updateUserRepository.ts
import { prisma } from "../../../config/prismaClient";
import { UpdateUserInterface } from "../interfaces/updateUserInterface";

class UpdateUserRepository {
  static async updateUser(id: string, data: UpdateUserInterface) {
    const user = await prisma.user.findFirst({
      where: { id, Role: "ADMIN" },
    });

    if (!user) {
      return null;
    }

    return prisma.user.update({
      where: { id },
      data,
    });
  }
}

export default UpdateUserRepository;
