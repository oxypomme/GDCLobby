import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudAuth } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

import { Role } from './role.entity';
import { RoleService } from './role.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

//TODO: Secure : If not Admin, can't upadte fields like Name, IsBooked, etc. + If not you, can't update PlayerId
@Crud({
  model: {
    type: Role,
  },
  query: {
    join: {
      team: {
        eager: true,
      },
      mission: {
        eager: true,
      },
      player: {
        eager: true,
        exclude: ['email'],
      },
    },
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
@Controller('missions/:missionId/teams/:teamId/roles')
export class RoleEditController {
  constructor(public service: RoleService) {}
}
