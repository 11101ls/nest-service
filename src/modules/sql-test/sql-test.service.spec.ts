import { Test, TestingModule } from '@nestjs/testing';
import { SqlTestService } from './sql-test.service';

describe('SqlTestService', () => {
  let service: SqlTestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SqlTestService],
    }).compile();

    service = module.get<SqlTestService>(SqlTestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
