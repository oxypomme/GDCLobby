import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

import { Role } from './role.entity';
import { RoleService } from './role.service';

//TODO: Secure : If not Admin, can't upadte fields like Name, IsBooked, etc. + If not you, can't update PlayerId
@Crud({
  model: {
    type: Role,
  },
  query: {
    join: {
      team: {
        eager: true,
      },
      mission: {
        eager: true,
      },
      player: {
        eager: true,
        exclude: ['email'],
      },
    },
  },
  routes: {
    only: ['getOneBase', 'getManyBase'],
  },
})
@ApiTags('role')
@Controller('role')
export class RoleController {
  constructor(public service: RoleService) {}
}
