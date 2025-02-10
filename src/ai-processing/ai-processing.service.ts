import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { OpenAIChatCompletionResponse } from 'src/types/openai.types';

@Injectable()
export class AIProcessingService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY || '',
    });
  }

  async classifyQuery(query: string) {
    try {
      const response: OpenAIChatCompletionResponse =
        (await this.openai.chat.completions.create({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content:
                'Analiza la siguiente pregunta y responde con un JSON si se trata de un \'personaje\' o una \'película\' de Star Wars y extrae el nombre correcto. Ejemplo de respuesta esperada: { "tipo": "película", "nombre": "Return of the Jedi" }',
            },
            {
              role: 'user',
              content: query,
            },
          ],
          max_tokens: 50,
          temperature: 0.3,
        })) as OpenAIChatCompletionResponse;

      return response.choices[0]?.message?.content
        ? (JSON.parse(response.choices[0].message.content) as {
            tipo: string;
            nombre: string;
          })
        : null;
    } catch (error) {
      console.error('Error en OpenAI:', error);
      return null;
    }
  }
}
