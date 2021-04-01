import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import { Missionmaker } from './missionmaker.entity';
import { MissionmakerService } from './missionmaker.service';

@Crud({
  model: {
    type: Missionmaker,
  },
  query: {
    join: {
      Missions: {
        eager: true,
      },
    },
  },
})
@Controller('missionmaker')
export class MissionmakerController {
  constructor(public service: MissionmakerService) {}
}
