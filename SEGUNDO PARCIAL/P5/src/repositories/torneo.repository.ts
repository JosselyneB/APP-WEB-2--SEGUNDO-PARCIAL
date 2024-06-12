import { Torneo } from '@prisma/client';
import { TorneoDatasource } from '../datesources/torneoDatasource';

export class TorneoRepository {
  private datasource: TorneoDatasource;

  constructor() {
    this.datasource = new TorneoDatasource();
  }

  async findAll(): Promise<Torneo[]> {
    return this.datasource.findAll();
  }

  async findById(id: number): Promise<Torneo | null> {
    return this.datasource.findById(id);
  }

  async create(data: Omit<Torneo, 'id'>): Promise<Torneo> {
    return this.datasource.create(data);
  }

  async update(id: number, data: Partial<Torneo>): Promise<Torneo> {
    return this.datasource.update(id, data);
  }

  async delete(id: number): Promise<void> {
    return this.datasource.delete(id);
  }
}
