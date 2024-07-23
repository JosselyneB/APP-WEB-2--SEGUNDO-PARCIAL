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
exports.CuentaContableController = void 0;
const common_1 = require("@nestjs/common");
const cuenta_contable_service_1 = require("./cuenta-contable.service");
const cuenta_contable_entity_1 = require("./cuenta-contable.entity");
let CuentaContableController = class CuentaContableController {
    constructor(cuentaContableService) {
        this.cuentaContableService = cuentaContableService;
    }
    create(cuentaContable) {
        return this.cuentaContableService.create(cuentaContable);
    }
    findAll() {
        return this.cuentaContableService.findAll();
    }
    findOne(id) {
        return this.cuentaContableService.findOne(id);
    }
    update(id, cuentaContable) {
        return this.cuentaContableService.update(id, cuentaContable);
    }
    remove(id) {
        return this.cuentaContableService.remove(id);
    }
    softDelete(id) {
        return this.cuentaContableService.softDelete(id);
    }
};
exports.CuentaContableController = CuentaContableController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cuenta_contable_entity_1.CuentaContable]),
    __metadata("design:returntype", Promise)
], CuentaContableController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CuentaContableController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CuentaContableController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, cuenta_contable_entity_1.CuentaContable]),
    __metadata("design:returntype", Promise)
], CuentaContableController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CuentaContableController.prototype, "remove", null);
__decorate([
    (0, common_1.Delete)('soft/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CuentaContableController.prototype, "softDelete", null);
exports.CuentaContableController = CuentaContableController = __decorate([
    (0, common_1.Controller)('cuentas-contables'),
    __metadata("design:paramtypes", [cuenta_contable_service_1.CuentaContableService])
], CuentaContableController);
//# sourceMappingURL=cuenta-contable.controller.js.map