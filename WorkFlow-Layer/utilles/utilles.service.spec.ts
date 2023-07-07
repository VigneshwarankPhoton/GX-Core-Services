import { Test, TestingModule } from '@nestjs/testing';
import { UtillesService } from './utilles.service';

describe('UtillesService', () => {
  let service: UtillesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UtillesService],
    }).compile();

    service = module.get<UtillesService>(UtillesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
