// torneo.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Partido } from './partido.entity';

@Entity()
export class Torneo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  fechaInicio: Date;

  @Column()
  fechaFin: Date;

  @Column({ type: 'varchar', length: 20, default: 'ACTIVO' })
  estado: string; // ACTIVO, INACTIVO, ELIMINADO, etc.

  @OneToMany(() => Partido, (partido) => partido.torneo)
  partidos: Partido[];
}