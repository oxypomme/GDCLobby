import { Controller, Get, Post, Body } from '@nestjs/common';
//import { Crud } from '@nestjsx/crud';

import { Missionmaker } from './missionmaker.entity';
import { MissionmakerService } from './missionmaker.service';

/*@Crud({
  model: {
    type: Missionmaker,
  },
  query: {
    join: {
      articles: {
        eager: true,
      },
    },
  },
})*/
@Controller('missionmaker')
export class MissionmakerController {
  constructor(private readonly mmService: MissionmakerService) {}

  @Get()
  getArticles() {
    return this.mmService.findAll();
  }

  @Post()
  createArticle(@Body() body: Missionmaker) {
    return this.mmService.create(body);
  }
}
