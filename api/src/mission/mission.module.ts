import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MissionService } from './mission.service';
import { MissionController } from './mission.controller';
import { Mission } from './mission.entity';
import { MissionListController } from './missionList.controller';
import { MissionEditController } from './missionEdit.controller';
import { MissionListEditController } from './missionListEdit.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Mission])],
  providers: [MissionService],
  exports: [MissionService],
  controllers: [
    MissionController,
    MissionEditController,
    MissionListController,
    MissionListEditController,
  ],
})
export class MissionModule {}
