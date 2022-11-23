// 自动加载实体

import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
} from 'typeorm';
enum DataList {
  data1,
  data2,
  data3,
}
// 装饰为实体类
@Entity()
// 表名
export class SqlTest {
  // 自增列
  @PrimaryGeneratedColumn('uuid')
  id: number;
  // 定义列
  @Column({
    type: 'varbinary',
    length: 255,
  })
  name: string;
  @Column({
    select: true, //查询时过滤不接口返回
    comment: '注释',
    default: '123',
    nullable: true, //是否为空
  })
  password: string;
  // 自动生成列
  @Generated('uuid')
  uuid: string;
  // 自动生成日期
  @CreateDateColumn({
    type: 'timestamp',
  })
  createTime: Date;
  // 枚举
  @Column({
    type: 'enum',
    enum: DataList,
    default: 1,
  })
  dataList: string;
  // join 和split切换
  @Column('simple-array')
  names: string[];
  // 转换为json对象
  @Column('simple-json')
  json: { name: string; age: number };
}
