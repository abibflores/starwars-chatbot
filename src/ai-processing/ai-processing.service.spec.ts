import { Test, TestingModule } from '@nestjs/testing';
import { AIProcessingService } from './ai-processing.service';

describe('AIProcessingService', () => {
  let service: AIProcessingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AIProcessingService],
    }).compile();

    service = module.get<AIProcessingService>(AIProcessingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
