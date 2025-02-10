import { ApiProperty } from '@nestjs/swagger';

export class ChatbotResponseDto {
  @ApiProperty({ example: 'Luke Skywalker' })
  name: string;

  @ApiProperty({ example: '172' })
  height: string;

  @ApiProperty({ example: '19BBY' })
  birth_year: string;

  @ApiProperty({ example: 'male' })
  gender: string;

  @ApiProperty({
    example: ['A New Hope (1977)', 'The Empire Strikes Back (1980)'],
  })
  films: string[];
}
