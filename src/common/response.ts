// 全局响应拦截器

import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

// 实现响应拦截器
interface Data<T> {
  data: T;
}

// 装饰
@Injectable()
export class Response<T> implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<Data<T>> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((data) => {
        return {
          data,
          status: 0,
          message: 'message',
          success: true,
        };
      }),
    );
  }
}
