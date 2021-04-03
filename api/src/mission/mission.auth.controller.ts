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
      roles: {
        eager: true,
      },
    },
  },
  routes: {
    exclude: ['getOneBase', 'getManyBase', 'createManyBase'],
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
@ApiTags('mission')
@UseGuards(JwtAuthGuard)
@Controller('mission/edit')
export class MissionEditController {
  constructor(public service: MissionService) {}
}
