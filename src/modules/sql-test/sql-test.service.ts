import { Injectable } from '@nestjs/common';
import { CreateSqlTestDto } from './dto/create-sql-test.dto';
import { UpdateSqlTestDto } from './dto/update-sql-test.dto';

@Injectable()
export class SqlTestService {
  create(createSqlTestDto: CreateSqlTestDto) {
    return 'This action adds a new sqlTest';
  }

  findAll() {
    return `This action returns all sqlTest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sqlTest`;
  }

  update(id: number, updateSqlTestDto: UpdateSqlTestDto) {
    return `This action updates a #${id} sqlTest`;
  }

  remove(id: number) {
    return `This action removes a #${id} sqlTest`;
  }
}
