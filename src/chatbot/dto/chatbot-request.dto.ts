import { ApiProperty } from '@nestjs/swagger';

export class ChatbotRequestDto {
  @ApiProperty({
    description:
      'La consulta del usuario sobre Star Wars (personaje o película)',
    example: 'Quiero saber más sobre Luke Skywalker',
  })
  query: string;
}
