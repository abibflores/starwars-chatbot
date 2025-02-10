import { Module } from '@nestjs/common';
import { ChatbotService } from './chatbot.service';
import { ChatbotController } from './chatbot.controller';
import { AiProcessingModule } from '../ai-processing/ai-processing.module'; // Importar el módulo de OpenAI
import { DatabaseModule } from '../database/database.module'; // Importar el módulo de base de datos
import { SwapiModule } from '../swapi/swapi.module'; // Importar el módulo de SWAPI

@Module({
  imports: [
    AiProcessingModule, // Lógica de OpenAI
    DatabaseModule, // Cacheo en base de datos
    SwapiModule, // Interacción con la API de Star Wars
  ],
  controllers: [ChatbotController],
  providers: [ChatbotService],
})
export class ChatbotModule {}
