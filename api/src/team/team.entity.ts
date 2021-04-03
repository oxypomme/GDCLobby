import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/role/role.entity';
import { Mission } from 'src/mission/mission.entity';

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
  @ManyToMany(() => Mission, (m) => m.teams, { cascade: ['insert', 'update'] })
  missions: Mission[];
}
