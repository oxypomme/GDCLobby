import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Missionmaker } from './missionmaker.entity';

@Injectable()
export class MissionmakerService extends TypeOrmCrudService<Missionmaker> {
  constructor(@InjectRepository(Missionmaker) repo) {
    super(repo);
  }
}
