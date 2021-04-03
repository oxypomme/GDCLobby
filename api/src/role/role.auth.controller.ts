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
@ApiTags('role')
@UseGuards(JwtAuthGuard)
@Controller('role')
export class RoleEditController {
  constructor(public service: RoleService) {}
}
