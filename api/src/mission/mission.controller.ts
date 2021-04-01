import { Controller, Get, Post, Body } from '@nestjs/common';
//import { Crud } from '@nestjsx/crud';

import { Mission } from './mission.entity';
import { MissionService } from './mission.service';

/*@Crud({
  model: {
    type: Mission,
  },
  query: {
    join: {
      author: {
        eager: true,
      },
    },
  },
})*/
@Controller('mission')
export class MissionController {
  constructor(private readonly missionService: MissionService) {}

  @Get()
  getArticles() {
    return this.missionService.findAll();
  }

  @Post()
  createArticle(@Body() body: Mission) {
    return this.missionService.create(body);
  }
}
