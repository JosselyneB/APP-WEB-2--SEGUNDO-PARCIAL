// cuenta-contable.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CuentaContable } from './cuenta-contable.entity';

@Injectable()
export class CuentaContableService {
    constructor(
        @InjectRepository(CuentaContable)
        private cuentaContableRepository: Repository<CuentaContable>,
    ) {}

    async create(cuentaContable: CuentaContable): Promise<CuentaContable> {
        return this.cuentaContableRepository.save(cuentaContable);
    }

    async findAll(): Promise<CuentaContable[]> {
        return this.cuentaContableRepository.find({ where: { eliminado: false } });
    }

    async findOne(id: number): Promise<CuentaContable | undefined> {
        return this.cuentaContableRepository.findOne({ where: { id, eliminado: false } });
    }

    async update(id: number, cuentaContable: CuentaContable): Promise<void> {
        await this.cuentaContableRepository.update(id, cuentaContable);
    }

    async remove(id: number): Promise<void> {
        await this.cuentaContableRepository.delete(id);
    }

    async softDelete(id: number): Promise<void> {
        await this.cuentaContableRepository.update(id, { eliminado: true });
    }
}
