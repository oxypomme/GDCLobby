import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudAuth } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

import { Mission } from './mission.entity';
import { MissionService } from './mission.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Crud({
  model: {
    type: Mission,
  },
  query: {
    join: {
      missionMaker: {
        eager: true,
        exclude: ['email'],
      },
      lobbys: {
        eager: true,
        exclude: ['missionId'],
      },
      'lobbys.roles': {
        eager: true,
        required: false,
        exclude: ['lobbyId', 'missionId'],
      },
    },
  },
  routes: {
    only: ['createOneBase', 'updateOneBase', 'replaceOneBase', 'deleteOneBase'],
  },
})
@CrudAuth({
  property: 'user',
  filter: (user: any) => ({
    missionMakerId: user.userId,
  }),
})
@ApiTags('mission')
@UseGuards(JwtAuthGuard)
@Controller('mission')
export class MissionEditController {
  constructor(public service: MissionService) {}
}
