import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Image } from '../images/entities/image.entity';
import { OneToMany } from 'typeorm';

export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: 'user' }) 
role: string;

@OneToMany(() => Image, (image) => image.user)
images: Image[];

}
