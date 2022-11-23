import { PartialType } from '@nestjs/swagger';
import { CreateSqlTestDto } from './create-sql-test.dto';

export class UpdateSqlTestDto extends PartialType(CreateSqlTestDto) {}
