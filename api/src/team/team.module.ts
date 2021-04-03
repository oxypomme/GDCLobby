import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { TeamAuthController } from './team.auth.controller';
import { Team } from './team.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Team])],
  providers: [TeamService],
  exports: [TeamService],
  controllers: [TeamController, TeamAuthController],
})
export class TeamModule {}
