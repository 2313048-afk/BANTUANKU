import { Test, TestingModule } from '@nestjs/testing';
import { DistributionReportsController } from './distribution-reports.controller';
import { DistributionReportsService } from './distribution-reports.service';

describe('DistributionReportsController', () => {
  let controller: DistributionReportsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DistributionReportsController],
      providers: [DistributionReportsService],
    }).compile();

    controller = module.get<DistributionReportsController>(DistributionReportsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
