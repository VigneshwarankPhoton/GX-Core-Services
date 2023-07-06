import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Users } from './entities/users.model';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel(Users.name) private readonly userModel: Model<Users>,
  ) {}

  async createUser(createUserDto: CreateUserInput): Promise<Users> {
    const newUser = new this.userModel(createUserDto);
    return newUser.save();
  }

  async findAllUsers(): Promise<Users[]> {
    return this.userModel.find().exec();
  }

  async findUserById(id: string): Promise<Users> {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async updateUser(
    id: string,
    UpdateUserInput: UpdateUserInput,
  ): Promise<Users> {
    const updatedUser = await this.userModel
      .findByIdAndUpdate(id, UpdateUserInput, { new: true })
      .exec();
    if (!updatedUser) {
      throw new NotFoundException('User not found');
    }
    return updatedUser;
  }

  async deleteUser(id: string): Promise<string> {
    const deletedUser = await this.userModel.findByIdAndDelete(id).exec();
    if (!deletedUser) {
      throw new NotFoundException('User not found');
    }
    return "deleted succesfully"
  }
}
