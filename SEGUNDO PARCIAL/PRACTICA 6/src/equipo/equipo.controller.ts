// equipo/equipo.controller.ts

import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { EquipoService } from './equipo.service';
import { Equipo } from './entities/equipo.entity';

@Controller('equipos')
export class EquipoController {
  constructor(private readonly equipoService: EquipoService) {}

  @Get()
  async findAll(): Promise<Equipo[]> {
    return await this.equipoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Equipo | undefined> {
    return await this.equipoService.findById(Number(id));
  }

  @Post()
  async create(@Body('nombre') nombre: string): Promise<Equipo> {
    return await this.equipoService.create(nombre);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body('nombre') nombre: string): Promise<Equipo | undefined> {
    return await this.equipoService.update(Number(id), nombre);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.equipoService.delete(Number(id));
  }
}
