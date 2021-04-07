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
import { Role } from 'src/role/role.entity';

@Entity()
export class Team {
  @PrimaryGeneratedColumn({ name: 'TeamId' })
  id: number;

  @Column({ unique: true })
  name: string;

  @ApiProperty({ type: () => Role })
  @OneToMany(() => Role, (r) => r.team)
  players: Role[];
}
