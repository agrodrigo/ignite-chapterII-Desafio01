import { User } from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userAdminAlreadExists = this.usersRepository.findById(user_id);

    if (!userAdminAlreadExists.admin) {
      throw new Error('user does not have permission');
    }

    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
