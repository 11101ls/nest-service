import { Injectable, BadRequestException, HttpException } from '@nestjs/common';
import { AuthDto, UserLoginInfo } from './dto/auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/entities/user.entity';
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}
  login(user: Partial<User>) {
    const token = this.createToken({
      id: user.id,
      username: user.username,
      role: user.role,
    });
    return { token };
  }

  async getUser(user) {
    return await this.userService.findOne(user.id);
  }

  createToken(user: Partial<User>) {
    return this.jwtService.sign(user);
  }
}
