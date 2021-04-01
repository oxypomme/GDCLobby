import { Test, TestingModule } from '@nestjs/testing';
import { MissionmakerService } from './missionmaker.service';

describe('MissionmakerService', () => {
  let service: MissionmakerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MissionmakerService],
    }).compile();

    service = module.get<MissionmakerService>(MissionmakerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
