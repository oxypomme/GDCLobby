import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lobby } from './lobby.entity';

@Injectable()
export class LobbyService {
  constructor(
    @InjectRepository(Lobby)
    private readonly missionRepository: Repository<Lobby>,
  ) {}

  create(lobby: Lobby): Promise<Lobby> {
    return this.missionRepository.save(lobby);
  }

  findAll(): Promise<Lobby[]> {
    return this.missionRepository.find();
  }
}
