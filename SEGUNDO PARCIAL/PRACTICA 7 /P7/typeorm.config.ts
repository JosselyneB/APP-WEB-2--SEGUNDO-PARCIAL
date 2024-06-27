import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: 'localhost:5432',
  username: 'postgres',
  password: '1234',
  database: 'PRACTICA_7',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};