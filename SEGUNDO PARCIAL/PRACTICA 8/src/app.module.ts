import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartidoModule } from './partido/partido.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',  // Reemplaza con tu usuario de PostgreSQL
      password: '1234',  // Reemplaza con tu contraseña de PostgreSQL
      database: 'websocket_test',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    PartidoModule,
  ],
})
export class AppModule {}
