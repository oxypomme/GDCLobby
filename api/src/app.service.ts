import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getMissionAll(): string {
    return 'Missions';
  }
}
