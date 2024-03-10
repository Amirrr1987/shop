import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Prop({ required: true, unique: true })
  label: string;
  @Prop({ required: true, unique: true })
  value: string;
  description: string;
  parent?: Category;
  child?: Category[];
}

export const CategorySchema = SchemaFactory.createForClass(Category);
