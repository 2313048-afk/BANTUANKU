import { Module } from '@nestjs/common';
import { BansosValidationsService } from './bansos-validations.service';
import { BansosValidationsController } from './bansos-validations.controller';

@Module({
  controllers: [BansosValidationsController],
  providers: [BansosValidationsService],
})
export class BansosValidationsModule {}
