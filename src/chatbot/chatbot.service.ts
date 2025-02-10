import { Injectable } from '@nestjs/common';
import { AIProcessingService } from '../ai-processing/ai-processing.service';
import { DatabaseService } from '../database/database.service';
import { SwapiService } from '../swapi/swapi.service';
import { SwapiCharacter, SwapiMovie } from 'src/types/swapi.types';

@Injectable()
export class ChatbotService {
  constructor(
    private readonly aiProcessingService: AIProcessingService,
    private readonly databaseService: DatabaseService,
    private readonly swapiService: SwapiService,
  ) {}

  async handleQuery(query: string) {
    // 1. Analizar la consulta con OpenAI
    const aiResponse = await this.aiProcessingService.classifyQuery(query);
    if (!aiResponse) {
      return { message: 'No se pudo procesar tu consulta.' };
    }

    const { tipo, nombre } = aiResponse;

    // 2. Verificar si la respuesta está cacheada en la base de datos
    const cachedResponse = await this.databaseService.getCachedResponse(
      tipo,
      nombre,
    );

    if (cachedResponse) {
      return JSON.parse(cachedResponse.response) as { [key: string]: any };
    }

    // 3. Consultar SWAPI si no está en la base de datos
    let swapiResponse: SwapiCharacter | SwapiMovie | null = null;
    if (tipo === 'personaje') {
      swapiResponse = await this.swapiService.getCharacter(nombre);
    } else if (tipo === 'película') {
      swapiResponse = await this.swapiService.getMovie(nombre);
    }

    if (!swapiResponse) {
      return { message: `No se encontró información sobre ${nombre}` };
    }

    // 4. Guardar la respuesta en la base de datos
    await this.databaseService.saveResponse(
      tipo,
      nombre,
      JSON.stringify(swapiResponse),
    );

    return swapiResponse;
  }
}
