import bcrypt from "bcryptjs";
import { UpdateUserInterface } from "../interfaces/updateUserInterface";
import UpdateUserRepository from "../repositories/updateUserRepository";

class UpdateUserService {
  static async updateUser(id: string, data: UpdateUserInterface) {
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    const updatedUser = await UpdateUserRepository.updateUser(id, data);
    return updatedUser;
  }
}

export default UpdateUserService;
