import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cached_responses') // Nombre de la tabla
export class CachedResponse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipo: string; // Ejemplo: "película" o "personaje"

  @Column()
  nombre: string; // Ejemplo: "Return of the Jedi" o "Luke Skywalker"

  @Column('text')
  response: string; // Respuesta en formato JSON

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
