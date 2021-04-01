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
  id: number;

  @Column()
  name: string;

  @ApiProperty({ type: () => Missionmaker })
  @ManyToOne(() => Missionmaker, (mm) => mm.missions)
  missionMaker: Missionmaker;

  @ApiProperty({ type: () => Lobby })
  @OneToMany(() => Lobby, (l) => l.mission, { cascade: true })
  lobbys: Lobby[];
}
