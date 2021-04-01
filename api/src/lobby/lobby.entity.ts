import { Mission } from 'src/mission/mission.entity';
import { Role } from 'src/role/role.entity';
import { Entity, Column, ManyToOne, PrimaryColumn, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Lobby {
  @PrimaryColumn({ name: 'LobbyId' })
  id: number;

  @Column()
  name: string;

  @Column()
  minPlayers: number;

  @Column()
  maxPlayers: number;

  @ApiProperty({ type: () => Mission })
  @ManyToOne(() => Mission, (m) => m.lobbys)
  mission: Mission;

  @Column()
  missionId: number;

  @ApiProperty({ type: () => Role })
  @OneToMany(() => Role, (s) => s.lobby, { cascade: true })
  roles: Role[];
}
