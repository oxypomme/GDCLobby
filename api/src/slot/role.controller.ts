import { Controller, Get, Post, Body } from '@nestjs/common';
import { Role } from './role.entity';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get()
  getArticles() {
    return this.roleService.findAll();
  }

  @Post()
  createArticle(@Body() body: Role) {
    return this.roleService.create(body);
  }
}
