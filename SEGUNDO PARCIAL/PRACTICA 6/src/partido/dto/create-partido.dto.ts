import { IsNotEmpty } from 'class-validator';

export class CreatePartidoDto {
  @IsNotEmpty()
  fecha: Date = new Date(); 

  @IsNotEmpty()
  resultado: string = '';

  @IsNotEmpty()
  localId: number = 0;

  @IsNotEmpty()
  visitanteId: number = 0;

  @IsNotEmpty()
  torneoId: number = 0;
}
