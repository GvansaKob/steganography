import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { User } from './users.entity';
import { Image } from '../images/entities/image.entity';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,

    @InjectRepository(Image)
    private imageRepository: Repository<Image>,
  ) { }

  findOneByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOne({ where: { email } });
  }

  findOneById(id: string): Promise<User | null> {
    return this.usersRepository.findOne({ where: { id } });
  }


  create(user: Partial<User>): Promise<User> {
    return this.usersRepository.save({
      ...user,
      role: user.role || 'user',
    });
  }

  update(userId: string, userInformation: Partial<User>): Promise<UpdateResult> {
    return this.usersRepository.update(userId, userInformation);
  }

  async getCertifiedImages(userId: string) {
    return this.imageRepository.find({
      where: { isCertified: true, user: { id: userId } },
      relations: ['user'],
    });
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find({ relations: ['images'] });
  }

  async delete(userId: string): Promise<void> {
    await this.usersRepository.delete(userId);
  }

}
