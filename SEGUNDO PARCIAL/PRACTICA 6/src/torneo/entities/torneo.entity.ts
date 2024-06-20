import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Torneo } from '../torneo/entities/torneo.entity'; // Ajusta la ruta según la estructura de tu proyecto


@Entity()
export class Torneo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ default: true })
  estado: boolean;
}
