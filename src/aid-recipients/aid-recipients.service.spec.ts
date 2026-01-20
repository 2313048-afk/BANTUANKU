import { Test, TestingModule } from '@nestjs/testing';
import { AidRecipientsService } from './aid-recipients.service';

describe('AidRecipientsService', () => {
  let service: AidRecipientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AidRecipientsService],
    }).compile();

    service = module.get<AidRecipientsService>(AidRecipientsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
