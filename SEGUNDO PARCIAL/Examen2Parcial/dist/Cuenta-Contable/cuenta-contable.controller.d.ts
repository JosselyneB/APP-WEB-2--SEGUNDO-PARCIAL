import { CuentaContableService } from './cuenta-contable.service';
import { CuentaContable } from './cuenta-contable.entity';
export declare class CuentaContableController {
    private readonly cuentaContableService;
    constructor(cuentaContableService: CuentaContableService);
    create(cuentaContable: CuentaContable): Promise<CuentaContable>;
    findAll(): Promise<CuentaContable[]>;
    findOne(id: number): Promise<CuentaContable | undefined>;
    update(id: number, cuentaContable: CuentaContable): Promise<void>;
    remove(id: number): Promise<void>;
    softDelete(id: number): Promise<void>;
}
