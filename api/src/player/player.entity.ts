import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
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
  password: string;

  @Column({ default: false, update: false, insert: false })
  isAdmin: boolean;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  @ApiProperty({ type: () => Role })
  @OneToMany(() => Role, (r) => r.player)
  roles: Role[];
}
