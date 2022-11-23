import { Test, TestingModule } from '@nestjs/testing';
import { SqlTestController } from './sql-test.controller';
import { SqlTestService } from './sql-test.service';

describe('SqlTestController', () => {
  let controller: SqlTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SqlTestController],
      providers: [SqlTestService],
    }).compile();

    controller = module.get<SqlTestController>(SqlTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
