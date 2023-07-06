import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let controller: AppController;
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    controller = module.get<AppController>(AppController);
    service = module.get<AppService>(AppService);
  });

  describe('getHello', () => {
    it('should return the message from AppService', () => {
      const expectedResult = 'Hello, NestJS!';

      jest.spyOn(service, 'getHello').mockReturnValue(expectedResult);

      expect(controller.getHello()).toBe(expectedResult);
      expect(service.getHello).toHaveBeenCalled();
    });
  });
});
