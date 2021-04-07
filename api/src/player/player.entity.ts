import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BeforeInsert,
  ManyToOne,
  BeforeUpdate,
} from 'typeorm';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import * as bcrypt from 'bcrypt';
import { Role } from 'src/role/role.entity';
import { Team } from 'src/team/team.entity';

@Entity()
export class Player {
  @PrimaryGeneratedColumn({ name: 'PlayerId' })
  id: number;

  @Column({ unique: true })
  username: string;

  @ApiHideProperty()
  @Column()
  password: string;

  @Column({ default: false, update: false, insert: false })
  isAdmin: boolean;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  @ApiProperty({ type: () => Team })
  @ManyToOne(() => Team, (t) => t)
  team: Team;

  @ApiHideProperty()
  @Column()
  @Exclude()
  teamId: number;

  @ApiProperty({ type: () => Role })
  @OneToMany(() => Role, (r) => r.player)
  roles: Role[];
}
