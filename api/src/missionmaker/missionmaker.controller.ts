import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudAuth } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

import { Missionmaker } from './missionmaker.entity';
import { MissionmakerService } from './missionmaker.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Crud({
  model: {
    type: Missionmaker,
  },
  params: {
    id: {
      primary: true,
      disabled: true,
    },
  },
  query: {
    join: {
      missions: {
        eager: true,
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
@ApiTags('missionmaker')
@UseGuards(JwtAuthGuard)
@Controller('missionmaker')
export class MissionmakerController {
  constructor(public service: MissionmakerService) {}
}
