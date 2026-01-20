import { Injectable } from '@nestjs/common';
import { CreateBansosValidationDto } from './dto/create-bansos-validation.dto';
import { UpdateBansosValidationDto } from './dto/update-bansos-validation.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BansosValidationsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateBansosValidationDto) {
    return this.prisma.bansosValidation.create({
      data: {
        validationId: dto.validationId,
        userId: dto.userId,
        citizenId: dto.citizenId,
        validationResult: dto.validationResult,
        notes: dto.notes,
      },
    });
  }

  async findAll() {
    return this.prisma.bansosValidation.findMany({
      include: {
        citizen: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.bansosValidation.findUnique({
      where: { validationId: id },
      include: { citizen: true },
    });
  }

  async update(id: string, dto: UpdateBansosValidationDto) {
    return this.prisma.bansosValidation.update({
      where: { validationId: id },
      data: dto,
    });
  }

  async remove(id: string) {
    return this.prisma.bansosValidation.delete({
      where: { validationId: id },
    });
  }
}