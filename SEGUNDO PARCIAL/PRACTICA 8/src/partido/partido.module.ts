import { Module } from '@nestjs/common';
import { PartidoService } from './partido.service';
import { PartidoGateway } from './partido.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Partido } from './entities/partido.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Partido])],
  providers: [PartidoGateway, PartidoService],
  exports: [],
})
export class PartidoModule {}
