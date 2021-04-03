import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Player } from './player.entity';

@Injectable()
export class PlayerService extends TypeOrmCrudService<Player> {
  constructor(@InjectRepository(Player) repo) {
    super(repo);
  }
}
