import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

import { Role } from './role.entity';
import { RoleService } from './role.service';

@Crud({
  model: {
    type: Role,
  },
  params: {
    missionId: {
      field: 'team.missionId',
      type: 'number',
    },
    teamId: {
      field: 'teamId',
      type: 'number',
    },
  },
  query: {
    join: {
      team: {
        eager: true,
      },
      player: {
        eager: true,
        exclude: ['email'],
      },
    },
  },
  routes: {
    only: ['getOneBase', 'getManyBase'],
  },
})
@ApiTags('roles')
@Controller('missions/:missionId/teams/:teamId/roles')
export class RoleController {
  constructor(public service: RoleService) {}
}
