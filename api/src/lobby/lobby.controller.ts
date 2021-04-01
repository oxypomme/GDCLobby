import { Controller, Get, Post, Body } from '@nestjs/common';
import { Lobby } from './lobby.entity';
import { LobbyService } from './lobby.service';

@Controller('lobby')
export class LobbyController {
  constructor(private readonly lobbyService: LobbyService) {}

  @Get()
  getArticles() {
    return this.lobbyService.findAll();
  }

  @Post()
  createArticle(@Body() body: Lobby) {
    return this.lobbyService.create(body);
  }
}
