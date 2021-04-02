import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LobbyService } from './lobby.service';
import { LobbyController } from './lobby.controller';
import { Lobby } from './lobby.entity';
import { LobbyEditController } from './lobbyEdit.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Lobby])],
  providers: [LobbyService],
  exports: [LobbyService],
  controllers: [LobbyController, LobbyEditController],
})
export class LobbyModule {}
