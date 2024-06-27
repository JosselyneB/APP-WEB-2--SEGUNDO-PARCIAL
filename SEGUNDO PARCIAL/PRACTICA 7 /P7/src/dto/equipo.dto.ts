// equipo.dto.ts
import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class EquipoDTO {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  descripcion: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  estado: string; // ACTIVO, INACTIVO, ELIMINADO, etc.
}