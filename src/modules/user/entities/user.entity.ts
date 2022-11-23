import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  PrimaryColumn,
  UpdateDateColumn,
  BeforeInsert,
} from 'typeorm';
const bcrypt = require('bcryptjs');
// 装饰为实体类
@Entity()
// 表名
export class User {
  // uuid
  @PrimaryGeneratedColumn('uuid')
  id: number;
  // 定义列
  @Column({
    length: 100,
  })
  username: string; //用户名
  @Column({
    length: 100,
  })
  nickname: string; //昵称
  // @Column({ select: false }) //查询时不返回  只在查询时有效
  @Exclude() //过滤字段
  @Column()
  password: string;
  @Column()
  avatar: string; //头像
  @Column()
  email: string;
  @Column('simple-enum', { enum: ['root', 'author', 'visitor'] })
  role: string; //角色

  @CreateDateColumn({
    name: 'create_time',
    type: 'timestamp',
  })
  createTime: Date;

  // 更新时间
  @UpdateDateColumn({
    name: 'update_time',
    type: 'timestamp',
  })
  updateTime: Date;
  @BeforeInsert()
  async encryptPwd() {
    this.password = await bcrypt.hashSync(this.password);
  }
  // // join 和split切换
  // @Column('simple-array')
  // names: string[];
  // // 转换为json对象
  // @Column('simple-json')
  // json: { name: string; age: number };
}
