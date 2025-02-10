import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Star Wars Chatbot API')
    .setDescription(
      'API para consultar personajes y películas de Star Wars usando SWAPI y OpenAI',
    )
    .setVersion('1.0')
    .addTag('chatbot')
    .addTag('swapi')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // URL: http://localhost:3000/api

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
