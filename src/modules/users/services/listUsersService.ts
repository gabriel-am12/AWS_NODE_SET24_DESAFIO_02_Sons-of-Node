import ListUsersRepository from "../repositories/listUsersRepository";
import { listUsersInterface } from "../interfaces/listUsersInterface";

class ListUsersService {
  static async execute(params: listUsersInterface) {
    const result = await ListUsersRepository.listUsers(params);
    return result;
  }
}

export default ListUsersService;
