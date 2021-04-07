import { Mission } from './mission';
import { Player } from './player';
import { Team } from './team';

export interface Role {
  id: number;
  name: string;
  isBooked: boolean;
  condition: string;
  mission: Mission;
  team?: Team;
  player?: Player;
}
