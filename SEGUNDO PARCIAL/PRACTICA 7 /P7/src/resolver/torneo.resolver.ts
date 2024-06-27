import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TorneoService } from 'src/service/torneoService';
import { Torneo } from 'src/entities/torneo.entity';

@Resolver()
export class TorneoResolver {
  constructor(private readonly torneoService: TorneoService) {}

  @Query('torneos')
  async findAll(): Promise<Torneo[]> {
    return await this.torneoService.findAll();
  }

  @Query('torneo')
  async findOne(@Args('id') id: number): Promise<Torneo> {
    return await this.torneoService.findOne(id);
  }

  @Mutation('createTorneo')
  async create(@Args('toreno') torneo: Torneo): Promise<Torneo> {
    return await this.torneoService.create(torneo);
  }

  @Mutation('updateTorneo')
  async update(@Args('id') id: number, @Args('torneo') toreno: Torneo): Promise<Torneo> {
    return await this.torneoService.update(id, toreno);
  }

  @Mutation('deleteTorneo')
  async delete(@Args('id') id: number): Promise<void> {
    await this.torneoService.delete(id);
  }
}