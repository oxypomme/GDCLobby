import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import { Mission } from './mission.entity';
import { MissionService } from './mission.service';

@Crud({
  model: {
    type: Mission,
  },
  query: {
    join: {
      MissionMaker: {
        eager: true,
      },
      Lobbys: {
        eager: true,
      },
    },
  },
})
@Controller('mission')
export class MissionController {
  constructor(public service: MissionService) {}
}
