import { Team } from 'src/app/team';

export interface Creditentials {
  username: string;
  password: string;
  team?: number | Team;
}
