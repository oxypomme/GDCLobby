import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MissionModule } from './mission/mission.module';
import { PlayerModule } from './player/player.module';
import { RoleModule } from './role/role.module';
import { AuthModule } from './auth/auth.module';
import OrmConfig from './ormconfig';
import { AppController } from './app.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(OrmConfig),
    PlayerModule,
    MissionModule,
    RoleModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
