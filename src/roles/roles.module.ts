import { Module } from '@nestjs/common';
import { RoleService } from './roles.service';
import { RoleController } from './roles.controller';

@Module({
  controllers: [RoleController],
  providers: [RoleService],
})
export class RolesModule {}
