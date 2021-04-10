import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudAuth } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

import { Player } from './player.entity';
import { PlayerService } from './player.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Crud({
  model: {
    type: Player,
  },
  params: {
    id: {
      primary: true,
      disabled: true,
    },
  },
  query: {
    exclude: ['password'],
    join: {
      roles: {
        eager: true,
      },
      'roles.mission': {
        eager: true,
        required: false,
      },
      'roles.team': {
        eager: true,
        required: false,
      },
      'roles.mission': {
        eager: true,
        required: false,
      },
    },
  },
  routes: {
    only: ['getOneBase', 'updateOneBase', 'deleteOneBase'],
  },
})
@CrudAuth({
  property: 'user',
  filter: (user: any) => ({
    id: user.userId,
  }),
})
@ApiTags('player')
@UseGuards(JwtAuthGuard)
@Controller('player')
export class PlayerController {
  constructor(public service: PlayerService) {}
}
