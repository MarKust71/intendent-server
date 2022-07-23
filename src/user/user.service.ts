import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UserCreateDto } from './dto/user-create.dto';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  async getAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async add(user: UserCreateDto): Promise<User> {
    return this.userRepository.save(user);
  }
}
