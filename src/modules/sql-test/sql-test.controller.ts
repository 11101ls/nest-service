import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SqlTestService } from './sql-test.service';
import { CreateSqlTestDto } from './dto/create-sql-test.dto';
import { UpdateSqlTestDto } from './dto/update-sql-test.dto';

// @Controller()
@Controller({
  path: 'sql-test',
  version: '1',
})
export class SqlTestController {
  constructor(private readonly sqlTestService: SqlTestService) {}

  @Post()
  create(@Body() createSqlTestDto: CreateSqlTestDto) {
    console.log('-----2222');

    return this.sqlTestService.create(createSqlTestDto);
  }

  @Get()
  findAll() {
    return this.sqlTestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sqlTestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSqlTestDto: UpdateSqlTestDto) {
    return this.sqlTestService.update(+id, updateSqlTestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sqlTestService.remove(+id);
  }
}
