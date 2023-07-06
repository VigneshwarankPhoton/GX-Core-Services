import { Test, TestingModule } from '@nestjs/testing';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

describe('UsersResolver', () => {
  let resolver: UsersResolver;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersResolver, UsersService],
    }).compile();

    resolver = module.get<UsersResolver>(UsersResolver);
    service = module.get<UsersService>(UsersService);
  });

  describe('createUser', () => {
    it('should create a new user', async () => {
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

      // eslint-disable-next-line max-len
      expect(resolver.createUser(createUserInput)).resolves.toEqual(expectedResult);
      expect(service.create).toHaveBeenCalledWith(createUserInput);
    });
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const expectedResult = [{ 
        name: 'John Doe',
        email: 'test@gmail',
        age: 22,
        address: 'Mock address',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }];

      jest.spyOn(service, 'findAll').mockResolvedValue(expectedResult);

      expect(resolver.findAll()).resolves.toEqual(expectedResult);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a user by id', async () => {
      const userId = '1';
      const expectedResult = { 
        name: 'John Doe',
        email: 'test@gmail',
        age: 22,
        address: 'Mock address',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
       };

      jest.spyOn(service, 'findOne').mockResolvedValue(expectedResult);

      expect(resolver.findOne(userId)).resolves.toEqual(expectedResult);
      expect(service.findOne).toHaveBeenCalledWith(userId);
    });
  });

  describe('updateUser', () => {
    it('should update a user', async () => {
      const updateUserInput: UpdateUserInput = { id: '1', name: 'Jane Doe' };
      const expectedResult = {
        name: 'John Doe',
        email: 'test@gmail',
        age: 22,
        address: 'Mock address',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
       };

      jest.spyOn(service, 'update').mockResolvedValue(expectedResult);

      // eslint-disable-next-line max-len
      expect(resolver.updateUser(updateUserInput)).resolves.toEqual(expectedResult);
      // eslint-disable-next-line max-len
      expect(service.update).toHaveBeenCalledWith(updateUserInput.id, updateUserInput);
    });
  });

  describe('removeUser', () => {
    it('should remove a user', async () => {
      const userId = '1';
      // eslint-disable-next-line max-len
      const expectedResult = `Product with id ${userId} has been deleted successfully`;

      jest.spyOn(service, 'remove').mockResolvedValue(expectedResult);

      expect(resolver.removeUser(userId)).resolves.toEqual(expectedResult);
      expect(service.remove).toHaveBeenCalledWith(userId);
    });
  });
});
