import { Injectable } from '@nestjs/common';
import { CreateAidRecipientDto } from './dto/create-aid-recipient.dto';
import { UpdateAidRecipientDto } from './dto/update-aid-recipient.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AidRecipientsService {
  constructor(private prisma: PrismaService) {}

 async create(dto: CreateAidRecipientDto) {
  return this.prisma.aidRecipient.create({
    data: {
      recipientId: dto.recipientId,
      citizenId: dto.citizenId,
      aidId: dto.aidId,
      receiveDate: dto.receiveDate ? new Date(dto.receiveDate) : null,
      recipientStatus: dto.recipientStatus || null,
    },
  });
}

  async findAll() {
    return this.prisma.aidRecipient.findMany({
      include: {
        citizen: true,    
        aidProgram: true, 
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.aidRecipient.findUnique({
      where: { recipientId: id },
      include: { citizen: true, aidProgram: true },
    });
  }

  async update(id: string, dto: UpdateAidRecipientDto) {
    return this.prisma.aidRecipient.update({
      where: { recipientId: id },
      data: {
        recipientStatus: dto.recipientStatus,
        receiveDate: dto.receiveDate ? new Date(dto.receiveDate) : undefined,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.aidRecipient.delete({
      where: { recipientId: id },
    });
  }
}