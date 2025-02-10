import { Module } from '@nestjs/common';
import { SwapiService } from './swapi.service';
import { SwapiController } from './swapi.controller';

@Module({
  providers: [SwapiService],
  exports: [SwapiService],
  controllers: [SwapiController],
})
export class SwapiModule {}
