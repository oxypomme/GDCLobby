import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MissionModule } from './mission/mission.module';
import { MissionmakerModule } from './missionmaker/missionmaker.module';
import { LobbyModule } from './lobby/lobby.module';
import { RoleModule } from './role/role.module';
import OrmConfig from './ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(OrmConfig),
    MissionmakerModule,
    MissionModule,
    LobbyModule,
    RoleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
