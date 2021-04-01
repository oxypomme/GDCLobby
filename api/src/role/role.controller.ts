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
    exclude: ['missionId', 'lobbyId'],
    join: {
      lobby: {
        eager: true,
        exclude: ['missionId'],
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
})
@ApiTags('role')
@Controller('mission/:missionId/lobby/:lobbyId/role')
export class RoleController {
  constructor(public service: RoleService) {}
}
