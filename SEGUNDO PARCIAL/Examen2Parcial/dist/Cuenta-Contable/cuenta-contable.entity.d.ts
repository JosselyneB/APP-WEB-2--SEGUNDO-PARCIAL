export declare class CuentaContable {
    id: number;
    codigo: string;
    detalle: string;
    naturaleza: string;
    saldo: number;
    esTransaccional: boolean;
    fechaUltimaTransaccion?: Date;
    empresa: string;
    eliminado: boolean;
}
