import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/role/role.entity';

@Entity()
export class Team {
  @PrimaryGeneratedColumn({ name: 'TeamId' })
  id: number;

  @Column({ unique: true })
  name: string;

  @ApiProperty({ type: () => Role })
  @OneToMany(() => Role, (r) => r.team)
  roles: Role[];
}
