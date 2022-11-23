// 自定义装饰器SetMetadata
import {
  createParamDecorator,
  ExecutionContext,
  SetMetadata,
} from '@nestjs/common';

export const RoleD = (...args: string[]) => SetMetadata('role-d', args);

export const ReqUrl = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest<Request>();
    console.log(data, 'data');

    return req.url;
  },
);
