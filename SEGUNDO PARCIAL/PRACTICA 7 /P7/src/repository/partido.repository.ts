import { EntityRepository, FindOneOptions, Repository } from 'typeorm';
import { Partido } from '../entities/partido.entity';
import { Equipo } from '../entities/equipo.entity';
import { Torneo } from '../entities/torneo.entity';

@EntityRepository(Partido)
export class PartidoRepository extends Repository<Partido> {
  find(arg0: { where: any; }): Partido[] | PromiseLike<Partido[]> {
    throw new Error('Method not implemented.');
  }
  async findAll(): Promise<Partido[]> {
    return this.find({
      relations: ['equipoLocal', 'equipoVisitante', 'torneo'],
    });
  }

  async findOne(options: FindOneOptions<Partido>): Promise<Partido | null> {
    return this.findOne(options);
  }
  async createPartido(partido: Partido): Promise<Partido> {
    return this.save(partido);
  }

  async updatePartido(partido: Partido): Promise<Partido> {
    return this.save(partido);
  }

  async deletePartido(id: number): Promise<void> {
    await this.delete(id);
  }

  async findPartidosByTorneo(torneoId: number): Promise<Partido[]> {
    return this.find({
      where: { torneo: { id: torneoId } },
      relations: ['equipoLocal', 'equipoVisitante', 'torneo'],
    });
  }

  async findPartidosByEquipo(equipoId: number): Promise<Partido[]> {
    return this.find({
      where: [
        { equipoLocal: { id: equipoId } },
        { equipoVisitante: { id: equipoId } },
      ],
      relations: ['equipoLocal', 'equipoVisitante', 'torneo'],
    });
  }
}