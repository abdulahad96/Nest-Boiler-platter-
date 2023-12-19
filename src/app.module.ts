import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { PermissionModule } from './permission/permission.module';

@Module({
  imports: [DatabaseModule, UsersModule, RolesModule, PermissionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
