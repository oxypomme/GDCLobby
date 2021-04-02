import { Controller, UseGuards } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

import { Missionmaker } from './missionmaker.entity';
import { MissionmakerService } from './missionmaker.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Crud({
  model: {
    type: Missionmaker,
  },
  query: {
    join: {
      missions: {
        eager: true,
      },
    },
  },
})
@ApiTags('missionmaker')
@UseGuards(JwtAuthGuard)
@Controller('missionmaker')
export class MissionmakerController {
  constructor(public service: MissionmakerService) {}
}
