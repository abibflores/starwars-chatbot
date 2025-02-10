import { Module } from '@nestjs/common';
import { AIProcessingService } from './ai-processing.service';

@Module({
  providers: [AIProcessingService],
  exports: [AIProcessingService],
})
export class AiProcessingModule {}
