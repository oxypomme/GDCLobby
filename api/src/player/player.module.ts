import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PlayerService } from './player.service';
import { PlayerController } from './player.controller';
import { Player } from './player.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Player])],
  providers: [PlayerService],
  exports: [PlayerService],
  controllers: [PlayerController],
})
export class PlayerModule {}
