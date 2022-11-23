export class CreateUserDto {
  username: string;
  password: string;
}
export class UserInfo {
  id: number;
  username: string; //用户名
  nickname?: string; //昵称
  password: string;
  avatar?: string; //头像
  email?: string;
  role?: string; //角色
  createTime?: Date;
  updateTime?: Date;
}
export class UserLoginInfo {
  username: string; //用户名
  password: string;
}
