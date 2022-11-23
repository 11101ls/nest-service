import { Module } from '@nestjs/common';
import { SqlTestService } from './sql-test.service';
import { SqlTestController } from './sql-test.controller';
// 关联实体
import { SqlTest } from './entities/sql-test.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  // 关联实体 创建表
  imports: [TypeOrmModule.forFeature([SqlTest])],
  controllers: [SqlTestController],
  providers: [SqlTestService],
})
export class SqlTestModule {}
