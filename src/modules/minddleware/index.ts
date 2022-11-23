import { Injectable, NestMiddleware } from '@nestjs/common';

import { Request, Response, NextFunction } from 'express';

@Injectable()
// 局部中间件
export class Logger implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // console.log('中间件');
    // res.send('拦截');
    // // next();
  }
}
