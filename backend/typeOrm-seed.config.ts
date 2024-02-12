import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { Category } from './src/category/entities/category.entity';
import { Product } from './src/product/entities/product.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

config();

const configService = new ConfigService();

const options: DataSourceOptions = {
  type: 'mysql',
  host: configService.getOrThrow('MYSQL_HOST'),
  port: configService.getOrThrow('MYSQL_PORT'),
  database: configService.getOrThrow('MYSQL_DATABASE'),
  username: configService.getOrThrow('MYSQL_USERNAME'),
  password: configService.getOrThrow('MYSQL_PASSWORD'),
  migrations: ['seeder_migrations/**'],
  entities: [Product, Category],
};

export default new DataSource(options);
