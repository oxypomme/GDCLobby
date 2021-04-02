import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

import { Lobby } from './lobby.entity';
import { LobbyService } from './lobby.service';

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
    only: ['getOneBase', 'getManyBase'],
  },
})
@ApiTags('lobby')
@Controller('mission/:missionId/lobby')
export class LobbyController {
  constructor(public service: LobbyService) {}
}
