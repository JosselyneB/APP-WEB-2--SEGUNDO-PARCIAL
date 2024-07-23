import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cuenta_contable') 
export class CuentaContable {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 }) 
    codigo: string;

    @Column({ length: 255 }) 
    detalle: string;

    @Column({ length: 50 }) 
    naturaleza: string;

    @Column('decimal', { precision: 10, scale: 2, default: 0 }) 
    saldo: number;

    @Column({ type: 'boolean', default: false })
    esTransaccional: boolean;

    @Column({ type: 'date', nullable: true }) 
    fechaUltimaTransaccion?: Date;

    @Column({ length: 100 }) 
    empresa: string;

    @Column({ default: false })
    eliminado: boolean;  
}
