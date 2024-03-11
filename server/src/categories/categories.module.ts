import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesRepository } from './categories.repository';
import { ResponseService } from '../response/response.service';
import { CategoriesController } from './categories.controller';
import { Category, CategorySchema } from '../schemas/category.schema';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
    ]),
  ],
  controllers: [CategoriesController],
  providers: [CategoriesService, CategoriesRepository, ResponseService],
})
export class CategoriesModule {}
