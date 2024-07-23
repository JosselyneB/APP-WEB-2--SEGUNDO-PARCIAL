"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CuentaContableModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cuenta_contable_entity_1 = require("./cuenta-contable.entity");
const cuenta_contable_service_1 = require("./cuenta-contable.service");
const cuenta_contable_controller_1 = require("./cuenta-contable.controller");
let CuentaContableModule = class CuentaContableModule {
};
exports.CuentaContableModule = CuentaContableModule;
exports.CuentaContableModule = CuentaContableModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([cuenta_contable_entity_1.CuentaContable])],
        providers: [cuenta_contable_service_1.CuentaContableService],
        controllers: [cuenta_contable_controller_1.CuentaContableController],
    })
], CuentaContableModule);
//# sourceMappingURL=cuenta-contable.module.js.map