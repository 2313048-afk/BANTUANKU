import { Test, TestingModule } from '@nestjs/testing';
import { AidRecipientsController } from './aid-recipients.controller';
import { AidRecipientsService } from './aid-recipients.service';

describe('AidRecipientsController', () => {
  let controller: AidRecipientsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AidRecipientsController],
      providers: [AidRecipientsService],
    }).compile();

    controller = module.get<AidRecipientsController>(AidRecipientsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
