import { Repository } from 'typeorm';
import { Partido } from './entities/partido.entity';
import { CreatePartidoDto } from './dto/create-partido.dto';
import { UpdatePartidoDto } from './dto/update-partido.dto';
export declare class PartidoService {
    private partidoRepository;
    constructor(partidoRepository: Repository<Partido>);
    create(createPartidoDto: CreatePartidoDto): Promise<Partido>;
    findAll(): Promise<Partido[]>;
    findOne(id: number): Promise<Partido>;
    update(id: number, updatePartidoDto: UpdatePartidoDto): Promise<Partido>;
    remove(id: number): Promise<void>;
    findAllActive(): Promise<Partido[]>;
}
