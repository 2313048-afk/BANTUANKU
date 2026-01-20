import { Module } from '@nestjs/common';
import { AidProgramsService } from './aid-programs.service';
import { AidProgramsController } from './aid-programs.controller';

@Module({
  controllers: [AidProgramsController],
  providers: [AidProgramsService],
})
export class AidProgramsModule {}
