import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/role/role.entity';

@Entity()
export class Mission {
  @PrimaryGeneratedColumn({ name: 'MissionId' })
  id: number;

  @Column()
  name: string;

  @Column({ default: new Date().toISOString() })
  date: string;

  @ApiProperty({ type: () => Role })
  @OneToMany(() => Role, (r) => r.mission, { cascade: true })
  roles: Role[];
}