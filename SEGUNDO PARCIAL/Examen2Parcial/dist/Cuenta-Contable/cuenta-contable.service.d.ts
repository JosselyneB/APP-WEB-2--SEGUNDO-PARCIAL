import { Repository } from 'typeorm';
import { CuentaContable } from './cuenta-contable.entity';
export declare class CuentaContableService {
    private cuentaContableRepository;
    constructor(cuentaContableRepository: Repository<CuentaContable>);
    create(cuentaContable: CuentaContable): Promise<CuentaContable>;
    findAll(): Promise<CuentaContable[]>;
    findOne(id: number): Promise<CuentaContable | undefined>;
    update(id: number, cuentaContable: CuentaContable): Promise<void>;
    remove(id: number): Promise<void>;
    softDelete(id: number): Promise<void>;
}
