import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Mission } from 'src/mission/mission.entity';
import { Player } from 'src/player/player.entity';

@Entity()
export class Team {
  @PrimaryGeneratedColumn({ name: 'TeamId' })
  id: number;

  @Column({ unique: true })
  name: string;

  @ApiProperty({ type: () => Player })
  @OneToMany(() => Player, (p) => p.team)
  players: Player[];

  @ApiProperty({ type: () => Mission })
  @ManyToMany(() => Mission, (m) => m.teams, { cascade: ['insert', 'update'] })
  missions: Mission[];
}
