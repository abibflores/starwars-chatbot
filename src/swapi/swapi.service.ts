import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import fetch from 'node-fetch';
import {
  SwapiCharacterResponse,
  SwapiCharacter,
  SwapiMovieResponse,
  SwapiMovie,
} from 'src/types/swapi.types';

@Injectable()
export class SwapiService {
  private readonly SWAPI_BASE_URL = 'https://swapi.dev/api';

  // Método para obtener información de un personaje
  async getCharacter(name: string): Promise<SwapiCharacter | null> {
    try {
      const response = await fetch(
        `${this.SWAPI_BASE_URL}/people/?search=${name}`,
      );
      if (!response.ok) {
        throw new HttpException(
          `Error al consultar personaje "${name}"`,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }

      const data = (await response.json()) as SwapiCharacterResponse;
      if (data.results.length === 0) {
        throw new HttpException(
          `Personaje "${name}" no encontrado`,
          HttpStatus.NOT_FOUND,
        );
      }

      return data.results[0];
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error al consultar personaje "${name}":`, error.message);
      } else {
        console.error(`Error desconocido al consultar personaje "${name}"`);
      }
      throw new HttpException(
        'Error al consultar la API de SWAPI',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // Método para obtener información de una película
  async getMovie(title: string): Promise<SwapiMovie | null> {
    try {
      const response = await fetch(
        `${this.SWAPI_BASE_URL}/films/?search=${title}`,
      );
      if (!response.ok) {
        throw new HttpException(
          `Error al consultar película "${title}"`,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }

      const data = (await response.json()) as SwapiMovieResponse;
      if (data.results.length === 0) {
        throw new HttpException(
          `Película "${title}" no encontrada`,
          HttpStatus.NOT_FOUND,
        );
      }

      return data.results[0];
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error al consultar película "${title}":`, error.message);
      } else {
        console.error(`Error desconocido al consultar película "${title}"`);
      }
      throw new HttpException(
        'Error al consultar la API de SWAPI',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
