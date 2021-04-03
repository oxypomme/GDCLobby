import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

import { Mission } from './mission.entity';
import { MissionService } from './mission.service';

@Crud({
  model: {
    type: Mission,
  },
  routes: {
    only: ['getOneBase', 'getManyBase'],
  },
})
@ApiTags('missions')
@Controller('missions')
export class MissionController {
  constructor(public service: MissionService) {}
}
