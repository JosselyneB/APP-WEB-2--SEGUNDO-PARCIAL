import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TorneoService } from './torneo.service';
import { TorneoController } from './torneo.controller';
import { Torneo } from './entities/torneo.entity';
import { Equipo } from '../equipo/entities/equipo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Torneo, Equipo])],
  providers: [TorneoService],
  controllers: [TorneoController],
})
export class TorneoModule {}
