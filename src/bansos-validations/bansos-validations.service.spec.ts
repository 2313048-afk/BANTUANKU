import { Test, TestingModule } from '@nestjs/testing';
import { BansosValidationsService } from './bansos-validations.service';

describe('BansosValidationsService', () => {
  let service: BansosValidationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BansosValidationsService],
    }).compile();

    service = module.get<BansosValidationsService>(BansosValidationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
