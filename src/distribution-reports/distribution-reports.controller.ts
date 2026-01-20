import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DistributionReportsService } from './distribution-reports.service';
import { CreateDistributionReportDto } from './dto/create-distribution-report.dto';
import { UpdateDistributionReportDto } from './dto/update-distribution-report.dto';

@Controller('distribution-reports')
export class DistributionReportsController {
  constructor(private readonly distributionReportsService: DistributionReportsService) {}

  @Post()
  create(@Body() createDistributionReportDto: CreateDistributionReportDto) {
    return this.distributionReportsService.create(createDistributionReportDto);
  }

  @Get()
  findAll() {
    return this.distributionReportsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.distributionReportsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDistributionReportDto: UpdateDistributionReportDto) {
    return this.distributionReportsService.update(id, updateDistributionReportDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.distributionReportsService.remove(id);
  }
}
