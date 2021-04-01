import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

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
@ApiTags('role')
@Controller('role')
export class RoleController {
  constructor(public service: RoleService) {}
}
