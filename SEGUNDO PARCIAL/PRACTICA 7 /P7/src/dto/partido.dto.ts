// partido.dto.ts
import { IsString, IsNotEmpty, MaxLength, IsDate } from 'class-validator';
import { EquipoDTO } from './equipo.dto';
import { TorneoDTO } from './torneo.dto';

export class PartidoDTO {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  equipo1: EquipoDTO;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  equipo2: EquipoDTO;

  @IsDate()
  fecha: Date;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  resultado: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  estado: string; // PENDIENTE, JUGADO, SUSPENDIDO, etc.

  @IsNotEmpty()
  torneo: TorneoDTO;
}