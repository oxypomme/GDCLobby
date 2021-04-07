import { Team } from './team';

export interface Player {
  id: number;
  username: string;
  team: Team;
  isAdmin?: boolean;
}
