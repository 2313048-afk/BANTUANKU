import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RolesService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateRoleDto) {
    return this.prisma.role.create({
      data: {
        roleId: dto.roleId,
        roleName: dto.roleName,
      },
    });
  }

  async findAll() {
    return this.prisma.role.findMany();
  }

  async findOne(id: string) {
    return this.prisma.role.findUnique({
      where: { roleId: id },
    });
  }

  async update(id: string, dto: UpdateRoleDto) {
    return this.prisma.role.update({
      where: { roleId: id },
      data: dto,
    });
  }

  async remove(id: string) {
    return this.prisma.role.delete({
      where: { roleId: id },
    });
  }
}