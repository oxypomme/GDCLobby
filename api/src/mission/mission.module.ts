import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MissionService } from './mission.service';
import { MissionController } from './mission.controller';
import { Mission } from './mission.entity';
import { MissionEditController } from './mission.auth.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Mission])],
  providers: [MissionService],
  exports: [MissionService],
  controllers: [MissionController, MissionEditController],
})
export class MissionModule {}
