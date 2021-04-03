import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

import { Mission } from './mission.entity';
import { MissionService } from './mission.service';

@Crud({
  model: {
    type: Mission,
  },
  query: {
    join: {
      teams: {
        eager: true,
      },
      'teams.roles': {
        eager: true,
      },
    },
  },
  routes: {
    only: ['getOneBase'],
  },
})
@ApiTags('missions')
@Controller('missions')
export class MissionController {
  constructor(public service: MissionService) {}
}
