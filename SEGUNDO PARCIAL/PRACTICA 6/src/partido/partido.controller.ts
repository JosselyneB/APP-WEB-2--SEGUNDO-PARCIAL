// partido.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, BadRequestException } from '@nestjs/common';
import { PartidoService } from './partido.service';
import { CreatePartidoDto } from './dto/create-partido.dto';
import { Partido } from './entities/partido.entity';

@Controller('partidos')
export class PartidoController {
  constructor(private readonly partidoService: PartidoService) {}

  @Post()
  async create(@Body() createPartidoDto: CreatePartidoDto): Promise<Partido> {
    try {
      const partido = await this.partidoService.create(createPartidoDto);
      return partido;
    } catch (error: any) { // Tipar explícitamente 'error' como 'any'
      throw new BadRequestException(error.message);
    }
  }

  @Get()
  async findAll(): Promise<Partido[]> {
    return await this.partidoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Partido> {
    const partido = await this.partidoService.findById(Number(id));
    if (!partido) {
      throw new NotFoundException(`Partido con id ${id} no encontrado.`);
    }
    return partido;
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePartidoDto: CreatePartidoDto,
  ): Promise<Partido> {
    try {
      const partido = await this.partidoService.update(Number(id), updatePartidoDto);
      if (!partido) {
        throw new NotFoundException(`Partido con id ${id} no encontrado.`);
      }
      return partido;
    } catch (error: any) { // Tipar explícitamente 'error' como 'any'
      throw new BadRequestException(error.message);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    try {
      await this.partidoService.remove(Number(id));
    } catch (error: any) { // Tipar explícitamente 'error' como 'any'
      throw new NotFoundException(`Partido con id ${id} no encontrado.`);
    }
  }
}
