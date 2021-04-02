import { Controller, Request, Post } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @ApiTags('auth')
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.body);
  }

  @ApiTags('auth')
  @Post('auth/register')
  async register(@Request() req) {
    return this.authService.register(req.body);
  }
}
