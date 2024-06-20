import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Partido } from './entities/partido.entity';
import { CreatePartidoDto } from './dto/create-partido.dto';
import { Equipo} from '../equipo/entities/equipo.entity'
import { Torneo } from '../torneo/entities/torneo.entity';

@Injectable()
export class PartidoService {
  constructor(
    @InjectRepository(Partido)
    private readonly partidoRepository: Repository<Partido>,
    @InjectRepository(Equipo)
    private readonly equipoRepository: Repository<Equipo>,
    @InjectRepository(Torneo)
    private readonly torneoRepository: Repository<Torneo>,
  ) {}

  async create(createPartidoDto: CreatePartidoDto): Promise<Partido> {
    const local = await this.equipoRepository.findOne({ where: { id: createPartidoDto.localId } });
    const visitante = await this.equipoRepository.findOne({ where: { id: createPartidoDto.visitanteId } });
    const torneo = await this.torneoRepository.findOne({ where: { id: createPartidoDto.torneoId } });

    if (!local || !visitante || !torneo) {
      throw new Error('No se encontró alguno de los datos necesarios (local, visitante o torneo)');
    }

    const partido = new Partido();
    partido.fecha = createPartidoDto.fecha;
    partido.resultado = createPartidoDto.resultado;
    partido.local = local;
    partido.visitante = visitante;
    partido.torneo = torneo;
    partido.estado = true; // Por defecto, el estado es activo

    return await this.partidoRepository.save(partido);
  }

  async findAll(): Promise<Partido[]> {
    return await this.partidoRepository.find({ relations: ['local', 'visitante', 'torneo'] });
  }

  async findById(id: number): Promise<Partido | undefined> {
    const partido = await this.partidoRepository.findOne({ where: { id }, relations: ['local', 'visitante', 'torneo'] });
    return partido ?? undefined;
  }

  async update(id: number, updatePartidoDto: CreatePartidoDto): Promise<Partido | undefined> {
    const partido = await this.partidoRepository.findOne({ where: { id } });
    if (!partido) {
      throw new Error(`No se encontró el partido con id ${id}`);
    }

    const local = await this.equipoRepository.findOne({ where: { id: updatePartidoDto.localId } });
    const visitante = await this.equipoRepository.findOne({ where: { id: updatePartidoDto.visitanteId } });
    const torneo = await this.torneoRepository.findOne({ where: { id: updatePartidoDto.torneoId } });

    if (!local || !visitante || !torneo) {
      throw new Error('No se encontró alguno de los datos necesarios (local, visitante o torneo)');
    }

    partido.fecha = updatePartidoDto.fecha;
    partido.resultado = updatePartidoDto.resultado;
    partido.local = local;
    partido.visitante = visitante;
    partido.torneo = torneo;

    return await this.partidoRepository.save(partido);
  }

  async remove(id: number): Promise<void> {
    const partido = await this.partidoRepository.findOne({ where: { id } });
    if (!partido) {
      throw new Error(`No se encontró el partido con id ${id}`);
    }
    partido.estado = false; // Cambiar estado a inactivo en lugar de eliminar físicamente
    await this.partidoRepository.save(partido);
  }
}
