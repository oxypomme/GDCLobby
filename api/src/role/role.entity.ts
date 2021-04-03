import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { Player } from 'src/player/player.entity';
import { Team } from 'src/team/team.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn({ name: 'RoleId' })
  id: number;

  @Column()
  name: string;

  @Column({ default: false })
  isBooked: boolean;

  @Column({ name: 'Condi' })
  condition: string;

  @ApiProperty({ type: () => Player })
  @ManyToOne(() => Player, (p) => p)
  @JoinColumn()
  player: Player;

  @ApiHideProperty()
  @Column({ nullable: true })
  @Exclude()
  playerId: number;

  @ApiProperty({ type: () => Team })
  @ManyToOne(() => Team, (t) => t)
  team: Team;

  @ApiHideProperty()
  @Column()
  @Exclude()
  teamId: number;
}
