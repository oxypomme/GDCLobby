import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MissionmakerService } from 'src/missionmaker/missionmaker.service';
import * as bcrypt from 'bcrypt';
import { jwtConstants } from './constants';
import { getManager, getRepository } from 'typeorm';
import { Missionmaker } from 'src/missionmaker/missionmaker.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: MissionmakerService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne({
      where: { email: username },
    });

    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const profile = await this.validateUser(user.email, user.password);
    if (profile) {
      return {
        accessToken: this.jwtService.sign({
          id: profile.id,
          username: profile.name,
        }),
        expiresIn: jwtConstants.expiresIn,
      };
    }
    return null;
  }

  async register(user: any) {
    const payload = {
      email: user.email,
      name: user.name,
      password: user.password,
    };
    const entityManager = getManager();
    const obj = entityManager.create(Missionmaker, payload);
    const { password, ...result } = await getRepository(Missionmaker).save(obj);
    return result;
  }
}
