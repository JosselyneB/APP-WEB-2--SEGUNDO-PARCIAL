import { IsNotEmpty } from 'class-validator';

export class CreateTorneoDto {
  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  equipoId: number;
}
