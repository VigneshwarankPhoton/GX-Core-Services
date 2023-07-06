import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  describe('create', () => {
    it('should create a new user', () => {
      const createUserInput: CreateUserInput = {
        name: 'John Doe',
        email: 'test@gmail',
        age: 22,
        address: 'Mock address',
      };
      const expectedResult = {
        name: 'John Doe',
        email: 'test@gmail',
        age: 22,
        address: 'Mock address',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(service, 'create').mockResolvedValue(expectedResult);

      expect(controller.create(createUserInput)).resolves.toEqual(
        expectedResult,
      );
      expect(service.create).toHaveBeenCalledWith(createUserInput);
    });
  });

  describe('findAll', () => {
    it('should return an array of users', () => {
      const expectedResult = [
        {
          name: 'John Doe',
          email: 'test@gmail',
          age: 22,
          address: 'Mock address',
          isActive: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      jest.spyOn(service, 'findAll').mockResolvedValue(expectedResult);

      expect(controller.findAll()).resolves.toEqual(expectedResult);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a user by id', () => {
      const userId = '1';
      const expectedResult = {
        id: userId,
        name: 'John Doe',
        email: 'test@gmail',
        age: 22,
        address: 'Mock address',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(service, 'findOne').mockResolvedValue(expectedResult);

      expect(controller.findOne(userId)).resolves.toEqual(expectedResult);
      expect(service.findOne).toHaveBeenCalledWith(userId);
    });
  });

  describe('update', () => {
    it('should update a user by id', () => {
      const userId = '1';
      const updateUserInput: UpdateUserInput = {
        id: userId,
        name: 'John Doe',
        email: 'test@gmail',
        age: 22,
        address: 'Mock address',
      };
      const expectedResult = {
        id: userId,
        name: 'John Doe',
        email: 'test@gmail',
        age: 22,
        address: 'Mock address',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(service, 'update').mockResolvedValue(expectedResult);

      expect(controller.update(userId, updateUserInput)).resolves.toEqual(
        expectedResult,
      );
      expect(service.update).toHaveBeenCalledWith(userId, updateUserInput);
    });
  });

  describe('remove', () => {
    it('should remove a user by id', () => {
      const userId = '1';
      // eslint-disable-next-line max-len
      const expectedResult  = `Product with id ${userId} has been deleted successfully`;

      jest.spyOn(service, 'remove').mockResolvedValue(expectedResult as string);

      expect(controller.remove(userId)).resolves.toEqual(expectedResult);
      expect(service.remove).toHaveBeenCalledWith(userId);
    });
  });
});
