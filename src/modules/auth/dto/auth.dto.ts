import { IsNotEmpty } from 'class-validator';

export class AuthDto {}
export class UserLoginInfo {
  @IsNotEmpty({ message: '缺少用户名' })
  username: string; //用户名
  @IsNotEmpty({ message: '缺少密码' })
  password: string;
}
