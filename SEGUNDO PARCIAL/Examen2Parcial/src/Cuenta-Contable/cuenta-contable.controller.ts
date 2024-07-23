// cuenta-contable.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CuentaContableService } from './cuenta-contable.service';
import { CuentaContable } from './cuenta-contable.entity';

@Controller('cuentas-contables')
export class CuentaContableController {
    constructor(private readonly cuentaContableService: CuentaContableService) {}

    @Post()
    create(@Body() cuentaContable: CuentaContable): Promise<CuentaContable> {
        return this.cuentaContableService.create(cuentaContable);
    }

    @Get()
    findAll(): Promise<CuentaContable[]> {
        return this.cuentaContableService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<CuentaContable | undefined> {
        return this.cuentaContableService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() cuentaContable: CuentaContable): Promise<void> {
        return this.cuentaContableService.update(id, cuentaContable);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.cuentaContableService.remove(id);
    }

    @Delete('soft/:id')
    softDelete(@Param('id') id: number): Promise<void> {
        return this.cuentaContableService.softDelete(id);
    }
}
