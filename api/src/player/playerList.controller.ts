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
    exclude: ['password', 'isAdmin'],
  },
  routes: {
    only: ['getManyBase'],
  },
})
@ApiTags('players')
@Controller('players')
export class PlayerListController {
  constructor(public service: PlayerService) {}
}
