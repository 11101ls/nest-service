import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import type { Response } from 'express';
import { join } from 'path';
import { zip } from 'compressing';
@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('album')
  // 文件上传中间件
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file) {
    console.log(file, 'file');

    return '文件上传';
  }

  // download 下载
  @Get('export')
  downLoad(@Res() res: Response) {
    const url = join(__dirname, '../imgs/1667356304102.jpg');
    res.download(url);
  }
  // 文件流下载
  // compressing 压缩打包
  @Get('stream')
  async down(@Res() res: Response) {
    const url = join(__dirname, '../imgs/1667356304102.jpg');
    const tarStream = new zip.Stream();
    await tarStream.addEntry(url);
    res.setHeader('Content-Type', 'application/octet-stream');
    // 设置
    res.setHeader('Content-Disposition', 'attachment;Filename=ceshiyongli');
    tarStream.pipe(res);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUploadDto: UpdateUploadDto) {
    return this.uploadService.update(+id, updateUploadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.uploadService.remove(+id);
  }
}
