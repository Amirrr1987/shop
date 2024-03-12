import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Prop({ required: true, type: String, default: '', unique: true })
  value: string;
  @Prop({ required: true, type: String, default: '' })
  title: string;
  @Prop({ required: false, type: String, default: null })
  description: string;
  @Prop({
    required: false,
    type: MongooseSchema.Types.ObjectId,
    default: null,
    ref: 'Category',
  })
  parent_id?: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
