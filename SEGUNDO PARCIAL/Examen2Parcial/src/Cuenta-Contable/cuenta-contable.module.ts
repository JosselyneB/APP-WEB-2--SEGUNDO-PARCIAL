import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CuentaContable } from './cuenta-contable.entity';
import { CuentaContableService } from './cuenta-contable.service';
import { CuentaContableController } from './cuenta-contable.controller';

@Module({
    imports: [TypeOrmModule.forFeature([CuentaContable])],
    providers: [CuentaContableService],
    controllers: [CuentaContableController],
})
export class CuentaContableModule {}
