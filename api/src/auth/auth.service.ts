import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MissionmakerService } from 'src/missionmaker/missionmaker.service';
import bcrypt from 'bcrypt';
import { jwtConstants } from './constants';

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

    /*(await bcrypt.compare(pass, user.password))*/
    if (user && pass === user.password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      accessToken: this.jwtService.sign(payload),
      expiresIn: jwtConstants.expiresIn,
    };
  }
}
