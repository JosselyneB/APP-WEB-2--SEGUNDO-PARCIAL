import { CreatePartidoDto } from './create-partido.dto';
declare const UpdatePartidoDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreatePartidoDto>>;
export declare class UpdatePartidoDto extends UpdatePartidoDto_base {
    id: number;
}
export {};
