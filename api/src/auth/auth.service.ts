import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { getManager, getRepository } from 'typeorm';
import { jwtConstants } from './constants';
import { Player } from 'src/player/player.entity';
import { PlayerService } from 'src/player/player.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: PlayerService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne({
      where: { username },
    });

    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const profile = await this.validateUser(user.username, user.password);
    if (profile) {
      return {
        accessToken: this.jwtService.sign({
          id: profile.id,
          username: profile.username,
          isAdmin: profile.isAdmin,
        }),
        expiresIn: jwtConstants.expiresIn,
      };
    }
    return null;
  }

  async register(user: any) {
    const payload = {
      username: user.username,
      password: user.password,
      teamId: user.team,
    };
    const entityManager = getManager();
    const obj = entityManager.create(Player, payload);
    const { password, ...result } = await getRepository(Player).save(obj);
    return result;
  }
}
