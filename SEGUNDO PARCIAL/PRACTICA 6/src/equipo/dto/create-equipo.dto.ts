// equipo/dto/create-equipo.dto.ts

import { IsString, IsNotEmpty } from 'class-validator';

export class CreateEquipoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  estado?: string = 'activo';

  constructor(nombre: string) {
    this.nombre = nombre;
  }
}
