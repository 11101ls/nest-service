import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UserModule } from './modules/user/user.module';
import { UploadModule } from './modules/upload/upload.module';
import { SpiderModule } from './modules/spider/spider.module';
import { GuardModule } from './guard/guard.module';
// 链接数据库
import { TypeOrmModule } from '@nestjs/typeorm';
import { SqlTestModule } from './modules/sql-test/sql-test.module';
import envConfig from '../config/env';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ResourceModule } from './modules/resource/resource.module';
import { AuthModule } from './modules/auth/auth.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV === 'production' ? '.env.prod' : '.env.dev',
    }),

    // TypeOrmModule.forRoot({
    //   type: 'mysql', //数据库类型
    //   username: 'root', //账号
    //   password: 'rootroot', //密码
    //   host: 'localhost', //host
    //   port: 3306, //
    //   database: 'db', //数据库名
    //   entities: [__dirname + '/**/*.entity{.ts,.js}'], //实体类
    //   synchronize: true, //synchronize字段代表是否自动将实体类同步到数据库  生产环境关闭
    //   retryDelay: 500, //重连间隔
    //   retryAttempts: 10, //尝试重连次数
    //   autoLoadEntities: true, // 如果为true ，将自动加载实体 forFeature()方法注册的每个实体都将自动添加到配置对象的实体数组中
    // }),
    TypeOrmModule.forRootAsync({
      // imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        database: 'db', //数据库名
        entities: [__dirname + '/../**/*.entity.{js,ts}'],
        host: configService.get('DB_HOTS', 'localhost'),
        port: configService.get<number>('DB_PORT', 3306),
        username: configService.get('DB_USER', 'root'),
        password: configService.get('DB_PASSWORD', 'rootroot'),
        timezone: '+08:00',
        synchronize: true,
        retryDelay: 500, //重连间隔
        retryAttempts: 10, //尝试重连次数
        autoLoadEntities: true, // 如果为true ，将自动加载实体 forFeature()方法注册的每个实体都将自动添加到配置对象的实体数组中
      }),
    }),
    SqlTestModule,
    UserModule,
    UploadModule,
    SpiderModule,
    GuardModule,
    ResourceModule,
    AuthModule,
  ],
  // controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
