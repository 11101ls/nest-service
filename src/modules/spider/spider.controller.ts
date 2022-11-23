import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SpiderService } from './spider.service';
import { CreateSpiderDto } from './dto/create-spider.dto';
import { UpdateSpiderDto } from './dto/update-spider.dto';

@Controller('spider')
export class SpiderController {
  constructor(private readonly spiderService: SpiderService) {}

  @Post()
  create(@Body() createSpiderDto: CreateSpiderDto) {}

  @Get()
  findAll() {
    return this.spiderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {}

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpiderDto: UpdateSpiderDto) {}

  @Delete(':id')
  remove(@Param('id') id: string) {}
}
