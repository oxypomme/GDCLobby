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
    exclude: ['getOneBase', 'getManyBase'],
  },
})
@CrudAuth({
  property: 'user',
  filter: (user: any) => {
    // A dirty workaround
    if (user.isAdmin) {
      return {};
    }
    return { id: -1 };
  },
})
@ApiTags('team')
@UseGuards(JwtAuthGuard)
@Controller('team')
export class TeamAuthController {
  constructor(public service: TeamService) {}
}
