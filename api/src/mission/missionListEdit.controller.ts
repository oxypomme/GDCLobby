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
    },
  },
  routes: {
    only: ['createManyBase'],
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
export class MissionListEditController {
  constructor(public service: MissionService) {}
}
