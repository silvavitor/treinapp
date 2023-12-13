import { Test, TestingModule } from '@nestjs/testing';
import { TrainingExecutionsService } from './training-executions.service';

describe('TrainingExecutionsService', () => {
  let service: TrainingExecutionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrainingExecutionsService],
    }).compile();

    service = module.get<TrainingExecutionsService>(TrainingExecutionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
