import { Injectable, NotFoundException } from '@nestjs/common';
import { EquipoRepository } from 'src/repository/equipoRepository';
import { Equipo } from 'src/entities/equipo.entity';

@Injectable()
export class EquipoService {
  constructor(private readonly equipoRepository: EquipoRepository) {}

  async findAll(estado?: 'activo' | 'inactivo' | 'todos'): Promise<Equipo[]> {
    let whereClause: any = {};

    if (estado === 'activo') {
      whereClause = { estado: true };
    } else if (estado === 'inactivo') {
      whereClause = { estado: false };
    }

    return await this.equipoRepository.find({ where: whereClause });
  }
}