// equipo.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Equipo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column({ type: 'varchar', length: 20, default: 'ACTIVO' })
  estado: string; // ACTIVO, INACTIVO, ELIMINADO, etc.
}