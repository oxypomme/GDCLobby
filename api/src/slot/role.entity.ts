import { Lobby } from 'src/lobby/lobby.entity';
import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Role {
  @PrimaryColumn({ name: 'RoleId' })
  id: number;

  @Column()
  nameRole: string;

  @Column({ nullable: true })
  nameCanard: string;

  @ApiProperty({ type: () => Lobby })
  @ManyToOne(() => Lobby, (l) => l.roles)
  lobby: Lobby;
}
