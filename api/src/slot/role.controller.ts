import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import { Role } from './role.entity';
import { RoleService } from './role.service';

@Crud({
  model: {
    type: Role,
  },
  query: {
    join: {
      Lobby: {
        eager: true,
      },
    },
  },
})
@Controller('role')
export class RoleController {
  constructor(public service: RoleService) {}
}
