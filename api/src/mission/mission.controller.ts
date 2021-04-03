import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

import { Mission } from './mission.entity';
import { MissionService } from './mission.service';

@Crud({
  model: {
    type: Mission,
  },
  query: {
    join: {
      roles: {
        eager: true,
      },
    },
  },
  routes: {
    only: ['getOneBase'],
  },
})
@ApiTags('mission')
@Controller('mission')
export class MissionController {
  constructor(public service: MissionService) {}
}