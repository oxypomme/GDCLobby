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
      roles: {
        eager: true,
      },
      'roles.team': {
        eager: true,
        required: false,
      },
      'roles.player': {
        eager: true,
        required: false,
        exclude: ['isAdmin', 'password'],
      },
      teams: {
        eager: true,
        required: false,
      },
    },
  },
  routes: {
    only: ['getOneBase', 'getManyBase'],
  },
})
@ApiTags('missions')
@Controller('missions')
export class MissionController {
  constructor(public service: MissionService) {}
}
