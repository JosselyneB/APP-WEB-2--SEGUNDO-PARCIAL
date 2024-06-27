import { Injectable, NotFoundException } from '@nestjs/common';
import { PartidoRepository } from 'src/repository/partido.repository';
import { Partido } from 'src/entities/partido.entity';

@Injectable()
export class PartidoService {
  constructor(private readonly partidoRepository: PartidoRepository) {}

  async findAll(estado?: 'activo' | 'inactivo' | 'todos'): Promise<Partido[]> {
    let whereClause: any = {};

    if (estado === 'activo') {
      whereClause = { estado: true };
    } else if (estado === 'inactivo') {
      whereClause = { estado: false };
    }

    return await this.partidoRepository.find({ where: whereClause });
  }
}