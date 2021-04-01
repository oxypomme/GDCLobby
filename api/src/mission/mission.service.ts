import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
//import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Repository } from 'typeorm';
import { Mission } from './mission.entity';

@Injectable()
export class MissionService {
  constructor(
    @InjectRepository(Mission)
    private readonly missionRepository: Repository<Mission>,
  ) {}

  create(miss: Mission): Promise<Mission> {
    return this.missionRepository.save(miss);
  }

  findAll(): Promise<Mission[]> {
    return this.missionRepository.find();
  }
}
