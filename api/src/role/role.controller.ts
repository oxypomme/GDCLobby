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
      field: 'missionId',
      type: 'number',
    },
    lobbyId: {
      field: 'lobbyId',
      type: 'number',
    },
  },
  query: {
    join: {
      lobby: {
        eager: true,
      },
      mission: {
        eager: true,
      },
      'mission.missionMaker': {
        eager: true,
        exclude: ['email'],
      },
    },
  },
  routes: {
    only: ['getOneBase', 'getManyBase'],
  },
})
@ApiTags('role')
@Controller('mission/:missionId/lobby/:lobbyId/role')
export class RoleController {
  constructor(public service: RoleService) {}
}
