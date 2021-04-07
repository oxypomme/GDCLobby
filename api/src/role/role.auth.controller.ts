import {
  Controller,
  UseGuards,
  Request,
  UnauthorizedException,
} from '@nestjs/common';
import { Crud, Override } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

import { Role } from './role.entity';
import { RoleService } from './role.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
@Crud({
  model: {
    type: Role,
  },
  params: {
    missionId: {
      field: 'missionId',
      type: 'number',
    },
  },
  query: {
    join: {
      team: {
        eager: true,
      },
      player: {
        eager: true,
        exclude: ['email'],
      },
    },
  },
  routes: {
    exclude: ['getOneBase', 'getManyBase'],
  },
})
@ApiTags('roles')
@UseGuards(JwtAuthGuard)
@Controller('missions/:missionId/roles')
export class RoleEditController {
  constructor(public service: RoleService) {}

  @Override()
  async updateOne(@Request() req) {
    const role = await this.service.getOne(req.NESTJSX_PARSED_CRUD_REQUEST_KEY);
    if (
      !(
        req.user.isAdmin ||
        ((role.playerId === null || role.playerId === req.user.userId) &&
          !role.isBooked &&
          !['condition', 'id', 'isBooked', 'missionId', 'name'].some((el) =>
            Object.keys(req.body).includes(el),
          ))
      )
    ) {
      throw new UnauthorizedException();
    }
    return await this.service.updateOne(
      req.NESTJSX_PARSED_CRUD_REQUEST_KEY,
      req.body,
    );
  }

  @Override()
  async replaceOne(@Request() req) {
    if (!req.user.isAdmin) {
      throw new UnauthorizedException();
    }
    return await this.service.replaceOne(
      req.NESTJSX_PARSED_CRUD_REQUEST_KEY,
      req.body,
    );
  }

  @Override()
  async createOne(@Request() req) {
    if (!req.user.isAdmin) {
      throw new UnauthorizedException();
    }
    return await this.service.createOne(
      req.NESTJSX_PARSED_CRUD_REQUEST_KEY,
      req.body,
    );
  }

  @Override()
  async createMany(@Request() req) {
    if (!req.user.isAdmin) {
      throw new UnauthorizedException();
    }
    return await this.service.createMany(
      req.NESTJSX_PARSED_CRUD_REQUEST_KEY,
      req.body,
    );
  }

  @Override()
  async deleteOne(@Request() req) {
    if (!req.user.isAdmin) {
      throw new UnauthorizedException();
    }
    return await this.service.deleteOne(req.NESTJSX_PARSED_CRUD_REQUEST_KEY);
  }
}
