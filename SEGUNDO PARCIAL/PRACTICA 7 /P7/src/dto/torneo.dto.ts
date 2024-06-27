import { IsString, IsNotEmpty, IsOptional, IsDate } from 'class-validator';

export class TorenoDTO {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsDate()
  @IsNotEmpty()
  fecha: Date;

  @IsString()
  @IsOptional()
  estado: string;
}