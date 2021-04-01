import { Mission } from 'src/mission/mission.entity';
import { Role } from 'src/slot/role.entity';
import { Entity, Column, ManyToOne, PrimaryColumn, OneToMany } from 'typeorm';

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

  @ManyToOne(() => Mission, (m) => m.Lobbys)
  Mission: Mission;

  @OneToMany(() => Role, (s) => s.Lobby, { cascade: true })
  Slots: Role[];
}
