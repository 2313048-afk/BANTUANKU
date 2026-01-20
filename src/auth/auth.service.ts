import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateAuthDto } from './dto/create-auth.dto'; 
import { LoginDto } from './dto/login.dto'; 

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(createAuthDto: CreateAuthDto) {
    const hashedPassword = await bcrypt.hash(createAuthDto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        userId: createAuthDto.userId, 
        username: createAuthDto.username,
        password: hashedPassword,
        roleId: createAuthDto.idRole,
      },
    });

    return { message: 'User berhasil didaftarkan', user };
  }

  async login(loginDto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { username: loginDto.username },
    });

    if (!user) throw new UnauthorizedException('Username salah');

    if (!user.password) {
      throw new UnauthorizedException('Password belum diset');
    }

    const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);
    if (!isPasswordValid) throw new UnauthorizedException('Password salah');

    const payload = { sub: user.userId, username: user.username, role: user.roleId };
    
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}