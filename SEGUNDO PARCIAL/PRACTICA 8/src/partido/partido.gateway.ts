import { WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { PartidoService } from './partido.service';
import { CreatePartidoDto } from './dto/create-partido.dto';
import { UpdatePartidoDto } from './dto/update-partido.dto';

@WebSocketGateway({ cors: { origin: '*' } })
export class PartidoGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private users = new Map<string, number>(); // Gestiona usuarios y número de conexiones

  constructor(private readonly partidoService: PartidoService) {}

  handleConnection(client: Socket) {
    const token = client.handshake.headers.authentication as string;
    const userId = this.validateToken(token);
    if (!userId) {
      client.disconnect();
      return;
    }

    const connections = this.users.get(userId) || 0;
    if (connections < 3) {
      this.users.set(userId, connections + 1);
      client.data.userId = userId;
      console.log(`User connected: ${userId}`);
    } else {
      client.disconnect();
      console.log(`User ${userId} exceeded the connection limit`);
    }
  }

  handleDisconnect(client: Socket) {
    const userId = client.data.userId;
    if (userId) {
      const connections = this.users.get(userId);
      if (connections) {
        if (connections === 1) {
          this.users.delete(userId);
        } else {
          this.users.set(userId, connections - 1);
        }
      }
    }
    console.log(`Client disconnected: ${client.id}`);
  }

  validateToken(token: string): string | null {
    // Aquí deberías implementar la lógica para validar el token y devolver el userId
    // Por ejemplo:
    if (token === 'valid-token') {
      return 'user-id'; // Devuelve el userId correspondiente al token
    }
    return null;
  }

  @SubscribeMessage('createPartido')
  async create(@MessageBody() createPartidoDto: CreatePartidoDto) {
    const partido = await this.partidoService.create(createPartidoDto);
    this.server.emit('transaccion-agregada', partido);
    return partido;
  }

  @SubscribeMessage('findAllPartido')
  async findAll() {
    return this.partidoService.findAll();
  }

  @SubscribeMessage('findOnePartido')
  async findOne(@MessageBody() id: number) {
    return this.partidoService.findOne(id);
  }

  @SubscribeMessage('updatePartido')
  async update(@MessageBody() updatePartidoDto: UpdatePartidoDto) {
    return this.partidoService.update(updatePartidoDto.id, updatePartidoDto);
  }

  @SubscribeMessage('removePartido')
  async remove(@MessageBody() id: number) {
    return this.partidoService.remove(id);
  }

  @SubscribeMessage('consultar-activos')
  async handleGetActiveTransactions() {
    const partidos = await this.partidoService.findAllActive();
    this.server.emit('activos', partidos);
    return partidos;
  }
}
