import { Mission } from 'src/mission/mission.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BeforeInsert,
} from 'typeorm';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import * as bcrypt from 'bcrypt';

@Entity()
export class Missionmaker {
  @PrimaryGeneratedColumn({ name: 'MissionmakerId' })
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @ApiHideProperty()
  @Column()
  @Exclude()
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  @ApiProperty({ type: () => Mission })
  @OneToMany(() => Mission, (miss) => miss.missionMaker)
  missions: Mission[];
}
