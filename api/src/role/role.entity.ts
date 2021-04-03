import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { Mission } from 'src/mission/mission.entity';
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

  @ApiProperty({ type: () => Mission })
  @ManyToOne(() => Mission, (m) => m.id)
  mission: Mission;

  @ApiHideProperty()
  @Column({ update: false })
  @Exclude()
  missionId: number;

  @ApiProperty({ type: () => Player })
  @ManyToOne(() => Player, (p) => p.id)
  player: Player;

  @ApiHideProperty()
  @Column({ nullable: true })
  @Exclude()
  playerId: number;

  @ApiProperty({ type: () => Team })
  @ManyToOne(() => Team, (t) => t.id)
  team: Team;

  @ApiHideProperty()
  @Column()
  @Exclude()
  teamId: number;
}
