import { Test, TestingModule } from '@nestjs/testing';
import { MissionmakerController } from './missionmaker.controller';

describe('MissionmakerController', () => {
  let controller: MissionmakerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MissionmakerController],
    }).compile();

    controller = module.get<MissionmakerController>(MissionmakerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
