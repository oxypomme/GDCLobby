import { Mission } from 'src/mission/mission.entity';
import { Role } from 'src/slot/role.entity';
import { Entity, Column, ManyToOne, PrimaryColumn, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Lobby {
  @PrimaryColumn({ name: 'LobbyId' })
  Id: number;

  @Column()
  Name: string;

  @Column()
  MinPlayers: number;

  @Column()
  MaxPlayers: number;

  @ApiProperty({ type: () => Mission })
  @ManyToOne(() => Mission, (m) => m.Lobbys)
  Mission: Mission;

  @ApiProperty({ type: () => Role })
  @OneToMany(() => Role, (s) => s.Lobby, { cascade: true })
  Slots: Role[];
}
