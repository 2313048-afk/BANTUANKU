import { Module } from '@nestjs/common';
import { AidRecipientsService } from './aid-recipients.service';
import { AidRecipientsController } from './aid-recipients.controller';

@Module({
  controllers: [AidRecipientsController],
  providers: [AidRecipientsService],
})
export class AidRecipientsModule {}
