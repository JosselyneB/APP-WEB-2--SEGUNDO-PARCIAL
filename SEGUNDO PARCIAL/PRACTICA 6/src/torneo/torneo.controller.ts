// src/torneo/torneo.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TorneoService } from './torneo.service';
import { CreateTorneoDto } from './dto/create-torneo.dto';
import { Torneo } from './entities/torneo.entity';

@Controller('torneo')
export class TorneoController {
  constructor(private readonly torneoService: TorneoService) {}

  @Post()
  create(@Body() createTorneoDto: CreateTorneoDto): Promise<Torneo> {
    return this.torneoService.create(createTorneoDto);
  }

  @Get()
  findAll(): Promise<Torneo[]> {
    return this.torneoService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<Torneo> {
    return this.torneoService.findById(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTorneoDto: CreateTorneoDto): Promise<Torneo> {
    return this.torneoService.update(+id, updateTorneoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.torneoService.remove(+id);
  }
}
