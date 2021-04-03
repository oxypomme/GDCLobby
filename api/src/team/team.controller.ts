import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

import { Team } from './team.entity';
import { TeamService } from './team.service';

@Crud({
  model: {
    type: Team,
  },
  params: {
    missionId: {
      field: 'missionId',
      type: 'number',
    },
  },
  query: {
    join: {
      roles: {
        eager: true,
      },
      'roles.player': {
        eager: true,
      },
    },
  },
  routes: {
    only: ['getOneBase', 'getManyBase'],
  },
})
@ApiTags('teams')
@Controller('missions/:missionId/teams')
export class TeamController {
  constructor(public service: TeamService) {}
}
