import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Prop()
  title: string;
  caption: string;
  parent_id: string[];
  child_id: string[];
}

export const CategorySchema = SchemaFactory.createForClass(Category);