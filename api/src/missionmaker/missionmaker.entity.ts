import { Mission } from 'src/mission/mission.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

@Entity()
export class Missionmaker {
  @PrimaryGeneratedColumn({ name: 'MissionmakerId' })
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @ApiHideProperty()
  @Column()
  @Exclude()
  password: string;

  @ApiProperty({ type: () => Mission })
  @OneToMany(() => Mission, (miss) => miss.missionMaker, { cascade: true })
  missions: Mission[];
}
