import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async () => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'sample_user',
        password: 'sample_password',
        database: 'sample_db',
        entities: ['**/**/*.entity{.ts,.js}'],
        autoLoadEntities: true,
        synchronize: true,
        migrationsRun: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
