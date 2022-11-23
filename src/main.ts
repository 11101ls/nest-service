import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as cors from 'cors';
import { Request, Response, NextFunction } from 'express';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
// 引入拦截器
import { Response as ResponseALL } from './common/response';
// 异常拦截器
import { HttpFilter } from './common/filter';
// 响应拦截器
// import { NestInterceptor } from './common/response';
// 全局的验证器
import { ValidationPipe } from '@nestjs/common';
// 全局守卫
import { RoleGuard } from './guard/role/role.guard';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// 注册全局中间件  白名单
function MinddlewareAll(req: Request, res: Response, next: NextFunction) {
  console.log(req.url, '中间件');
  next();
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // 接口文档  swagger
  const options = new DocumentBuilder()
    .setTitle('接口文档')
    .setDescription('描述')
    .setVersion('1')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  // 设置接口文档地址
  SwaggerModule.setup('/api-docs', app, document);

  // 版本
  app.enableVersioning({
    type: VersioningType.URI,
  });
  // app.use(cors());
  app.enableCors();
  // 使用session
  app.use(
    session({
      secret: 'ceshiyongli',
      rolling: true,
      name: 'cookieId',
      cookie: { maxAge: null },
    }),
  );
  // 注入拦截器
  app.useGlobalInterceptors(new ResponseALL());

  // 异常拦截器
  app.useGlobalFilters(new HttpFilter());
  // app.use(MinddlewareAll);
  // 注入全局验证器
  app.useGlobalPipes(new ValidationPipe());
  // 注入全局守卫
  // app.useGlobalGuards(new RoleGuard());
  // 配置静态资源访问目录
  app.useStaticAssets(join(__dirname, 'imgs'), {
    prefix: 'xunilujin', //配置虚拟路径
  });
  await app.listen(3030);
}
bootstrap();
