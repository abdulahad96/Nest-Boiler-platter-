import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Role } from '../../roles/entities/role.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @ManyToMany(() => Role, role => role.users)
  @JoinTable()
  roles: Role[];

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
