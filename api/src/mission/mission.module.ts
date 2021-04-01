import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MissionService } from './mission.service';
import { MissionController } from './mission.controller';
import { Mission } from './mission.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mission])],
  providers: [MissionService],
  controllers: [MissionController],
})
export class MissionModule {}
