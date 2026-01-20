import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateAidProgramDto } from './dto/create-aid-program.dto';
import { UpdateAidProgramDto } from './dto/update-aid-program.dto';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class AidProgramsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateAidProgramDto) {
    if (!dto.aidId) {
      throw new BadRequestException('aidId is required');
    }
    return this.prisma.aidProgram.create({
      data: {
        aidId: dto.aidId,
        aidName: dto.aidName,
        descriptionOfSocialAssistance: dto.descriptionOfSocialAssistance,
        startDate: dto.startDate ? new Date(dto.startDate) : null,
        endDate: dto.endDate ? new Date(dto.endDate) : null,
        status: dto.status,
      },
    });
  }

  async findAll() {
    return this.prisma.aidProgram.findMany();
  }

  async findOne(id: string) {
    return this.prisma.aidProgram.findUnique({
      where: { aidId: id },
      include: { aidRecipients: true },
    });
  }

  async update(id: string, dto: UpdateAidProgramDto) {
    return this.prisma.aidProgram.update({
      where: { aidId: id },
      data: {
        ...dto,
        startDate: dto.startDate ? new Date(dto.startDate) : undefined,
        endDate: dto.endDate ? new Date(dto.endDate) : undefined,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.aidProgram.delete({
      where: { aidId: id },
    });
  }
}