import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { DatabaseService } from './database.service';
import { CachedResponse } from './entities/cached-response/cached-response';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite', // Archivo de la base de datos
      entities: [CachedResponse],
      synchronize: true, // Solo para desarrollo, crea tablas automáticamente
    }),
    TypeOrmModule.forFeature([CachedResponse]),
  ],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
