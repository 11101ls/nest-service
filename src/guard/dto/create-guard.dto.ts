import { ApiProperty } from '@nestjs/swagger';

// post参数体
export class CreateGuardDto {
  @ApiProperty({ example: 'name' })
  name: string;
  @ApiProperty({ example: 18 })
  age: number;
}
