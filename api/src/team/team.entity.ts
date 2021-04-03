import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/role/role.entity';
import { Mission } from 'src/mission/mission.entity';
import { Exclude } from 'class-transformer';

@Entity()
export class Team {
  @PrimaryGeneratedColumn({ name: 'TeamId' })
  id: number;

  @Column({ unique: true })
  name: string;

  @ApiProperty({ type: () => Role })
  @OneToMany(() => Role, (r) => r.team)
  roles: Role[];

  @ApiProperty({ type: () => Mission })
  @ManyToOne(() => Mission, (m) => m.teams)
  mission: Mission;

  @ApiHideProperty()
  @Column({ update: false })
  @Exclude()
  missionId: number;
}
