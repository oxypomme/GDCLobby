import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MissionModule } from './mission/mission.module';
import { MissionmakerModule } from './missionmaker/missionmaker.module';
import { LobbyModule } from './lobby/lobby.module';
import { RoleModule } from './slot/role.module';
import OrmConfig from './ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(OrmConfig),
    MissionmakerModule,
    MissionModule,
    LobbyModule,
    RoleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
