import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import { Lobby } from './lobby.entity';
import { LobbyService } from './lobby.service';

@Crud({
  model: {
    type: Lobby,
  },
  query: {
    join: {
      Mission: {
        eager: true,
      },
      Slots: {
        eager: true,
      },
    },
  },
})
@Controller('lobby')
export class LobbyController {
  constructor(public service: LobbyService) {}
}
