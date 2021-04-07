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
      roles: {
        eager: true,
      },
      'roles.player': {
        eager: true,
        required: false,
        exclude: ['isAdmin', 'password'],
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
