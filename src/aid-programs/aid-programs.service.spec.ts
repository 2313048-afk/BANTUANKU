import { Test, TestingModule } from '@nestjs/testing';
import { AidProgramsService } from './aid-programs.service';

describe('AidProgramsService', () => {
  let service: AidProgramsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AidProgramsService],
    }).compile();

    service = module.get<AidProgramsService>(AidProgramsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
