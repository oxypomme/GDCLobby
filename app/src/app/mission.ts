import { Role } from './role';
import { Team } from './team';

export interface Mission {
  id: number;
  name: string;
  date: Date;
  roles?: Role[];
  teams?: Team[];
}
