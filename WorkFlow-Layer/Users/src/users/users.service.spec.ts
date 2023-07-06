import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { NotFoundException } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { Users } from './entities/users.model';

describe('UsersService', () => {
  let service: UsersService;
  let repository: UsersRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ UsersRepository],
    }).compile();

    // service = module.get<UsersService>(UsersService);
    repository = module.get<UsersRepository>(UsersRepository);
  });

  describe('create', () => {
    it('should create a new user', async () => {
      const createUserInput: CreateUserInput = { 
        name: 'John Doe',
        email: 'test@gmail',
        age: 22,
        address: 'Mock address',
      };
      const expectedResult: Users = { 
        name: 'John Doe',
        email: 'test@gmail',
        age: 22,
        address: 'Mock address',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
       };

      jest.spyOn(repository, 'createUser').mockResolvedValue(expectedResult);

      // eslint-disable-next-line max-len
      await expect(service.create(createUserInput)).resolves.toEqual(expectedResult);
      expect(repository.createUser).toHaveBeenCalledWith(createUserInput);
    });
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const expectedResult: Users[] = [{ 
        name: 'John Doe',
          email: 'test@gmail',
          age: 22,
          address: 'Mock address',
          isActive: true,
          createdAt: new Date(),
          updatedAt: new Date(),
       }];

      jest.spyOn(repository, 'findAllUsers').mockResolvedValue(expectedResult);

      await expect(service.findAll()).resolves.toEqual(expectedResult);
      expect(repository.findAllUsers).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a user by id', async () => {
      const userId = '1';
      const expectedResult: Users = {
        name: 'John Doe',
        email: 'test@gmail',
        age: 22,
        address: 'Mock address',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(repository, 'findUserById').mockResolvedValue(expectedResult);

      await expect(service.findOne(userId)).resolves.toEqual(expectedResult);
      expect(repository.findUserById).toHaveBeenCalledWith(userId);
    });

    it('should throw NotFoundException if user is not found', async () => {
      const userId = '1';

      jest.spyOn(repository, 'findUserById').mockResolvedValue(null);

      // eslint-disable-next-line max-len
      await expect(service.findOne(userId)).rejects.toThrowError(NotFoundException);
      expect(repository.findUserById).toHaveBeenCalledWith(userId);
    });
  });

  describe('update', () => {
    it('should update a user by id', async () => {
      const userId = '1';
      const updateUserInput: UpdateUserInput = { id: userId};
      const expectedResult: Users = { 
        name: 'John Doe',
        email: 'test@gmail',
        age: 22,
        address: 'Mock address',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
       };

      jest.spyOn(repository, 'updateUser').mockResolvedValue(expectedResult);

      // eslint-disable-next-line max-len
      await expect(service.update(userId, updateUserInput)).resolves.toEqual(expectedResult);
      // eslint-disable-next-line max-len
      expect(repository.updateUser).toHaveBeenCalledWith(userId, updateUserInput);
    });
  });

  describe('remove', () => {
    it('should remove a user by id', async () => {
      const userId = '1';
      const expectedResult = 'User deleted';

      jest.spyOn(repository, 'deleteUser').mockResolvedValue(expectedResult);

      await expect(service.remove(userId)).resolves.toEqual(expectedResult);
      expect(repository.deleteUser).toHaveBeenCalledWith(userId);
    });
  });
});
