import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
// import { Logger } from 'src/minddleware';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], //导出模块
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(Logger).forRoutes('/v1/user'); //注册并指定路由地址
    // 拦截指定get请求
    // consumer.apply(Logger).forRoutes({
    //   path: '/v1/user',
    //   method: RequestMethod.GET,
    // });
    // 拦截所有请求
    // consumer.apply(Logger).forRoutes(Logger); //注册并指定路由地址
  }
}
