import { Lobby } from 'src/lobby/lobby.entity';
import { Missionmaker } from 'src/missionmaker/missionmaker.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Mission {
  @PrimaryGeneratedColumn({ name: 'MissionId' })
  Id: number;

  @Column()
  Name: string;

  @ApiProperty({ type: () => Missionmaker })
  @ManyToOne(() => Missionmaker, (mm) => mm.Missions)
  MissionMaker: Missionmaker;

  @ApiProperty({ type: () => Lobby })
  @OneToMany(() => Lobby, (l) => l.Mission, { cascade: true })
  Lobbys: Lobby[];
}
