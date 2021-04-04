import { Player } from './player';
import { Team } from './team';

export interface Role {
  id: number;
  name: string;
  isBooked: boolean;
  condition: string;
  team?: Team;
  player?: Player;
}
