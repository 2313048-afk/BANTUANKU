import { Module } from '@nestjs/common';
import { DistributionReportsService } from './distribution-reports.service';
import { DistributionReportsController } from './distribution-reports.controller';

@Module({
  controllers: [DistributionReportsController],
  providers: [DistributionReportsService],
})
export class DistributionReportsModule {}
