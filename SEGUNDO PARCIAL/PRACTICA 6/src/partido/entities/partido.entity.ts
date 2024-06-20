import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Equipo } from '../../equipo/entities/equipo.entity';
import { Torneo } from '../../torneo/entities/torneo.entity';

@Entity()
export class Partido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fecha: Date;

  @Column()
  resultado: string;

  @ManyToOne(() => Equipo)
  local: Equipo;

  @ManyToOne(() => Equipo)
  visitante: Equipo;

  @ManyToOne(() => Torneo)
  torneo: Torneo;

  @Column({ default: true })
  estado: boolean;

  constructor(fecha?: Date, resultado?: string, local?: Equipo, visitante?: Equipo, torneo?: Torneo) {
    this.id = 0; // Inicialización por defecto
    this.fecha = fecha || new Date(); // Inicialización por defecto
    this.resultado = resultado || ''; // Inicialización por defecto
    this.local = local || new Equipo(); // Inicialización por defecto
    this.visitante = visitante || new Equipo(); // Inicialización por defecto
    this.torneo = torneo || new Torneo(); // Inicialización por defecto
    this.estado = true; // Inicialización por defecto
  }
}

