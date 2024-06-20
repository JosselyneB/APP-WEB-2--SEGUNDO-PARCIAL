// src/torneo/torneo.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Torneo } from './entities/torneo.entity';
import { CreateTorneoDto } from './dto/create-torneo.dto';
import { Equipo } from '../equipo/entities/equipo.entity';

@Injectable()
export class TorneoService {
  constructor(
    @InjectRepository(Torneo)
    private readonly torneoRepository: Repository<Torneo>,
    @InjectRepository(Equipo)
    private readonly equipoRepository: Repository<Equipo>,
  ) {}

  async create(createTorneoDto: CreateTorneoDto): Promise<Torneo> {
    const equipo = await this.equipoRepository.findOne(createTorneoDto.equipoId);
    const torneo = new Torneo();
    torneo.nombre = createTorneoDto.nombre;
    torneo.equipo = equipo;
    torneo.estado = true; // Por defecto, el estado es activo

    return await this.torneoRepository.save(torneo);
  }

  async findAll(): Promise<Torneo[]> {
    return await this.torneoRepository.find({ relations: ['equipo'] });
  }

  async findById(id: number): Promise<Torneo> {
    return await this.torneoRepository.findOne(id, { relations: ['equipo'] });
  }

  async update(id: number, updateTorneoDto: CreateTorneoDto): Promise<Torneo> {
    const torneo = await this.torneoRepository.findOne(id);
    const equipo = await this.equipoRepository.findOne(updateTorneoDto.equipoId);
    torneo.nombre = updateTorneoDto.nombre;
    torneo.equipo = equipo;

    return await this.torneoRepository.save(torneo);
  }

  async remove(id: number): Promise<void> {
    const torneo = await this.torneoRepository.findOne(id);
    torneo.estado = false; // Cambiar estado a inactivo en lugar de eliminar físicamente
    await this.torneoRepository.save(torneo);
  }
}
