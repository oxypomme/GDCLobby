import { Lobby } from 'src/lobby/lobby.entity';
import { Missionmaker } from 'src/missionmaker/missionmaker.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

@Entity()
export class Mission {
  @PrimaryGeneratedColumn({ name: 'MissionId' })
  id: number;

  @Column()
  name: string;

  @Column({ default: new Date().toISOString() })
  date: string;

  @ApiProperty({ type: () => Missionmaker })
  @ManyToOne(() => Missionmaker, (mm) => mm.missions)
  missionMaker: Missionmaker;

  @ApiHideProperty()
  @Column()
  @Exclude()
  missionMakerId: number;

  @ApiProperty({ type: () => Lobby })
  @OneToMany(() => Lobby, (l) => l.mission, { cascade: true })
  lobbys: Lobby[];
}
