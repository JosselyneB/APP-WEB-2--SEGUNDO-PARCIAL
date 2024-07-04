"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartidoGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const partido_service_1 = require("./partido.service");
const create_partido_dto_1 = require("./dto/create-partido.dto");
const update_partido_dto_1 = require("./dto/update-partido.dto");
let PartidoGateway = class PartidoGateway {
    constructor(partidoService) {
        this.partidoService = partidoService;
        this.users = new Map();
    }
    handleConnection(client) {
        const token = client.handshake.headers.authentication;
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
        }
        else {
            client.disconnect();
            console.log(`User ${userId} exceeded the connection limit`);
        }
    }
    handleDisconnect(client) {
        const userId = client.data.userId;
        if (userId) {
            const connections = this.users.get(userId);
            if (connections) {
                if (connections === 1) {
                    this.users.delete(userId);
                }
                else {
                    this.users.set(userId, connections - 1);
                }
            }
        }
        console.log(`Client disconnected: ${client.id}`);
    }
    validateToken(token) {
        if (token === 'valid-token') {
            return 'user-id';
        }
        return null;
    }
    async create(createPartidoDto) {
        const partido = await this.partidoService.create(createPartidoDto);
        this.server.emit('transaccion-agregada', partido);
        return partido;
    }
    async findAll() {
        return this.partidoService.findAll();
    }
    async findOne(id) {
        return this.partidoService.findOne(id);
    }
    async update(updatePartidoDto) {
        return this.partidoService.update(updatePartidoDto.id, updatePartidoDto);
    }
    async remove(id) {
        return this.partidoService.remove(id);
    }
    async handleGetActiveTransactions() {
        const partidos = await this.partidoService.findAllActive();
        this.server.emit('activos', partidos);
        return partidos;
    }
};
exports.PartidoGateway = PartidoGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], PartidoGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('createPartido'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_partido_dto_1.CreatePartidoDto]),
    __metadata("design:returntype", Promise)
], PartidoGateway.prototype, "create", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('findAllPartido'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PartidoGateway.prototype, "findAll", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('findOnePartido'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PartidoGateway.prototype, "findOne", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('updatePartido'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_partido_dto_1.UpdatePartidoDto]),
    __metadata("design:returntype", Promise)
], PartidoGateway.prototype, "update", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('removePartido'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PartidoGateway.prototype, "remove", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('consultar-activos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PartidoGateway.prototype, "handleGetActiveTransactions", null);
exports.PartidoGateway = PartidoGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: { origin: '*' } }),
    __metadata("design:paramtypes", [partido_service_1.PartidoService])
], PartidoGateway);
//# sourceMappingURL=partido.gateway.js.map