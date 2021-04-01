import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MissionmakerService } from './missionmaker.service';
import { MissionmakerController } from './missionmaker.controller';
import { Missionmaker } from './missionmaker.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Missionmaker])],
  providers: [MissionmakerService],
  controllers: [MissionmakerController],
})
export class MissionmakerModule {}
