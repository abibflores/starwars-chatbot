import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CachedResponse } from './entities/cached-response/cached-response';

@Injectable()
export class DatabaseService {
  constructor(
    @InjectRepository(CachedResponse)
    private readonly cachedResponseRepo: Repository<CachedResponse>,
  ) {
    console.log(
      'DatabaseService initialized - CachedResponse repository loaded',
    );
  }

  // Buscar una respuesta en la base de datos
  async getCachedResponse(
    tipo: string,
    nombre: string,
  ): Promise<CachedResponse | null> {
    return this.cachedResponseRepo.findOne({ where: { tipo, nombre } });
  }

  // Guardar una nueva respuesta en la base de datos
  async saveResponse(
    tipo: string,
    nombre: string,
    response: string,
  ): Promise<CachedResponse> {
    const newCache = this.cachedResponseRepo.create({ tipo, nombre, response });
    return this.cachedResponseRepo.save(newCache);
  }
}
