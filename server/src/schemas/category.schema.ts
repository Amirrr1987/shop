import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Prop()
  value: string;
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop({
    type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Category' }],
    default: undefined,
  })
  children?: string[];
}

export const CategorySchema = SchemaFactory.createForClass(Category);
