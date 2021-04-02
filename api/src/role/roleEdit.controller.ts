import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudAuth } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

import { Role } from './role.entity';
import { RoleService } from './role.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

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
    exclude: ['getOneBase', 'getManyBase'],
  },
})
@CrudAuth({
  property: 'user',
  filter: (user: any) => ({
    missionMakerId: user.userId,
  }),
})
@ApiTags('role')
@UseGuards(JwtAuthGuard)
@Controller('mission/:missionId/lobby/:lobbyId/role')
export class RoleEditController {
  constructor(public service: RoleService) {}
}
