import { Injectable, NotFoundException } from '@nestjs/common';
import { TorneoRepository } from 'src/repository/torneoRepository';
import { Torneo } from 'src/entities/torneo.entity';

@Injectable()
export class TorneoService {
  constructor(private readonly torneoRepository: TorneoRepository) {}

  async findAll(estado?: 'activo' | 'inactivo' | 'todos'): Promise<Torneo[]> {
    let whereClause: any = {};

    if (estado === 'activo') {
      whereClause = { estado: true };
    } else if (estado === 'inactivo') {
      whereClause = { estado: false };
    }

    return await this.torneoRepository.find({ where: whereClause });
  }

}