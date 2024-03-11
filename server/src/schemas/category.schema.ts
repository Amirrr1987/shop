import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Prop({ required: true, unique: true, default: '' })
  value: string;
  @Prop({ required: true, default: '' })
  title: string;
  @Prop({})
  description?: string;
  @Prop({ required: false, type: MongooseSchema.Types.ObjectId })
  parent_id?: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
