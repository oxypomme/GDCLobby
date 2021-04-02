import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudAuth } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

import { Lobby } from './lobby.entity';
import { LobbyService } from './lobby.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Crud({
  model: {
    type: Lobby,
  },
  params: {
    missionId: {
      field: 'missionId',
      type: 'number',
    },
  },
  query: {
    join: {
      mission: {
        eager: true,
      },
      'mission.missionMaker': {
        eager: true,
        exclude: ['email'],
      },
      roles: {
        eager: true,
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
@ApiTags('lobby')
@UseGuards(JwtAuthGuard)
@Controller('mission/:missionId/lobby')
export class LobbyEditController {
  constructor(public service: LobbyService) {}
}
