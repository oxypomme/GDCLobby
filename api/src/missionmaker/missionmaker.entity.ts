import { Mission } from 'src/mission/mission.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Missionmaker {
  @PrimaryGeneratedColumn({ name: 'MissionmakerId' })
  Id: number;

  @Column()
  Name: string;

  @Column()
  Email: string;

  @ApiProperty({ type: () => Mission })
  @OneToMany(() => Mission, (miss) => miss.MissionMaker, { cascade: true })
  Missions: Mission[];
}
