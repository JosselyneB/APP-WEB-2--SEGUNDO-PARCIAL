"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartidoModule = void 0;
const common_1 = require("@nestjs/common");
const partido_service_1 = require("./partido.service");
const partido_gateway_1 = require("./partido.gateway");
const typeorm_1 = require("@nestjs/typeorm");
const partido_entity_1 = require("./entities/partido.entity");
let PartidoModule = class PartidoModule {
};
exports.PartidoModule = PartidoModule;
exports.PartidoModule = PartidoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([partido_entity_1.Partido])],
        providers: [partido_gateway_1.PartidoGateway, partido_service_1.PartidoService],
        exports: [],
    })
], PartidoModule);
//# sourceMappingURL=partido.module.js.map