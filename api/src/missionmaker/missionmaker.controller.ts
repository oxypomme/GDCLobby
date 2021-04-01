import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

import { Missionmaker } from './missionmaker.entity';
import { MissionmakerService } from './missionmaker.service';

@Crud({
  model: {
    type: Missionmaker,
  },
  query: {
    join: {
      missions: {
        eager: true,
      },
    },
  },
})
@ApiTags('missionmaker')
@Controller('missionmaker')
export class MissionmakerController {
  constructor(public service: MissionmakerService) {}
}
