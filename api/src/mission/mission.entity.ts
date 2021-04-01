import { Lobby } from 'src/lobby/lobby.entity';
import { Missionmaker } from 'src/missionmaker/missionmaker.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Mission {
  @PrimaryGeneratedColumn({ name: 'MissionId' })
  Id: number;

  @Column()
  Name: string;

  @ManyToOne(() => Missionmaker, (mm) => mm.Missions)
  Mission_maker: Missionmaker;

  @OneToMany(() => Lobby, (l) => l.Mission)
  Lobbys: Lobby[];
}
