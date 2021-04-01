import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Mission } from './mission.entity';

@Injectable()
export class MissionService extends TypeOrmCrudService<Mission> {
  constructor(@InjectRepository(Mission) repo) {
    super(repo);
  }
}
