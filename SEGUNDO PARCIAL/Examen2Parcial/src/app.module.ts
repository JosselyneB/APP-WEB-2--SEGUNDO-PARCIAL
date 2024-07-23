import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CuentaContableModule } from './Cuenta-Contable/cuenta-contable.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',  
            password: '1234',  
            database: 'ExamenFinal',  
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,  
        }),
        CuentaContableModule,
    ],
})
export class AppModule {}

