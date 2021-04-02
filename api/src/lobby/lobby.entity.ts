import { Mission } from 'src/mission/mission.entity';
import { Role } from 'src/role/role.entity';
import { Entity, Column, ManyToOne, PrimaryColumn, OneToMany } from 'typeorm';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

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

  @ApiHideProperty()
  @Column()
  @Exclude()
  missionId: number;

  @ApiProperty({ type: () => Role })
  @OneToMany(() => Role, (s) => s.lobby, { cascade: true })
  roles: Role[];
}
