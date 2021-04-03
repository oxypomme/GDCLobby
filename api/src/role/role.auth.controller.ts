import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudAuth } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

import { Role } from './role.entity';
import { RoleService } from './role.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

//TODO: Secure : If not Admin, can't update fields like Name, IsBooked, etc. + If not you, can't update PlayerId
@Crud({
  model: {
    type: Role,
  },
  params: {
    missionId: {
      field: 'missionId',
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
    exclude: ['getOneBase', 'getManyBase'],
  },
})
@CrudAuth({
  property: 'user',
  filter: (user: any) => ({
    playerId: user.userId,
  }),
  or: (user: any) => ({
    'playerId.isAdmin': user.isAdmin,
  }),
})
@ApiTags('roles')
@UseGuards(JwtAuthGuard)
@Controller('missions/:missionId/roles')
export class RoleEditController {
  constructor(public service: RoleService) {}
}
