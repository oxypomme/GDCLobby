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
    only: ['getManyBase'],
  },
})
@ApiTags('mission')
@Controller('mission')
export class MissionListController {
  constructor(public service: MissionService) {}
}
