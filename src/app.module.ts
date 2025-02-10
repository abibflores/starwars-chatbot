import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AiProcessingModule } from './ai-processing/ai-processing.module';
import { DatabaseModule } from './database/database.module';
import { ChatbotModule } from './chatbot/chatbot.module';
import { SwapiModule } from './swapi/swapi.module';

@Module({
  imports: [AiProcessingModule, DatabaseModule, ChatbotModule, SwapiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
