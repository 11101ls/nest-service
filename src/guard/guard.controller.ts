import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  SetMetadata,
} from '@nestjs/common';
import { GuardService } from './guard.service';
import { CreateGuardDto } from './dto/create-guard.dto';
import { UpdateGuardDto } from './dto/update-guard.dto';
// 使用自定义装饰器SetMetadata
import { RoleD, ReqUrl } from './role-d/role-d.decorator';
// 使用守卫
import { RoleGuard } from './role/role.guard';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
//

@Controller('guard')
// 使用守卫
// @UseGuards(RoleGuard)
// 使用swagger分组
@ApiTags('守卫接口')
@UseGuards(RoleGuard)
// token
@ApiBearerAuth()
export class GuardController {
  constructor(private readonly guardService: GuardService) {}

  @Post()
  create(@Body() createGuardDto: CreateGuardDto) {
    return this.guardService.create(createGuardDto);
  }

  @Get()
  // 接口描述
  @ApiOperation({ summary: 'get请求', description: '接口描述' })
  @SetMetadata('role', ['admin'])
  // 使用自定义的SetMetadata
  // @RoleD('admin')
  // 自定义参数装饰器
  findAll(@ReqUrl() url: string) {
    console.log(url, '-------url 参数装饰');

    return this.guardService.findAll();
  }

  @Get(':id')
  // 参数描述
  @ApiParam({ name: 'id', description: '这是一个id', required: true })
  // 返回自定义描述
  @ApiResponse({ status: 403, description: '403的返回值' })
  findOne(@Param('id') id: string) {
    return this.guardService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGuardDto: UpdateGuardDto) {
    return this.guardService.update(+id, updateGuardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.guardService.remove(+id);
  }
}
