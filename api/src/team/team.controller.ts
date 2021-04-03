import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudAuth } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

import { Team } from './team.entity';
import { TeamService } from './team.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Crud({
  model: {
    type: Team,
  },
  query: {
    join: {
      roles: {
        eager: true,
      },
    },
  },
  routes: {
    only: ['getOneBase', 'getManyBase'],
  },
})
@ApiTags('team')
@Controller('team')
export class TeamController {
  constructor(public service: TeamService) {}
}
