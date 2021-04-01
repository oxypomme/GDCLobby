import { Lobby } from 'src/lobby/lobby.entity';
import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Role {
  @PrimaryColumn({ name: 'RoleId' })
  Id: number;

  @Column()
  NameRole: string;

  @Column({ nullable: true })
  NameCanard: string;

  @ManyToOne(() => Lobby, (l) => l.Slots)
  Lobby: Lobby;
}
