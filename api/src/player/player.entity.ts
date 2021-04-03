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
import { Role } from 'src/role/role.entity';

@Entity()
export class Player {
  @PrimaryGeneratedColumn({ name: 'PlayerId' })
  id: number;

  @Column({ unique: true })
  username: string;

  @ApiHideProperty()
  @Column()
  @Exclude()
  password: string;

  @Column({ default: false, update: false, insert: false })
  isAdmin: boolean;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  @ApiProperty({ type: () => Role })
  @OneToMany(() => Role, (r) => r.player)
  roles: Role[];
}
