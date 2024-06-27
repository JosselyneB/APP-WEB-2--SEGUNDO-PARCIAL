import { EntityRepository, Repository } from 'typeorm';
import { Equipo } from '../entities/equipo.entity';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';


@EntityRepository(Equipo)
export class EquipoRepository extends Repository<Equipo> {
  find(arg0: { where: any; }): Equipo[] | PromiseLike<Equipo[]> {
    throw new Error('Method not implemented.');
  }
  save(equipo: Equipo): Equipo | PromiseLike<Equipo> {
    throw new Error('Method not implemented.');
  }
  async findAll(): Promise<Equipo[]> {
    return this.find({ relations: ['partidos'] });
  }

  async findOne(options: FindOneOptions<Equipo>, p0?: { relations: string[]; }): Promise<Equipo | null> {
    return this.findOne(options, { relations: ['partidos'] });
  }

  async createEquipo(equipo: Equipo): Promise<Equipo> {
    return this.save(equipo);
  }

  async updateEquipo(equipo: Equipo): Promise<Equipo> {
    return this.save(equipo);
  }

  async deleteEquipo(id: number): Promise<void> {
    await this.delete(id);
  }

  async findEquiposByTorneo(torneoId: number): Promise<Equipo[]> {
    return this.find({
      where: { torneos: { id: torneoId } } as Partial<Equipo>,
      relations: ['partidos', 'torneos'],
    });
  }
}