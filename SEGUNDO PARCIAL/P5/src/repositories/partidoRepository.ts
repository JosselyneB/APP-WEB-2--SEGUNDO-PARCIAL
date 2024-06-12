import { Partido } from '@prisma/client';
import { PartidoDatasource } from '../datesources/partidoDatasource';

export class PartidoRepository {
  private datasource: PartidoDatasource;

  constructor() {
    this.datasource = new PartidoDatasource();
  }

  async findAll(): Promise<Partido[]> {
    return this.datasource.findAll();
  }

  async findById(id: number): Promise<Partido | null> {
    return this.datasource.findById(id);
  }

  async create(data: Omit<Partido, 'id'>): Promise<Partido> {
    return this.datasource.create(data);
  }

  async update(id: number, data: Partial<Partido>): Promise<Partido> {
    return this.datasource.update(id, data);
  }

  async delete(id: number): Promise<void> {
    return this.datasource.delete(id);
  }
}
