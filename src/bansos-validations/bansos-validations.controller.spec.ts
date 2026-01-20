import { Test, TestingModule } from '@nestjs/testing';
import { BansosValidationsController } from './bansos-validations.controller';
import { BansosValidationsService } from './bansos-validations.service';

describe('BansosValidationsController', () => {
  let controller: BansosValidationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BansosValidationsController],
      providers: [BansosValidationsService],
    }).compile();

    controller = module.get<BansosValidationsController>(BansosValidationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
