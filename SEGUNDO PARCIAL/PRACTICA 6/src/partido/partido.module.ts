import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartidoService } from './partido.service';
import { PartidoController } from './partido.controller';
import { Partido } from './entities/partido.entity';
import { Equipo } from '../equipo/entities/equipo.entity';
import { Torneo } from '../torneo/entities/torneo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Partido, Equipo, Torneo])],
  providers: [PartidoService],
  controllers: [PartidoController],
})
export class PartidoModule {}
