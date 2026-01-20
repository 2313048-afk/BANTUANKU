import { Injectable } from '@nestjs/common';
import { CreateDistributionReportDto } from './dto/create-distribution-report.dto';
import { UpdateDistributionReportDto } from './dto/update-distribution-report.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DistributionReportsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateDistributionReportDto) {
    return this.prisma.distributionReport.create({
      data: {
        reportId: dto.reportId,
        governmentId: dto.governmentId,
        aidId: dto.aidId,
        totalRecipients: dto.totalRecipients,
        reportDate: dto.reportDate ? new Date(dto.reportDate) : null,
      },
    });
  }

  async findAll() {
    return this.prisma.distributionReport.findMany({
      include: {
        aidProgram: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.distributionReport.findUnique({
      where: { reportId: id },
      include: { aidProgram: true },
    });
  }

  async update(id: string, dto: UpdateDistributionReportDto) {
    return this.prisma.distributionReport.update({
      where: { reportId: id },
      data: {
        ...dto,
        reportDate: dto.reportDate ? new Date(dto.reportDate) : undefined,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.distributionReport.delete({
      where: { reportId: id },
    });
  }
}