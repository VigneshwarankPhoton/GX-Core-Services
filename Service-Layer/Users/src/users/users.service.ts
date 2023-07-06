import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UsersRepository } from './users.repository';
import { Users } from './entities/users.model';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(createUserInput: CreateUserInput): Promise<Users> {
    return this.usersRepository.createUser(createUserInput);
  }

  async findAll(): Promise<Users[]> {
    return this.usersRepository.findAllUsers();
  }

  async findOne(id: string): Promise<Users> {
    const user = await this.usersRepository.findUserById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async update(id: string, updateUserInput: UpdateUserInput): Promise<Users> {
    const updatedUser = await this.usersRepository.updateUser(
      id,
      updateUserInput,
    );
    return updatedUser;
  }

  async remove(id: string): Promise<string> {
    const Deleted = await this.usersRepository.deleteUser(id);
    
    return Deleted;
  }
}
