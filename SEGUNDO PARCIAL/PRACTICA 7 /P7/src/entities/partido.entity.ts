// partido.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Equipo } from './equipo.entity';
import { Torneo } from './torneo.entity';

@Entity()
export class Partido {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Equipo, (equipo) => equipo.id)
  equipo1: Equipo;

  @ManyToOne(() => Equipo, (equipo) => equipo.id)
  equipo2: Equipo;

  @ManyToOne(() => Torneo, (torneo) => torneo.id)
  torneo: Torneo;

  @Column()
  fecha: Date;

  @Column()
  resultado: string;

  @Column({ type: 'varchar', length: 20, default: 'PENDIENTE' })
  estado: string; // PENDIENTE, JUGADO, SUSPENDIDO, etc.
}