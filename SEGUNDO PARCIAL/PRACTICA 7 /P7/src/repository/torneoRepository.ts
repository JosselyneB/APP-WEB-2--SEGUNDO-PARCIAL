
import { EntityRepository, Repository } from 'typeorm';
import { Torneo } from '../entities/torneo.entity';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';


@EntityRepository(Torneo)
export class TorneoRepository extends Repository<Torneo> {
    find(arg0: { where: any; }): Torneo[] | PromiseLike<Torneo[]> {
      throw new Error('Method not implemented.');
    }
    save(torneo: Torneo): Torneo | PromiseLike<Torneo> {
      throw new Error('Method not implemented.');
    }
    async findOne(options: FindOneOptions<Torneo>, p0?: { relations: string[]; }): Promise<Torneo | null> {
        return this.findOne(options, { relations: ['partidos'] });
    }
    
    async createTorneo(torneo: Torneo): Promise<Torneo> {
        return this.save(torneo);
    }
    
    
    async deleteTorneo(id: number): Promise<void> {
        await this.delete(id);
    }
    
    async findTorneosByPartido(partidoId: number): Promise<Torneo[]> {
        return this.find({
            where: { partidos: { id: partidoId } },
            relations: ['partidos'],
        });
    }
}
