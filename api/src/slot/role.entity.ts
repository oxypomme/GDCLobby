import { Lobby } from 'src/lobby/lobby.entity';
import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Role {
  @PrimaryColumn({ name: 'RoleId' })
  Id: number;

  @Column()
  NameRole: string;

  @Column({ nullable: true })
  NameCanard: string;

  @ApiProperty({ type: () => Lobby })
  @ManyToOne(() => Lobby, (l) => l.Slots)
  Lobby: Lobby;
}
