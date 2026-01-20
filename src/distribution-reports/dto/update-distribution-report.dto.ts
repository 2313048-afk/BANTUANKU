import { PartialType } from '@nestjs/mapped-types';
import { CreateDistributionReportDto } from './create-distribution-report.dto';

export class UpdateDistributionReportDto extends PartialType(CreateDistributionReportDto) {}
