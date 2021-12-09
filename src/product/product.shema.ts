import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  title: string;
  @Prop()
  prise: number;
  @Prop()
  description: string[];
  @Prop()
  type: string;
  @Prop()
  shop: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
