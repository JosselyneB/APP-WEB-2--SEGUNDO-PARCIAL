import { Equipo } from '@prisma/client';
import { EquipoDatasource } from '../datesources/equipoDatasource';

export class EquipoRepository {
  private datasource: EquipoDatasource;

  constructor() {
    this.datasource = new EquipoDatasource();
  }

  async findAll(): Promise<Equipo[]> {
    return this.datasource.findAll();
  }

  async findById(id: number): Promise<Equipo | null> {
    return this.datasource.findById(id);
  }

  async create(data: Omit<Equipo, 'id'>): Promise<Equipo> {
    return this.datasource.create(data);
  }

  async update(id: number, data: Partial<Equipo>): Promise<Equipo> {
    return this.datasource.update(id, data);
  }

  async delete(id: number): Promise<void> {
    return this.datasource.delete(id);
  }
}

