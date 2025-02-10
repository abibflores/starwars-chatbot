import { Controller, Get, Query } from '@nestjs/common';
import { SwapiService } from './swapi.service';

@Controller('swapi')
export class SwapiController {
  constructor(private readonly swapiService: SwapiService) {}

  @Get('character')
  async getCharacter(@Query('name') name: string) {
    return await this.swapiService.getCharacter(name);
  }

  @Get('movie')
  async getMovie(@Query('title') title: string) {
    return await this.swapiService.getMovie(title);
  }
}
