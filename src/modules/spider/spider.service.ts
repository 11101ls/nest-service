import { Injectable } from '@nestjs/common';

import { CreateSpiderDto } from './dto/create-spider.dto';
import { UpdateSpiderDto } from './dto/update-spider.dto';
import * as cheerio from 'cheerio';
import * as fs from 'fs';
import * as path from 'path';
// 不知道为什么import导入不了axios
const axios = require('axios');

@Injectable()
export class SpiderService {
  async findAll() {
    const urls: string[] = [];
    const baseURL = 'https://www.jpmn5.com/';
    const nextText = '下一页';
    let index = 0;
    const getCosPlay = async () => {
      const url = `https://www.jpmn5.com/Cosplay/Cosplay10772${
        index ? '_' + index : ''
      }.html`;
      // https://www.jpmn5.com/Cosplay/Cosplay10772.html
      const res = await axios.get(url).then(async (res) => res.data);
      const $ = cheerio.load(res);
      const pages = $('.pagination').eq(0).find('a');
      const pageArr = pages
        .map(function () {
          return $(this).text();
        })
        .toArray();
      if (pageArr.includes(nextText)) {
        $('.article-content p img').each(function () {
          urls.push(baseURL + $(this).attr('src'));
        });
        index++;
        await getCosPlay();
      }

      // $('.article-content p img').each(function () {
      //   urls.push(baseURL + $(this).attr('src'));
      // });
      // console.log(pageArr);
    };
    await getCosPlay();
    console.log(urls);
    this.writeFile(urls);
    return 'cos';
  }
  writeFile(urls: string[]) {
    urls.forEach(async (url) => {
      const buffer = await axios.get(url, { responseType: 'arraybuffer' });
      // 文件流下载
      const ws = fs.createWriteStream(
        path.join(__dirname, '../imgs/cos/' + new Date().getTime() + '.jpg'),
      );
      ws.write(buffer);
    });
  }
}
