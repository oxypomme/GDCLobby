import { Mission } from 'src/mission/mission.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Missionmaker {
  @PrimaryGeneratedColumn({ name: 'MissionmakerId' })
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @ApiProperty({ type: () => Mission })
  @OneToMany(() => Mission, (miss) => miss.missionMaker, { cascade: true })
  missions: Mission[];
}
