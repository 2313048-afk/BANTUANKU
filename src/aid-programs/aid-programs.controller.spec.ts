import { Test, TestingModule } from '@nestjs/testing';
import { AidProgramsController } from './aid-programs.controller';
import { AidProgramsService } from './aid-programs.service';

describe('AidProgramsController', () => {
  let controller: AidProgramsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AidProgramsController],
      providers: [AidProgramsService],
    }).compile();

    controller = module.get<AidProgramsController>(AidProgramsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
