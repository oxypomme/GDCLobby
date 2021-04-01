import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LobbyService } from './lobby.service';
import { LobbyController } from './lobby.controller';
import { Lobby } from './lobby.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lobby])],
  providers: [LobbyService],
  controllers: [LobbyController],
})
export class LobbyModule {}
