import { Test, TestingModule } from '@nestjs/testing';
import { UtillesController } from './utilles.controller';
import { UtillesService } from './utilles.service';

describe('UtillesController', () => {
  let controller: UtillesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UtillesController],
      providers: [UtillesService],
    }).compile();

    controller = module.get<UtillesController>(UtillesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
