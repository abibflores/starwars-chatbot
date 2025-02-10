import { Controller, Get, Query } from '@nestjs/common';
import { SwapiService } from './swapi.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('swapi')
@ApiTags('swapi')
export class SwapiController {
  constructor(private readonly swapiService: SwapiService) {}

  @Get('character')
  @ApiOperation({ summary: 'Obtener información de un personaje de Star Wars' })
  @ApiResponse({ status: 200, description: 'Personaje encontrado' })
  @ApiResponse({ status: 404, description: 'Personaje no encontrado' })
  async getCharacter(@Query('name') name: string) {
    return await this.swapiService.getCharacter(name);
  }

  @Get('movie')
  @ApiOperation({ summary: 'Obtener información de una película de Star Wars' })
  @ApiResponse({ status: 200, description: 'Película encontrada' })
  @ApiResponse({ status: 404, description: 'Película no encontrada' })
  async getMovie(@Query('title') title: string) {
    return await this.swapiService.getMovie(title);
  }
}
