import { Mission } from 'src/mission/mission.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Missionmaker {
  @PrimaryGeneratedColumn({ name: 'MissionmakerId' })
  Id: number;

  @Column()
  Name: string;

  @Column()
  Email: string;

  @OneToMany(() => Mission, (miss) => miss.MissionMaker, { cascade: true })
  Missions: Mission[];
}
