import { prisma } from "../../../config/prismaClient";
import {
  GetUserByIdInterface,
  UserResponseInterface,
} from "../interfaces/getIdUserInterface";
import GetUserByIdRepository from "../repositories/getIdUserRepository";

class GetUserByIdService {
  static async execute({
    id,
  }: GetUserByIdInterface): Promise<UserResponseInterface | null> {
    const user = await GetUserByIdRepository.getById({ id });
    return user;
  }
}

export default GetUserByIdService;
