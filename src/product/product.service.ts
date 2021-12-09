/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './product.shema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private product: Model<ProductDocument>,
  ) {}
  async findCategory(category: string) {
    const products = await this.product.find({ type: category });
    return products;
  }
}
