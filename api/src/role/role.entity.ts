import { Lobby } from 'src/lobby/lobby.entity';
import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Mission } from 'src/mission/mission.entity';

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

  @Column()
  lobbyId: number;

  @ApiProperty({ type: () => Mission })
  @ManyToOne(() => Mission, (m) => m.id)
  mission: Mission;

  @Column()
  missionId: number;
}
