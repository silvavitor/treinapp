import { Test, TestingModule } from '@nestjs/testing';
import { TrainingExecutionsController } from './training-executions.controller';
import { TrainingExecutionsService } from './training-executions.service';

describe('TrainingExecutionsController', () => {
  let controller: TrainingExecutionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrainingExecutionsController],
      providers: [TrainingExecutionsService],
    }).compile();

    controller = module.get<TrainingExecutionsController>(TrainingExecutionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
