import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { PartidoService } from './partido.service';
import { CreatePartidoDto } from './dto/create-partido.dto';
import { UpdatePartidoDto } from './dto/update-partido.dto';
export declare class PartidoGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private readonly partidoService;
    server: Server;
    private users;
    constructor(partidoService: PartidoService);
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
    validateToken(token: string): string | null;
    create(createPartidoDto: CreatePartidoDto): Promise<import("./entities/partido.entity").Partido>;
    findAll(): Promise<import("./entities/partido.entity").Partido[]>;
    findOne(id: number): Promise<import("./entities/partido.entity").Partido>;
    update(updatePartidoDto: UpdatePartidoDto): Promise<import("./entities/partido.entity").Partido>;
    remove(id: number): Promise<void>;
    handleGetActiveTransactions(): Promise<import("./entities/partido.entity").Partido[]>;
}
