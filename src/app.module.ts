import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CitizensModule } from './citizens/citizens.module';
import { AidProgramsModule } from './aid-programs/aid-programs.module';
import { AidRecipientsModule } from './aid-recipients/aid-recipients.module';
import { BansosValidationsModule } from './bansos-validations/bansos-validations.module';
import { DistributionReportsModule } from './distribution-reports/distribution-reports.module';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    PrismaModule,
    CitizensModule,
    AidProgramsModule,
    AidRecipientsModule,
    BansosValidationsModule,
    DistributionReportsModule,
    AuthModule,
    RolesModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
