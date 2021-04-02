import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { Role } from './role.entity';
import { RoleEditController } from './roleEdit.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  providers: [RoleService],
  exports: [RoleService],
  controllers: [RoleController, RoleEditController],
})
export class RoleModule {}
