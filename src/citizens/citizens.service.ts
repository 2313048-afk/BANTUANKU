import { Injectable } from '@nestjs/common';
import { CreateCitizenDto } from './dto/create-citizen.dto';
import { UpdateCitizenDto } from './dto/update-citizen.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CitizensService {
  constructor(private prisma: PrismaService) {}

  async create(createCitizenDto: CreateCitizenDto) {
    return this.prisma.citizen.create({
      data: {
        rtId: createCitizenDto.rtId ?? null,
        idCardNumber: createCitizenDto.idCardNumber,
        familyCardNumber: createCitizenDto.familyCardNumber ?? null,
        firstName: createCitizenDto.firstName,
        birthDate: createCitizenDto.birthDate ? new Date(createCitizenDto.birthDate) : null,
        gender: createCitizenDto.gender ?? null,
        age: createCitizenDto.age ? Number(createCitizenDto.age) : null,
        address: createCitizenDto.address ?? null,
        occupation: createCitizenDto.occupation ?? null,
        monthlyIncome: createCitizenDto.monthlyIncome ?? null,
        aidStatus: createCitizenDto.aidStatus ?? null,
      },
    });
  }

  async findAll() {
    return this.prisma.citizen.findMany({
      include: {
        rt: true,
      }
    });
  }

  async findOne(id: string) {
    return this.prisma.citizen.findUnique({
      where: { citizenId: id },
    });
  }

  async update(id: string, updateCitizenDto: UpdateCitizenDto) {
    return this.prisma.citizen.update({
      where: { citizenId: id },
      data: {
        address: updateCitizenDto.address,
        aidStatus: updateCitizenDto.aidStatus,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.citizen.delete({
      where: { citizenId: id },
    });
  }
}