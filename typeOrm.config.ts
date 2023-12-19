import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config();

export default new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'sample_user',
  password: 'sample_password',
  database: 'sample_db',
  entities: ['**/**/*.entity{.ts,.js}'],
  migrations: ['**/**/database/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations_typeorm',
});
