import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

import { Team } from './team.entity';
import { TeamService } from './team.service';

@Crud({
  model: {
    type: Team,
  },
  query: {
    join: {
      players: {
        eager: true,
        exclude: ['isAdmin'],
      },
      missions: {
        eager: true,
        required: false,
      },
    },
  },
  routes: {
    only: ['getOneBase', 'getManyBase'],
  },
})
@ApiTags('teams')
@Controller('teams')
export class TeamController {
  constructor(public service: TeamService) {}
}
