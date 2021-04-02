import { Lobby } from 'src/lobby/lobby.entity';
import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { Mission } from 'src/mission/mission.entity';
import { Exclude } from 'class-transformer';

@Entity()
export class Role {
  @PrimaryColumn({ name: 'RoleId' })
  id: number;

  @Column()
  nameRole: string;

  @Column({ nullable: true })
  nameCanard: string;

  @ApiProperty({ type: () => Lobby })
  @ManyToOne(() => Lobby, (l) => l.roles)
  lobby: Lobby;

  @ApiHideProperty()
  @Column()
  @Exclude()
  lobbyId: number;

  @ApiProperty({ type: () => Mission })
  @ManyToOne(() => Mission, (m) => m.id)
  mission: Mission;

  @ApiHideProperty()
  @Column()
  @Exclude()
  missionId: number;
}
