import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
//import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Repository } from 'typeorm';
import { Missionmaker } from './missionmaker.entity';

@Injectable()
export class MissionmakerService {
  constructor(
    @InjectRepository(Missionmaker)
    private readonly missionRepository: Repository<Missionmaker>,
  ) {}

  create(mm: Missionmaker): Promise<Missionmaker> {
    return this.missionRepository.save(mm);
  }

  findAll(): Promise<Missionmaker[]> {
    return this.missionRepository.find();
  }
}
