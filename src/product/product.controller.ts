/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('api/product')
export class ProductController {
  constructor(private service: ProductService) {}
  @Get('/:category')
  findCategory(@Param('category') category: string) {
    return this.service.findCategory(category);
  }
}
