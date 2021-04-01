import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Lobby } from './lobby.entity';

@Injectable()
export class LobbyService extends TypeOrmCrudService<Lobby> {
  constructor(@InjectRepository(Lobby) repo) {
    super(repo);
  }
}
