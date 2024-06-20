import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Equipo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ default: 'activo' })
  estado: string;

  constructor(nombre?: string) {
    this.id = 0; // Inicialización por defecto
    this.nombre = nombre || ''; // Inicialización por defecto
    this.estado = 'activo'; // Inicialización por defecto
  }
}

