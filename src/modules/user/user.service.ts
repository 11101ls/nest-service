import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, UserInfo } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  //依赖注入
  constructor(
    @InjectRepository(User) private readonly user: Repository<User>,
  ) {}
  // 注册
  async register(createUser: CreateUserDto) {
    const { username } = createUser;
    const existUser = await this.user.findOne({
      where: { username },
    });
    if (existUser) {
      throw new HttpException('用户已存在!', HttpStatus.BAD_REQUEST);
    }

    const newUser = await this.user.create(this.setDefaultUserInfo(createUser));
    await this.user.save(newUser);
    return await this.user.findOne({ where: { username } });
  }

  findAll(query: { keyWord: string }) {
    return this.user.find({
      where: {
        // name: Like(`%${query.keyWord}%`),
      },
    });
  }

  async findOne(username: string) {
    return await this.user.findOne({
      where: {
        username,
      },
    });
  }

  setDefaultUserInfo(user) {
    const defaultUser: UserInfo = { ...user };
    defaultUser.nickname = `新用户${defaultUser.username}`;
    defaultUser.avatar = '';
    defaultUser.email = '';
    return defaultUser;
  }
}
