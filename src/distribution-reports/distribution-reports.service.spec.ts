import { Test, TestingModule } from '@nestjs/testing';
import { DistributionReportsService } from './distribution-reports.service';

describe('DistributionReportsService', () => {
  let service: DistributionReportsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DistributionReportsService],
    }).compile();

    service = module.get<DistributionReportsService>(DistributionReportsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
