import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Team } from 'src/team/team.entity';

@Entity()
export class Mission {
  @PrimaryGeneratedColumn({ name: 'MissionId' })
  id: number;

  @Column()
  name: string;

  @Column({ default: new Date().toISOString() })
  date: string;

  @ApiProperty({ type: () => Team })
  @OneToMany(() => Team, (t) => t.mission, { cascade: true, eager: true })
  teams: Team[];
}
