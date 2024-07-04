import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('partido')
export class Partido {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('integer')
  idTorneo: number;

  @Column('integer')
  idEquipo1: number;

  @Column('integer')
  idEquipo2: number;

  @Column('integer')
  golesEquipo1: number;

  @Column('integer')
  golesEquipo2: number;

  @Column('text', { nullable: true })
  observacion: string;

  @Column('text')
  estado: string; 
}